# Make Playbook: sekwencje PL/NL/EN + A/B

## 1) Segmentacja jezykowa

Regula:
- `country = Polska` -> sekwencja `PL`
- `country = Holandia` -> sekwencja `NL` (fallback: `EN`)
- `country = Belgia` -> sekwencja `EN` (lub `NL`, jesli tak ustawisz)

W Make:
1. Webhook odbiera dane.
2. Router:
   - trasa `PL` (warunek: country = Polska)
   - trasa `NL` (warunek: country = Holandia)
   - trasa `EN` (warunek: country = Belgia)

## 2) A/B test tematow

Najprosciej:
- modul `Tools -> Set variable`:
  - `abVariant = if(random(1;100) <= 50; "A"; "B")`
- W module email:
  - Subject = `if(abVariant = "A"; subjectA; subjectB)`

Zapisz do Google Sheets:
- email
- country
- sequence_language
- ab_variant
- subject_used
- sent_at

## 3) Sekwencja PL (3 maile)

### PL #1 (0 dni)
Subject A: Twoja checklista PDF jest gotowa
Subject B: Start: checklista kontaktu z klubami (PDF)

Body:
Czesc,
dzieki za zapis.
Twoja checklista PDF jest gotowa i jest w zalaczniku.

Jesli chcesz, odpisz:
1) wiek dziecka
2) kraj docelowy
3) pozycja

Pozdrawiam,
[Twoje imie]

### PL #2 (+3 dni)
Subject A: 3 bledy, przez ktore kluby nie odpisuja
Subject B: Tego nie pisz w pierwszym mailu do klubu

Body:
Najczestsze bledy:
1. Za duzo emocji, za malo faktow.
2. Za dlugi mail.
3. Pisanie do wielu osob z jednego klubu naraz.

W jednym klubie wybierz jedna osobe kontaktowa i jeden kanal.

### PL #3 (+7 dni)
Subject A: Jak to wygladalo u nas (bez sciemy)
Subject B: Odpowiedzi z klubow: czego sie spodziewac

Body:
To proces, nie sprint.
Najpierw cisza, potem krotki follow-up po okolo 2 tygodniach.
Najlepiej dziala spokojna, rzeczowa komunikacja.

## 4) Sekwencja NL (3 maile)

### NL #1 (0 dni)
Subject A: Jouw PDF-checklist staat klaar
Subject B: Start: checklist voor contact met voetbalclubs

Body:
Hallo,
bedankt voor je aanmelding.
Je PDF-checklist zit in de bijlage.

Als je wilt, stuur terug:
- leeftijd
- positie
- doelland

Groet,
[Jouw naam]

### NL #2 (+3 dni)
Subject A: 3 fouten waardoor clubs niet reageren
Subject B: Wat je niet moet schrijven in je eerste mail

Body:
Veelgemaakte fouten:
1. Te veel emoties, te weinig feiten.
2. Te lange e-mail.
3. Tegelijk meerdere mensen binnen dezelfde club benaderen.

Kies per club 1 contactpersoon en 1 kanaal.

### NL #3 (+7 dni)
Subject A: Hoe het bij ons echt ging
Subject B: Geen reactie van clubs? Dit is normaal

Body:
Dit is een proces, geen sprint.
Stuur na ongeveer 2 weken een korte follow-up.
Rustige en feitelijke communicatie werkt het best.

## 5) Sekwencja EN (3 maile)

### EN #1 (0 days)
Subject A: Your PDF checklist is ready
Subject B: Start here: football club contact checklist

Body:
Hi,
thanks for signing up.
Your PDF checklist is attached.

If you want, reply with:
- age
- position
- target country

Best,
[Your name]

### EN #2 (+3 days)
Subject A: 3 mistakes that reduce reply rate
Subject B: What NOT to write in your first email

Body:
Common mistakes:
1. Emotional language instead of facts.
2. Email too long.
3. Contacting multiple people in the same club at once.

For each club, choose one contact person and one channel.

### EN #3 (+7 days)
Subject A: What this process really looks like
Subject B: No reply yet? This is normal

Body:
This is a process, not a sprint.
After around 2 weeks, send one short follow-up.
Clear and factual communication works best.

## 6) Kolejnosc modulow w Make (checklista)

1. Webhook
2. Router (PL/NL/EN)
3. Set variable (A/B)
4. Send Email #1 (+ attachment PDF)
5. Google Sheets (log send)
6. Sleep 3 days
7. Send Email #2
8. Sleep 7 days
9. Send Email #3
