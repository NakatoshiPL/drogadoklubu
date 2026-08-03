import {
  defaultLocale,
  multilingualSeoEnabled,
  supportedLocales,
  type SiteLocale,
} from "./i18n-site";

export function getIndexedLocales(): readonly SiteLocale[] {
  return multilingualSeoEnabled ? supportedLocales : [defaultLocale];
}

export function buildHreflangAlternates(
  baseUrl: string,
  slugParts: string[],
): Record<string, string> {
  const slugSuffix = slugParts.length ? `/${slugParts.join("/")}` : "";

  if (!multilingualSeoEnabled) {
    return { pl: `${baseUrl}/pl${slugSuffix}` };
  }

  return Object.fromEntries(
    supportedLocales.map((lang) => [lang, `${baseUrl}/${lang}${slugSuffix}`]),
  );
}

export function isLocaleIndexed(locale: SiteLocale): boolean {
  return getIndexedLocales().includes(locale);
}
