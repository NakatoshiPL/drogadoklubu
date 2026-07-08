import type { Metadata } from "next";
import { SocialShare } from "../components/social-share";

export const metadata: Metadata = {
  title: "System klubowy",
  description:
    "Porównanie systemów akademii i naborów w Holandii, Belgii i Polsce.",
  keywords: [
    "akademia piłkarska Holandia nabór",
    "Centralna Liga Juniorów nabór",
    "jeugdopleiding Nederland",
  ],
};

export default function SystemKlubowyPage() {
  return (
    <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <h1 className="text-3xl font-bold text-slate-900">
        Zanim napiszesz pierwszy e-mail: zrozum jak działa system
      </h1>
      <p className="text-base leading-8 text-slate-700">
        Holandia, Belgia i Polska mają różne struktury akademii młodzieżowych,
        różne kalendarze naborów i różne oczekiwania wobec zawodników w
        poszczególnych grupach wiekowych.
      </p>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Holandia</h2>
        <p className="text-base leading-8 text-slate-700">
          Kluby Eredivisie i Eerste Divisie prowadzą własne akademie młodzieżowe
          (jeugdopleiding) z jasno określonymi kategoriami wiekowymi. Nabory
          zewnętrzne odbywają się głównie poza sezonem letnim — większość klubów
          wraca do regularnej aktywności rekrutacyjnej po przerwie wakacyjnej,
          zwykle od połowy sierpnia.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Belgia</h2>
        <p className="text-base leading-8 text-slate-700">
          Podobna struktura w Jupiler Pro League — akademie działają przy klubach
          pierwszej ligi, z podobnym rytmem przerw letnich. Kluby belgijskie
          często są bardziej otwarte na zawodników spoza kraju niż mogłoby się
          wydawać, ale wymagają cierpliwości w komunikacji.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Polska</h2>
        <p className="text-base leading-8 text-slate-700">
          Struktura Ekstraklasy młodzieżowej i CLJ (Centralna Liga Juniorów)
          różni się organizacją, a lokalne kluby często mają bardziej
          bezpośredni, mniej sformalizowany kontakt niż zachodnie akademie.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-800">
            <tr>
              <th className="px-4 py-3 font-semibold">Wiek</th>
              <th className="px-4 py-3 font-semibold">Holandia (KNVB)</th>
              <th className="px-4 py-3 font-semibold">Belgia (Pro League)</th>
              <th className="px-4 py-3 font-semibold">Polska (CLJ)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
            {[
              ["6-7", "O7", "U7", "Skrzat"],
              ["8-9", "O9", "U9", "Żak"],
              ["10-11", "O11", "U11", "Orlik"],
              ["12-13", "O13", "U13", "Młodzik"],
              ["14-15", "O15", "U15", "Trampkarz"],
              ["16-17", "O17", "U17", "CLJ U-17"],
              ["18-19", "O19", "U19", "CLJ U-19"],
              ["20+", "O21", "U21", "Senior"],
            ].map((row) => (
              <tr key={row[0]}>
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-base leading-8 text-slate-700">
        Holenderska jeugdopleiding dzieli się na: onderbouw (do 12 lat),
        middenbouw (13-16 lat) i bovenbouw (17-19 lat).
      </p>
      <p className="text-base leading-8 text-slate-700">
        Kluczowa różnica — w Holandii i Belgii struktura jest bardziej
        scentralizowana i przewidywalna, w Polsce bardziej zależy od lokalnego
        klubu.
      </p>
      <p className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-base leading-8 text-sky-900">
        Praktyczna zasada: jeśli widzisz realny potencjał u dziecka, w
        Holandii i Belgii warto zaczynać działania wcześniej i budować kontakt
        już od młodszych roczników. W Polsce ścieżka bywa mniej formalna i
        częściej oparta o lokalne relacje klubowe.
      </p>
      <SocialShare
        path="/system-klubowy"
        title="Porównanie systemów akademii piłkarskich NL/BE/PL"
      />
    </section>
  );
}

