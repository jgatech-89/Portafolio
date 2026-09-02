"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionary, type Dictionary, type Locale } from "@/i18n/dictionary";

const STORAGE_KEY = "scale-labs-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Toggle de idioma 100% client-side: no hay rutas por locale (`/en`, `/es`),
 * así que los `<meta>` que arma el servidor (título, descripción, OG) se
 * quedan siempre en español — solo el contenido de la página cambia. El
 * idioma elegido se guarda en localStorage para que persista entre visitas.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "es" ? "en" : "es";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, t: dictionary[locale] }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale debe usarse dentro de <LocaleProvider>");
  return ctx;
}
