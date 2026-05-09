"use client";

import Image from "next/image";
import Link from "next/link";
import {
  brandName,
  common,
  galleryImages,
  landingCopy,
  menuSections,
  signatureDishes,
  testimonials,
} from "./site-data";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./use-language";
import type { Language } from "./site-data";

type LandingPageProps = {
  initialLanguage?: Language;
};

export function LandingPage({ initialLanguage = "pl" }: LandingPageProps) {
  const { language, setLanguage, withLanguage } = useLanguage(initialLanguage);
  const c = common[language];
  const t = landingCopy[language];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf4e8] text-[#14241c]">
      <header className="sticky top-0 z-50 h-[76px] border-b border-[#f2dfba]/75 bg-[#fbf4e8]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-3 px-5 sm:gap-4 sm:px-8">
          <Link href={withLanguage("/")} className="w-[118px] shrink-0 text-sm font-semibold uppercase tracking-[0.24em] text-[#143226] sm:tracking-[0.3em]">
            Lumière
          </Link>
          <nav className="hidden w-[390px] grid-cols-5 items-center gap-2 text-center text-sm font-medium text-[#53695b] lg:grid">
            <a href="#about" className="transition hover:text-[#143226]">
              {c.nav.about}
            </a>
            <a href="#dishes" className="transition hover:text-[#143226]">
              {c.nav.dishes}
            </a>
            <Link href={withLanguage("/menu")} className="transition hover:text-[#143226]">
              {c.nav.menu}
            </Link>
            <a href="#gallery" className="transition hover:text-[#143226]">
              {c.nav.gallery}
            </a>
            <a href="#contact" className="transition hover:text-[#143226]">
              {c.nav.contact}
            </a>
          </nav>
          <div className="flex min-w-0 items-center justify-end gap-3 sm:w-[292px]">
            <LanguageSwitcher language={language} onChange={setLanguage} />
            <Link
              href={withLanguage("/rezerwacja")}
              className="hidden min-h-12 w-[172px] items-center justify-center whitespace-nowrap rounded-full bg-[#143226] px-5 py-3 text-sm font-semibold text-[#fffaf0] shadow-[0_16px_40px_rgba(20,50,38,0.18)] transition hover:bg-[#1d4938] sm:inline-flex"
            >
              {c.reserve}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#10291f] text-[#fffaf0]">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/lumiere-hero.png"
            alt="LUMIERE Bistro dining room"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,34,26,0.96),rgba(13,34,26,0.76),rgba(13,34,26,0.22))]" />
        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl content-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="flex min-h-[520px] max-w-3xl min-w-0 flex-col justify-end sm:min-h-[500px] lg:min-h-[560px]">
            <div key={`hero-copy-${language}`} className="lang-fade">
              <p className="mb-5 flex min-h-10 max-w-2xl items-end text-xs font-semibold uppercase tracking-[0.18em] text-[#e2bd75] sm:min-h-5 sm:tracking-[0.32em]">
                {t.heroEyebrow}
              </p>
              <h1 className="break-words text-5xl font-semibold leading-[0.95] tracking-normal text-[#fff9ec] sm:text-7xl lg:text-8xl">
                {t.heroTitle}
              </h1>
              <p className="mt-7 flex min-h-24 max-w-2xl items-start text-xl leading-8 text-[#f6e7ca] sm:min-h-20 sm:text-2xl">
                {t.heroSlogan}
              </p>
              <p className="mt-5 flex min-h-20 max-w-xl items-start text-base leading-7 text-[#d9c6a5] sm:min-h-14">
                {t.heroNote}
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={withLanguage("/rezerwacja")}
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full bg-[#d2a75f] px-6 py-3 text-sm font-bold text-[#10291f] shadow-[0_20px_50px_rgba(210,167,95,0.24)] transition hover:bg-[#e5bf78] sm:w-[178px]"
              >
                {c.reserve}
              </Link>
              <Link
                href={withLanguage("/menu")}
                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-[#f5dfb6]/45 px-6 py-3 text-sm font-bold text-[#fff9ec] transition hover:border-[#f5dfb6] hover:bg-white/10 sm:w-[150px]"
              >
                {c.menu}
              </Link>
            </div>
          </div>

          <div className="self-end lg:grid lg:min-h-[560px] lg:content-end">
            <div className="ml-auto grid w-full max-w-md gap-3 rounded-[8px] border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:grid-cols-2 lg:h-[190px]">
              <div className="rounded-[8px] bg-[#fff8e7] p-5 text-[#143226] lg:h-[158px]">
                <p key={`open-${language}`} className="lang-fade min-h-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9b743d]">{t.openToday}</p>
                <p className="mt-3 text-3xl font-semibold">{t.openHours}</p>
              </div>
              <div className="rounded-[8px] bg-[#173a2d] p-5 lg:h-[158px]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d2a75f]">LUMIÈRE</p>
                <p key={`rating-${language}`} className="lang-fade mt-3 min-h-20 text-3xl font-semibold">{t.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ae8444]">{brandName}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#143226] sm:text-5xl">{t.aboutTitle}</h2>
          </div>
          <div>
            <p className="text-2xl leading-9 text-[#244234]">{t.aboutLead}</p>
            <p className="mt-5 text-base leading-8 text-[#627263]">{t.aboutBody}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.stats.map(([number, label]) => (
                <div key={label} className="border-l border-[#d8c19a] bg-[#fffaf0] px-5 py-4">
                  <p className="text-3xl font-semibold text-[#143226]">{number}</p>
                  <p className="mt-1 text-sm text-[#657669]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="dishes" className="bg-[#f4e6ce] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b743d]">{brandName}</p>
              <h2 className="mt-4 text-4xl font-semibold text-[#143226] sm:text-5xl">{t.dishesTitle}</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#627263]">{t.dishesLead}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {signatureDishes.map((dish) => (
              <article key={dish.pl.name} className="overflow-hidden rounded-[8px] bg-[#fffaf0] shadow-[0_18px_55px_rgba(49,36,20,0.08)]">
                <div className="relative aspect-[4/3]">
                  <Image src={dish.image} alt={dish[language].name} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-[#143226]">{dish[language].name}</h3>
                    <p className="shrink-0 text-sm font-bold text-[#9b743d]">{dish.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#657669]">{dish[language].description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu-preview" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ae8444]">{brandName}</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#143226] sm:text-5xl">{t.menuTitle}</h2>
            <p className="mt-5 text-base leading-7 text-[#627263]">{t.menuLead}</p>
            <Link
              href={withLanguage("/menu")}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#143226] px-6 py-3 text-sm font-bold text-[#fffaf0] transition hover:bg-[#1d4938]"
            >
              {c.menu}
            </Link>
          </div>
          <div className="rounded-[8px] border border-[#e3cfac] bg-[#fffaf0] p-4 sm:p-6">
            {menuSections.slice(0, 2).map((section) => (
              <div key={section.pl.title} className="border-b border-[#eadbbf] py-5 first:pt-0 last:border-0 last:pb-0">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#9b743d]">
                  {section[language].title}
                </h3>
                <div className="grid gap-4">
                  {section.items.map((item) => (
                    <div key={item.pl.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-[#143226]">{item[language].name}</p>
                        <p className="mt-1 text-sm text-[#657669]">{item[language].note}</p>
                      </div>
                      <p className="shrink-0 text-sm font-bold text-[#9b743d]">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#10291f] px-5 py-20 text-[#fffaf0] sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2a75f]">{brandName}</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{t.galleryTitle}</h2>
            <p className="mt-5 text-base leading-7 text-[#d8c9aa]">{t.galleryLead}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-white/10 bg-white/5">
                <Image
                  src={image.src}
                  alt={language === "pl" ? image.altPl : image.altEn}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ae8444]">{brandName}</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#143226] sm:text-5xl">{t.testimonialsTitle}</h2>
            <p className="mt-5 text-base leading-7 text-[#627263]">{t.testimonialsLead}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.pl.author} className="rounded-[8px] border border-[#e2cfad] bg-[#fffaf0] p-6">
                <blockquote className="text-lg leading-8 text-[#244234]">“{testimonial[language].quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#9b743d]">
                  {testimonial[language].author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] bg-[#143226] p-6 text-[#fffaf0] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2a75f]">{brandName}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{t.ctaTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#d8c9aa]">{t.ctaText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href={withLanguage("/rezerwacja")}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d2a75f] px-6 py-3 text-sm font-bold text-[#10291f] transition hover:bg-[#e5bf78]"
            >
              {c.reserve}
            </Link>
            <Link
              href={withLanguage("/menu")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f5dfb6]/45 px-6 py-3 text-sm font-bold text-[#fff9ec] transition hover:border-[#f5dfb6] hover:bg-white/10"
            >
              {c.menu}
            </Link>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#f3e1c2] px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9b743d]">{t.contactTitle}</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#143226]">{brandName}</h2>
            <p className="mt-4 text-sm text-[#657669]">{t.footer}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-[#143226]">{t.addressLabel}</p>
              <p className="mt-2 text-sm leading-6 text-[#657669]">{t.address}</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#143226]">{t.phoneLabel}</p>
              <a className="mt-2 block text-sm leading-6 text-[#657669] hover:text-[#143226]" href="tel:+48512884019">
                {t.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-[#143226]">{t.hoursLabel}</p>
              <div className="mt-2 grid gap-1 text-sm leading-6 text-[#657669]">
                {t.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#143226]">{t.socialsLabel}</p>
              <div className="mt-2 flex gap-3 text-sm font-semibold text-[#657669]">
                <a href="https://instagram.com" className="hover:text-[#143226]">
                  Instagram
                </a>
                <a href="https://facebook.com" className="hover:text-[#143226]">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
