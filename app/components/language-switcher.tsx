"use client";

import type { Language } from "./site-data";
import { common } from "./site-data";

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
  light?: boolean;
};

export function LanguageSwitcher({ language, onChange, light = false }: LanguageSwitcherProps) {
  const t = common[language];

  return (
    <div
      aria-label={t.language}
      className={`inline-grid h-11 w-[98px] shrink-0 grid-cols-2 rounded-full border p-1 text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] ${
        light
          ? "border-white/25 bg-white/10 text-white"
          : "border-[#d8c7a8] bg-[#fffaf0] text-[#244234]"
      }`}
    >
      {(["pl", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`grid h-9 w-11 place-items-center rounded-full px-0 transition ${
            language === item
              ? light
                ? "bg-[#f7e7c6] text-[#143226]"
                : "bg-[#143226] text-[#fffaf0]"
              : light
                ? "text-white/75 hover:text-white"
                : "text-[#5d725f] hover:text-[#143226]"
          }`}
        >
          {item === "pl" ? t.polish : t.english}
        </button>
      ))}
    </div>
  );
}
