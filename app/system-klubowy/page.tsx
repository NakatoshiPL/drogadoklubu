import type { Metadata } from "next";
import Link from "next/link";
import { CountryStrip } from "../components/country-strip";
import { SocialShare } from "../components/social-share";

export const metadata: Metadata = {
  title: "System klubowy",
  description:
    "Porównanie systemów akademii i naborów w Holandii, Belgii i Polsce.",
  keywords: [
    "akademia piłkarska Holandia nabór",
    "Centralna Liga Juniorów nabór",
    "jeugdopleiding Nederland",
    "akademia piłkarska Belgia Pro League",
  ],
};

const ageRows = [
  ["6-7", "O7", "U7", "Skrzat"],
  ["8-9", "O9", "U9", "Żak"],
  ["10-11", "O11", "U11", "Orlik"],
  ["12-13", "O13", "U13", "Młodzik"],
  ["14-15", "O15", "U15", "Trampkarz"],
  ["16-17", "O17", "U17", "CLJ U-17"],
  ["18-19", "O19", "U19", "CLJ U-19"],
  ["20+", "O21", "U21", "Senior"],
] as const;

export default function SystemKlubowyPage() {
  return (
    <section className="page-shell space-y-8">
      <div className="space-y-3">
        <CountryStrip size="md" className="max-w-xs" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF6600]">
          NL · BE · PL
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Zanim napiszesz pierwszy e-mail: zrozum jak działa system
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-700">
          Holandia, Belgia i Polska mają różne struktury akademii młodzieżowych,
          różne kalendarze naborów i różne oczekiwania wobec zawodników w
          poszczególnych grupach wiekowych.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <article className="country-card-nl rounded-2xl border p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-[#FF6600]">
            Holandia · KNVB
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">Jeugdopleiding</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Kluby Eredivisie i Eerste Divisie prowadzą własne akademie z jasno
            określonymi kategoriami wiekowymi. Nabory zewnętrzne głównie poza
            sezonem letnim, zwykle od połowy sierpnia.
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-600">
            Podział: onderbouw (do 12), middenbouw (13-16), bovenbouw (17-19).
          </p>
          <Link
            href="/pl/blog/scouting-knvb-gdzie-grac"
            className="mt-4 inline-block text-sm font-semibold text-[#FF6600] hover:underline"
          >
            Scouting KNVB: gdzie grać →
          </Link>
        </article>

        <article className="country-card-be rounded-2xl border p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-[#EF3340]">
            Belgia · Pro League
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">Akademie U</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Akademie przy klubach Jupiler Pro League z podobnym rytmem przerw
            letnich. Kluby często otwarte na zawodników spoza kraju, ale wymagają
            cierpliwości w komunikacji (NL/FR/EN).
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-600">
            Flandria i Walonia mają odrębne struktury regionalne pod spodem ligi.
          </p>
          <Link
            href="/pl/blog/akademia-belgia-jak-wejsc-do-pro-league"
            className="mt-4 inline-block text-sm font-semibold text-[#EF3340] hover:underline"
          >
            Akademia w Belgii: jak wejść →
          </Link>
        </article>

        <article className="country-card-pl rounded-2xl border p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-[#DC143C]">
            Polska · CLJ
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">Ekstraklasa młodzieżowa</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            Struktura CLJ i lokalnych akademii różni się organizacją. Kontakt
            bywa bardziej bezpośredni i mniej sformalizowany niż w NL/BE.
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-600">
            CLJ to punkt odniesienia poziomu, ale ścieżka wejścia zależy od klubu.
          </p>
          <Link
            href="/pl/blog/clj-vs-jeugdopleiding"
            className="mt-4 inline-block text-sm font-semibold text-[#DC143C] hover:underline"
          >
            CLJ vs jeugdopleiding →
          </Link>
        </article>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr>
              <th className="bg-slate-100 px-4 py-3 font-semibold text-slate-800">
                Wiek
              </th>
              <th className="bg-[#21468B] px-4 py-3 font-semibold text-white">
                Holandia (KNVB)
              </th>
              <th className="bg-[#EF3340] px-4 py-3 font-semibold text-white">
                Belgia (Pro League)
              </th>
              <th className="bg-[#DC143C] px-4 py-3 font-semibold text-white">
                Polska (CLJ)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
            {ageRows.map((row) => (
              <tr key={row[0]} className="hover:bg-slate-50/80">
                <td className="px-4 py-3 font-medium text-slate-900">{row[0]}</td>
                <td className="px-4 py-3">{row[1]}</td>
                <td className="px-4 py-3">{row[2]}</td>
                <td className="px-4 py-3">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-[#21468B]/5 via-[#EF3340]/5 to-[#DC143C]/5 p-5">
        <h2 className="text-lg font-semibold text-slate-900">Praktyczna zasada</h2>
        <p className="mt-2 text-base leading-8 text-slate-700">
          W Holandii i Belgii struktura jest bardziej scentralizowana i
          przewidywalna. W Polsce bardziej zależy od lokalnego klubu. Jeśli
          widzisz realny potencjał, w NL i BE warto zaczynać wcześniej i budować
          kontakt od młodszych roczników.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/jak-pisac-do-klubow"
          className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          Jak pisać do klubów →
        </Link>
        <Link
          href="/przygotowanie-i-testy"
          className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          Przygotowanie i testy →
        </Link>
      </div>

      <SocialShare
        path="/system-klubowy"
        title="Porównanie systemów akademii piłkarskich NL/BE/PL"
      />
    </section>
  );
}
