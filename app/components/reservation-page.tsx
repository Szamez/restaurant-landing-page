"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  common,
  coupons,
  reservationCopy,
  reservationPackages,
  type Language,
} from "./site-data";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./use-language";

const paymentMethodIds = ["card", "blik", "transfer", "onsite"] as const;

function formatPrice(value: number, language: Language) {
  return new Intl.NumberFormat(language === "pl" ? "pl-PL" : "en-US", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  }).format(value);
}

type ReservationPageProps = {
  initialLanguage?: Language;
};

export function ReservationPage({ initialLanguage = "pl" }: ReservationPageProps) {
  const { language, setLanguage, withLanguage } = useLanguage(initialLanguage);
  const c = common[language];
  const t = reservationCopy[language];
  const [guests, setGuests] = useState(2);
  const [selectedPackageId, setSelectedPackageId] = useState("standard");
  const [coupon, setCoupon] = useState("");
  const [sent, setSent] = useState(false);

  const selectedPackage =
    reservationPackages.find((item) => item.id === selectedPackageId) ?? reservationPackages[0];

  const summary = useMemo(() => {
    const subtotal = selectedPackage.perGuest ? selectedPackage.price * guests : selectedPackage.price;
    const normalizedCoupon = coupon.trim().toUpperCase();
    const discountRate = coupons[normalizedCoupon] ?? 0;
    const discount = Math.round(subtotal * discountRate);

    return {
      subtotal,
      discount,
      total: subtotal - discount,
      hasCoupon: normalizedCoupon.length > 0,
      couponValid: normalizedCoupon.length > 0 && discountRate > 0,
    };
  }, [coupon, guests, selectedPackage]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbf4e8] text-[#14241c]">
      <header className="border-b border-[#ead8b8] bg-[#fbf4e8]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href={withLanguage("/")} className="shrink-0 text-sm font-semibold uppercase tracking-[0.24em] text-[#143226] sm:tracking-[0.3em]">
            Lumière
          </Link>
          <LanguageSwitcher language={language} onChange={setLanguage} />
        </div>
      </header>

      <section className="px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Link href={withLanguage("/")} className="text-sm font-semibold text-[#9b743d] hover:text-[#143226]">
            {c.backHome}
          </Link>
          <div className="mt-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ae8444]">{t.eyebrow}</p>
            <h1 className="mt-4 break-words text-4xl font-semibold leading-tight text-[#143226] sm:text-7xl">{t.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#627263]">{t.lead}</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <form onSubmit={handleSubmit} className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_420px]">
          <div className="grid w-full min-w-0 gap-5 rounded-[8px] border border-[#e3cfac] bg-[#fffaf0] p-5 sm:grid-cols-2 sm:p-7">
            <label className="grid gap-2 text-sm font-semibold text-[#244234] sm:col-span-2">
              {t.fullName}
              <input
                name="fullName"
                required
                autoComplete="name"
                className="min-h-12 w-full min-w-0 rounded-[8px] border border-[#dcc8a4] bg-white px-4 text-base font-normal text-[#14241c] outline-none transition focus:border-[#9b743d] focus:ring-4 focus:ring-[#d2a75f]/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#244234]">
              {t.phone}
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="min-h-12 w-full min-w-0 rounded-[8px] border border-[#dcc8a4] bg-white px-4 text-base font-normal text-[#14241c] outline-none transition focus:border-[#9b743d] focus:ring-4 focus:ring-[#d2a75f]/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#244234]">
              {t.guests}
              <input
                name="guests"
                type="number"
                min={1}
                max={12}
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
                required
                className="min-h-12 w-full min-w-0 rounded-[8px] border border-[#dcc8a4] bg-white px-4 text-base font-normal text-[#14241c] outline-none transition focus:border-[#9b743d] focus:ring-4 focus:ring-[#d2a75f]/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#244234]">
              {t.date}
              <input
                name="date"
                type="date"
                required
                className="min-h-12 w-full min-w-0 rounded-[8px] border border-[#dcc8a4] bg-white px-4 text-base font-normal text-[#14241c] outline-none transition focus:border-[#9b743d] focus:ring-4 focus:ring-[#d2a75f]/20"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#244234]">
              {t.time}
              <input
                name="time"
                type="time"
                required
                className="min-h-12 w-full min-w-0 rounded-[8px] border border-[#dcc8a4] bg-white px-4 text-base font-normal text-[#14241c] outline-none transition focus:border-[#9b743d] focus:ring-4 focus:ring-[#d2a75f]/20"
              />
            </label>

            <fieldset className="grid gap-3 sm:col-span-2">
              <legend className="text-sm font-semibold text-[#244234]">{t.package}</legend>
              <div className="grid gap-3">
                {reservationPackages.map((item) => (
                  <label
                    key={item.id}
                    className={`grid min-w-0 cursor-pointer gap-2 rounded-[8px] border p-4 transition ${
                      selectedPackageId === item.id
                        ? "border-[#9b743d] bg-[#f6ead4]"
                        : "border-[#e3cfac] bg-white hover:border-[#c9aa73]"
                    }`}
                  >
                    <span className="flex min-w-0 items-start gap-3">
                      <input
                        type="radio"
                        name="package"
                        value={item.id}
                        checked={selectedPackageId === item.id}
                        onChange={() => setSelectedPackageId(item.id)}
                        className="mt-1 accent-[#143226]"
                      />
                      <span className="grid min-w-0 gap-1">
                        <span className="flex flex-col gap-1 font-semibold text-[#143226] sm:flex-row sm:items-center sm:justify-between">
                          <span>{item[language].name}</span>
                          <span className="text-sm text-[#9b743d]">
                            {formatPrice(item.price, language)}
                            {item.perGuest ? (language === "pl" ? " / os." : " / person") : ""}
                          </span>
                        </span>
                        <span className="break-words text-sm leading-6 text-[#657669]">{item[language].description}</span>
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b743d]">
                          {t.included}
                        </span>
                        <span className="break-words text-sm leading-6 text-[#657669]">{item[language].included}</span>
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="grid gap-3 sm:col-span-2">
              <legend className="text-sm font-semibold text-[#244234]">{t.payment}</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {paymentMethodIds.map((id) => (
                  <label key={id} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-[8px] border border-[#e3cfac] bg-white px-4 text-sm font-semibold text-[#244234] transition hover:border-[#c9aa73]">
                    <input type="radio" name="payment" value={id} required className="accent-[#143226]" />
                    {t.paymentMethods[id]}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2 text-sm font-semibold text-[#244234] sm:col-span-2">
              {t.coupon}
              <input
                name="coupon"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                placeholder={t.couponPlaceholder}
                className="min-h-12 w-full min-w-0 rounded-[8px] border border-[#dcc8a4] bg-white px-4 text-base font-normal uppercase text-[#14241c] outline-none transition placeholder:normal-case focus:border-[#9b743d] focus:ring-4 focus:ring-[#d2a75f]/20"
              />
            </label>
          </div>

          <aside className="rounded-[8px] bg-[#143226] p-5 text-[#fffaf0] sm:p-7 lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d2a75f]">{t.summary}</p>
            <h2 className="mt-4 text-2xl font-semibold">{selectedPackage[language].name}</h2>
            <p className="mt-3 text-sm leading-6 text-[#d8c9aa]">{selectedPackage[language].description}</p>

            <div className="mt-8 grid gap-4 border-y border-white/10 py-5">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-[#d8c9aa]">{t.subtotal}</span>
                <span className="font-semibold">{formatPrice(summary.subtotal, language)}</span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-[#d8c9aa]">{t.discount}</span>
                <span className="font-semibold">-{formatPrice(summary.discount, language)}</span>
              </div>
              <div className="flex justify-between gap-4 text-xl font-semibold">
                <span>{t.total}</span>
                <span>{formatPrice(summary.total, language)}</span>
              </div>
            </div>

            {summary.hasCoupon ? (
              <p className={`mt-4 text-sm font-semibold ${summary.couponValid ? "text-[#d2a75f]" : "text-[#f0b7a8]"}`}>
                {summary.couponValid ? t.couponApplied : t.couponInvalid}
              </p>
            ) : null}

            <p className="mt-5 text-sm leading-6 text-[#d8c9aa]">{t.depositInfo}</p>

            <button
              type="submit"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#d2a75f] px-6 py-3 text-sm font-bold text-[#10291f] transition hover:bg-[#e5bf78]"
            >
              {t.submit}
            </button>

            {sent ? (
              <p aria-live="polite" className="mt-5 rounded-[8px] border border-[#d2a75f]/30 bg-white/10 p-4 text-sm leading-6 text-[#f6e7ca]">
                {t.success}
              </p>
            ) : null}
          </aside>
        </form>
      </section>
    </main>
  );
}
