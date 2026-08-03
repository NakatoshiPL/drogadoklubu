# Piłkarska Ścieżka Rodzica

Praktyczny poradnik dla rodziców młodych piłkarzy — jak dotrzeć do klubów w Holandii, Belgii i Polsce.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS 4
- [pdf-lib](https://pdf-lib.js.org/) — generowanie checklisty PDF
- [Make.com](https://www.make.com/) — webhooki formularzy (kontakt, newsletter, checklista)

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env.local
# Uzupełnij NEXT_PUBLIC_SITE_URL i webhooki Make.com w .env.local
npm run dev
```

Strona: [http://localhost:3000](http://localhost:3000) (przekierowanie na `/pl`).

## Zmienne środowiskowe

| Zmienna | Opis |
|---------|------|
| `NEXT_PUBLIC_SITE_URL` | Kanoniczny URL produkcji (np. `https://twojadomena.pl`) |
| `MAKE_CONTACT_WEBHOOK_URL` | Webhook Make — formularz kontaktowy |
| `MAKE_NEWSLETTER_WEBHOOK_URL` | Webhook Make — zapis na newsletter |
| `MAKE_CHECKLIST_WEBHOOK_URL` | Webhook Make — checklista PDF + email |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Opcjonalnie — Google Analytics 4 |

## Skrypty

```bash
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny
npm run start    # serwer produkcyjny
npm run lint     # ESLint
```

## Struktura URL (PL)

- `/` → przekierowanie na `/pl`
- `/pl`, `/pl/blog/...` — wersja wielojęzyczna (aktywna: polski)
- `/system-klubowy`, `/jak-pisac-do-klubow`, `/przygotowanie-i-testy`, `/faq`, `/kontakt` — pełna treść po polsku

Wersje `/nl`, `/en`, `/de`, `/be` pozostają w kodzie, ale są wyłączone z indeksacji SEO (`noindex`).

## Deploy

Projekt jest przygotowany pod Vercel. Po podpięciu własnej domeny ustaw `NEXT_PUBLIC_SITE_URL` w panelu Vercel i zrób redeploy.
