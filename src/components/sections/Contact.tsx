"use client";

import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { useLocale } from "@/i18n/LocaleProvider";

type Field = "name" | "email" | "company" | "phone" | "projectType" | "message";

const INITIAL: Record<Field, string> = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d][\d\s().-]{6,}$/;

export function Contact() {
  const { t } = useLocale();
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  function validate(v: Record<Field, string>) {
    const e: Partial<Record<Field, string>> = {};
    if (!v.name.trim()) e.name = t.contact.errors.name;
    if (!v.email.trim()) e.email = t.contact.errors.email;
    else if (!emailRegex.test(v.email)) e.email = t.contact.errors.emailInvalid;
    if (v.phone && !phoneRegex.test(v.phone)) e.phone = t.contact.errors.phoneInvalid;
    if (!v.projectType) e.projectType = t.contact.errors.projectType;
    if (!v.message.trim()) e.message = t.contact.errors.message;
    else if (v.message.trim().length < 10) e.message = t.contact.errors.messageShort;
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }

    // Sin backend: se arma el resumen y se abre WhatsApp con el mensaje
    // precargado para no perder el contacto.
    const lines = [
      `${t.contact.waGreeting} ${values.name}.`,
      `${t.contact.waCompany}: ${values.company || "—"}`,
      `${t.contact.waType}: ${values.projectType}`,
      `${t.contact.waMessage}: ${values.message}`,
    ];
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
    setValues(INITIAL);
  }

  const info = [
    { icon: Mail, label: t.contact.emailLabel, value: site.email, href: `mailto:${site.email}`, external: false },
    {
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: site.phone,
      href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`,
      external: true,
    },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.city, href: null, external: false },
  ];

  const inputClass =
    "w-full rounded-(--radius-sm) border border-(--color-gray)/30 bg-(--color-bg-light) px-4 py-3 text-sm text-(--color-carbon-deep) outline-none transition-colors placeholder:text-(--color-gray) focus:border-(--color-coral)";

  return (
    <section id="contacto" className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.subtitle} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Información de contacto */}
          <Reveal>
            <h3 className="text-xl font-semibold tracking-tight text-(--color-carbon-deep)">
              {t.contact.infoTitle}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-(--color-text-secondary)">{t.contact.infoSubtitle}</p>

            <ul className="mt-8 space-y-4">
              {info.map(({ icon: Icon, label, value, href, external }) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-(--radius-sm) bg-(--color-carbon-deep) text-(--color-bg-light)">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-(--color-text-secondary)">
                        {label}
                      </p>
                      <p className="font-medium text-(--color-carbon-deep)">{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="inline-block transition-opacity hover:opacity-80"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Formulario → WhatsApp */}
          <Reveal delay={0.1}>
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-(--radius-lg) border border-(--color-gray)/20 p-6 sm:p-8"
            >
              {sent && (
                <p className="mb-6 rounded-(--radius-sm) border border-(--color-coral)/30 bg-(--color-coral)/10 px-4 py-3 text-sm text-(--color-coral-deep)">
                  {t.contact.success}
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Labeled label={t.contact.fields.name} error={errors.name} required>
                  <input className={inputClass} value={values.name} onChange={set("name")} autoComplete="name" />
                </Labeled>
                <Labeled label={t.contact.fields.email} error={errors.email} required>
                  <input
                    type="email"
                    className={inputClass}
                    value={values.email}
                    onChange={set("email")}
                    autoComplete="email"
                  />
                </Labeled>
                <Labeled label={t.contact.fields.company} error={errors.company}>
                  <input
                    className={inputClass}
                    value={values.company}
                    onChange={set("company")}
                    autoComplete="organization"
                  />
                </Labeled>
                <Labeled label={t.contact.fields.phone} error={errors.phone}>
                  <input
                    type="tel"
                    className={inputClass}
                    value={values.phone}
                    onChange={set("phone")}
                    autoComplete="tel"
                  />
                </Labeled>
                <div className="sm:col-span-2">
                  <Labeled label={t.contact.fields.projectType} error={errors.projectType} required>
                    <select
                      className={cn(inputClass, !values.projectType && "text-(--color-gray)")}
                      value={values.projectType}
                      onChange={set("projectType")}
                    >
                      <option value="" disabled>
                        {t.contact.fields.projectTypePlaceholder}
                      </option>
                      {t.contact.projectTypes.map((type) => (
                        <option key={type} value={type} className="text-(--color-carbon-deep)">
                          {type}
                        </option>
                      ))}
                    </select>
                  </Labeled>
                </div>
                <div className="sm:col-span-2">
                  <Labeled label={t.contact.fields.message} error={errors.message} required>
                    <textarea
                      rows={4}
                      className={cn(inputClass, "resize-y")}
                      value={values.message}
                      onChange={set("message")}
                    />
                  </Labeled>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-(--radius-pill) bg-(--color-coral) px-6 py-3 text-sm font-semibold text-(--color-bg-light) transition-colors duration-300 hover:bg-(--color-coral-deep)"
              >
                {t.contact.submit}
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Labeled({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-(--color-text-secondary)">
        {label}
        {required && <span className="text-(--color-coral)"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-(--color-coral-deep)">{error}</span>}
    </label>
  );
}
