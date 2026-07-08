import type { MetadataRoute } from "next";
import { getArticlesForLocale } from "@/lib/blog-content";
import { siteLastModified } from "@/lib/seo-schema";
import { sharedSlugs, supportedLocales } from "@/lib/i18n-site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jakdotrzeczdoklubu.pl";
  const siteModified = new Date(siteLastModified);

  const rootUrls: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: siteModified, changeFrequency: "weekly", priority: 1 },
  ];

  const localized: MetadataRoute.Sitemap = supportedLocales.flatMap((locale) =>
    sharedSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}${slug ? `/${slug}` : ""}`,
      lastModified: siteModified,
      changeFrequency: "weekly" as const,
      priority: slug ? 0.8 : 0.9,
    })),
  );

  const blogArticles: MetadataRoute.Sitemap = supportedLocales.flatMap((locale) =>
    getArticlesForLocale(locale).map((article) => ({
      url: `${baseUrl}/${locale}/blog/${article.slug}`,
      lastModified: new Date(article.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...rootUrls, ...localized, ...blogArticles];
}
