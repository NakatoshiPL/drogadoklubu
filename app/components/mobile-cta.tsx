"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackMobileCtaClick } from "@/lib/analytics";

function resolveCta(pathname: string | null) {
  if (!pathname) {
    return {
      primaryHref: "/pl/przygotowanie-i-testy",
      primaryLabel: "Checklista",
      secondaryHref: "/pl/kontakt",
      secondaryLabel: "Kontakt",
    };
  }

  const isBlog = pathname.includes("/blog");
  const isPrep = pathname.includes("/przygotowanie-i-testy");
  const isContact = pathname.includes("/kontakt");
  const localePrefix = pathname.match(/^\/(pl|nl|en|de|be)(\/|$)/)?.[1] ?? "pl";
  const localBase = `/${localePrefix}`;

  if (isPrep) {
    return {
      primaryHref: `${localBase}/kontakt`,
      primaryLabel: "Wyślij pytanie",
      secondaryHref: `${localBase}/faq`,
      secondaryLabel: "FAQ",
    };
  }

  if (isContact) {
    return {
      primaryHref: `${localBase}/przygotowanie-i-testy`,
      primaryLabel: "Checklista PDF",
      secondaryHref: `${localBase}/jak-pisac-do-klubow`,
      secondaryLabel: "Zasady kontaktu",
    };
  }

  if (isBlog) {
    return {
      primaryHref: `${localBase}/przygotowanie-i-testy`,
      primaryLabel: "Uruchom checklistę",
      secondaryHref: `${localBase}/kontakt`,
      secondaryLabel: "Konsultacja",
    };
  }

  return {
    primaryHref: `${localBase}/przygotowanie-i-testy`,
    primaryLabel: "Checklista",
    secondaryHref: `${localBase}/kontakt`,
    secondaryLabel: "Kontakt",
  };
}

export function MobileBottomCta() {
  const pathname = usePathname();
  const cta = resolveCta(pathname);

  const handleClick = (
    position: "primary" | "secondary",
    label: string,
    href: string,
  ) => {
    trackMobileCtaClick({
      position,
      label,
      href,
      pagePath: pathname ?? "/",
    });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
      <div className="mx-auto flex w-full max-w-6xl gap-2">
        <Link
          href={cta.primaryHref}
          onClick={() => handleClick("primary", cta.primaryLabel, cta.primaryHref)}
          className="flex-1 rounded-full bg-[#f7931e] px-4 py-3 text-center text-sm font-semibold text-slate-900"
        >
          {cta.primaryLabel}
        </Link>
        <Link
          href={cta.secondaryHref}
          onClick={() =>
            handleClick("secondary", cta.secondaryLabel, cta.secondaryHref)
          }
          className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800"
        >
          {cta.secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
