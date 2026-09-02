"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

/**
 * Envuelve un elemento decorativo para que se desplace en vertical a
 * distinta velocidad que el resto del contenido al hacer scroll. Debe vivir
 * en su propio div, nunca en un elemento que ya anime `transform` por otro
 * lado, para que las transformaciones no compitan.
 */
export function Parallax({
  children,
  className = "",
  speed = 0.2,
}: {
  children: ReactNode;
  className?: string;
  /** Fracción de desplazamiento relativo al scroll. Negativo = va "para
   * atrás" (más lento / en sentido contrario al scroll). */
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reduced) return;

      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { dependencies: [reduced, speed], scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
