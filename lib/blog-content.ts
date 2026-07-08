import type { SiteLocale } from "./i18n-site";

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  readingMinutes: number;
  keywords: string[];
  publishedAt: string;
  lastModified: string;
  sections: { heading: string; paragraphs: string[] }[];
};

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function formatArticleDate(date: string, locale: string) {
  const localeMap: Record<string, string> = {
    pl: "pl-PL",
    nl: "nl-NL",
    en: "en-GB",
    de: "de-DE",
    be: "en-GB",
  };
  return formatDate(date, localeMap[locale] ?? "en-GB");
}

const plArticles: BlogArticle[] = [
  {
    slug: "kalendarz-naborow-2026-2027",
    title: "Kalendarz naborów do akademii piłkarskich 2026/2027",
    description:
      "Jak zaplanować kontakt z klubami w Holandii, Belgii i Polsce miesiąc po miesiącu.",
    readingMinutes: 8,
    keywords: [
      "akademia piłkarska Holandia nabór",
      "kalendarz naborów 2026/2027",
      "rekrutacja do akademii piłkarskiej",
      "kiedy pisać do klubu piłkarskiego",
    ],
    publishedAt: "2026-07-05",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Dlaczego timing kontaktu jest ważniejszy niż perfekcyjny mail",
        paragraphs: [
          "W praktyce o powodzeniu często decyduje nie tyle sama treść wiadomości, ile moment, w którym trafia do klubu. W okresie przerwy wakacyjnej wiele działów sportowych działa wolniej, a trenerzy i skauci wracają do regularnej pracy dopiero po starcie nowego cyklu.",
          "Dlatego rodzic powinien myśleć o procesie jak o kalendarzu działań: przygotowanie danych, pierwszy kontakt, follow-up i druga fala zgłoszeń. To zmniejsza chaos i poprawia skuteczność.",
        ],
      },
      {
        heading: "Holandia i Belgia: okno po wakacjach",
        paragraphs: [
          "Dla NL i BE kluczowe jest okno po przerwie letniej, kiedy kluby porządkują kadry i wracają do regularnego rytmu rekrutacyjnego. Warto mieć gotowe materiały jeszcze przed tym okresem: zdjęcie, dane fizyczne i krótki profil zawodnika.",
          "Jeśli dziecko ma widoczny potencjał, nie warto czekać na starsze roczniki. W tych systemach wcześniejsze wejście do procesu daje więcej czasu na obserwację i budowanie relacji.",
        ],
      },
      {
        heading: "Polska: więcej lokalnej dynamiki",
        paragraphs: [
          "W Polsce kontakt bywa mniej sformalizowany i mocniej zależny od konkretnego klubu. Zamiast jednego centralnego rytmu, częściej mamy lokalne terminy i decyzje kadrowe podejmowane bliżej sztabu szkoleniowego.",
          "To oznacza, że warto monitorować profile klubów i lokalne komunikaty oraz utrzymywać regularny, ale spokojny kontakt z jedną osobą po stronie klubu.",
        ],
      },
      {
        heading: "Minimalny plan działania na 30 dni",
        paragraphs: [
          "Tydzień 1: przygotuj profil zawodnika i wyniki testów. Tydzień 2: wyślij pierwszą falę kontaktu do 5-10 klubów. Tydzień 3: uporządkuj odpowiedzi i przygotuj indywidualne doprecyzowania. Tydzień 4: wykonaj jeden rzeczowy follow-up do klubów bez odpowiedzi.",
          "Każdy kontakt zapisuj w prostej tabeli (data, klub, osoba, kanał, status). To pomaga uniknąć błędu pisania do wielu osób w obrębie jednego klubu.",
        ],
      },
    ],
  },
  {
    slug: "clj-vs-jeugdopleiding",
    title: "CLJ vs Jeugdopleiding: najważniejsze różnice dla rodzica",
    description:
      "Porównanie polskiej ścieżki CLJ z modelem holenderskiej akademii młodzieżowej.",
    readingMinutes: 9,
    keywords: [
      "CLJ U17 U19",
      "jeugdopleiding Nederland",
      "różnice systemu szkolenia NL PL",
      "jak wybrać ścieżkę piłkarską",
    ],
    publishedAt: "2026-07-06",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Dwa różne światy organizacji szkolenia",
        paragraphs: [
          "Jeugdopleiding w Holandii to zwykle bardzo czytelny model klubowej akademii z jasno rozpisanymi etapami. Rodzic otrzymuje bardziej przewidywalny kontekst: kategorie, rytm pracy i proces ewaluacji zawodnika.",
          "CLJ w Polsce to z kolei ważny punkt odniesienia poziomu sportowego, ale ścieżka wejścia i komunikacji z klubem częściej zależy od lokalnej praktyki danego ośrodka.",
        ],
      },
      {
        heading: "Co to zmienia w komunikacji rodzica",
        paragraphs: [
          "W modelu bardziej sformalizowanym (NL) liczy się precyzja i spójność danych od pierwszego kontaktu. W modelu bardziej lokalnym (PL) dodatkowo znaczenie ma kontekst klubu: aktualne potrzeby kadrowe i tryb naborów.",
          "W obu przypadkach działa ta sama zasada: fakty ponad emocje. Krótki mail, konkretne liczby i jeden kanał kontaktu na klub.",
        ],
      },
      {
        heading: "Kiedy zacząć",
        paragraphs: [
          "Jeśli widzisz realny potencjał dziecka, rozpocznij proces wcześniej, szczególnie przy kierunku NL/BE. Wcześniejszy start nie oznacza presji — oznacza czas na spokojne budowanie historii kontaktu.",
          "W Polsce również warto zacząć wcześnie, ale podejście powinno być bardziej elastyczne i osadzone w realiach konkretnego klubu.",
        ],
      },
      {
        heading: "Checklist przed pierwszym mailem",
        paragraphs: [
          "Przygotuj: dane fizyczne, 2-3 mierzalne wyniki testowe, historię klubową i aktualne zdjęcie. Wideo wyślij dopiero gdy jest krótkie i dobrze zmontowane.",
          "Na końcu sprawdź, czy w jednym klubie wskazałeś jedną osobę kontaktową. To detal, który często decyduje o tym, jak klub odczyta Twoją wiadomość.",
        ],
      },
    ],
  },
  {
    slug: "follow-up-do-klubu",
    title: "Follow-up do klubu: kiedy i jak pisać, żeby nie spalić kontaktu",
    description:
      "Praktyczny schemat przypomnienia do klubu po pierwszym mailu.",
    readingMinutes: 7,
    keywords: [
      "follow-up do klubu piłkarskiego",
      "ile czekać na odpowiedź od klubu",
      "jak pisać przypomnienie do skauta",
      "błędy rodziców kontakt z klubem",
    ],
    publishedAt: "2026-07-07",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Najczęstszy błąd: za szybko i za często",
        paragraphs: [
          "Wielu rodziców robi follow-up po 2-3 dniach i powtarza wiadomość kilka razy. To zwykle działa odwrotnie: klub widzi presję zamiast profesjonalizmu.",
          "Bezpieczna praktyka to jedno przypomnienie po około 14 dniach, krótkie i oparte na faktach.",
        ],
      },
      {
        heading: "Prosty format follow-upu",
        paragraphs: [
          "Wystarczy 4-5 zdań: przypomnienie poprzedniej wiadomości, jedno zdanie o celu kontaktu, pytanie o możliwość krótkiej informacji zwrotnej. Bez nowych długich opisów i bez oceniania braku odpowiedzi.",
          "Jeśli kontakt był po niderlandzku lub angielsku, follow-up również utrzymaj w tym języku i tym samym tonie.",
        ],
      },
      {
        heading: "Czego nie robić po follow-upie",
        paragraphs: [
          "Nie rozsyłaj równolegle wiadomości do trenera, koordynatora i scouta w tym samym klubie. To może zostać odebrane jako obchodzenie procesu.",
          "Nie dosyłaj wielu załączników i surowych nagrań. Lepiej zaproponować, że materiał wideo jest dostępny na życzenie.",
        ],
      },
      {
        heading: "Kiedy zakończyć próbę kontaktu",
        paragraphs: [
          "Jeśli po pierwszym mailu i jednym follow-upie nadal nie ma odpowiedzi, zamknij ten cykl i przejdź do kolejnych klubów. Po 6-8 tygodniach możesz wrócić z aktualizacją wyników i krótkim nowym kontaktem.",
          "To proces długoterminowy. Regularność i spokój dają lepsze efekty niż jednorazowa intensywność.",
        ],
      },
    ],
  },
];

const shortNlArticles: BlogArticle[] = [
  {
    slug: "kalendarz-naborow-2026-2027",
    title: "Wervingskalender 2026/2027",
    description: "Korte gids voor timing van contact met clubs in NL/BE/PL.",
    readingMinutes: 3,
    keywords: ["werving voetbal academie", "jeugd scouting kalender"],
    publishedAt: "2026-07-05",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Belangrijkste punt",
        paragraphs: [
          "Timing bepaalt vaak meer dan een perfecte e-mail. Richt je op het post-zomer recruitment window en werk met een duidelijk 30-dagen plan.",
        ],
      },
    ],
  },
  {
    slug: "clj-vs-jeugdopleiding",
    title: "CLJ vs Jeugdopleiding",
    description: "Kernverschillen voor ouders.",
    readingMinutes: 3,
    keywords: ["clj versus jeugdopleiding", "voetbal opleiding verschillen"],
    publishedAt: "2026-07-06",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Structuur en aanpak",
        paragraphs: [
          "Nederland is vaak centraler en voorspelbaarder; Polen werkt vaker lokaal. In beide gevallen: feiten, korte mail en 1 contactpersoon per club.",
        ],
      },
    ],
  },
  {
    slug: "follow-up-do-klubu",
    title: "Follow-up naar een club",
    description: "Wanneer en hoe je professioneel opvolgt.",
    readingMinutes: 2,
    keywords: ["follow-up scouting mail", "contact voetbalclub ouders"],
    publishedAt: "2026-07-07",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Praktijkregel",
        paragraphs: [
          "Stuur na ongeveer 2 weken een korte follow-up. Benader niet meerdere mensen binnen dezelfde club tegelijk.",
        ],
      },
    ],
  },
];

const shortEnArticles: BlogArticle[] = [
  {
    slug: "kalendarz-naborow-2026-2027",
    title: "Recruitment calendar 2026/2027",
    description: "A short guide to outreach timing across NL/BE/PL.",
    readingMinutes: 3,
    keywords: ["football academy recruitment calendar", "club outreach timing"],
    publishedAt: "2026-07-05",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Core idea",
        paragraphs: [
          "Timing often matters more than a perfect email. Use a monthly plan and target post-summer recruitment windows.",
        ],
      },
    ],
  },
  {
    slug: "clj-vs-jeugdopleiding",
    title: "CLJ vs Jeugdopleiding",
    description: "Key differences parents should know.",
    readingMinutes: 3,
    keywords: ["CLJ vs jeugdopleiding", "academy system comparison"],
    publishedAt: "2026-07-06",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Different systems",
        paragraphs: [
          "NL is typically more centralized, while PL is more local. In both: keep communication factual and concise.",
        ],
      },
    ],
  },
  {
    slug: "follow-up-do-klubu",
    title: "Club follow-up",
    description: "How to follow up without burning the contact.",
    readingMinutes: 2,
    keywords: ["club follow-up email", "football scouting outreach"],
    publishedAt: "2026-07-07",
    lastModified: "2026-07-08",
    sections: [
      {
        heading: "Safe rule",
        paragraphs: [
          "Send one short follow-up after around 2 weeks and keep one contact person per club.",
        ],
      },
    ],
  },
];

export function getArticlesForLocale(locale: SiteLocale): BlogArticle[] {
  if (locale === "pl") return plArticles;
  if (locale === "nl") return shortNlArticles;
  if (locale === "en") return shortEnArticles;
  if (locale === "de") return shortEnArticles;
  return shortEnArticles;
}

export function getArticleBySlug(locale: SiteLocale, slug: string) {
  return getArticlesForLocale(locale).find((article) => article.slug === slug) ?? null;
}
