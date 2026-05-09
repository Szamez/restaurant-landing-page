"use client";

import Image from "next/image";
import Link from "next/link";
import { brandName, common, menuSections, signatureDishes } from "./site-data";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./use-language";
import type { Language } from "./site-data";

const copy = {
  pl: {
    eyebrow: "Pełne menu",
    title: "Menu sezonowe",
    lead: "Krótka karta LUMIÈRE Bistro zmienia się wraz z sezonem. Poniżej znajdziesz przykładową strukturę menu z cenami.",
    reserveNote: "Chcesz zarezerwować stolik lub menu degustacyjne?",
  },
  en: {
    eyebrow: "Full menu",
    title: "Seasonal menu",
    lead: "LUMIÈRE Bistro keeps a short menu that follows the season. Below is a sample menu structure with prices.",
    reserveNote: "Would you like to reserve a table or tasting menu?",
  },
} as const;

type MenuPageProps = {
  initialLanguage?: Language;
};

export function MenuPage({ initialLanguage = "pl" }: MenuPageProps) {
  const { language, setLanguage, withLanguage } = useLanguage(initialLanguage);
  const c = common[language];
  const t = copy[language];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf4e8] text-[#14241c]">
      <header className="border-b border-[#ead8b8] bg-[#fbf4e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href={withLanguage("/")} className="shrink-0 text-sm font-semibold uppercase tracking-[0.24em] text-[#143226] sm:tracking-[0.3em]">
            Lumière
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher language={language} onChange={setLanguage} />
            <Link
              href={withLanguage("/rezerwacja")}
              className="hidden rounded-full bg-[#143226] px-5 py-3 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#1d4938] sm:inline-flex"
            >
              {c.reserve}
            </Link>
          </div>
        </div>
      </header>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Link href={withLanguage("/")} className="text-sm font-semibold text-[#9b743d] hover:text-[#143226]">
              {c.backHome}
            </Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-[#ae8444]">{t.eyebrow}</p>
            <h1 className="mt-4 break-words text-4xl font-semibold leading-tight text-[#143226] sm:text-7xl">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#627263]">{t.lead}</p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[8px] bg-[#143226]">
            <Image src="/lumiere-gallery-table.png" alt={brandName} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[8px] bg-[#143226] p-6 text-[#fffaf0] lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2a75f]">{brandName}</p>
            <div className="mt-6 grid gap-4">
              {signatureDishes.slice(0, 3).map((dish) => (
                <div key={dish.pl.name} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[8px]">
                    <Image src={dish.image} alt={dish[language].name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">{dish[language].name}</p>
                    <p className="mt-1 text-sm text-[#d8c9aa]">{dish.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-6 text-[#d8c9aa]">{t.reserveNote}</p>
            <Link
              href={withLanguage("/rezerwacja")}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#d2a75f] px-6 py-3 text-sm font-bold text-[#10291f] transition hover:bg-[#e5bf78]"
            >
              {c.reserve}
            </Link>
          </aside>

          <div className="grid gap-5">
            {menuSections.map((section) => (
              <section key={section.pl.title} className="rounded-[8px] border border-[#e3cfac] bg-[#fffaf0] p-5 sm:p-7">
                <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-[#9b743d]">{section[language].title}</h2>
                <div className="mt-6 grid gap-5">
                  {section.items.map((item) => (
                    <div key={item.pl.name} className="grid gap-3 border-b border-[#eadbbf] pb-5 last:border-0 last:pb-0 sm:grid-cols-[1fr_auto]">
                      <div>
                        <h3 className="text-xl font-semibold text-[#143226]">{item[language].name}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#657669]">{item[language].note}</p>
                      </div>
                      <p className="text-base font-bold text-[#9b743d]">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
