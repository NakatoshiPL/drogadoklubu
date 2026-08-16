import type { Metadata } from "next";
import { SocialShare } from "../components/social-share";

export const metadata: Metadata = {
  title: "Jak pisać do klubów",
  description:
    "4 zasady skutecznego kontaktu z klubami i gotowy szkielet maila dla NL/BE/PL.",
  keywords: ["scouting jeugdvoetbal", "jak pisać do klubów piłkarskich"],
};

export default function JakPisacDoKlubowPage() {
  return (
    <section className="page-shell space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand)]">
        Jak napisać do klubu, żeby dostać odpowiedź
      </h1>
      <p className="text-base leading-8 text-[var(--muted)]">
        To najważniejsza część tego poradnika. Sposób, w jaki się odzywasz do
        klubu, decyduje o tym, czy ktoś w ogóle przeczyta Twoją wiadomość do
        końca.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">
          Zasada 1: Same fakty, zero przymiotników
        </h2>
        <p className="text-base leading-8 text-slate-700">
          Kluby dostają dziesiątki wiadomości tygodniowo, w większości pełnych
          emocjonalnego języka rodziców (&quot;mój syn jest niesamowicie
          utalentowany&quot;). Taki ton jest ignorowany. Trzymaj się faktów: wiek,
          pozycja, obecny klub, osiągnięcia mierzalne (testy, statystyki,
          obserwacje trenerów).
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">
          Zasada 2: Krótko
        </h2>
        <p className="text-base leading-8 text-slate-700">
          Jeden ekran, nie więcej. Trener czy skaut czyta to między innymi
          obowiązkami. Długi tekst ląduje w koszu.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">
          Zasada 3: Zdjęcie w treści, nie załącznik
        </h2>
        <p className="text-base leading-8 text-slate-700">
          Jedno zdjęcie wklejone bezpośrednio w treści wiadomości robi więcej
          niż link do galerii czy załącznik, który trzeba pobrać.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">
          Zasada 4: Bez linków do wideo na start
        </h2>
        <p className="text-base leading-8 text-slate-700">
          Wideo wysyłaj dopiero gdy masz gotowy, dobrze zmontowany materiał.
          Link do surowego nagrania z telefonu obniża wiarygodność całej
          wiadomości.
        </p>
      </div>
      <div className="space-y-2 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <h2 className="text-xl font-semibold text-amber-900">
          Błąd krytyczny: nie pisz do wielu osób z jednego klubu naraz
        </h2>
        <p className="text-base leading-8 text-amber-900">
          W obrębie jednego klubu wybierz jeden kontakt i jeden kanał (np.
          koordynator albo scouting mail). Nie pisz równolegle do trenera,
          scouta i kilku osób na LinkedIn, bo klub odbiera to jako presję i
          chaos. Jeśli już masz pozytywny sygnał od jednej osoby, prowadzisz
          komunikację tylko przez nią.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Przykładowy szkielet maila (NL/BE)
        </h2>
        <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800 sm:text-sm">{`Onderwerp: [Leeftijd] / [Positie] / [Naam speler] / [Huidige club]

Beste heer/mevrouw [naam scout],

Ik ben [Twoje imię], ouder van [imię dziecka] ([wiek] jaar, geboren in [rok]).

[Imię dziecka] speelt momenteel bij [obecny klub] op de positie [pozycja].
Hieronder enkele objectieve gegevens:

- Lengte: [wzrost] cm
- Gewicht: [waga] kg
- Sprint 20m: [czas] seconden
- Shuttle run: [wynik]
- Afgelopen seizoen: [liczba] goals, [liczba] assists in [liczba] wedstrijden

Wij zijn op zoek naar een club met een professionele jeugdopleiding en zouden
graag de mogelijkheden bij [nazwa klubu] verkennen.

Ik voeg een recente foto toe in de bijlage. Een video is op aanvraag beschikbaar.

Met vriendelijke groet,
[Twoje imię]
[telefon]
[e-mail]`}</pre>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Przykładowy szkielet maila (PL)
        </h2>
        <pre className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800 sm:text-sm">{`Temat: [Wiek] / [Pozycja] / [Imię dziecka] / [Obecny klub]

Szanowni Państwo,

Jestem rodzicem [imię dziecka] (lat [wiek]), który obecnie gra w [obecny klub]
na pozycji [pozycja].

Poniżej przedstawiam obiektywne dane:
- Wzrost: [wzrost] cm
- Waga: [waga] kg
- Sprint 20m: [czas] s
- Test zwinności: [wynik]
- Ostatni sezon: [liczba] goli, [liczba] asyst w [liczba] meczach

Chcielibyśmy zapytać o możliwość testów w Waszej akademii.

W załączniku przesyłam aktualne zdjęcie. Film z gry mogę przesłać na życzenie.

Z poważaniem,
[Twoje imię]
[telefon]
[e-mail]`}</pre>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">
          3 najczęstsze błędy rodziców
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
          <li>
            Pisanie do wielu osób z jednego klubu naraz (koordynator, trener,
            scout, LinkedIn).
          </li>
          <li>
            Follow-up codziennie lub zbyt agresywnie, zamiast jednego spokojnego
            przypomnienia po około 2 tygodniach.
          </li>
          <li>
            Brak spójności danych między pierwszym mailem, telefonem i
            kolejnymi wiadomościami.
          </li>
        </ul>
      </div>
      <SocialShare
        path="/jak-pisac-do-klubow"
        title="Jak napisać do klubu piłkarskiego, żeby dostać odpowiedź"
      />
    </section>
  );
}

