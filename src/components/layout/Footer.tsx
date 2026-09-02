"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";
import { useGSAP } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/hooks";
import { applyScrollColorFade } from "@/lib/scrollColorFade";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";

const FOOTER_MUTED = "text-[color-mix(in_srgb,var(--color-carbon-edge)_55%,white)]";
const FOOTER_MUTED_STRONG = "!text-[color-mix(in_srgb,var(--color-carbon-edge)_55%,white)]";

export function Footer() {
  const { t } = useLocale();
  const footerRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const socials = [
    { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: site.social.instagram, icon: Instagram, label: "Instagram" },
    { href: site.social.github, icon: Github, label: "GitHub" },
  ];

  useGSAP(
    () => {
      if (!footerRef.current || reduced) return;
      applyScrollColorFade(footerRef.current, { from: "#FCFCFB", to: "#101827", mode: "in" });
    },
    { dependencies: [reduced], scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-(--color-bg-dark) text-(--color-bg-light)"
    >
      <Parallax
        speed={0.12}
        className="pointer-events-none absolute -right-24 -bottom-24 -z-10 opacity-[0.05] sm:-right-16 sm:-bottom-40"
      >
        <div className="[animation:spin-slow_70s_linear_infinite]">
          <Image
            src="/logo/isotipo-negativo.svg"
            alt=""
            width={640}
            height={780}
            aria-hidden="true"
            className="h-[26rem] w-auto sm:h-[34rem]"
          />
        </div>
      </Parallax>

      <div className="container-page py-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-10 sm:gap-y-6">
          <Reveal>
            <Image
              src="/logo/lockup-negativo.svg"
              alt={site.name}
              width={160}
              height={36}
              className="h-8 w-auto"
            />
            <p className={cn("mt-3 max-w-xs text-sm", FOOTER_MUTED)}>{t.footer.tagline}</p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ href, icon: Icon, label }) =>
                href ? (
                  <Magnetic key={label} strength={0.5}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex rounded-full border border-white/15 p-2.5 transition-colors hover:border-(--color-coral) hover:text-(--color-coral)"
                    >
                      <Icon size={16} />
                    </a>
                  </Magnetic>
                ) : (
                  <span
                    key={label}
                    aria-label={label}
                    aria-disabled="true"
                    title={label}
                    className="flex cursor-not-allowed rounded-full border border-white/10 p-2.5 text-(--color-bg-light)/30"
                  >
                    <Icon size={16} />
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className={cn("eyebrow", FOOTER_MUTED_STRONG)}>{site.name}</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm whitespace-nowrap text-(--color-bg-light)/85"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.mainSite}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-sm whitespace-nowrap text-(--color-bg-light)/85"
                >
                  {t.footer.backToSite}
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={cn("eyebrow", FOOTER_MUTED_STRONG)}>{t.nav[2]?.label}</p>
            <ul className="mt-3 space-y-2 text-sm text-(--color-bg-light)/85">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.whatsapp}`} className="link-underline">
                  {site.phone}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal
          immediate
          delay={0.15}
          className={cn(
            "mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between",
            FOOTER_MUTED,
          )}
        >
          <span>
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </span>
          <span>{t.footer.builtBy}</span>
        </Reveal>
      </div>
    </footer>
  );
}
