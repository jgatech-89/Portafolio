"use client";

import { LayoutTemplate, Rocket, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { useLocale } from "@/i18n/LocaleProvider";

const STEP_ICONS = [LayoutTemplate, Wrench, Rocket];
const REPEAT_COUNT = 6;

export function Approach() {
  const { t } = useLocale();
  const titleLead = t.approach.title.slice(0, -1);
  const titleLast = t.approach.title.slice(-1);
  const track = Array.from({ length: REPEAT_COUNT }, () => t.approach.stack).flat();

  return (
    <section id="enfoque" className="pt-[clamp(4rem,3rem+5vw,7.5rem)]">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">{t.approach.eyebrow}</span>
        </Reveal>
        <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-(--color-carbon-deep) sm:text-5xl lg:text-6xl">
          <SplitReveal>{titleLead}</SplitReveal>
          <span className="text-(--color-coral)">{titleLast}</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {t.approach.steps.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="group h-full rounded-(--radius-lg) border border-(--color-gray)/20 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-(--color-coral)/40">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--color-coral)/10 text-(--color-coral-deep) transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <span className="text-2xl font-bold tracking-tight text-(--color-coral)/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-(--color-carbon-deep)">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-(--color-text-secondary)">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Franja de tecnologías recurrentes. */}
      <div className="mt-14 border-t border-(--color-gray)/20 pt-8 pb-2">
        <div className="container-page mb-4">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-(--color-text-secondary)">
            {t.approach.stackLabel}
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex w-max items-center whitespace-nowrap"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {track.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mr-14 text-lg font-semibold tracking-tight text-(--color-carbon-deep)/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
