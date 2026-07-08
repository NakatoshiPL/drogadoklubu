export const supportedLocales = ["pl", "nl", "en", "de", "be"] as const;
export type SiteLocale = (typeof supportedLocales)[number];

export const defaultLocale: SiteLocale = "pl";

export const localeLabels: Record<SiteLocale, string> = {
  pl: "Polski",
  nl: "Nederlands",
  en: "English",
  de: "Deutsch",
  be: "Belgium",
};

export const sharedSlugs = [
  "",
  "system-klubowy",
  "jak-pisac-do-klubow",
  "przygotowanie-i-testy",
  "faq",
  "kontakt",
  "blog",
] as const;

type PageText = {
  nav: {
    home: string;
    system: string;
    outreach: string;
    prep: string;
    faq: string;
    contact: string;
    blog: string;
  };
  home: {
    title: string;
    subtitle: string;
    intro: string;
  };
};

export const localeContent: Record<SiteLocale, PageText> = {
  pl: {
    nav: {
      home: "Start",
      system: "System klubowy",
      outreach: "Kontakt z klubami",
      prep: "Przygotowanie i testy",
      faq: "FAQ",
      contact: "Kontakt",
      blog: "Blog",
    },
    home: {
      title: "Jak dotrzeć z dzieckiem do klubu piłkarskiego",
      subtitle: "w Holandii, Belgii i Polsce",
      intro:
        "Praktyczny poradnik rodzica: realne kroki, realne błędy i realne decyzje.",
    },
  },
  nl: {
    nav: {
      home: "Start",
      system: "Clubsysteem",
      outreach: "Clubs benaderen",
      prep: "Voorbereiding & tests",
      faq: "FAQ",
      contact: "Contact",
      blog: "Blog",
    },
    home: {
      title: "Hoe bereik je met je kind een voetbalclub",
      subtitle: "in Nederland, Belgie en Polen",
      intro:
        "Praktische gids voor ouders: echte stappen, echte fouten en echte keuzes.",
    },
  },
  en: {
    nav: {
      home: "Home",
      system: "Club system",
      outreach: "Contacting clubs",
      prep: "Preparation & testing",
      faq: "FAQ",
      contact: "Contact",
      blog: "Blog",
    },
    home: {
      title: "How to reach football clubs with your child",
      subtitle: "in the Netherlands, Belgium and Poland",
      intro:
        "A practical parent guide: real steps, real mistakes and real decisions.",
    },
  },
  de: {
    nav: {
      home: "Start",
      system: "Vereinssystem",
      outreach: "Vereine anschreiben",
      prep: "Vorbereitung & Tests",
      faq: "FAQ",
      contact: "Kontakt",
      blog: "Blog",
    },
    home: {
      title: "Wie Sie mit Ihrem Kind einen Fussballverein erreichen",
      subtitle: "in den Niederlanden, Belgien und Polen",
      intro:
        "Praktischer Elternleitfaden: echte Schritte, echte Fehler, echte Entscheidungen.",
    },
  },
  be: {
    nav: {
      home: "Start",
      system: "Belgium focus",
      outreach: "Club contact",
      prep: "Preparation",
      faq: "FAQ",
      contact: "Contact",
      blog: "Blog",
    },
    home: {
      title: "Guide for parents targeting clubs in Belgium",
      subtitle: "with comparisons to NL and PL",
      intro:
        "Belgium-focused version with practical contact and recruitment timing notes.",
    },
  },
};

export function isSupportedLocale(value: string): value is SiteLocale {
  return supportedLocales.includes(value as SiteLocale);
}
