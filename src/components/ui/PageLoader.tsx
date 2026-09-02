"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { site } from "@/data/site";

/**
 * Cortina de carga inicial: se muestra una sola vez, con el isotipo
 * "respirando" entre dos anillos contrarrotando + barra de progreso, y se
 * abre como puerta de dos hojas. El Hero usa `BASE_DELAY` para animar recién
 * cuando esta cortina se abre. Bajo reduced-motion no se monta.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);
  const panelLeftRef = useRef<HTMLDivElement>(null);
  const panelRightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLSpanElement>(null);
  const ring2Ref = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Salvaguarda: si por lo que sea el timeline de GSAP nunca dispara
  // `onComplete` (pestaña en segundo plano, algún error), esto igual retira
  // la cortina y libera el scroll — nunca debe bloquear el sitio.
  useEffect(() => {
    const fallback = setTimeout(() => {
      document.body.style.overflow = "";
      setDone(true);
    }, 6000);
    return () => clearTimeout(fallback);
  }, []);

  useGSAP(
    () => {
      if (reduced) {
        setDone(true);
        return;
      }

      document.body.style.overflow = "hidden";

      // Logo "respirando": achica y aclara, con una pausa, en loop continuo
      // mientras la cortina esté en pantalla.
      gsap.to(logoRef.current, {
        keyframes: {
          "0%": { scale: 1, opacity: 1 },
          "25%": { scale: 0.9, opacity: 0.48 },
          "50%": { scale: 0.9, opacity: 0.48 },
          "75%": { scale: 1, opacity: 1 },
          "100%": { scale: 1, opacity: 1 },
        },
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        repeatDelay: 1,
      });

      // Dos anillos contrarrotando, alternando entre cuadrado (25%) y
      // círculo (50%) — mismo patrón que los dos <m.span> de referencia.
      gsap.to(ring1Ref.current, {
        keyframes: {
          "0%": { scale: 1.6, rotation: 270, opacity: 0.25, borderRadius: "25%" },
          "25%": { scale: 1, rotation: 0, opacity: 1, borderRadius: "25%" },
          "50%": { scale: 1, rotation: 0, opacity: 1, borderRadius: "50%" },
          "75%": { scale: 1.6, rotation: 270, opacity: 1, borderRadius: "50%" },
          "100%": { scale: 1.6, rotation: 270, opacity: 0.25, borderRadius: "25%" },
        },
        duration: 3.2,
        ease: "none",
        repeat: -1,
      });
      gsap.to(ring2Ref.current, {
        keyframes: {
          "0%": { scale: 1, rotation: 0, opacity: 1, borderRadius: "25%" },
          "25%": { scale: 1.2, rotation: 270, opacity: 0.25, borderRadius: "25%" },
          "50%": { scale: 1.2, rotation: 270, opacity: 0.25, borderRadius: "50%" },
          "75%": { scale: 1, rotation: 0, opacity: 0.25, borderRadius: "50%" },
          "100%": { scale: 1, rotation: 0, opacity: 1, borderRadius: "25%" },
        },
        duration: 3.2,
        ease: "none",
        repeat: -1,
      });

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setDone(true);
        },
      });

      // La barra llena de izquierda a derecha (scaleX con origen a la
      // izquierda) durante la parte más larga de la cortina.
      tl.fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.8, ease: "power2.inOut", delay: 0.3 },
      )
        .to(contentRef.current, { autoAlpha: 0, duration: 0.4, ease: "power2.in" }, "+=0.25")
        // Puerta de dos hojas: los paneles se separan hacia los costados en
        // vez de un solo panel deslizando hacia arriba.
        .to(
          panelLeftRef.current,
          { xPercent: -100, duration: 0.9, ease: "power4.inOut" },
          "-=0.1",
        )
        .to(panelRightRef.current, { xPercent: 100, duration: 0.9, ease: "power4.inOut" }, "<");

      return () => {
        document.body.style.overflow = "";
      };
    },
    { dependencies: [reduced] },
  );

  if (done) return null;

  return (
    <>
      <div className="fixed inset-0 z-[200] flex" aria-hidden="true">
        <div ref={panelLeftRef} className="h-full w-1/2 bg-(--color-bg-dark)" />
        <div ref={panelRightRef} className="h-full w-1/2 bg-(--color-bg-dark)" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[201] flex items-center justify-center"
      >
        <div ref={contentRef} className="flex flex-col items-center gap-8">
          <div className="relative flex h-[120px] w-[120px] items-center justify-center">
            <div ref={logoRef} className="relative z-10">
              <Image
                src="/logo/isotipo-negativo.svg"
                alt=""
                width={100}
                height={122}
                priority
                className="h-14 w-auto"
              />
            </div>
            <span
              ref={ring1Ref}
              className="absolute inset-[10px] rounded-[25%] border-[3px] border-(--color-coral)/25"
            />
            <span
              ref={ring2Ref}
              className="absolute inset-0 rounded-[25%] border-[8px] border-(--color-coral)/25"
            />
          </div>
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/15">
            <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-(--color-coral)" />
          </div>
        </div>
      </div>
      <span className="sr-only">{site.name}</span>
    </>
  );
}
