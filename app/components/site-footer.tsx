import Link from "next/link";
import { CountryStrip } from "./country-strip";

const footerLinks = [
  { href: "/system-klubowy", label: "System" },
  { href: "/jak-pisac-do-klubow", label: "Kontakt z klubami" },
  { href: "/przygotowanie-i-testy", label: "Testy" },
  { href: "/pl/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-white">
      <CountryStrip size="sm" />
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[var(--brand)]">
            Pilkarska Sciezka Rodzica
          </p>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            Praktyczny poradnik rodzica. Bez pośredników, bez obietnic bez
            pokrycia — z naciskiem na proces, timing i dane.
          </p>
        </div>
        <nav aria-label="Stopka" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-slate-700 hover:text-[var(--accent)] hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
