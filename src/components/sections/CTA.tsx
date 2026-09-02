"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactOptions } from "@/components/ui/ContactOptions";
import { Reveal } from "@/components/ui/Reveal";
import { useHasFinePointer } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/LocaleProvider";
import { site } from "@/data/site";

export function CTA() {
  const { t } = useLocale();
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hasFinePointer = useHasFinePointer();
  const [hovering, setHovering] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!glowRef.current || !cardRef.current || !hasFinePointer) return;
    const rect = cardRef.current.getBoundingClientRect();
    glowRef.current.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    glowRef.current.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <section id="contacto" className="pt-12 pb-[clamp(4rem,3rem+5vw,7.5rem)]">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-(--radius-lg) bg-(--color-coral) px-8 py-20 text-center sm:px-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_15%,black_35%,transparent_85%)]"
          />
          <ArrowUpRight
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-14 -right-10 h-56 w-56 text-(--color-bg-light)/10 sm:h-72 sm:w-72"
            strokeWidth={1}
          />

          <div
            ref={cardRef}
            data-cursor-invert
            onMouseMove={handleMove}
            onMouseEnter={() => hasFinePointer && setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative"
          >
            {hasFinePointer && (
              <div
                ref={glowRef}
                aria-hidden="true"
                style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
                className={cn(
                  "pointer-events-none absolute -inset-x-16 -inset-y-20 opacity-0 transition-opacity duration-500 ease-out [background:radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(0,0,0,0.14),transparent_70%)]",
                  hovering && "opacity-100",
                )}
              />
            )}

            <h2 className="relative mx-auto max-w-2xl text-(length:--text-display) leading-(--text-display--line-height) font-semibold tracking-tight text-(--color-bg-light)">
              {t.cta.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base text-(--color-bg-light)/90 sm:text-lg">
              {t.cta.description}
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <ContactOptions variant="secondary" />
              <Button
                href={`mailto:${site.email}`}
                variant="ghost"
                className="!border-(--color-bg-light)/40 !text-(--color-bg-light)"
              >
                {site.email}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
