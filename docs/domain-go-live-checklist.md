# Checklista: domena + SSL + canonical (Vercel)

Użyj tej listy po pierwszym deployu na Vercel i po zakupie domeny.

---

## Faza A — Deploy na Vercel (teraz)

- [ ] Repo na GitHubie (`main`) — **do zrobienia: `gh auth login` + push**
- [x] Projekt podłączony w Vercel (Framework: Next.js)
- [x] Pierwszy deploy zakończony sukcesem
- [x] Działa adres produkcyjny: `https://pilka-beige.vercel.app`
- [x] W Vercel ustawione ENV:
  - `NEXT_PUBLIC_SITE_URL=https://pilka-beige.vercel.app`
- [x] Redeploy po dodaniu ENV
- [x] Test URL:
  - [x] `/`
  - [x] `/pl`, `/nl`
  - [x] `/sitemap.xml`
  - [x] `/robots.txt`
  - [x] `/pl/blog/kalendarz-naborow-2026-2027`

**Panel Vercel:** https://vercel.com/lukas-projects-f32e83ed/pilka

---

## Faza B — Podpięcie domeny

### 1) Dodaj domenę w Vercel

`Project -> Settings -> Domains -> Add`

Przykład:
- `twojadomena.pl` (główna)
- `www.twojadomena.pl` (alias)

### 2) Rekordy DNS (u rejestratora domeny)

Vercel pokaże dokładne wartości — poniżej typowy układ:

| Typ | Nazwa/Host | Wartość | TTL |
|-----|------------|---------|-----|
| A | `@` | `76.76.21.21` | 300-3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 300-3600 |

Uwagi:
- Nie ustawiaj jednocześnie A i CNAME na tym samym hoście `@`.
- Propagacja DNS trwa zwykle 5 min – 24 h.

### 3) SSL

- [ ] Vercel automatycznie wystawi certyfikat Let's Encrypt
- [ ] Status domeny w Vercel: **Valid Configuration**
- [ ] HTTPS działa bez ostrzeżeń

---

## Faza C — Canonical: wybierz jedną wersję główną

Rekomendacja: **bez www** jako canonical.

Docelowo:
- `https://twojadomena.pl` -> 200 OK (główna)
- `https://www.twojadomena.pl` -> 301 do bez www

W Vercel:
1. Ustaw `twojadomena.pl` jako Primary Domain
2. Dodaj `www.twojadomena.pl` jako redirect do primary

---

## Faza D — Aktualizacja ENV po domenie

W Vercel ustaw:

```env
NEXT_PUBLIC_SITE_URL=https://twojadomena.pl
```

Potem:
- [ ] Redeploy projektu
- [ ] Sprawdź, czy canonical w metadata wskazuje domenę produkcyjną
- [ ] Sprawdź `sitemap.xml` (URL-e z finalną domeną)
- [ ] Sprawdź `robots.txt` (`Sitemap: https://twojadomena.pl/sitemap.xml`)

---

## Faza E — SEO po podpięciu domeny

- [ ] Google Search Console: dodaj właściwość domeny
- [ ] Zweryfikuj własność (DNS TXT lub plik HTML)
- [ ] Wyślij sitemap: `https://twojadomena.pl/sitemap.xml`
- [ ] Sprawdź hreflang (`pl`, `nl`, `en`, `de`, `be`)
- [ ] Sprawdź 3 artykuły blogowe (schema Article + Breadcrumb + WebPage)

---

## Faza F — Testy końcowe (must-pass)

- [ ] `http://twojadomena.pl` -> przekierowanie na `https://twojadomena.pl`
- [ ] `https://www.twojadomena.pl` -> przekierowanie na `https://twojadomena.pl`
- [ ] Brak pętli redirectów
- [ ] Brak mixed content (wszystko HTTPS)
- [ ] Mobile check (nagłówek, języki, blog, FAQ)
- [ ] Formularz `/kontakt` działa (UI)
- [ ] Generator checklisty `/przygotowanie-i-testy` działa (UI)

---

## Faza G — Webhooki (gdy będziesz gotowy)

Dopiero po stabilnym deployu:

- [ ] `MAKE_CONTACT_WEBHOOK_URL`
- [ ] `MAKE_NEWSLETTER_WEBHOOK_URL`
- [ ] `MAKE_CHECKLIST_WEBHOOK_URL`
- [ ] Test E2E: formularz -> Make -> email/arkusz

---

## Szybka ścieżka (TL;DR)

1. Deploy na Vercel z GitHub
2. Ustaw `NEXT_PUBLIC_SITE_URL` (najpierw `.vercel.app`)
3. Kup domenę i dodaj DNS wg Vercel
4. Ustaw primary domain (bez www)
5. Zmień `NEXT_PUBLIC_SITE_URL` na finalną domenę
6. Redeploy + Search Console + sitemap

---

## Po starcie (pierwsze 7 dni)

- Publikuj 1 post/tydzień (PL + skrót NL/EN)
- Linkuj wewnętrznie do: system / kontakt / testy / FAQ
- Monitoruj w Search Console: Coverage + Performance
- Aktualizuj `lastModified` w `lib/blog-content.ts` po edycji artykułów
