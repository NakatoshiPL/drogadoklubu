type WebPageSchemaInput = {
  baseUrl: string;
  path: string;
  name: string;
  description: string;
  inLanguage: string;
  lastModified?: string;
};

export function buildWebPageSchema({
  baseUrl,
  path,
  name,
  description,
  inLanguage,
  lastModified,
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${baseUrl}${path}`,
    inLanguage,
    ...(lastModified ? { dateModified: lastModified } : {}),
    isPartOf: {
      "@type": "WebSite",
      name: "Pilkarska Sciezka Rodzica",
      url: baseUrl,
    },
  };
}

export const siteLastModified = "2026-07-08";
