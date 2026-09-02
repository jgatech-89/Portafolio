"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type Variant = "primary" | "secondary" | "ghost";

/**
 * Botón de contacto con dos canales directos: WhatsApp y llamada. Sustituye
 * al antiguo CTA de "agenda una llamada" — sin formularios ni calendario de
 * por medio, el visitante elige el canal y sale directo a WhatsApp o al
 * marcador del teléfono.
 */
export function ContactOptions({
  variant = "primary",
  label = site.phone,
  className,
  buttonClassName,
  menuClassName,
  align = "left",
}: {
  variant?: Variant;
  label?: string;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const options = [
    {
      key: "whatsapp",
      label: t.contact.whatsapp,
      icon: MessageCircle,
      href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`,
      external: true,
    },
    {
      key: "call",
      label: `${t.contact.call} · ${site.phone}`,
      icon: Phone,
      href: `tel:${site.whatsapp}`,
      external: false,
    },
  ];

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <Button
        type="button"
        variant={variant}
        className={cn("gap-3 py-2 pl-2 pr-5", buttonClassName)}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-current/15">
          <Phone size={16} />
        </span>
        <span className="font-bold">{label}</span>
        <ChevronDown size={14} className={cn("shrink-0 transition-transform duration-300", open && "rotate-180")} />
      </Button>

      {open && (
        <div
          role="menu"
          className={cn(
            "absolute top-full z-20 mt-2 w-72 max-w-[calc(100vw-3rem)] overflow-hidden rounded-(--radius-md) border border-(--color-gray)/25 bg-(--color-bg-light) shadow-lg",
            align === "right" ? "right-0" : "left-0",
            menuClassName,
          )}
        >
          {options.map((opt) => (
            <a
              key={opt.key}
              href={opt.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              {...(opt.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-(--color-carbon-deep) transition-colors hover:bg-(--color-coral)/10"
            >
              <opt.icon size={18} className="shrink-0 text-(--color-coral-deep)" />
              {opt.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
