"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Lock, Plus, X } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { applyScrollColorFade } from "@/lib/scrollColorFade";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { StaircaseTag } from "@/components/ui/StaircaseTag";
import { useLocale } from "@/i18n/LocaleProvider";
import type { ProjectItem } from "@/i18n/dictionary";

// Collage: cada tarjeta con su propio tamaño e inclinación (no una grilla
// pareja). Se endereza al pasar el mouse. Se cicla si hay más proyectos.
const CARD_STYLE = [
  { width: "w-72 sm:w-80", aspect: "aspect-[16/11]", tilt: "-rotate-2", offset: "sm:mt-4" },
  { width: "w-72 sm:w-80", aspect: "aspect-[16/11]", tilt: "rotate-2", offset: "sm:mt-16" },
  { width: "w-72 sm:w-80", aspect: "aspect-[16/11]", tilt: "-rotate-3", offset: "sm:mt-8" },
];

/** Estado inicial: collage de portadas. Cada tarjeta es un botón que abre el
 * detalle del proyecto, con un "+" en la esquina como pista de interacción. */
function WorkGrid({
  projects,
  viewLabel,
  onSelect,
}: {
  projects: ProjectItem[];
  viewLabel: string;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-12">
      {projects.map((project, i) => {
        const style = CARD_STYLE[i % CARD_STYLE.length];
        return (
          <button
            key={project.id}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`${viewLabel} ${project.name}`}
            className={cn(
              "group text-left transition-transform duration-300 ease-out hover:rotate-0 focus-visible:rotate-0 focus-visible:outline-none",
              style.width,
              style.tilt,
              style.offset,
            )}
          >
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)] transition-colors duration-300 group-hover:border-(--color-coral)/50 group-focus-visible:border-(--color-coral)",
                style.aspect,
              )}
            >
              <Image
                src={project.cover}
                alt={project.coverAlt}
                fill
                sizes="(min-width: 640px) 20rem, 90vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-(--color-bg-dark)/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-(--color-bg-dark)/50 text-(--color-bg-light) backdrop-blur-sm transition-all duration-300 group-hover:rotate-90 group-hover:border-(--color-coral) group-hover:bg-(--color-coral) group-hover:text-(--color-bg-dark)"
              >
                <Plus size={16} />
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <p className="text-base font-semibold text-(--color-bg-light)">{project.name}</p>
              <span className="shrink-0 text-xs font-semibold tabular-nums text-(--color-coral)/70">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-(--color-gray)">{project.category}</p>
          </button>
        );
      })}
    </div>
  );
}

/** Detalle expandido: portada + galería a un lado, info al otro, navegación
 * anterior/siguiente abajo. Todo pasa dentro de la sección, sin modal. */
function WorkDetail({
  project,
  index,
  projects,
  labels,
  onSwitch,
}: {
  project: ProjectItem;
  index: number;
  projects: ProjectItem[];
  labels: {
    featuresLabel: string;
    techLabel: string;
    rightsReserved: string;
    prevLabel: string;
    nextLabel: string;
    viewLabel: string;
  };
  onSwitch: (index: number) => void;
}) {
  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;
  const [shot, setShot] = useState(0);
  const active = project.shots[shot] ?? project.shots[0];

  // Reset de la galería al cambiar de proyecto.
  useEffect(() => setShot(0), [project.id]);

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
        {/* Columna imagen: captura grande + tira de miniaturas. */}
        <div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="(min-width: 1024px) 40rem, 90vw"
              className="object-cover object-top"
            />
          </div>
          {project.shots.length > 1 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.shots.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setShot(i)}
                  aria-label={s.caption}
                  aria-current={i === shot}
                  className={cn(
                    "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 focus-visible:outline-none",
                    i === shot
                      ? "border-(--color-coral)"
                      : "border-white/15 opacity-50 hover:opacity-100 hover:border-white/40",
                  )}
                >
                  <Image src={s.src} alt="" fill sizes="80px" className="object-cover object-top" />
                </button>
              ))}
            </div>
          )}
          <p className="mt-2 text-xs uppercase tracking-[0.15em] text-(--color-gray)">{active.caption}</p>
        </div>

        {/* Columna info. */}
        <div>
          <span className="text-sm font-bold tracking-tight text-(--color-coral)/60 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-0.5 text-2xl font-bold tracking-tight text-(--color-bg-light) sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-(--color-coral)">
            {project.category} · {project.year}
          </p>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-(--color-gray)">{project.description}</p>

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="eyebrow !mb-0 !text-[10px]">{labels.featuresLabel}</p>
            <ul className="mt-2 space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-(--color-bg-light)/80">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-(--color-coral)" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="eyebrow !mb-0 !text-[10px]">{labels.techLabel}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-(--color-coral)/30 bg-(--color-coral)/10 px-2.5 py-0.5 text-[11px] font-medium text-(--color-coral)"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.rightsReserved && (
            <p className="mt-4 flex items-center gap-2 text-xs text-(--color-gray)">
              <Lock size={13} className="shrink-0 text-(--color-coral)" />
              {labels.rightsReserved}
            </p>
          )}
        </div>
      </div>

      {/* Navegación anterior/siguiente + miniaturas de proyectos. */}
      <div className="mt-8 flex items-center justify-center gap-3 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={() => onSwitch(prevIndex)}
          aria-label={labels.prevLabel}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-(--color-bg-light) transition-colors duration-300 hover:border-(--color-coral) hover:text-(--color-coral)"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onSwitch(i)}
              aria-label={`${labels.viewLabel} ${p.name}`}
              aria-current={i === index}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 focus-visible:outline-none",
                i === index
                  ? "bg-(--color-coral) text-(--color-bg-dark)"
                  : "border border-white/15 text-(--color-bg-light)/60 hover:text-(--color-bg-light)",
              )}
            >
              {p.name}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onSwitch(nextIndex)}
          aria-label={labels.nextLabel}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-(--color-bg-light) transition-colors duration-300 hover:border-(--color-coral) hover:text-(--color-coral)"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export function Work() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(null);

  const titleLead = t.work.title.slice(0, -1);
  const titleLast = t.work.title.slice(-1);

  useGSAP(
    () => {
      if (!sectionRef.current || reduced) return;
      applyScrollColorFade(sectionRef.current, { from: "#FCFCFB", to: "#101827", mode: "in-out" });
    },
    { dependencies: [reduced], scope: sectionRef },
  );

  useGSAP(
    () => {
      const el = contentRef.current;
      if (!el) return;
      if (reduced) {
        gsap.set(el, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.fromTo(el, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" });
    },
    { dependencies: [selected, reduced], scope: sectionRef },
  );

  useEffect(() => {
    if (selected === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const projects = t.work.projects;

  return (
    <section
      ref={sectionRef}
      id="trabajo"
      className={cn(
        "overflow-hidden bg-(--color-bg-dark) text-(--color-bg-light)",
        selected !== null ? "pt-10 pb-14 sm:pt-16 sm:pb-16 lg:pt-20" : "section-y",
      )}
    >
      <div className="container-page">
        <div className="relative">
          <Reveal>
            <span className="eyebrow">{t.work.eyebrow}</span>
          </Reveal>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-(--color-bg-light) sm:text-5xl lg:text-6xl">
            {titleLead}
            <span className="text-(--color-coral)">{titleLast}</span>
          </h2>

          {selected === null && (
            <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <Reveal delay={0.1} className="max-w-xl">
                <p className="text-base text-(--color-gray) sm:text-lg">
                  {t.work.descriptionPre}
                  <span className="text-(--color-coral)">{t.work.descriptionHighlight}</span>
                  {t.work.descriptionPost}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <StaircaseTag
                  text={t.work.tagline}
                  className="max-w-[16ch] tracking-[0.2em] text-(--color-gray)"
                />
              </Reveal>
            </div>
          )}

          {selected !== null && (
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t.work.close}
              className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-(--color-bg-light) transition-colors hover:border-(--color-coral) hover:text-(--color-coral)"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div ref={contentRef} className={selected !== null ? "mt-8" : "mt-14"}>
          {selected === null ? (
            <WorkGrid projects={projects} viewLabel={t.work.viewProject} onSelect={setSelected} />
          ) : (
            <WorkDetail
              project={projects[selected]}
              index={selected}
              projects={projects}
              labels={{
                featuresLabel: t.work.featuresLabel,
                techLabel: t.work.techLabel,
                rightsReserved: t.work.rightsReserved,
                prevLabel: t.work.prevLabel,
                nextLabel: t.work.nextLabel,
                viewLabel: t.work.viewProject,
              }}
              onSwitch={setSelected}
            />
          )}
        </div>
      </div>
    </section>
  );
}
