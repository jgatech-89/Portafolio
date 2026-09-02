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

  // Última palabra del tagPhrase en coral, el resto en el color de texto
  // normal — misma frase termina en el verbo/palabra que queremos destacar.
  const tagPhraseWords = t.hero.tagPhrase.split(" ");
  const tagPhraseLast = tagPhraseWords.pop() ?? "";
  const tagPhraseLead = tagPhraseWords.join(" ");

  // Mismo truco para la línea de arriba de la palabra mega: su última palabra
  // también queda en coral.
  const topLineWords = t.hero.topLine.split(" ");
  const topLineLast = topLineWords.pop() ?? "";
  const topLineLead = topLineWords.join(" ");

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Palabra mega full-bleed y más grande que el viewport a propósito, con
          las letras de los bordes cortadas (la sección tiene overflow-hidden).
          -translate-x-[59%] (no 50%) desplaza el centro un poco a la izquierda
          para que ese corte se vea parejo en ambos lados. */}
      <div className="relative left-1/2 w-screen -translate-x-[59%] translate-y-[2px] [container-type:inline-size]">
        {/* Línea arriba de la palabra, alineada donde arranca la 2ª letra,
            mismo estilo minimal que "Desliza" y la frase de abajo. */}
        <div className="pointer-events-none absolute left-[58%] bottom-full w-[26cqw] pb-[2cqw]">
          <Reveal immediate delay={BASE_DELAY} duration={1.7}>
            <p className="text-center text-[11px] font-medium uppercase leading-snug tracking-[0.2em] text-(--color-gray)/70">
              {topLineLead} <span className="text-(--color-coral)">{topLineLast}</span>
            </p>
          </Reveal>
        </div>

        {/* Bloque entero, no letra por letra: dividir en caracteres rompe el
            tracking negativo y la palabra se ve más ancha. */}
        <Reveal immediate delay={BASE_DELAY} duration={2.2}>
          {/* data-cursor-invert: el cursor coral se perdería sobre letras del
              mismo color, así que acá pasa a azul (igual que en el CTA). */}
          <span
            data-cursor-invert
            className="block text-center text-[36cqw] leading-(--text-mega--line-height) font-black uppercase tracking-[-0.06em] text-(--color-coral)"
          >
            {t.hero.mega}
          </span>
        </Reveal>

        {/* Frase debajo de la palabra, con la última palabra en coral y las
            capacidades debajo en fila. Posicionada aparte del nodo que anima
            GSAP, para no pisar transformaciones. */}
        <div className="pointer-events-none absolute left-[15%] top-full w-[32cqw] pt-[3cqw]">
          <Reveal immediate delay={BASE_DELAY + 0.2} duration={1.7}>
            <p className="text-center text-[11px] font-medium uppercase leading-snug tracking-[0.2em] text-(--color-gray)/70">
              {tagPhraseLead} <span className="text-(--color-coral)">{tagPhraseLast}</span>
            </p>
          </Reveal>
          <Reveal immediate delay={BASE_DELAY + 0.35} duration={1.4}>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
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
          </Reveal>
        </div>
      </div>

      {/* Indicador de scroll, rebote en CSS. Ancla de altura 0 + absolute:
          flota sin empujar nada del flujo normal. */}
      <div className="relative h-0">
        <a
          href="#trabajo"
          aria-label={t.a11y.goNext}
          className="absolute inset-x-0 top-20 z-10 flex flex-col items-center gap-2 text-(--color-text-secondary) transition-colors hover:text-(--color-coral-deep)"
        >
          <Mouse size={22} className="animate-bounce" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{t.hero.scroll}</span>
        </a>
      </div>

      <div className="container-page [container-type:inline-size]">
        {/* justify-end: la etiqueta y la palabra acento van pegadas, ambas del
            lado derecho, debajo de la palabra mega. */}
        <div className="-mt-2 flex flex-col items-end gap-4 sm:-mt-4 sm:flex-row sm:items-center sm:justify-end sm:gap-8">
          <Reveal immediate delay={BASE_DELAY + 0.5} duration={1.2}>
            <StaircaseTag text={t.hero.accentTag} className="max-w-[14ch] font-medium" />
          </Reveal>
          {/* translate-x en un span estático aparte: el de adentro es el que
              anima GSAP letra por letra, nunca el mismo elemento. */}
          <span className="translate-x-[4cqw] self-end sm:self-auto">
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
    </section>
  );
}
