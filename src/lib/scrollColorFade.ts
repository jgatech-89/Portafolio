"use client";

import { gsap } from "@/lib/gsap";

/**
 * Funde el `background-color` de una sección con el scroll, en vez de un
 * corte seco entre secciones claras/oscuras. `mode: "in-out"` funde al
 * entrar y vuelve a fundir al salir (secciones de paso); `mode: "in"` solo
 * funde al entrar y se queda en `to` (para la última sección, el footer).
 *
 * Se aplica sobre una clase Tailwind de fondo ya existente (fallback
 * estático): con `prefers-reduced-motion` o sin JS, el color correcto ya
 * está puesto por CSS — esto solo agrega la transición encima.
 */
export function applyScrollColorFade(
  el: HTMLElement,
  { from, to, mode = "in-out" }: { from: string; to: string; mode?: "in-out" | "in" },
) {
  if (mode === "in-out") {
    return gsap.to(el, {
      keyframes: {
        "0%": { backgroundColor: from },
        "15%": { backgroundColor: to },
        "85%": { backgroundColor: to },
        "100%": { backgroundColor: from },
      },
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  }

  // "in" no usa scrub: en una sección baja (como el footer) el scroll
  // restante puede terminar antes de que un scrub llegue a 100%, dejando el
  // color a mitad de camino para siempre. Una animación de una sola vez
  // siempre llega a `to`. `gsap.set` fija el punto de partida porque el
  // elemento ya nace con el color `to` puesto por su clase de Tailwind.
  gsap.set(el, { backgroundColor: from });
  return gsap.to(el, {
    backgroundColor: to,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}
