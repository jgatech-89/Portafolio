"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";

/**
 * Sincroniza Lenis con el ticker de GSAP para que el scroll suave y
 * ScrollTrigger compartan un único loop de animación (sin RAFs duplicados
 * ni saltos de scroll). Con `prefers-reduced-motion` se desactiva y el
 * scroll queda nativo.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const raf = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    lenis?.on("scroll", ScrollTrigger.update);

    // Si la tipografía termina de cargar después de que ScrollTrigger ya
    // calculó posiciones, el layout cambia y quedan desactualizadas (un
    // `Reveal` puede quedar invisible hasta que algo fuerza scroll). Forzamos
    // el recálculo al montar y de nuevo cuando cargan fuente y página.
    const refresh = () => ScrollTrigger.refresh();
    const raf2 = requestAnimationFrame(refresh);
    document.fonts?.ready?.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);
    // Red de seguridad: los SplitText de cada sección se dividen después de
    // este montaje y cambian el alto de la página; un refresco tardío deja
    // todos los ScrollTrigger con posiciones correctas.
    const t1 = setTimeout(refresh, 700);
    const t2 = setTimeout(refresh, 1800);

    return () => {
      gsap.ticker.remove(raf);
      lenis?.off("scroll", ScrollTrigger.update);
      cancelAnimationFrame(raf2);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", refresh);
    };
  }, [reduced]);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        duration: 1.15,
        lerp: 0.1,
        smoothWheel: true,
        touchMultiplier: 1.5,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
