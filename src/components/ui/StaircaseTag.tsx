"use client";

import { useInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

// Puntos de la línea en "escalera" (viewBox 24x56) — el mismo polyline
// dibuja la línea (SVG) y sus % equivalentes viven en el `@keyframes
// staircase-climb` de globals.css para el punto que sube por ella.
const STAIRCASE_POINTS = "2,54 2,40 9,40 9,26 16,26 16,12 23,12 23,2";

/** Etiqueta con una línea en escalera (evoca "escalar") que se dibuja al
 * entrar en viewport, con un punto que sube por los escalones en loop. Se
 * usa junto a "Labs" en el Hero y en las etiquetas de About/Services. */
export function StaircaseTag({ text, className }: { text: string; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.6);

  return (
    <div className="inline-flex items-center gap-4">
      <div ref={ref} className="relative h-14 w-6 shrink-0">
        <svg viewBox="0 0 24 56" fill="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {/* Riel de fondo, siempre visible pero tenue. */}
          <polyline
            points={STAIRCASE_POINTS}
            stroke="var(--color-gray)"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Se "dibuja" en coral al entrar en viewport (stroke-dashoffset
              con pathLength="1", así no depende de la longitud real del
              trazo). */}
          <polyline
            points={STAIRCASE_POINTS}
            stroke="var(--color-coral)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            className={cn(
              "[stroke-dasharray:1] transition-[stroke-dashoffset] duration-[1100ms] ease-out",
              inView ? "[stroke-dashoffset:0]" : "[stroke-dashoffset:1]",
            )}
          />
        </svg>
        {inView && (
          <span
            aria-hidden="true"
            className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-coral) [animation:staircase-climb_2.6s_linear_infinite]"
            style={{
              animationDelay: "1100ms",
              boxShadow: "0 0 8px 2px color-mix(in srgb, var(--color-coral) 55%, transparent)",
            }}
          />
        )}
      </div>
      <p className={cn("max-w-[16ch] text-[11px] font-semibold uppercase leading-snug tracking-[0.15em] text-(--color-gray)/70", className)}>
        {text}
      </p>
    </div>
  );
}
