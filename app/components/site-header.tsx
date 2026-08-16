import Link from "next/link";
import { CountryStrip } from "./country-strip";

const primaryLinks = [
  { href: "/system-klubowy", label: "System" },
  { href: "/jak-pisac-do-klubow", label: "Kontakt z klubami" },
  { href: "/przygotowanie-i-testy", label: "Testy" },
  { href: "/pl/blog", label: "Blog" },
];

const secondaryLinks = [
  { href: "/interpretacja-raportu", label: "Raport" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Formularz" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-md">
      <CountryStrip size="sm" />
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-3 md:px-6 md:py-4">
        <Link href="/pl" className="shrink-0">
          <span className="block text-sm font-semibold tracking-tight text-[var(--brand)] sm:text-base">
            Pilkarska Sciezka Rodzica
          </span>
          <span className="mt-0.5 block text-[11px] font-medium text-[var(--muted)]">
            Przewodnik rodzica · NL / BE / PL
          </span>
        </Link>

        <nav
          aria-label="Główna nawigacja"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ))}
          <span className="mx-1 h-4 w-px bg-[var(--border)]" aria-hidden />
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-[var(--brand)]"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/przygotowanie-i-testy" className="btn-primary ml-2">
            Checklista
          </Link>
        </nav>
      </div>

      <nav
        aria-label="Nawigacja mobilna"
        className="border-t border-[var(--border)] lg:hidden"
      >
        <ul className="mx-auto flex w-full max-w-6xl gap-1 overflow-x-auto px-3 py-2 text-xs font-medium text-slate-700 md:px-6">
          {[...primaryLinks, ...secondaryLinks].map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="block rounded-md px-2.5 py-2 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-auto shrink-0">
            <Link href="/przygotowanie-i-testy" className="btn-primary !px-3 !py-2 text-xs">
              Checklista
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
