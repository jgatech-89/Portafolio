"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { ContactOptions } from "@/components/ui/ContactOptions";
import { Magnetic } from "@/components/ui/Magnetic";

/** Selector de idioma: globo + código del idioma ACTIVO; alterna al otro. */
function LanguageSwitch({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold text-(--color-text-secondary) transition-colors hover:text-(--color-coral-deep)",
        className,
      )}
    >
      <Globe size={16} aria-hidden="true" />
      {locale.toUpperCase()}
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-(--color-bg-light)/90 backdrop-blur-md border-b border-(--color-gray)/20"
          : "bg-transparent",
      )}
    >
      <div className="flex h-18 items-center justify-between px-(--page-x) py-4">
        <Link href="#top" className="flex items-center" aria-label={site.name}>
          <Image
            src="/logo/isotipo-color.svg"
            alt={site.name}
            width={100}
            height={122}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ContactOptions variant="ghost" align="right" />
          </div>

          <Magnetic strength={0.4}>
            <LanguageSwitch />
          </Magnetic>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-(--color-carbon-deep) md:hidden"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col items-stretch gap-4 border-t border-(--color-gray)/20 bg-(--color-bg-light) px-6 py-6 md:hidden">
          <ContactOptions variant="ghost" className="block w-full" buttonClassName="w-full" />
          <LanguageSwitch className="self-start" />
        </div>
      )}
    </header>
  );
}
