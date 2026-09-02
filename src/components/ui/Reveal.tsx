"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

/**
 * Revela su contenido con fade + desplazamiento cada vez que cruza el
 * viewport (entra y sale revertido, no `once`). Con `immediate` anima una
 * sola vez al montar, sin ScrollTrigger — para contenido ya visible al
 * cargar (el Hero). No hace nada bajo reduced-motion.
 */
export function Reveal({
  children,
  className = "",
  y = 56,
  delay = 0,
  duration = 1.1,
  start = "top 85%",
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      gsap.from(ref.current, {
        autoAlpha: 0,
        y,
        duration,
        delay,
        ease: "power3.out",
        // Sin esto, GSAP deja un `transform` inline pegado al terminar (aun
        // en su valor de reposo) que pisa cualquier `hover:scale`/`translate`
        // por CSS que se le agregue después al mismo elemento.
        clearProps: "transform",
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: ref.current,
                start,
                // Revierte la animación al salir del viewport hacia arriba,
                // y la vuelve a jugar al reingresar — no solo una vez.
                toggleActions: "play reverse play reverse",
              },
            }),
      });
    },
    { dependencies: [reduced], scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
