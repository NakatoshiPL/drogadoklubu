import Link from "next/link";
import { CountryStrip } from "./country-strip";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <CountryStrip size="sm" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          Praktyczny poradnik rodzica. Bez pośredników, bez obietnic bez
          pokrycia, z naciskiem na proces i dane.
        </p>
        <Link href="/kontakt" className="font-medium text-[#1a2a6c] hover:underline">
          Kontakt
        </Link>
      </div>
    </footer>
  );
}
