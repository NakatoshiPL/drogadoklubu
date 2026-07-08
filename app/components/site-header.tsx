import Link from "next/link";
import { localeLabels, supportedLocales } from "@/lib/i18n-site";

const navLinks = [
  { href: "/pl", label: "PL" },
  { href: "/nl", label: "NL" },
  { href: "/pl/system-klubowy", label: "System" },
  { href: "/pl/jak-pisac-do-klubow", label: "Kontakt" },
  { href: "/pl/przygotowanie-i-testy", label: "Testy" },
  { href: "/pl/faq", label: "FAQ" },
  { href: "/pl/blog", label: "Blog" },
  { href: "/pl/kontakt", label: "Formularz" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base"
          >
            Pilkarska Sciezka Rodzica
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-2 text-xs">
            {supportedLocales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                className="rounded-full border border-slate-300 px-2.5 py-1 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                {localeLabels[locale]}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/pl"
          className="hidden"
        >
          Start
        </Link>
        <nav aria-label="Główna nawigacja">
          <ul className="flex flex-wrap justify-start gap-3 text-xs font-medium text-slate-700 sm:gap-4 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-2 py-1 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
