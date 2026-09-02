"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useHasFinePointer, useReducedMotion } from "@/lib/hooks";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';
// Zonas de fondo coral (p. ej. la tarjeta del CTA): el cursor coral se
// perdería sobre su propio color, así que ahí cambia a azul.
const INVERT_SELECTOR = "[data-cursor-invert]";
const CORAL = "#ff5a43";
const INVERT_COLOR = "#2563eb";

/**
 * Reemplaza el cursor nativo por un punto + anillo que lo siguen con
 * inercia, y que crecen al pasar sobre elementos interactivos. Solo en
 * punteros precisos (mouse) y sin `prefers-reduced-motion` — en touch o con
 * movimiento reducido no se monta nada y el cursor nativo queda intacto.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hasFinePointer = useHasFinePointer();
  const reduced = useReducedMotion();
  const active = hasFinePointer && !reduced;

  useEffect(() => {
    if (!active) return;
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, [active]);

  useGSAP(
    () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!active || !dot || !ring) return;

      const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
      const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

      // Arrancan invisibles (parkeados en 0,0) hasta el primer movimiento —
      // si no, se ve un punto/anillo pegado a la esquina superior izquierda
      // al cargar y hasta que el usuario mueve el mouse.
      let shown = false;
      const onMove = (e: MouseEvent) => {
        if (!shown) {
          shown = true;
          gsap.set([dot, ring], { autoAlpha: 1 });
        }
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
      };

      const onOver = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target?.closest?.(INTERACTIVE_SELECTOR)) {
          gsap.to(ring, { scale: 1.8, duration: 0.3, ease: "power3.out" });
          gsap.to(dot, { scale: 0, duration: 0.3, ease: "power3.out" });
        }
        if (target?.closest?.(INVERT_SELECTOR)) {
          gsap.to(dot, { backgroundColor: INVERT_COLOR, duration: 0.3 });
          gsap.to(ring, { borderColor: INVERT_COLOR, duration: 0.3 });
        }
      };
      const onOut = (e: Event) => {
        const evt = e as MouseEvent;
        const target = evt.target as HTMLElement;
        const related = evt.relatedTarget as HTMLElement | null;
        if (target?.closest?.(INTERACTIVE_SELECTOR)) {
          gsap.to(ring, { scale: 1, duration: 0.3, ease: "power3.out" });
          gsap.to(dot, { scale: 1, duration: 0.3, ease: "power3.out" });
        }
        // Solo revierte a coral si realmente se sale de la zona invertida
        // (no al cruzar entre dos hijos que están ambos dentro de ella) —
        // si no, el color parpadea coral/azul en cada borde interno.
        if (target?.closest?.(INVERT_SELECTOR) && !related?.closest?.(INVERT_SELECTOR)) {
          gsap.to(dot, { backgroundColor: CORAL, duration: 0.3 });
          gsap.to(ring, { borderColor: CORAL, duration: 0.3 });
        }
      };

      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseover", onOver, true);
      document.addEventListener("mouseout", onOut, true);
      return () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver, true);
        document.removeEventListener("mouseout", onOut, true);
      };
    },
    { dependencies: [active] },
  );

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-coral)"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-(--color-coral)"
      />
    </>
  );
}
