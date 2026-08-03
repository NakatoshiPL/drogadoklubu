export type PositionCriteria = {
  name: string;
  technique: string[];
  tactics: string[];
  physical: string[];
  skills: string[];
};

export const reportIntro = {
  title: "Jak czytać raport indywidualny",
  subtitle: "Na co skauci zwracają uwagę podczas obserwacji meczowej",
  lead:
    "Raport z obserwacji meczu to nie ocena „na zawsze”, tylko zdjęcie Twojej gry w konkretnym momencie. Poniżej znajdziesz logikę ocen i kryteria dla poszczególnych pozycji, w wersji uproszczonej, żeby łatwiej zrozumieć, co oznaczają poszczególne rubryki.",
};

export const howItWorks = [
  {
    heading: "Po co jest lista atrybutów",
    text: "Zespół szkoleniowy i skautingowy przygotował zestaw cech kluczowych dla każdej pozycji. Dzięki temu wiesz, jakie wymagania taktyczne i techniczne wiążą się z Twoją rolą na boisku.",
  },
  {
    heading: "Ile meczów wystarczy",
    text: "Pierwsza ocena często opiera się na jednym spotkaniu. To wystarczy, żeby zarysować profil zawodnika. Pełniejszy obraz daje obserwacja co najmniej trzech meczów w różnych kontekstach: np. gdy drużyna dominuje i gdy gra w obronie.",
  },
  {
    heading: "Skala i kategorie",
    text: "Oceniane są: fizyczność (na podstawie testów), technika, umiejętności piłkarskie oraz taktyka. Mentalność ma mniejszą wagę. Większość rubryk ma skalę od 1 do 5: od słabo, przez poniżej przeciętnej i przeciętnie, po dobrze i bardzo dobrze, z krótkim komentarzem przy każdej ocenie.",
  },
  {
    heading: "Poziom ligi i cel raportu",
    text: "W raporcie pojawia się też rekomendowany poziom rozgrywek. To opinia zespołu obserwującego, gdzie zawodnik powinien teraz grać, żeby rozwijać się w odpowiednim środowisku. Chodzi o wskazanie mocnych i słabszych stron, żeby wiedzieć, nad czym pracować dalej.",
  },
];

export const mentalTips = [
  "Adrenalina i stres mają Cię napędzać, a nie paraliżować.",
  "Na boisku opieraj się na swoich atutach i od razu je wykorzystuj.",
  "Musi zależeć Ci bardziej niż reszcie. To widać w każdej akcji.",
  "Wczorajszy mecz nie liczy się; liczy się to, co robisz teraz.",
  "Strach przed przeciwnikiem zanim wejdziesz na murawę to już połowa porażki.",
  "Liczy się odwaga, panowanie nad emocjami i nastawienie zwycięzcy.",
];

export const warmupTips = [
  "Jakość i intensywność ćwiczeń na rozgrzewce.",
  "Koncentracja od pierwszej minuty przygotowań.",
  "Skaut ocenia już na rozgrzewce. Pokaż, że zależy Ci bardziej niż innym.",
];

export const positions: PositionCriteria[] = [
  {
    name: "Bramkarz",
    technique: [
      "Wznowienia nogą i ręką",
      "Przyjęcie piłki",
      "Gra słabszą nogą",
    ],
    tactics: [
      "Czytanie gry i ustawianie się",
      "Odwaga i komunikacja",
      "Reakcja po błędzie",
      "Szybkość i trafność decyzji",
    ],
    physical: [
      "Gibkość, przyspieszenie na 5 m",
      "Siła nóg (test SJ), zwinność (T-Test)",
      "Wzrost, waga, BMI, tkanka tłuszczowa",
    ],
    skills: [
      "Refleks i gra na linii",
      "Chwyt, technika bramkarska",
      "Gra na przedpolu i sytuacje 1 na 1",
    ],
  },
  {
    name: "Boczny obrońca",
    technique: [
      "Przyjęcie: kierunkowe, w biegu, pod presją",
      "Kontrola po przyjęciu i w prowadzeniu",
      "Prowadzenie piłki, gra wewnętrzną i zewnętrzną stopą",
      "Test ZigZag",
    ],
    tactics: [
      "Pozycjonowanie, czytanie gry, decyzyjność",
      "Komunikacja i otwartość na piłkę",
      "Włączanie się do akcji ofensywnej",
    ],
    physical: [
      "Wydolność, sprint 30 m, start na 5 m",
      "Siła nóg (SJ), zwinność (T-Test)",
      "Parametry sylwetki: wzrost, waga, BMI, % tłuszczu",
    ],
    skills: [
      "Gra ciałem, krycie, gra na wyprzedzenie",
      "Pojedynki 1 na 1 (obrona i atak)",
      "Dośrodkowania i wyprowadzanie piłki",
    ],
  },
  {
    name: "Środkowy obrońca",
    technique: [
      "Przyjęcie pod presją i w biegu",
      "Kontrola po odbiorze i w dribblingu",
      "Używanie słabszej nogi",
    ],
    tactics: [
      "Czytanie gry, ustawianie się",
      "Szybkie i trafne decyzje",
      "Komunikacja z linią",
    ],
    physical: [
      "Start 5 m, sprint 30 m",
      "Siła (SJ), zwinność (T-Test)",
      "Wzrost, waga, BMI, tkanka tłuszczowa",
    ],
    skills: [
      "Gra głową i grą ciałem",
      "Krycie, wyprzedzanie, wyprowadzanie",
      "Obrona 1 na 1",
    ],
  },
  {
    name: "Defensywny pomocnik",
    technique: [
      "Przyjęcie w różnych sytuacjach",
      "Kontrola i prowadzenie piłki",
      "Słabsza noga, gra częściami stopy",
      "Test ZigZag",
    ],
    tactics: [
      "Przegląd pola, pozycjonowanie",
      "Decyzyjność, komunikacja",
      "Aktywność bez piłki i otwartość na podanie",
    ],
    physical: [
      "Wydolność",
      "Przyspieszenie 5 m, sprint 30 m",
      "Siła nóg (SJ), koordynacja (T-Test)",
      "Parametry budowy ciała",
    ],
    skills: [
      "Rozgrywanie piłki",
      "Krycie, gra głową",
      "Pojedynki 1 na 1 w obronie",
      "Gra ciałem",
    ],
  },
  {
    name: "Ofensywny pomocnik",
    technique: [
      "Przyjęcie i kontrola w biegu",
      "Prowadzenie, słabsza noga",
      "Gra wewnętrzną i zewnętrzną stopą",
      "Test ZigZag",
    ],
    tactics: [
      "Wizja gry, kreatywność",
      "Gra bez piłki, otwartość na podanie",
      "Decyzyjność, komunikacja, pozycjonowanie",
    ],
    physical: [
      "Wydolność, sprinty 5 m i 30 m",
      "Siła (SJ), zwinność (T-Test)",
      "Wzrost, waga, BMI, % tłuszczu",
    ],
    skills: [
      "Rozgrywanie piłki",
      "Strzał z dystansu",
      "Drybling",
    ],
  },
  {
    name: "Skrzydłowy",
    technique: [
      "Przyjęcie kierunkowe i pod pressingiem",
      "Kontrola w prowadzeniu",
      "Słabsza noga, tempo z piłką",
      "Test ZigZag",
    ],
    tactics: [
      "Kreatywność, gra bez piłki",
      "Przegląd pola, decyzyjność",
      "Komunikacja i otwartość na piłkę",
    ],
    physical: [
      "Przyspieszenie 5 m, sprint 30 m",
      "Siła (SJ), T-Test",
      "Parametry sylwetki",
    ],
    skills: [
      "Drybling i dośrodkowania",
      "Strzał z dystansu",
    ],
  },
  {
    name: "Napastnik",
    technique: [
      "Przyjęcie w biegu i pod presją",
      "Kontrola, prowadzenie, słabsza noga",
      "Gra częściami stopy, test ZigZag",
    ],
    tactics: [
      "Ruch bez piłki, otwartość na podanie",
      "Czytanie gry, pozycjonowanie",
      "Decyzyjność i komunikacja",
    ],
    physical: [
      "Start 5 m, sprint 30 m",
      "Siła (SJ), zwinność (T-Test)",
      "Wzrost, waga, BMI, tkanka tłuszczowa",
    ],
    skills: [
      "Wykańczanie akcji i strzał z dystansu",
      "Gra głową i grą ciałem",
      "Drybling, gra plecami do bramki",
    ],
  },
];
