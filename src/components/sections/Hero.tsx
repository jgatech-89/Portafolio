"use client";

import { Mouse } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { StaircaseTag } from "@/components/ui/StaircaseTag";
import { useLocale } from "@/i18n/LocaleProvider";

// Coincide con la duración de la cortina de carga (`PageLoader`): el Hero
// arranca a animar justo cuando la cortina empieza a abrirse, no antes. Si se
// cambia la duración del timeline de PageLoader, ajustar esto también.
const BASE_DELAY = 2.6;

export function Hero() {
  const { t } = useLocale();

  // Última palabra del tagPhrase / topLine en coral, el resto en el color de
  // texto normal.
  const [tagPhraseLead, tagPhraseLast] = splitLast(t.hero.tagPhrase);
  const [topLineLead, topLineLast] = splitLast(t.hero.topLine);

  const Capabilities = (
    <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
      {t.hero.capabilities.map((capability, i) => (
        <li
          key={capability}
          className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-gray)/70"
        >
          {i > 0 && (
            <span aria-hidden="true" className="text-(--color-coral)">
              ·
            </span>
          )}
          {capability}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-24 sm:pt-28"
    >
      {/* ================= MÓVIL (< sm): apilado, centrado ================= */}
      <div className="container-page flex flex-col items-center gap-6 text-center sm:hidden">
        <Reveal immediate delay={BASE_DELAY} duration={1.6}>
          <p className="text-[10px] font-medium uppercase leading-snug tracking-[0.22em] text-(--color-gray)/70">
            {topLineLead} <span className="text-(--color-coral)">{topLineLast}</span>
          </p>
        </Reveal>

        <div className="[container-type:inline-size] w-full">
          <Reveal immediate delay={BASE_DELAY} duration={2}>
            <h1>
              <span
                data-cursor-invert
                className="block leading-[0.82] text-[30cqw] font-black uppercase tracking-[-0.045em] text-(--color-coral)"
              >
                {t.hero.mega}
              </span>
            </h1>
          </Reveal>
          <SplitReveal
            immediate
            delay={BASE_DELAY + 0.35}
            duration={1.3}
            stagger={0.06}
            splitType="chars"
            className="mt-1 block text-[13cqw] leading-none font-semibold tracking-tight text-(--color-carbon-deep)"
          >
            {t.hero.megaAccent}
          </SplitReveal>
        </div>

        <Reveal immediate delay={BASE_DELAY + 0.2} duration={1.4}>
          <p className="max-w-xs text-sm text-(--color-text-secondary)">
            {tagPhraseLead} <span className="text-(--color-coral)">{tagPhraseLast}</span>
          </p>
        </Reveal>

        <Reveal immediate delay={BASE_DELAY + 0.32} duration={1.2}>
          {Capabilities}
        </Reveal>

        <Reveal immediate delay={BASE_DELAY + 0.45} duration={1.2}>
          <StaircaseTag text={t.hero.accentTag} className="max-w-[20ch] font-medium" />
        </Reveal>
      </div>

      {/* ============ ESCRITORIO (>= sm): palabra full-bleed ============ */}
      <div className="hidden sm:block">
        {/* Palabra mega más ancha que el viewport a propósito, con las letras de
            los bordes cortadas (overflow-hidden). -translate-x-[59%] (no 50%)
            desplaza el centro un poco a la izquierda para que el corte se vea
            parejo en ambos lados. */}
        <div className="relative left-1/2 w-screen -translate-x-[59%] translate-y-[2px] [container-type:inline-size]">
          <div className="pointer-events-none absolute left-[58%] bottom-full w-[26cqw] pb-[2cqw]">
            <Reveal immediate delay={BASE_DELAY} duration={1.7}>
              <p className="text-center text-[11px] font-medium uppercase leading-snug tracking-[0.2em] text-(--color-gray)/70">
                {topLineLead} <span className="text-(--color-coral)">{topLineLast}</span>
              </p>
            </Reveal>
          </div>

          <Reveal immediate delay={BASE_DELAY} duration={2.2}>
            <span
              data-cursor-invert
              className="block text-center text-[36cqw] leading-(--text-mega--line-height) font-black uppercase tracking-[-0.06em] text-(--color-coral)"
            >
              {t.hero.mega}
            </span>
          </Reveal>

          <div className="pointer-events-none absolute left-[15%] top-full w-[32cqw] pt-[3cqw]">
            <Reveal immediate delay={BASE_DELAY + 0.2} duration={1.7}>
              <p className="text-center text-[11px] font-medium uppercase leading-snug tracking-[0.2em] text-(--color-gray)/70">
                {tagPhraseLead} <span className="text-(--color-coral)">{tagPhraseLast}</span>
              </p>
            </Reveal>
            <Reveal immediate delay={BASE_DELAY + 0.35} duration={1.4} className="mt-4">
              {Capabilities}
            </Reveal>
          </div>
        </div>

        <div className="container-page mt-6 [container-type:inline-size]">
          <div className="flex flex-row items-center justify-end gap-8">
            <Reveal immediate delay={BASE_DELAY + 0.5} duration={1.2}>
              <StaircaseTag text={t.hero.accentTag} className="max-w-[14ch] font-medium" />
            </Reveal>
            <span className="translate-x-[4cqw]">
              <SplitReveal
                immediate
                delay={BASE_DELAY + 0.4}
                duration={1.6}
                stagger={0.08}
                splitType="chars"
                className="text-(length:--text-mega-sub) leading-(--text-mega-sub--line-height) font-semibold text-(--color-carbon-deep)"
              >
                {t.hero.megaAccent}
              </SplitReveal>
            </span>
          </div>
        </div>
      </div>

      {/* Indicador de scroll, fijo al fondo de la sección (que ocupa toda la
          pantalla). */}
      <a
        href="#trabajo"
        aria-label={t.a11y.goNext}
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-(--color-text-secondary) transition-colors hover:text-(--color-coral-deep) sm:bottom-8"
      >
        <Mouse size={22} className="animate-bounce" />
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{t.hero.scroll}</span>
      </a>
    </section>
  );
}

/** Separa la última palabra de una frase (para pintarla en coral). */
function splitLast(phrase: string): [string, string] {
  const words = phrase.split(" ");
  const last = words.pop() ?? "";
  return [words.join(" "), last];
}
