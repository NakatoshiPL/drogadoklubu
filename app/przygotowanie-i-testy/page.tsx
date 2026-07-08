import type { Metadata } from "next";
import { SocialShare } from "../components/social-share";

export const metadata: Metadata = {
  title: "Przygotowanie i testy",
  description:
    "Checklista przygotowania do testów oraz generator checklisty przed kontaktem z klubem.",
  keywords: ["testy piłkarskie Belgia 2026", "checklista kontaktu z klubem"],
};

type PageProps = {
  searchParams?: {
    checklist?: string;
  };
};

export default function PrzygotowanieITestyPage({ searchParams }: PageProps) {
  const isChecklistSent = searchParams?.checklist === "sent";

  return (
    <section className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <h1 className="text-3xl font-bold text-slate-900">
        Zanim wyślesz pierwszy kontakt: co przygotować
      </h1>
      <h2 className="text-xl font-semibold text-slate-900">
        Obiektywne dane ważą więcej niż opinia rodzica
      </h2>
      <p className="text-base leading-8 text-slate-700">
        Testy fizyczne (szybkość, zwinność, wytrzymałość) dają klubowi coś,
        czego nie da żadna wiadomość — konkretne, porównywalne liczby.
        Niezależne testy piłkarskie (np. testypilkarske.pl) to jeden ze
        sposobów na zdobycie takich danych przed pierwszym kontaktem z klubem.
      </p>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Co warto mieć przygotowane:
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
          <li>Aktualne dane fizyczne i wyniki testów</li>
          <li>Jedno dobre zdjęcie (nie ze smartfona w słabym świetle)</li>
          <li>
            Krótkie, dobrze zmontowane wideo (2-3 minuty, najlepsze fragmenty)
          </li>
          <li>Historię dotychczasowych klubów i osiągnięć</li>
        </ul>
      </div>

      <p className="text-base leading-8 text-slate-700">
        [TU WSTAWIĘ: rozszerzony opis procesu testów]
      </p>

      <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          Generator checklisty przed kontaktem z klubem (MVP)
        </h2>
        <p className="text-sm leading-7 text-slate-700">
          Wybierz kraj, wiek i pozycję dziecka. Po wysłaniu formularza system
          generuje spersonalizowaną checklistę PDF i przekazuje ją do automatyzacji
          Make, która może wysłać ją na email.
        </p>
        {isChecklistSent && (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
            Checklista została wygenerowana i przekazana do wysyłki.
          </p>
        )}
        <form
          className="grid gap-4 md:grid-cols-2"
          action="/api/checklist"
          method="post"
        >
          <div>
            <label
              htmlFor="target-country"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Kraj docelowy
            </label>
            <select
              id="target-country"
              name="target-country"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            >
              <option>Holandia</option>
              <option>Belgia</option>
              <option>Polska</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="child-age"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Wiek dziecka (6-19)
            </label>
            <input
              id="child-age"
              name="child-age"
              type="range"
              min={6}
              max={19}
              defaultValue={12}
              className="w-full"
            />
            <p className="mt-1 text-xs text-slate-600">
              Zakres wieku: 6-19 lat.
            </p>
          </div>
          <div>
            <label
              htmlFor="position"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Pozycja na boisku
            </label>
            <select
              id="position"
              name="position"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
            >
              <option>Bramkarz</option>
              <option>Obrońca</option>
              <option>Pomocnik</option>
              <option>Napastnik</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="checklist-email"
              className="mb-2 block text-sm font-medium text-slate-800"
            >
              Email do wysyłki PDF
            </label>
            <input
              id="checklist-email"
              name="checklist-email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900"
              placeholder="twoj@email.com"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Wyślij checklistę na email
            </button>
          </div>
        </form>
      </div>
      <SocialShare
        path="/przygotowanie-i-testy"
        title="Checklista przygotowania do testów piłkarskich"
      />
    </section>
  );
}

