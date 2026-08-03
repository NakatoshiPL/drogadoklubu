import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/app/components/accordion";
import { BlogCard } from "@/app/components/blog-card";
import { SocialShare } from "@/app/components/social-share";
import { getArticleBySlug, getArticlesForLocale, formatArticleDate } from "@/lib/blog-content";
import { getArticleTheme } from "@/lib/article-themes";
import { buildWebPageSchema, siteLastModified } from "@/lib/seo-schema";
import { buildHreflangAlternates, isLocaleIndexed } from "@/lib/seo-locale";
import { getSiteUrl } from "@/lib/site-url";
import {
  isSupportedLocale,
  localeContent,
  localeLabels,
  multilingualSeoEnabled,
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
  const baseUrl = getSiteUrl();
  const languages = buildHreflangAlternates(baseUrl, slugParts);

  return {
    title: article?.title ?? localizedMeta[locale].title,
    description: article?.description ?? localizedMeta[locale].description,
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages,
    },
    ...(!isLocaleIndexed(locale)
      ? { robots: { index: false, follow: false } }
      : {}),
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
  if (!multilingualSeoEnabled) return null;

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
    <section className="page-shell space-y-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6600]">
          Poradnik rodzica · NL / BE / PL
        </p>
        <h1 className="text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {c.home.title}{" "}
          <span className="bg-gradient-to-r from-[#21468B] via-[#AE1C28] to-[#FF6600] bg-clip-text text-transparent">
            {c.home.subtitle}
          </span>
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
          {c.home.intro}
        </p>
        <div className="grid gap-2 sm:flex sm:flex-wrap sm:gap-3">
          <Link
            href={`/${locale}/przygotowanie-i-testy`}
            className="rounded-full bg-gradient-to-r from-[#f7931e] to-[#ff6600] px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-110"
          >
            {locale === "pl" ? "Uruchom checklistę" : "Start checklist"}
          </Link>
          <Link
            href={`/${locale}/jak-pisac-do-klubow`}
            className="rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {locale === "pl" ? "Zobacz zasady kontaktu" : "See outreach rules"}
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link
          href={`/${locale}/system-klubowy`}
          className="country-card-nl rounded-2xl border p-4 transition hover:shadow-md"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[#FF6600]">NL</p>
          <p className="mt-2 font-semibold text-slate-900">{c.nav.system}</p>
        </Link>
        <Link
          href={`/${locale}/jak-pisac-do-klubow`}
          className="country-card-be rounded-2xl border p-4 transition hover:shadow-md"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[#EF3340]">BE</p>
          <p className="mt-2 font-semibold text-slate-900">{c.nav.outreach}</p>
        </Link>
        <Link
          href={`/${locale}/przygotowanie-i-testy`}
          className="country-card-pl rounded-2xl border p-4 transition hover:shadow-md"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[#DC143C]">PL</p>
          <p className="mt-2 font-semibold text-slate-900">{c.nav.prep}</p>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#1a2a6c]/5 to-[#FF6600]/10 p-4">
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
  const baseUrl = getSiteUrl();
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
        <section className="page-shell space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6600]">
              Blog · NL / BE / PL
            </p>
            <h1 className="text-3xl font-bold text-slate-900">{localeContent[locale].nav.blog}</h1>
            <p className="max-w-3xl text-base leading-8 text-slate-700">
              {locale === "pl"
                ? "Praktyczne artykuły dla rodzica. Każdy wpis linkuje do stron: system, kontakt, testy i FAQ."
                : "Long-tail article templates. Each article should internally link to system, outreach, preparation and FAQ pages."}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {localizedBlogArticles.map((article) => (
              <BlogCard
                key={article.slug}
                article={article}
                href={`/${locale}/blog/${article.slug}`}
              />
            ))}
          </div>
        </section>
      )}

      {slug === "blog" && articleSlug && selectedArticle && (() => {
        const theme = getArticleTheme(selectedArticle.theme);
        return (
        <article className={`page-shell relative overflow-hidden space-y-6 border-l-4 ${theme.border}`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-90 ${theme.gradient}`}
            aria-hidden
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
          <header className="space-y-4">
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${theme.badge}`}
            >
              {theme.label}
            </span>
            <p className="text-sm font-medium text-slate-500">
              {selectedArticle.readingMinutes} min ·{" "}
              {locale === "pl" ? "Aktualizacja" : "Updated"}:{" "}
              {formatArticleDate(selectedArticle.lastModified, locale)}
            </p>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-4xl">
              {selectedArticle.title}
            </h1>
            <p className="text-base leading-8 text-slate-700">{selectedArticle.description}</p>
          </header>

          <section className="rounded-xl border border-slate-200 p-4" style={{ backgroundColor: theme.accentSoft }}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              {locale === "pl" ? "Spis treści" : "Table of contents"}
            </h2>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
              {selectedArticle.sections.map((section) => (
                <a
                  key={section.heading}
                  href={`#${toAnchorId(section.heading)}`}
                  className={`hover:underline ${theme.toc}`}
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
              <Link href={`/${locale}/system-klubowy`} className="hover:underline" style={{ color: theme.accent }}>
                {localeContent[locale].nav.system}
              </Link>
              <Link
                href={`/${locale}/jak-pisac-do-klubow`}
                className="hover:underline"
                style={{ color: theme.accent }}
              >
                {localeContent[locale].nav.outreach}
              </Link>
              <Link
                href={`/${locale}/przygotowanie-i-testy`}
                className="hover:underline"
                style={{ color: theme.accent }}
              >
                {localeContent[locale].nav.prep}
              </Link>
              <Link href={`/${locale}/faq`} className="hover:underline" style={{ color: theme.accent }}>
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
                  className={`rounded-full px-3 py-1 text-xs ring-1 ring-inset ${theme.chip}`}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              {locale === "pl" ? "Czytaj też" : "Read also"}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {localizedBlogArticles
                .filter((article) => article.slug !== selectedArticle.slug)
                .slice(0, 4)
                .map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    href={`/${locale}/blog/${article.slug}`}
                  />
                ))}
            </div>
          </section>
        </article>
        );
      })()}

      {slug === "blog" && articleSlug && !selectedArticle && notFound()}
      {!sharedSlugs.includes(slug as (typeof sharedSlugs)[number]) && !articleSlug && notFound()}
    </div>
  );
}
