import type { MetadataRoute } from "next";
import { getArticlesForLocale } from "@/lib/blog-content";
import { sharedSlugs, defaultLocale } from "@/lib/i18n-site";
import { siteLastModified } from "@/lib/seo-schema";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const siteModified = new Date(siteLastModified);

  const localized: MetadataRoute.Sitemap = sharedSlugs.map((slug) => ({
    url: `${baseUrl}/${defaultLocale}${slug ? `/${slug}` : ""}`,
    lastModified: siteModified,
    changeFrequency: "weekly" as const,
    priority: slug ? 0.8 : 0.9,
  }));

  const legacyPolish: MetadataRoute.Sitemap = [
    "system-klubowy",
    "jak-pisac-do-klubow",
    "przygotowanie-i-testy",
    "interpretacja-raportu",
    "faq",
    "kontakt",
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: siteModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogArticles: MetadataRoute.Sitemap = getArticlesForLocale(defaultLocale).map(
    (article) => ({
      url: `${baseUrl}/${defaultLocale}/blog/${article.slug}`,
      lastModified: new Date(article.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  return [...localized, ...legacyPolish, ...blogArticles];
}
