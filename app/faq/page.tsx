import type { Metadata } from "next";
import { Accordion } from "../components/accordion";
import { SocialShare } from "../components/social-share";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Najczęściej zadawane pytania rodziców młodych piłkarzy.",
};

const faqItems = [
  {
    question: "Ile czasu czekać na odpowiedź od klubu?",
    answer:
      "Zwykle 1-2 tygodnie. Kluby dostają dziesiątki maili tygodniowo. Jeśli po 2 tygodniach brak odpowiedzi, wyślij krótki follow-up (sam fakt, bez zbytniego nacisku).",
  },
  {
    question: "Co jeśli klub w ogóle nie odpowiada?",
    answer:
      "Często to nie znaczy „nie”, tylko „nie mamy teraz czasu”. Wyślij przypomnienie po 2 tygodniach, a jeśli nadal cisza, spróbuj przez inny kanał (telefon do sekretariatu, LinkedIn do skauta).",
  },
  {
    question: "Czy pisać do kilku klubów naraz, czy pojedynczo?",
    answer:
      "Naraz. To nie jest randka, to proces rekrutacyjny. Kluby nie mają ze sobą kontaktu w tej sprawie. Wysyłaj do 5-10 klubów jednocześnie i zobacz, kto odpowie.",
  },
  {
    question: "Czy warto korzystać z agencji pośredniczących?",
    answer:
      "Jeśli agencja ma realne kontakty i sprawdzonych skautów, tak. Ale większość to pośrednicy, którzy robią to samo co Ty, tylko drożej. Przewaga poradnika: rodzic sam ogarnia temat bez wydawania tysięcy euro.",
  },
  {
    question: "W jakim wieku najlepiej zacząć kontakt z klubami zagranicznymi?",
    answer:
      "Jeśli dziecko ma potencjał, w Holandii i Belgii warto zaczynać wcześniej, nawet od młodszych roczników, bo kluby obserwują zawodników przed etapem U15. W Polsce proces często wygląda inaczej: więcej zależy od lokalnego klubu, relacji i aktualnych naborów. Im wcześniej, tym lepiej, ale nigdy nie jest za późno.",
  },
  {
    question: "Czy bariera językowa to problem?",
    answer:
      "Nie, jeśli podejdziesz do tego profesjonalnie. Kluby w Holandii i Belgii mówią po angielsku. Mail po niderlandzku lub angielsku będzie traktowany poważniej niż po polsku. W Polsce pisz po polsku.",
  },
];

export default function FaqPage() {
  return (
    <section className="space-y-6">
      <div className="page-shell">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand)]">FAQ</h1>
        <p className="mt-4 text-base leading-8 text-[var(--muted)]">
          Najczęstsze pytania rodziców młodych piłkarzy.
        </p>
      </div>
      <Accordion items={faqItems} />
      <SocialShare path="/faq" title="FAQ: kontakt z klubami piłkarskimi" />
    </section>
  );
}

