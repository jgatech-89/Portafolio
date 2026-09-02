"use client";

import { Mouse } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { StaircaseTag } from "@/components/ui/StaircaseTag";
import { useLocale } from "@/i18n/LocaleProvider";

// Sincronizado con la cortina de carga (`PageLoader`): el Hero anima justo
// cuando la cortina empieza a abrirse. Si cambia la duración del timeline de
// PageLoader, ajustar esto también.
const BASE_DELAY = 2.6;

export function Hero() {
  const { t } = useLocale();

  // Última palabra del tagPhrase en coral, el resto en color de texto normal.
  const tagPhraseWords = t.hero.tagPhrase.split(" ");
  const tagPhraseLast = tagPhraseWords.pop() ?? "";
  const tagPhraseLead = tagPhraseWords.join(" ");

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 text-center sm:pt-40 sm:pb-24"
    >
      <div className="container-page">
        <Reveal immediate delay={BASE_DELAY} duration={1.6}>
          <p className="text-[11px] font-medium uppercase leading-snug tracking-[0.24em] text-(--color-gray)/80">
            {t.hero.topLine}
          </p>
        </Reveal>

        {/* Palabra mega: más ancha que su contenedor a propósito, recortada
            de forma pareja por ambos bordes (la sección tiene overflow-hidden). */}
        <div className="relative left-1/2 w-[112vw] -translate-x-1/2 [container-type:inline-size]">
          <Reveal immediate delay={BASE_DELAY} duration={2.1}>
            <h1>
              <span
                data-cursor-invert
                className="block text-[30cqw] leading-[0.82] font-black uppercase tracking-[-0.045em] text-(--color-coral)"
              >
                {t.hero.mega}
              </span>
            </h1>
          </Reveal>
        </div>

        <div className="mx-auto max-w-xl">
          <Reveal immediate delay={BASE_DELAY + 0.2} duration={1.5}>
            <p className="text-sm text-(--color-text-secondary) sm:text-base">
              {tagPhraseLead} <span className="text-(--color-coral)">{tagPhraseLast}</span>
            </p>
          </Reveal>
          <Reveal immediate delay={BASE_DELAY + 0.32} duration={1.3}>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {t.hero.capabilities.map((capability, i) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-gray)/80"
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
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <Reveal immediate delay={BASE_DELAY + 0.5} duration={1.2}>
            <StaircaseTag text={t.hero.accentTag} className="max-w-[18ch] font-medium" />
          </Reveal>
          <SplitReveal
            immediate
            delay={BASE_DELAY + 0.4}
            duration={1.4}
            splitType="chars"
            stagger={0.06}
            className="text-3xl font-semibold tracking-tight text-(--color-carbon-deep) sm:text-4xl"
          >
            {t.hero.megaAccent}
          </SplitReveal>
        </div>
      </div>

      {/* Indicador de scroll. */}
      <a
        href="#trabajo"
        aria-label={t.a11y.goNext}
        className="mt-14 flex flex-col items-center gap-2 text-(--color-text-secondary) transition-colors hover:text-(--color-coral-deep)"
      >
        <Mouse size={22} className="animate-bounce" />
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{t.hero.scroll}</span>
      </a>
    </section>
  );
}
