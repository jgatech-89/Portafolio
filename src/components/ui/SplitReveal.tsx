"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

/**
 * Revela texto palabra por palabra (o letra por letra, con `splitType`)
 * usando GSAP SplitText, en vez de como bloque entero. Se usa DENTRO de un
 * h1/h2/p/span propio, nunca como el tag semántico en sí:
 * <h2><SplitReveal>Texto</SplitReveal></h2>. Bajo reduced-motion no hace
 * nada (el texto se muestra directo, sin split).
 */
export function SplitReveal({
  children,
  className = "",
  start = "top 85%",
  immediate = false,
  delay = 0,
  duration,
  splitType = "words",
  stagger,
}: {
  children: string;
  className?: string;
  start?: string;
  immediate?: boolean;
  delay?: number;
  duration?: number;
  splitType?: "words" | "chars";
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || reduced) return;

      const split =
        splitType === "chars"
          ? new SplitText(el, { type: "chars", charsClass: "char" })
          : new SplitText(el, { type: "words", wordsClass: "word" });
      const targets = splitType === "chars" ? split.chars : split.words;

      gsap.from(targets, {
        autoAlpha: 0,
        yPercent: splitType === "chars" ? 130 : 70,
        rotate: splitType === "chars" ? 8 : 0,
        duration: duration ?? (splitType === "chars" ? 0.9 : 0.7),
        delay,
        ease: splitType === "chars" ? "back.out(1.7)" : "power3.out",
        stagger: stagger ?? (splitType === "chars" ? 0.03 : 0.045),
        clearProps: "transform",
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play reverse play reverse",
              },
            }),
      });

      // SplitText cambia el alto del elemento (envuelve cada palabra/letra en
      // su propio nodo): sin refrescar, los ScrollTrigger creados antes de
      // este split quedan con posiciones viejas y el texto puede no revelarse
      // nunca (se queda en autoAlpha:0).
      if (!immediate) ScrollTrigger.refresh();

      return () => split.revert();
    },
    { dependencies: [reduced, splitType], scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
