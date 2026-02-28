"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Locale, type Translations } from "@/src/shared/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  t: translations.en,
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "pt")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  };

  return (
    <LocaleContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
