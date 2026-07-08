import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/app/components/accordion";
import { SocialShare } from "@/app/components/social-share";
import { getArticleBySlug, getArticlesForLocale, formatArticleDate } from "@/lib/blog-content";
import { buildWebPageSchema, siteLastModified } from "@/lib/seo-schema";
import {
  isSupportedLocale,
  localeContent,
  localeLabels,
  sharedSlugs,
  supportedLocales,
  type SiteLocale,
} from "@/lib/i18n-site";

type Params = { locale: string; slug?: string[] };

function toAnchorId(input: string) {
  return input
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const localizedMeta: Record<SiteLocale, { title: string; description: string }> = {
  pl: {
    title: "Poradnik dla rodziców młodych piłkarzy",
    description:
      "Wersja polska: jak dotrzeć do klubów piłkarskich w NL, BE i PL krok po kroku.",
  },
  nl: {
    title: "Gids voor ouders van jonge voetballers",
    description:
      "Nederlandse versie: praktische route naar voetbalclubs in NL, BE en PL.",
  },
  en: {
    title: "Guide for parents of young football players",
    description:
      "English version: practical pathway to clubs in the Netherlands, Belgium and Poland.",
  },
  de: {
    title: "Leitfaden fur Eltern junger Fussballer",
    description:
      "Deutsche Version: praktischer Weg zu Vereinen in NL, BE und PL.",
  },
  be: {
    title: "Belgium-focused parent football guide",
    description:
      "Belgium-focused version with recruitment timing and outreach guidance.",
  },
};

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) => {
    const base = sharedSlugs.map((slug) => ({ locale, slug: slug ? [slug] : [] }));
    const articles = getArticlesForLocale(locale).map((article) => ({
      locale,
      slug: ["blog", article.slug],
    }));
    return [...base, ...articles];
  });
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  if (!isSupportedLocale(params.locale)) return {};
  const locale = params.locale;
  const slugParts = params.slug ?? [];
  const slug = slugParts[0] ?? "";
  const articleSlug = slugParts[1];
  const article = slug === "blog" && articleSlug ? getArticleBySlug(locale, articleSlug) : null;
  const canonicalPath = slugParts.length ? `/${locale}/${slugParts.join("/")}` : `/${locale}`;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jakdotrzeczdoklubu.pl";

  const languages = Object.fromEntries(
    supportedLocales.map((lang) => [
      lang,
      `${baseUrl}/${lang}${slugParts.length ? `/${slugParts.join("/")}` : ""}`,
    ]),
  );

  return {
    title: article?.title ?? localizedMeta[locale].title,
    description: article?.description ?? localizedMeta[locale].description,
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages,
    },
    openGraph: {
      title: article?.title ?? localizedMeta[locale].title,
      description: article?.description ?? localizedMeta[locale].description,
      type: article ? "article" : "website",
      url: `${baseUrl}${canonicalPath}`,
      ...(article
        ? {
            publishedTime: article.publishedAt,
            modifiedTime: article.lastModified,
          }
        : {}),
    },
  };
}

function getPageSeoInfo(
  locale: SiteLocale,
  slug: string,
  articleSlug: string | undefined,
  selectedArticle: ReturnType<typeof getArticleBySlug>,
) {
  if (selectedArticle) {
    return {
      name: selectedArticle.title,
      description: selectedArticle.description,
      lastModified: selectedArticle.lastModified,
    };
  }

  const nav = localeContent[locale].nav;
  const slugTitles: Record<string, string> = {
    "system-klubowy": nav.system,
    "jak-pisac-do-klubow": nav.outreach,
    "przygotowanie-i-testy": nav.prep,
    faq: nav.faq,
    kontakt: nav.contact,
    blog: nav.blog,
  };

  if (slug && slugTitles[slug]) {
    return {
      name: slugTitles[slug],
      description: localizedMeta[locale].description,
      lastModified: siteLastModified,
    };
  }

  return {
    name: localizedMeta[locale].title,
    description: localizedMeta[locale].description,
    lastModified: siteLastModified,
  };
}

function LanguageSwitch({ locale, slugPath }: { locale: SiteLocale; slugPath: string }) {
  return (
    <div className="mb-5 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:mb-6 sm:flex-wrap sm:overflow-visible sm:pb-0">
      {supportedLocales.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}${slugPath ? `/${slugPath}` : ""}`}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            locale === lang
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
          }`}
        >
          {localeLabels[lang]}
        </Link>
      ))}
    </div>
  );
}

function LocalizedHome({ locale }: { locale: SiteLocale }) {
  const c = localeContent[locale];
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:space-y-8 sm:p-10">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {c.home.title} <span className="text-[#1a2a6c]">{c.home.subtitle}</span>
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
          {c.home.intro}
        </p>
        <div className="grid gap-2 sm:flex sm:flex-wrap sm:gap-3">
          <Link
            href={`/${locale}/przygotowanie-i-testy`}
            className="rounded-full bg-[#f7931e] px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:brightness-110"
          >
            {locale === "pl" ? "Uruchom checklistę" : "Start checklist"}
          </Link>
          <Link
            href={`/${locale}/jak-pisac-do-klubow`}
            className="rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {locale === "pl" ? "Zobacz zasady kontaktu" : "See outreach rules"}
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href={`/${locale}/system-klubowy`}
          className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100"
        >
          {c.nav.system}
        </Link>
        <Link
          href={`/${locale}/jak-pisac-do-klubow`}
          className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100"
        >
          {c.nav.outreach}
        </Link>
        <Link
          href={`/${locale}/przygotowanie-i-testy`}
          className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100"
        >
          {c.nav.prep}
        </Link>
        <Link
          href={`/${locale}/faq`}
          className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100"
        >
          {c.nav.faq}
        </Link>
        <Link
          href={`/${locale}/blog`}
          className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100"
        >
          {c.nav.blog}
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          {locale === "pl" ? "Szybki start" : "Quick start"}
        </h2>
        <div className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
          <p>1. {locale === "pl" ? "Dane i testy" : "Data and tests"}</p>
          <p>2. {locale === "pl" ? "Pierwszy kontakt" : "First outreach"}</p>
          <p>3. {locale === "pl" ? "Follow-up po 2 tyg." : "Follow-up after 2 weeks"}</p>
        </div>
      </div>
    </section>
  );
}

export default function LocaleSlugPage({ params }: { params: Params }) {
  if (!isSupportedLocale(params.locale)) notFound();
  const locale = params.locale;
  const slugParts = params.slug ?? [];
  const slug = slugParts[0] ?? "";
  const articleSlug = slugParts[1];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jakdotrzeczdoklubu.pl";
  const faqItems = [
    {
      question: locale === "pl" ? "Kiedy zrobić follow-up?" : "When should I send a follow-up?",
      answer:
        locale === "pl"
          ? "Po około 2 tygodniach, krótko i rzeczowo."
          : "After around 2 weeks, short and factual.",
    },
    {
      question:
        locale === "pl"
          ? "Czy pisać do wielu osób w klubie?"
          : "Should I write to multiple people in one club?",
      answer:
        locale === "pl"
          ? "Nie. Jedna osoba i jeden kanał kontaktu."
          : "No. One contact person and one channel.",
    },
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const localizedBlogArticles = getArticlesForLocale(locale);
  const selectedArticle =
    slug === "blog" && articleSlug ? getArticleBySlug(locale, articleSlug) : null;
  const canonicalPath = slugParts.length ? `/${locale}/${slugParts.join("/")}` : `/${locale}`;
  const pageSeo = getPageSeoInfo(locale, slug, articleSlug, selectedArticle);
  const webPageSchema = buildWebPageSchema({
    baseUrl,
    path: canonicalPath,
    name: pageSeo.name,
    description: pageSeo.description,
    inLanguage: locale,
    lastModified: pageSeo.lastModified,
  });
  const articleSchema =
    selectedArticle && articleSlug
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: selectedArticle.title,
          description: selectedArticle.description,
          inLanguage: locale,
          keywords: selectedArticle.keywords,
          datePublished: selectedArticle.publishedAt,
          dateModified: selectedArticle.lastModified,
          author: {
            "@type": "Person",
            name: "Rodzic mlodego pilkarza",
          },
          publisher: {
            "@type": "Organization",
            name: "Pilkarska Sciezka Rodzica",
          },
          mainEntityOfPage: `${baseUrl}/${locale}/blog/${articleSlug}`,
        }
      : null;
  const breadcrumbSchema =
    selectedArticle && articleSlug
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: locale === "pl" ? "Start" : "Home",
              item: `${baseUrl}/${locale}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: localeContent[locale].nav.blog,
              item: `${baseUrl}/${locale}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: selectedArticle.title,
              item: `${baseUrl}/${locale}/blog/${articleSlug}`,
            },
          ],
        }
      : null;

  return (
    <div className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LanguageSwitch locale={locale} slugPath={slugParts.join("/")} />
      {slug === "" && <LocalizedHome locale={locale} />}

      {slug === "system-klubowy" && (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.system}</h1>
          <p className="text-base leading-8 text-slate-700">
            {locale === "pl"
              ? "W Holandii i Belgii struktura jest bardziej przewidywalna, a wcześniejszy start daje przewagę. W Polsce ścieżka jest często bardziej lokalna."
              : "This section compares academy structures and recruitment rhythm across NL/BE/PL."}
          </p>
          <SocialShare path={`/${locale}/system-klubowy`} title="Club system comparison" />
        </section>
      )}

      {slug === "jak-pisac-do-klubow" && (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.outreach}</h1>
          <p className="text-base leading-8 text-slate-700">
            {locale === "pl"
              ? "Kluczowa zasada: w obrębie jednego klubu kontaktuj się z jedną osobą i jednym kanałem."
              : "Critical rule: within one club, contact one person through one channel only."}
          </p>
          <SocialShare path={`/${locale}/jak-pisac-do-klubow`} title="How to contact clubs" />
        </section>
      )}

      {slug === "przygotowanie-i-testy" && (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.prep}</h1>
          <p className="text-base leading-8 text-slate-700">
            {locale === "pl"
              ? "Generator checklisty i testy fizyczne pod wiek, pozycję i kraj."
              : "Checklist generator and physical test prep by age, position and country."}
          </p>
          <Link
            href="/przygotowanie-i-testy"
            className="inline-block rounded-full bg-[#f7931e] px-5 py-2.5 text-sm font-semibold text-slate-900"
          >
            Open advanced generator
          </Link>
        </section>
      )}

      {slug === "faq" && (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.faq}</h1>
          <Accordion items={faqItems} />
        </section>
      )}

      {slug === "kontakt" && (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.contact}</h1>
          <p className="text-base leading-8 text-slate-700">
            {locale === "pl"
              ? "Formularz kontaktowy i newsletter są dostępne w wersji głównej."
              : "Contact form and newsletter are available in the main Polish version."}
          </p>
          <Link href="/kontakt" className="text-sm font-semibold text-[#1a2a6c] hover:underline">
            {locale === "pl" ? "Przejdź do formularza" : "Go to contact form"}
          </Link>
        </section>
      )}

      {slug === "blog" && !articleSlug && (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.blog}</h1>
          <p className="text-base leading-8 text-slate-700">
            {locale === "pl"
              ? "Szablony artykułów pod frazy long-tail. Każdy wpis linkuje do stron: system, kontakt, testy i FAQ."
              : "Long-tail article templates. Each article should internally link to system, outreach, preparation and FAQ pages."}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {localizedBlogArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  <Link href={`/${locale}/blog/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
                <p className="mt-3 text-xs text-slate-500">
                  {baseUrl}/{locale}/blog/{article.slug}
                </p>
              </article>
            ))}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
            {locale === "pl"
              ? "Linkowanie wewnętrzne: każdy artykuł powinien mieć min. 4 linki do /system-klubowy, /jak-pisac-do-klubow, /przygotowanie-i-testy oraz /faq."
              : "Internal linking rule: each article should include at least 4 links to /system-klubowy, /jak-pisac-do-klubow, /przygotowanie-i-testy and /faq."}
          </div>
        </section>
      )}

      {slug === "blog" && articleSlug && selectedArticle && (
        <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-10">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <Link href={`/${locale}`} className="hover:underline">
              {locale === "pl" ? "Start" : "Home"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:underline">
              {localeContent[locale].nav.blog}
            </Link>
            <span>/</span>
            <span className="text-slate-700">{selectedArticle.title}</span>
          </nav>
          <header className="space-y-3">
            <p className="text-sm font-medium text-slate-500">
              {localeContent[locale].nav.blog} · {selectedArticle.readingMinutes} min ·{" "}
              {locale === "pl" ? "Aktualizacja" : "Updated"}:{" "}
              {formatArticleDate(selectedArticle.lastModified, locale)}
            </p>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-4xl">
              {selectedArticle.title}
            </h1>
            <p className="text-base leading-8 text-slate-700">{selectedArticle.description}</p>
          </header>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              {locale === "pl" ? "Spis treści" : "Table of contents"}
            </h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
              {selectedArticle.sections.map((section) => (
                <a
                  key={section.heading}
                  href={`#${toAnchorId(section.heading)}`}
                  className="hover:text-[#1a2a6c] hover:underline"
                >
                  {section.heading}
                </a>
              ))}
            </div>
          </section>

          {selectedArticle.sections.map((section) => (
            <section
              key={section.heading}
              id={toAnchorId(section.heading)}
              className="scroll-mt-28 space-y-3"
            >
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Linkowanie wewnętrzne
            </h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <Link href={`/${locale}/system-klubowy`} className="text-[#1a2a6c] hover:underline">
                {localeContent[locale].nav.system}
              </Link>
              <Link
                href={`/${locale}/jak-pisac-do-klubow`}
                className="text-[#1a2a6c] hover:underline"
              >
                {localeContent[locale].nav.outreach}
              </Link>
              <Link
                href={`/${locale}/przygotowanie-i-testy`}
                className="text-[#1a2a6c] hover:underline"
              >
                {localeContent[locale].nav.prep}
              </Link>
              <Link href={`/${locale}/faq`} className="text-[#1a2a6c] hover:underline">
                {localeContent[locale].nav.faq}
              </Link>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Powiązane frazy
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedArticle.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">
              {locale === "pl" ? "Czytaj też" : "Read also"}
            </h3>
            <div className="space-y-2">
              {localizedBlogArticles
                .filter((article) => article.slug !== selectedArticle.slug)
                .map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${locale}/blog/${article.slug}`}
                    className="block rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    <p className="font-semibold text-slate-900">{article.title}</p>
                    <p className="mt-1 text-xs leading-6 text-slate-600">{article.description}</p>
                  </Link>
                ))}
            </div>
          </section>
        </article>
      )}

      {slug === "blog" && articleSlug && !selectedArticle && notFound()}
      {!sharedSlugs.includes(slug as (typeof sharedSlugs)[number]) && !articleSlug && notFound()}
    </div>
  );
}
