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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 py-3 md:gap-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base"
          >
            Pilkarska Sciezka Rodzica
          </Link>
          <div className="hidden flex-wrap items-center justify-end gap-2 text-xs sm:flex">
            {supportedLocales.map((locale) => (
              <Link
                key={locale}
                href={`/${locale}`}
                className="rounded-full border border-slate-300 px-2.5 py-1.5 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
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
          <ul className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-1 text-xs font-medium text-slate-700 sm:flex-wrap sm:gap-4 sm:overflow-visible sm:pb-0 sm:text-sm">
            {navLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className="block rounded-md px-2.5 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-1 shrink-0 sm:ml-auto">
              <Link
                href="/pl/przygotowanie-i-testy"
                className="block rounded-full bg-[#f7931e] px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:brightness-110 sm:text-sm"
              >
                Darmowa checklista
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
