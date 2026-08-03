import Link from "next/link";
import { CountryStrip } from "./country-strip";

const navLinks = [
  { href: "/pl", label: "Start" },
  { href: "/system-klubowy", label: "System" },
  { href: "/jak-pisac-do-klubow", label: "Kontakt" },
  { href: "/przygotowanie-i-testy", label: "Testy" },
  { href: "/interpretacja-raportu", label: "Raport" },
  { href: "/faq", label: "FAQ" },
  { href: "/pl/blog", label: "Blog" },
  { href: "/kontakt", label: "Formularz" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <CountryStrip size="sm" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-3 py-3 md:gap-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/pl" className="group flex flex-col gap-1">
            <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
              Pilkarska Sciezka Rodzica
            </span>
            <span className="text-[11px] font-medium text-slate-500 group-hover:text-[#FF6600]">
              NL · BE · PL
            </span>
          </Link>
        </div>

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
                href="/przygotowanie-i-testy"
                className="block rounded-full bg-gradient-to-r from-[#f7931e] to-[#ff6600] px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:brightness-110 sm:text-sm"
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
