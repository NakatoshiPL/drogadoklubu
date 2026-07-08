import type { Metadata } from "next";
import Link from "next/link";
import { localeLabels, supportedLocales } from "@/lib/i18n-site";
import { buildWebPageSchema, siteLastModified } from "@/lib/seo-schema";

export const metadata: Metadata = {
  title: "Wybierz język",
  description:
    "Wielojęzyczny poradnik dla rodziców młodych piłkarzy: PL, NL, EN, DE, BE.",
  keywords: ["jak zapisać dziecko do klubu piłkarskiego"],
};

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jakdotrzeczdoklubu.pl";
  const webPageSchema = buildWebPageSchema({
    baseUrl,
    path: "/",
    name: "Poradnik dla rodziców młodych piłkarzy",
    description:
      "Wielojęzyczny poradnik dla rodziców młodych piłkarzy: PL, NL, EN, DE, BE.",
    inLanguage: "pl",
    lastModified: siteLastModified,
  });

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#1a2a6c] via-slate-900 to-[#1a2a6c] p-8 text-white shadow-xl sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-200">
          Football Parent Guide
        </p>
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
          Elegancki, nowoczesny poradnik dla rodziców młodych piłkarzy
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-100">
          Wybierz język i przejdź przez proces krok po kroku: systemy klubowe,
          kontakt, testy i FAQ.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/pl"
            className="rounded-full bg-[#f7931e] px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Wejdź po polsku (PL)
          </Link>
          <Link
            href="/nl"
            className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Open Nederlands (NL)
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold text-slate-900">
          Wszystkie wersje językowe
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportedLocales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}`}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {localeLabels[locale]}
              </h3>
              <p className="mt-2 text-sm text-slate-600">/{locale}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          SEO i widoczność
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
          Strona ma wdrożone SEO techniczne (metadata, sitemap, robots,
          struktura wielojęzyczna). Nie da się uczciwie zagwarantować pozycji
          #1 w Google, ale ta architektura daje mocną bazę do regularnego wzrostu
          organicznego.
        </p>
      </section>
    </div>
  );
}
