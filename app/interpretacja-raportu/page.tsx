import type { Metadata } from "next";
import Link from "next/link";
import { SocialShare } from "../components/social-share";
import {
  howItWorks,
  mentalTips,
  positions,
  reportIntro,
  warmupTips,
} from "@/lib/report-interpretation";

export const metadata: Metadata = {
  title: "Interpretacja raportu indywidualnego",
  description:
    "Jak czytać raport z obserwacji meczowej: skala ocen, mental, rozgrzewka i kryteria dla każdej pozycji.",
  keywords: [
    "raport indywidualny piłkarz",
    "obserwacja zawodnika mecz",
    "na co zwracają uwagę skauci",
    "testy piłkarskie interpretacja",
  ],
};

function CriteriaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wide text-[#1a2a6c]">
        {title}
      </h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function InterpretacjaRaportuPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Obserwacja podczas meczu
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">{reportIntro.title}</h1>
        <p className="mt-1 text-lg font-medium text-[#1a2a6c]">{reportIntro.subtitle}</p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
          {reportIntro.lead}
        </p>
        <p className="mt-4 text-sm text-slate-600">
          Materiał oparty na standardzie oceny{" "}
          <a
            href="https://www.testypilkarskie.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1a2a6c] hover:underline"
          >
            testypilkarskie.pl
          </a>
          . Przydatny przed kontaktem z klubem, gdy masz już wyniki testów i chcesz wiedzieć,
          co oznaczają poszczególne rubryki.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {howItWorks.map((block) => (
          <article
            key={block.heading}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{block.heading}</h2>
            <p className="mt-3 text-base leading-8 text-slate-700">{block.text}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Nastawienie mentalne</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
            {mentalTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Rozgrzewka przedmeczowa</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
            {warmupTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Kryteria według pozycji
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-8 text-slate-700">
            Każda pozycja ma własny zestaw rubryk w czterech obszarach: technika, taktyka
            i mentalność, fizyczność oraz umiejętności piłkarskie. Rozwiń swoją pozycję,
            żeby zobaczyć szczegóły.
          </p>
        </div>

        <div className="space-y-3">
          {positions.map((position) => (
            <details
              key={position.name}
              className="group rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <summary className="cursor-pointer list-none px-5 py-4 text-base font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {position.name}
                  <span className="text-slate-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <div className="grid gap-5 border-t border-slate-100 px-5 py-5 sm:grid-cols-2">
                <CriteriaList title="Technika" items={position.technique} />
                <CriteriaList title="Taktyka i mentalność" items={position.tactics} />
                <CriteriaList title="Fizyczność" items={position.physical} />
                <CriteriaList title="Umiejętności piłkarskie" items={position.skills} />
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[#1a2a6c]/20 bg-[#1a2a6c]/5 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Co dalej?</h2>
        <p className="mt-3 text-base leading-8 text-slate-700">
          Raport to punkt wyjścia, a nie werdykt końcowy. Połącz go z przygotowaniem
          materiałów do klubu i spokojnym, uporządkowanym kontaktem.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
          <Link
            href="/przygotowanie-i-testy"
            className="rounded-full bg-[#f7931e] px-4 py-2 text-slate-900 transition hover:brightness-110"
          >
            Przygotowanie i testy
          </Link>
          <Link
            href="/jak-pisac-do-klubow"
            className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-white"
          >
            Zasady kontaktu z klubem
          </Link>
        </div>
      </section>

      <SocialShare
        path="/interpretacja-raportu"
        title="Interpretacja raportu indywidualnego: na co patrzą skauci"
      />
    </div>
  );
}
