import type { SiteLocale } from "./i18n-site";
import type { ArticleTheme } from "./article-themes";

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  readingMinutes: number;
  keywords: string[];
  publishedAt: string;
  lastModified: string;
  theme?: ArticleTheme;
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
    theme: "nl",
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
    theme: "nl",
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
          "Jeśli widzisz realny potencjał dziecka, rozpocznij proces wcześniej, szczególnie przy kierunku NL/BE. Wcześniejszy start nie oznacza presji. To raczej czas na spokojne budowanie historii kontaktu.",
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
    theme: "guide",
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
  {
    slug: "odmowa-klubu-co-dalej",
    title: "Co zrobić, gdy klub odmawia: poradnik dla rodzica i dziecka",
    description:
      "Jak przeżyć odmowę klubu bez presji na dziecko, co powiedzieć w domu i kiedy wrócić do procesu rekrutacyjnego.",
    readingMinutes: 9,
    keywords: [
      "odmowa klubu piłkarskiego",
      "jak mówić dziecku o odrzuceniu w sporcie",
      "co robić gdy klub nie chce zawodnika",
      "rekrutacja do akademii piłkarskiej odmowa",
      "wsparcie rodzica młodego piłkarza",
    ],
    publishedAt: "2026-07-11",
    lastModified: "2026-07-11",
    theme: "guide",
    sections: [
      {
        heading: "Odmowa to informacja, nie wyrok",
        paragraphs: [
          "W Holandii, Belgii i Polsce kluby odmawiają często. Powody bywają proste: pełna grupa wiekowa, zły timing, brak miejsca na danym poziomie albo po prostu inny profil zawodnika niż aktualnie szukają. To nie musi oznaczać, że dziecko „nie nadaje się do piłki”.",
          "Dla rodzica kluczowe jest rozdzielenie dwóch rzeczy: oceny sportowej w danym momencie oraz wartości dziecka jako człowieka i zawodnika w dłuższej perspektywie. Im szybciej to rozdzielisz, tym łatwiej poprowadzisz rozmowę w domu bez zbędnej dramatyzacji.",
        ],
      },
      {
        heading: "Co powiedzieć dziecku tego samego dnia",
        paragraphs: [
          "Najpierw krótko i konkretnie: klub teraz nie ma miejsca albo szuka innego typu zawodnika. Unikaj zdań w stylu „nie byłeś wystarczająco dobry” albo „musisz się bardziej postarać”, bo to brzmi jak ocena całej osoby.",
          "Lepszy schemat to trzy zdania: co się stało, co to znaczy (czyli „nie teraz / nie u nich”), co robimy dalej (np. kolejne kluby, poprawa materiałów, trening). Dziecko powinno usłyszeć, że proces trwa, a jedna odpowiedź nie zamyka drogi.",
          "Jeśli dziecko chce rozmawiać o szczegółach, odpowiadaj na pytania. Jeśli woli ciszę, zostaw przestrzeń. Presja na natychmiastową analizę meczu po odmowie zwykle robi więcej szkody niż pożytku.",
        ],
      },
      {
        heading: "Czego nie robić jako rodzic",
        paragraphs: [
          "Nie dzwonić tego samego dnia do klubu z prośbą o „drugą szansę” i długą obroną dziecka. To rzadko odwraca decyzję, a często psuje wizerunek rodziny jako spokojnego partnera w procesie.",
          "Nie pisać do innych osób w tym samym klubie równolegle (trener, scout, koordynator, LinkedIn). Jedna odmowa od jednego kanału to sygnał, że cykl w tym klubie na teraz jest zamknięty.",
          "Nie przenosić własnego rozczarowania na trening dziecka w najbliższych dniach. Dzieci bardzo szybko łapią napięcie rodzica i zaczynają grać „żeby udowodnić”, zamiast grać naturalnie. To obniża jakość kolejnych kontaktów i testów.",
        ],
      },
      {
        heading: "Pierwszy tydzień po odmowie: plan praktyczny",
        paragraphs: [
          "Dzień 1-2: spokojna rozmowa z dzieckiem, bez planowania rewanżu. Dzień 3-4: uporządkuj dane (testy, zdjęcie, krótki opis sezonu) i zapisz w tabeli status tego klubu jako „odmowa / zamknięte”. Dzień 5-7: wybierz 3-5 nowych klubów z innej fali, żeby nie utknąć w emocjach wokół jednej nazwy.",
          "Jeśli klub podał krótki powód (np. pełna grupa U15), zapisz go. To przyda się za kilka miesięcy, gdy będziesz rozważać ponowny kontakt z aktualizacją wyników.",
          "W tym tygodniu warto też sprawdzić, czy materiały wysłane wcześniej były spójne: ten sam wiek, pozycja, klub, wyniki testów. Niespójności bywają powodem milczenia lub szybkiej odmowy bez głębszej analizy.",
        ],
      },
      {
        heading: "Kiedy wracać do tego samego klubu",
        paragraphs: [
          "Bezpieczna zasada: nie wcześniej niż po 6-8 tygodniach i tylko z nową informacją (lepsze wyniki testów, nowy sezon, zmiana pozycji, krótsze wideo). Mail ma być krótki: przypomnienie poprzedniego kontaktu, jedna nowa rzecz, pytanie czy jest możliwość ponownej oceny.",
          "Jeśli klub napisał wyraźnie „nie kontaktować się ponownie”, respektuj to. W procesie międzynarodowym reputacja rodzica rozchodzi się szybciej niż się wydaje, szczególnie w mniejszych środowiskach akademii.",
          "Czasem lepszym ruchem jest klub z podobnego poziomu w tym samym regionie, zamiast uporczywego wracania do jednej marki. System klubowy w NL i BE daje tu więcej opcji niż w wielu lokalnych układach w PL.",
        ],
      },
      {
        heading: "Jak wspierać dziecko długoterminowo",
        paragraphs: [
          "Ustal jeden prosty rytm: po każdym treningu krótkie pytanie „co poszło dobrze”, a dopiero potem „co poprawimy”. Nie analizuj każdej akcji przez pryzmat odmowy. Skupienie na małych, mierzalnych postępach buduje odporność lepiej niż motywacyjne przemowy.",
          "Jeśli dziecko traci chęć do gry, zmniejsz tempo kontaktu z klubami na 2-3 tygodnie. Proces rekrutacyjny nie może zjeść radości z piłki. To szczególnie ważne w młodszych rocznikach, gdzie kluby coraz częściej obserwują nie tylko technikę, ale też nastawienie i regularność.",
          "Pamiętaj, że Twoja rola to menedżer procesu, nie drugi trener. Dziecko ma grać, Ty masz pilnować terminów, spójności danych i spokojnej komunikacji. To właśnie odróżnia skutecznego rodzica od rodzica, który dokłada presji.",
        ],
      },
      {
        heading: "Checklist po odmowie (do wydruku)",
        paragraphs: [
          "1) Spokojna rozmowa z dzieckiem bez oceniania całej kariery. 2) Zapis w tabeli: data, klub, osoba, kanał, wynik. 3) Jeden follow-up tylko tam, gdzie jeszcze trwa proces (nie w klubie, który jasno odmówił). 4) Aktualizacja profilu zawodnika i testów. 5) Nowa fala 3-5 klubów zgodnie z planem kontaktu. 6) Dopiero potem decyzja, czy wracać do tego klubu za kilka miesięcy.",
          "Ten schemat pasuje do całego procesu opisanego w sekcjach system klubowy, jak pisać do klubów, przygotowanie i testy oraz FAQ. Odmowa jest normalnym etapem, nie porażką całego planu.",
        ],
      },
    ],
  },
  {
    slug: "scouting-knvb-gdzie-grac",
    title: "Scouting w Holandii: regiony KNVB, wiek i gdzie być widocznym",
    description:
      "Jak działa obserwacja zawodników w NL: podział regionalny, wiek 11-17 lat, BVO i praktyczne kroki dla rodzica.",
    readingMinutes: 10,
    keywords: [
      "scouting KNVB regiony",
      "jak zostać zauważonym w Holandii piłka",
      "wiek scoutingu 11-17 lat",
      "jeugdvoetbal BVO Nederland",
      "gdzie grać żeby scout Cię zobaczył",
    ],
    publishedAt: "2026-07-11",
    lastModified: "2026-07-11",
    theme: "nl",
    sections: [
      {
        heading: "KNVB to nie jeden centralny „dyspozytor talentów”",
        paragraphs: [
          "W Holandii scouting nie działa jak jedna lista ogólnokrajowa, do której wysyła się maila i czeka na telefon. System jest bardziej rozproszony: kluby prowadzą własne obserwacje, regionalne struktury szkoleniowe mają swoje procesy, a na poziomie lokalnym liczy się regularna gra w odpowiednim środowisku.",
          "Dla rodzica z Polski, Belgii czy innego kraju to ważna różnica. Sam cold mail do akademii może zadziałać, ale często skuteczniejsze jest połączenie: dobry poziom ligi juniorów + widoczność w meczach + uporządkowany profil zawodnika.",
        ],
      },
      {
        heading: "Regiony i poziom rozgrywek: co to zmienia",
        paragraphs: [
          "Holandia ma silną kulturę lokalnego futbolu amatorskiego i półprofesjonalnego (BVO). Zanim myślisz o „wielkim klubie”, warto zrozumieć, czy dziecko gra w środowisku, gdzie w ogóle ma sens być obserwowane. To nie musi być od razu akademia Eredivisie.",
          "Scout patrzy na kontekst: poziom rywalizacji, stabilność występów, rolę zawodnika w drużynie, czy widać progres. Rodzic powinien więc ocenić nie tylko nazwę klubu, ale też czy to realne boisko rozwojowe na najbliższe 6-12 miesięcy.",
          "Praktyczna zasada: wybierz środowisko, w którym dziecko gra regularnie minutami, a nie siedzi na ławce w „lepszej” drużynie bez realnego czasu na boisku.",
        ],
      },
      {
        heading: "Wiek 11-17: inna logika niż u dorosłych",
        paragraphs: [
          "W młodszych rocznikach (ok. 11-13) często obserwuje się potencjał, nastawienie, technikę bazową i zachowanie w meczu. W 14-15 rośnie waga decyzji taktycznych i stabilności fizycznej. W 16-17 kluby coraz bardziej liczą gotowość do wejścia w strukturę akademii lub rezerw.",
          "To oznacza, że ten sam zawodnik w wieku 12 i 16 lat powinien mieć inny plan kontaktu. Młodszy: więcej regularnej gry i spokojnego budowania profilu. Starszy: bardziej precyzyjny outreach do konkretnych poziomów akademii z twardymi danymi.",
          "Jeśli dziecko ma 15+ i chcesz wejść w NL, profil powinien zawierać wyniki testów, rolę w obecnym klubie i krótki opis minut meczowych z ostatniego sezonu.",
        ],
      },
      {
        heading: "Gdzie realnie zwiększyć widoczność",
        paragraphs: [
          "Turnieje i mecze ligowe z dobrym poziomem organizacji (regularne, powtarzalne występy). Otwarte dni klubowe i probeertraining, jeśli klub je publikuje oficjalnie. Spójny profil mailowy do koordynatora akademii, ale tylko przez jeden kanał kontaktu.",
          "Mniej skuteczne: masowe maile do wielu osób w jednym klubie, agresywne follow-upy co kilka dni, surowe wideo bez kontekstu, obietnice w stylu „wielki talent” bez liczb.",
          "W NL liczy się profesjonalizm rodzica w procesie. Spokojny ton, konkret, terminowość i szacunek do struktury klubu często robią różnicę tak samo jak sama gra dziecka.",
        ],
      },
      {
        heading: "Plan 30 dni dla rodzica (Holandia)",
        paragraphs: [
          "Tydzień 1: sprawdź obecny poziom ligi i minuty dziecka. Tydzień 2: uzupełnij profil (wiek, pozycja, klub, testy, zdjęcie). Tydzień 3: wybierz 5-8 klubów docelowych + 2 rezerwowe. Tydzień 4: pierwsza fala maili i zapis statusów w tabeli.",
          "Po 14 dniach zrób jeden follow-up tylko tam, gdzie proces jeszcze trwa. Po odmowie nie wracaj natychmiast. Zamiast tego popraw materiały i przejdź do kolejnej fali klubów.",
          "Ten plan dobrze łączy się z checklistą przygotowania, zasadami kontaktu i interpretacją raportu indywidualnego, jeśli dziecko przechodzi testy lub obserwację meczową.",
        ],
      },
      {
        heading: "Najczęstsze błędy rodziców w NL",
        paragraphs: [
          "Skok do zbyt wysokiego poziomu klubu bez etapu pośredniego. Brak spójności danych między mailem, rozmową telefoniczną i profilem. Przesadna presja na dziecko po jednej obserwacji. Próba „obejścia systemu” przez równoległe kontakty w jednym klubie.",
          "Lepszy model: proces 6-12 miesięcy z regularną aktualizacją wyników, spokojną komunikacją i realistyczną ścieżką poziomów. W NL to często wygrywa z jednorazową, emocjonalną kampanią kontaktową.",
        ],
      },
    ],
  },
  {
    slug: "akademia-belgia-jak-wejsc-do-pro-league",
    title: "Akademia w Belgii: Pro League, wiek U i jak wejść do systemu",
    description:
      "Jak działają akademie belgijskie: struktura Pro League, kategorie U, nabory i praktyczny plan kontaktu dla rodzica.",
    readingMinutes: 10,
    keywords: [
      "akademia piłkarska Belgia nabór",
      "Pro League jeugd academie",
      "jak dostać się do klubu w Belgii",
      "scouting Belgia U15 U17",
      "probeertraining Belgia piłka nożna",
    ],
    publishedAt: "2026-07-11",
    lastModified: "2026-07-11",
    theme: "be",
    sections: [
      {
        heading: "Belgia wygląda mniejsza, ale system jest wielowarstwowy",
        paragraphs: [
          "W Belgii akademie Pro League działają przy klubach pierwszej ligi, ale pod spodem jest szeroka sieć lokalnych klubów, regionalnych rozgrywek i odrębnych struktur we Flandrii oraz Walonii. Dla rodzica spoza kraju to oznacza: nie wystarczy znać nazwę Anderlecht czy Genk, trzeba też rozumieć, na jakim poziomie dziecko realnie gra i czy ma sens od razu celować w top akademię.",
          "Dobra wiadomość: wiele belgijskich klubów jest otwartych na zawodników z zagranicy, zwłaszcza gdy profil jest konkretny: wiek, pozycja, obecny klub, minuty meczowe i krótkie wideo. Zła wiadomość: proces bywa wolniejszy niż w NL, a komunikacja wymaga cierpliwości i szacunku do lokalnej struktury klubu.",
        ],
      },
      {
        heading: "Kategorie U i etapy rozwoju",
        paragraphs: [
          "W praktyce rodzic spotka oznaczenia U7, U9, U11 aż po U21. Im młodszy zawodnik, tym bardziej klub patrzy na potencjał, technikę bazową i zachowanie w grupie. W U15-U17 rośnie waga decyzji meczowych, tempa gry i stabilności fizycznej. W U19-U21 liczy się gotowość do wejścia w rezerwy lub wyższy poziom rywalizacji.",
          "Belgia nie kopiuje 1:1 holenderskiego podziału onderbouw/middenbouw/bovenbouw, ale logika jest podobna: młodsze roczniki to długi proces obserwacji, starsze to coraz bardziej konkretna ocena „czy jesteś gotowy na nasz poziom”.",
          "Jeśli dziecko ma 13-14 lat i dopiero planujecie Belgii, nie panikuj. To wciąż etap, w którym regularna gra w dobrym lokalnym środowisku plus uporządkowany profil często daje lepszy efekt niż agresywny skok do samej czołówki Pro League.",
        ],
      },
      {
        heading: "Flandria, Walonia i język kontaktu",
        paragraphs: [
          "Belgia ma dwa główne języki urzędowe w futbolu: niderlandzki we Flandrii i francuski w Walonii. Mail po angielsku często przechodzi, ale krótki akapit w języku regionu klubu (nawet kilka zdań) bywa sygnałem, że rodzic traktuje proces poważnie.",
          "Nie musisz pisać perfekcyjnie. Wystarczy prosty wstęp: kim jesteście, skąd jesteście, jaki wiek i pozycja, plus link do profilu. Reszta może być po angielsku, jeśli klub odpowiada po angielsku.",
          "Unikaj wysyłania tego samego maila do pięciu osób w jednym klubie. W BE, podobnie jak w NL, jeden kanał i jedna osoba kontaktowa to zasada, która chroni relację z klubem.",
        ],
      },
      {
        heading: "Gdzie realnie zwiększyć szanse na obserwację",
        paragraphs: [
          "Regularne występy w rozgrywkach o sensownym poziomie (nie tylko nazwa klubu na koszulce). Oficjalne dni otwarte i probeertraining publikowane przez klub, nie przez pośrednika. Krótkie wideo 2-3 min z meczu plus wyniki testów, jeśli dziecko je ma.",
          "Mniej skuteczne: płatne „talent days” bez jasnego powiązania z klubem Pro League, obietnice szybkiego kontraktu, profile bez daty urodzenia i pozycji, masowe maile z tym samym szablonem do całej ligi.",
          "W Belgii często wygrywa spokojny, powtarzalny proces: gra, profil, kontakt, follow-up po 2 tygodniach, aktualizacja materiałów co kilka miesięcy.",
        ],
      },
      {
        heading: "Plan 30 dni dla rodzica (Belgia)",
        paragraphs: [
          "Tydzień 1: oceń obecny poziom ligi i minuty dziecka. Tydzień 2: przygotuj profil (wiek, pozycja, klub, sezon, testy, zdjęcie). Tydzień 3: wybierz 5-8 klubów: 2 ambitne, 4 realistyczne, 2 rezerwowe. Tydzień 4: pierwsza fala maili po jednym kontakcie na klub.",
          "Po 14 dniach wyślij krótki follow-up tylko tam, gdzie nie ma jasnej odmowy. Po 30 dniach zaktualizuj tabelę statusów i zdecyduj o drugiej fali. Nie wracaj do klubu, który jasno odmówił, zanim nie poprawicie profilu lub poziomu gry.",
          "Ten plan łączy się z zasadami kontaktu, checklistą testów i sekcją system klubowy, gdzie porównujemy NL, BE i PL w jednej tabeli wiekowej.",
        ],
      },
      {
        heading: "Najczęstsze błędy rodziców w Belgii",
        paragraphs: [
          "Celowanie wyłącznie w 2-3 największe marki bez etapu pośredniego. Brak cierpliwości po pierwszej ciszy (BE często odpowiada wolniej niż NL). Ignorowanie języka regionu klubu. Równoległe kontakty do trenera, dyrektora akademii i sekretariatu naraz.",
          "Lepszy model: realistyczna ścieżka 6-12 miesięcy, spokojna komunikacja, aktualizacja wyników co sezon i świadome przejście na wyższy poziom dopiero wtedy, gdy dane z gry to potwierdzają.",
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
