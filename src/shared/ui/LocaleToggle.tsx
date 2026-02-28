"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";
import type { Locale } from "@/src/shared/lib/i18n";

const locales: { value: Locale; flag: string; label: string }[] = [
  { value: "pt", flag: "\uD83C\uDDE7\uD83C\uDDF7", label: "Português" },
  { value: "en", flag: "\uD83C\uDDFA\uD83C\uDDF8", label: "English" },
];

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!mounted) return null;

  const current = locales.find((l) => l.value === locale)!;

  return (
    <div ref={ref} className="fixed right-16 top-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="border-2 border-border bg-bg-surface p-2 text-sm shadow-retro transition-all hover:border-primary"
        aria-label="Change language"
      >
        {current.flag}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 border-2 border-border bg-bg-surface shadow-retro-lg">
          {locales.map((l) => (
            <button
              key={l.value}
              onClick={() => {
                setLocale(l.value);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left font-mono text-xs transition-colors hover:bg-primary/10 ${
                l.value === locale ? "text-primary-light" : "text-text-muted"
              }`}
            >
              <span className="text-sm">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
