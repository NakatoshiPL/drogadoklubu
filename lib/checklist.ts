export type TargetCountry = "Holandia" | "Belgia" | "Polska";
export type FieldPosition = "Bramkarz" | "Obrońca" | "Pomocnik" | "Napastnik";

export type ChecklistInput = {
  country: TargetCountry;
  age: number;
  position: FieldPosition;
};

type AgeBand = {
  sprint20m: string;
  shuttleRun: string;
  endurance: string;
};

const ageBands: { min: number; max: number; values: AgeBand }[] = [
  {
    min: 6,
    max: 9,
    values: {
      sprint20m: "4.4-5.0 s",
      shuttleRun: "10.8-12.0 s",
      endurance: "Yo-Yo level 8-10",
    },
  },
  {
    min: 10,
    max: 13,
    values: {
      sprint20m: "3.8-4.4 s",
      shuttleRun: "9.9-11.0 s",
      endurance: "Yo-Yo level 10-13",
    },
  },
  {
    min: 14,
    max: 16,
    values: {
      sprint20m: "3.3-3.9 s",
      shuttleRun: "9.0-10.2 s",
      endurance: "Yo-Yo level 13-16",
    },
  },
  {
    min: 17,
    max: 19,
    values: {
      sprint20m: "3.1-3.7 s",
      shuttleRun: "8.6-9.8 s",
      endurance: "Yo-Yo level 15-18",
    },
  },
];

const countryRules: Record<
  TargetCountry,
  { language: string; scoutingWindow: string; earlyStartNote: string }
> = {
  Holandia: {
    language: "niderlandzki lub angielski",
    scoutingWindow: "od połowy sierpnia po przerwie wakacyjnej",
    earlyStartNote:
      "Przy widocznym talencie zacznij wcześniej (młodsze roczniki), nie czekaj do U15.",
  },
  Belgia: {
    language: "niderlandzki, francuski lub angielski",
    scoutingWindow: "otwarte dni i nabory po wakacjach",
    earlyStartNote:
      "Przy widocznym talencie zacznij wcześnie, bo akademie śledzą zawodników od młodszych grup.",
  },
  Polska: {
    language: "polski",
    scoutingWindow: "nabory lokalne i terminy klubowe publikowane sezonowo",
    earlyStartNote:
      "W Polsce ścieżka jest bardziej lokalna i mniej sformalizowana, więc monitoruj konkretne kluby.",
  },
};

const mailOpeners: Record<TargetCountry, string> = {
  Holandia: "Beste heer/mevrouw [naam scout],",
  Belgia: "Beste heer/mevrouw [naam scout],",
  Polska: "Szanowni Państwo,",
};

export function buildChecklist(input: ChecklistInput) {
  const ageBand =
    ageBands.find((band) => input.age >= band.min && input.age <= band.max) ?? ageBands[1];
  const countryRule = countryRules[input.country];

  const items = [
    "Zbierz obiektywne dane zawodnika: wzrost, waga, pozycja, aktualny klub.",
    `Przygotuj testy fizyczne dla wieku ${input.age}: sprint 20m ${ageBand.values.sprint20m}, shuttle run ${ageBand.values.shuttleRun}, wytrzymałość ${ageBand.values.endurance}.`,
    `Dopasuj komunikację do kraju (${input.country}): język kontaktu ${countryRule.language}.`,
    "Przygotuj jedno profesjonalne zdjęcie i wideo 2-3 min z najlepszymi fragmentami.",
    `Wyślij pierwsze zgłoszenia w oknie rekrutacyjnym: ${countryRule.scoutingWindow}.`,
    countryRule.earlyStartNote,
    `W treści maila podkreśl pozycję: ${input.position} oraz 3-5 mierzalnych statystyk.`,
    "W jednym klubie prowadź kontakt tylko przez jedną osobę i jeden kanał, żeby nie stworzyć wrażenia nacisku.",
  ];

  const mailTemplate = [
    `Temat: [${input.age}] - [${input.position}] - [Imię zawodnika] - [Obecny klub]`,
    "",
    mailOpeners[input.country],
    "",
    "Jestem rodzicem [imię dziecka], który gra obecnie w [obecny klub].",
    "Poniżej przesyłam obiektywne dane oraz wyniki testów.",
    "Chcielibyśmy zapytać o możliwość obserwacji lub testów w akademii.",
    "",
    "Z poważaniem / Met vriendelijke groet,",
    "[Imię i nazwisko rodzica]",
    "[Telefon] | [Email]",
  ].join("\n");

  return {
    title: `Checklista kontaktu z klubem (${input.country})`,
    summary: `Wiek: ${input.age}, pozycja: ${input.position}, kraj docelowy: ${input.country}`,
    items,
    mailTemplate,
    recruitmentWindow: countryRule.scoutingWindow,
  };
}
