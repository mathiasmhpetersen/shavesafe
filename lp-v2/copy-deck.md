# ShaveSafe LP v2 — Copy deck

Every visible on-page Danish string, verbatim, in page order, grouped by the current **18 sections + sticky bar + footer** of the reworked IM8-PDP / 8hours layout. Strings are extracted verbatim from `index.html`.

Placeholder values are flagged with a trailing `  ⚠️ PLACEHOLDER` — these must be verified/replaced before live. Covered: prices (`79`, `99`, `189`, `204`, `63`, `29`, `49`, `78`, `229`, `268` kr), `ca. 8 kr / barbering`, the DK `●●●●●●` patent number, the journal read-time minutes, and any `TODO-*` content.

---

## 1 · Announcement bar

- Velkomsttilbud — prøvepakke 79 kr · Gratis velkomstgave · Knop-fri garanti  ⚠️ PLACEHOLDER (79)

Nav: logo image, alt `ShaveSafe`

---

## 2 · Trust micro-bar

- Knop-fri garanti
- Gratis fragt på abonnement
- Dansk patent

---

## 3 · PDP hero

### Media / carousel (left)

- Main image badge: TODO-SHOT #1 — offer visual (tekst baked in)  ⚠️ PLACEHOLDER
- Main image alt: Prøvepakken — barbering uden knopper. Velkomstgave 78 kr inkluderet.  ⚠️ PLACEHOLDER (78)
- Thumbnail badges: #1 · #7 · #5 · #3 (one thumbnail — "Kliniske tal" / `smooth-legs-mirror.png` — has no badge)  ⚠️ PLACEHOLDER (TODO-SHOT)

### Buy box (right)

- Rating: **4.8 / 5** · 277 anmeldelser
- Social proof: Mere end 100.000 tilfredse kunder · Siden 2011
- Eyebrow: Patenteret barbergel
- H1: Barbering uden knopper, kløe og indgroede hår
- Sub: Patenteret gel der holder hud og blad rene for bakterier under barberingen — så din hud slipper for at reagere bagefter.
- Pill checks: Patenteret · Klinisk testet · Knop-fri garanti

### Kvinde / Mand selector

- Label: Vælg:
- Options: Kvinde (active) · Mand

> Selecting **Mand** swaps imagery and the anchor gift. The future-gift line "Bikini Line Repair Cream 50 ml" (`data-gift-f`) becomes **Repair til ham 50 ml** (`data-gift-m`).

### Offer stack

**Order-1 strip (the prøvepakke — nothing stacks onto it):**

- I dag: 79 kr  ⚠️ PLACEHOLDER (79)
- Du betaler for gelen. Skraberen og bladet er med gratis.

Gift strip:

- Barbergel 50 ml — 79 kr  ⚠️ PLACEHOLDER (79)
- Skraber — ~~99 kr~~ gratis  ⚠️ PLACEHOLDER (99)
- Barberblad (5+1) — gratis

**Offer head:**

- Vælg hvor ofte du får refill
- Abonnement · opsig med ét klik

**Tier card A — "Hver 12. uge" (default selected):**

- Pill: Bedste værdi
- Badge: TODO-PLAN-ID  ⚠️ PLACEHOLDER
- Name: Hver 12. uge
- Contents: Refill: 100 ml gel + 4 blade
- Price: 189 kr  ⚠️ PLACEHOLDER (189)
- Billed: hver 12. uge · ca. 63 kr/md  ⚠️ PLACEHOLDER (63)
- Per shave: ca. 8 kr / barbering  ⚠️ PLACEHOLDER (ca. 8 kr / barbering)
  - Tooltip: 189 kr (100 ml gel + 4 blade) ÷ (4 blade × ca. 6 barberinger) ≈ 8 kr pr. barbering. Bekræftes før live.  ⚠️ PLACEHOLDER (189 / 8)
- Gift head: Gratis velkomstgave · 78 kr værdi · 2 dele  ⚠️ PLACEHOLDER (78)
- Gift item: Razor Holder Silver — 29 kr  ⚠️ PLACEHOLDER (29)
- Gift item: Travel Case — 49 kr  ⚠️ PLACEHOLDER (49)
- Gift ship: Sendes med din 1. refill
- Future gifts (collapsible summary): Fremtidige gaver
  - Levering 3 · Bikini Line Repair Cream 50 ml · 229 kr  ⚠️ PLACEHOLDER (229)
  - (Mand variant: Repair til ham 50 ml)
  - Så længe lager haves — ellers gel 50 ml.
  - *(hidden HTML comment: `TODO-STOCK: Bikini Line Repair Cream udsolgt 2026-10-27 → fallback gel 50 ml. Mandeflow: /collections/til-ham.`)*  ⚠️ PLACEHOLDER
- Checklist: Altid gratis fragt · 90 dages knop-fri garanti · Opsig med ét klik · ingen binding
- Sub-note: Du betaler kun **79 kr for prøvepakken nu**. Næste levering om 14 dage, derefter hver 12. uge.  ⚠️ PLACEHOLDER (79)

**Tier card B — "Hver 4. uge":**

- Pill: Mest populær
- Badge: TODO-PLAN-ID  ⚠️ PLACEHOLDER
- Name: Hver 4. uge
- Contents: Refill: 100 ml gel + 4 blade
- Price: 189 kr  ⚠️ PLACEHOLDER (189)
- Billed: hver 4. uge · ca. 189 kr/md  ⚠️ PLACEHOLDER (189)
- Per shave: ca. 8 kr / barbering  ⚠️ PLACEHOLDER (ca. 8 kr / barbering)
  - Tooltip: 189 kr (100 ml gel + 4 blade) ÷ (4 blade × ca. 6 barberinger) ≈ 8 kr pr. barbering. Bekræftes før live.  ⚠️ PLACEHOLDER (189 / 8)
- Gift head: Gratis velkomstgave · 29 kr værdi  ⚠️ PLACEHOLDER (29)
- Gift item: Razor Holder Silver — 29 kr  ⚠️ PLACEHOLDER (29)
- Gift ship: Sendes med din 1. refill
- Future gifts (collapsible summary): Fremtidige gaver
  - Levering 3 · Travel Case · 49 kr  ⚠️ PLACEHOLDER (49)
  - Levering 6 · Bikini Line Repair Cream 50 ml · 229 kr  ⚠️ PLACEHOLDER (229)
  - (Mand variant: Repair til ham 50 ml)
  - Så længe lager haves — ellers gel 50 ml.
- Checklist: Altid gratis fragt · 30 dages knop-fri garanti · Opsig med ét klik · ingen binding
- Sub-note: Du betaler kun **79 kr for prøvepakken nu**. Næste levering om 14 dage, derefter hver 4. uge.  ⚠️ PLACEHOLDER (79)

**Cart upgrade (checkbox, NOT pre-selected):**

- Spring prøven over — tag første refill med nu
- 50 ml rækker ca. 3 uger. De fleste opgraderer efter første barbering. I dag: 79 + 189 = 268 kr, og velkomstgaven sendes med det samme.  ⚠️ PLACEHOLDER (79 / 189 / 268)
- +189 kr  ⚠️ PLACEHOLDER (189)

**CTA + reassurance:**

- CTA button: Læg i kurv — 79 kr  ⚠️ PLACEHOLDER (79)
- Reassure: Ingen binding · opsig med ét klik · pengene tilbage hvis knopperne ikke forsvinder

**One-time link:**

- Eller køb prøvepakken uden abonnement til 204 kr →  ⚠️ PLACEHOLDER (204)
- Uden velkomstgave og uden knop-fri garanti · skraberen betales · standard fragt.
- *(hidden HTML comment: `TODO-PLAN-ID: one-time product URL (no selling plan)`)*  ⚠️ PLACEHOLDER

---

## 4 · Clinical numbers strip

- 94 % — oplever færre knopper efter 1–2 barberinger
- 92 % — ville anbefale ShaveSafe
- 89 % — føler sig mere selvsikre
- Source: Klinisk studie 2024 · 127 deltagere · 8 uger

---

## 5 · Accordion block

### Ingredienser (open by default)

Table (Ingrediens · Hvad den gør · Hvorfor den er her):

- Chlorhexidin (patenteret formel) · Holder hud og blad rene for bakterier gennem hele barberingen · Årsagen til knopper er bakterier i mikrosnit — ikke huden
- Aloe vera · Beroliger og køler huden · Så gelen ikke selv tilfører irritation
- E-vitamin · Antioxidant der understøtter hudbarrieren · Hud der lige er barberet, er hud der er åben
- Transparent gel-base · Du ser hvor du barberer; tilstopper ikke bladet · Færre strøg = færre mikrosnit

*(hidden HTML comment: `TODO-INCI: bekræft fuld INCI-liste mod gelens etiket på shavesafe.dk`)*  ⚠️ PLACEHOLDER

### Klinisk testet

- Klinisk studie fra 2024 med 127 deltagere over 8 uger: **94 %** oplevede færre knopper efter 1–2 barberinger, **92 %** ville anbefale ShaveSafe, og **89 %** følte sig mere selvsikre. Se studie-resuméet →
- *(hidden HTML comment: `TODO-STUDY`, link href is `#`)*  ⚠️ PLACEHOLDER

### Sådan bruger du det

1. **Påfør gelen.** Den patenterede gel danner et antibakterielt skjold på huden, inden bladet rører dig. 30 sekunder.
2. **Barber som normalt.** Skraberen med 5+1 blade i svensk stål. Gelen beskytter hvert mikrosnit. 2–3 minutter.
3. **Skyl og færdig.** Ingen bakterier, ingen inflammation. Glat hud — også dagen efter.

### Hvad det indeholder — og hvad det ikke gør

- ✓ Indeholder: Patenteret Chlorhexidin-formel · Aloe vera · E-vitamin · Transparent gel-base · Svensk stål 5+1 blade
- ✗ Indeholder ikke: Parfume · Parabener · Farvestoffer
- *(hidden HTML comment: `TODO-INCI: tilføj Alkohol · Menthol · Mikroplast når de er verificeret fri på etiketten; fjern enhver der ikke er sand`)*  ⚠️ PLACEHOLDER

### Hvad sker der — uge for uge

- Dag 1 — Første barbering uden svie. Gelen lægger et antibakterielt skjold, mens du barberer.
- Uge 1 — Mindre rødme og kløe. De fleste mærker forskel efter 1–2 barberinger.
- Uge 2–3 — Eksisterende indgroede hår arbejder sig ud — det kan se værre ud, før det bliver bedre. Det er normalt.
- Uge 4 — Rolig, jævn hud. Ingen nye knopper, fordi årsagen fjernes ved hver barbering.

---

## 6 · Creator videos

- Eyebrow: Ægte videoer
- H2: Det siger dem der har prøvet alt
- 6 video cards (all badged TODO-UGC  ⚠️ PLACEHOLDER), burned-in caption snippets:
  1. "Troede ikke på det — bikinilinjen er ren nu."
  2. "Benene efter 3 uger. Ingen knopper."
  3. "Sidste forsøg efter 10 år. Det virkede."
  4. "Skægpest i halsen — væk på 2 uger."
  5. "Armhulerne tålte endelig en barbering."
  6. "Jeg tør have bikini på igen."

---

## 7 · "Vi sætter barren højt" quality row

- Eyebrow: Ikke alle barberprodukter er ens
- H2: Vi sætter barren højt
- Dansk patent — Det eneste barberprodukt i Danmark med patent på effekten mod røde knopper og indgroede hår.
- Klinisk testet 2024 — 127 deltagere over 8 uger. Dokumenteret effekt — ikke et løfte.
- 0 % tilsætning — Ingen parfume, parabener eller farvestoffer. Skånsom mod selv den mest sensitive hud.
- Fremstillet i Danmark — Udviklet og produceret her — sammen med danske dermatologer.

---

## 8 · Mechanism

- Eyebrow: Hvorfor får du knopper?
- H2: Det er ikke din hud.<br/>Det er **bakterier.**
- Lead: Vi er ikke det pæneste produkt på hylden. Vi er det eneste i Danmark med patent på effekten mod røde knopper og indgroede hår — og det eneste der giver dig **pengene tilbage, hvis det ikke virker.**
- Frame 1: 1 · Bladet skærer
- Frame 2: 2 · Bakterier trænger ind
- Frame 3: 3 · Gel-skjoldet stopper dem
- Caption: Bladet laver mikroskopiske snit i huden.

---

## 9 · Anbefalet af læger

- Eyebrow: Anbefalet af læger
- H2: Hvad siger en læge?
- Doctor quote: "Problemet med barberingsknopper og indgroede hår skyldes bakterier på huden og hårsækkene. Ofte opstår det efter barbering, hvor bladet på skraberen ikke har været rigtig rent. Nybarberede damebikini-snit og nybarberede armhuler er mest udsatte."
- Doctor name: Lise-Lotte Hergel
- Doctor role: Praktiserende læge
- Link: Mød vores videnskabelige rådgivere →
- Video slot badge: TODO-SHOT #8 — ekspert/founder-video 16:9  ⚠️ PLACEHOLDER
- Video play label: Se: hvorfor virker det?

---

## 10 · Før / efter

- Eyebrow: Reelle resultater
- H2: Før & efter
- Sub: Reelle billeder. Ingen filter. Nana svarer selv, hvis du vil se flere.

Card 1 (badge: TODO-SHOT #7 — bikinilinje  ⚠️ PLACEHOLDER):
- Tags: Før · dag 0 / Efter · uge 4
- Name: Nana, 28 · bikinilinje
- Meta: Verificeret · 4 uger
- Quote: "Jeg turde ikke have bikini på. Nu tænker jeg ikke over det."

Card 2 (badge: TODO-SHOT #7 — ben  ⚠️ PLACEHOLDER):
- Tags: Før · dag 0 / Efter · uge 3
- Name: Maria, 31 · ben
- Meta: Verificeret · 3 uger
- Quote: "Har kæmpet med knopper på benene i årevis. Væk på en uge."

Card 3 (badge: TODO-SHOT #7 — hals (mand)  ⚠️ PLACEHOLDER):
- Tags: Før · dag 0 / Efter · uge 4
- Name: Thomas, 34 · hals
- Meta: Verificeret · 4 uger
- Quote: "Skægpest hver dag. Første gang i ti år uden røde knopper."

Card 4 (badge: TODO-SHOT #7 — skægpest (mand)  ⚠️ PLACEHOLDER):
- Tags: Før · dag 0 / Efter · uge 3
- Name: Martin, 29 · skægpest
- Meta: Verificeret · 3 uger
- Quote: "Nakke og hals var ét stort udslæt. Nu er det roligt."

- Note: Billeder gengivet med skriftligt samtykke. Resultater varierer fra person til person.

---

## 11 · De eneste der tør (patent + garanti)

- H2: De eneste i Danmark der tør

Patent card (badge: TODO-PATENT-NO  ⚠️ PLACEHOLDER):
- Seal: Dansk patent · DK ●●●●●● · 2024  ⚠️ PLACEHOLDER (DK ●●●●●●)
- H3: Det eneste patenterede i Danmark
- P: ShaveSafe er det eneste produkt i Danmark med patent på effekten mod røde knopper og indgroede hår. Patentet beskytter den antibakterielle mekanisme — ikke bare en opskrift.

Guarantee card:
- Seal: 90 · dages garanti
- H3: Knop-fri garanti
- P: Har du stadig knopper eller indgroede hår efter 3 ugers brug, får du pengene tilbage eller en sensitiv-variant gratis — fordi vi fjerner årsagen under barberingen, ikke symptomet bagefter.
- Kicker: Vi er de eneste i Danmark der giver dig pengene tilbage, hvis det ikke virker.

---

## 12 · Comparison table

- H2: Hvorfor ShaveSafe
- Column headers:
  - ShaveSafe
  - Typisk DTC-skraberabonnement
  - Skum + engangsskraber
- Rows:
  1. Patenteret mekanisme mod røde knopper og indgroede hår
  2. Fjerner bakterier under barberingen (ikke efter)
  3. Klinisk testet (2024, 127 deltagere)
  4. Penge-tilbage-garanti hvis knopperne ikke forsvinder
  5. 0 % parfume / parabener / farvestoffer
  6. Svensk stål, 5+1 blade
  7. Udviklet og produceret i Danmark
  8. Forhandles i Matas og på apoteker
  9. Opsig med ét klik
- Foot: Sammenligning af produktkategorier generelt.
- *(hidden HTML comment: `NAMED_COMPETITORS=false. Navngivne konkurrenter kræver kildehenvisning pr. række.`)*

---

## 13 · Trusted-by grid

- H2: Læger. Kunder. 100.000+ danskere.
- Sub: De bruger alle ShaveSafe.
- Cards (all badged TODO-portræt  ⚠️ PLACEHOLDER):
  - Lise-Lotte Hergel · Praktiserende læge · pill: Videnskabelig rådgiver
  - Nana · Grundlægger · pill: 15 år med knopper
  - Camilla · Kunde · pill: Kunde siden 2014
  - Rasmus · Kunde · pill: Skægpest væk på 2 uger
- Note: Rigtige portrætter — samtykke på fil. Ingen kendisser, ingen stockfotos.

---

## 14 · Reviews wall

- Eyebrow: Viser vores 5-stjernede anmeldelser
- H2: Studiet sagde 94 % færre knopper. Sådan føles det.
- Rating: 4.8 · 277 anmeldelser
- Press card quote: "Nybarberede damebikini-snit og nybarberede armhuler er mest udsatte for bakterier — derfor giver det mening at ramme årsagen under barberingen."
- Press card source: — Lise-Lotte Hergel, praktiserende læge
- Video card (badge: TODO — video-testimonial (9:16)  ⚠️ PLACEHOLDER): Sofie, 26 — "Sidste forsøg — og det der virkede."
- All-reviews link: Se alle 277 anmeldelser →

> Live cards are rendered by app.js from `reviews-sync/reviews.json`; the press + video cards above are the static fallback.

---

## 15 · Origin (staccato)

- Story image badge: TODO-SHOT #9  ⚠️ PLACEHOLDER
- Eyebrow: Hende der startede det hele
- Staccato: 15 år med knopper. / Alt afprøvet. / Så fandt hun årsagen.
- P: ShaveSafe startede ikke i et laboratorium. Det startede i et badeværelse — med Nana, vores grundlægger, der var træt af at være den kvinde, der altid sagde nej til bikini.
- P: Efter 15 år med indgroede hår, knopper og "sensitive skin"-produkter der ikke virkede, gravede hun ned i forskningen sammen med danske dermatologer og opdagede, hvad ingen af de store brands talte om: **det er bakterier, ikke huden.**
- Personal: I dag svarer Nana stadig personligt på beskeder fra kunder.

---

## 16 · Science journal

- Eyebrow: Vi er nørder — ligesom dig
- H2: Fra vores journal
- Card 1: tag **Knopper** · Skraber til kvinder mod røde knopper på ben · 17. sep 2026 · 5 min  ⚠️ PLACEHOLDER (5 min)
- Card 2: tag **Bikinilinje** · 7 fejl ved intimbarbering der giver knopper og svie · 29. aug 2026 · 6 min  ⚠️ PLACEHOLDER (6 min)
- Card 3: tag **Indgroede hår** · ShaveSafe mod skægpest i skridtet · 29. aug 2026 · 4 min  ⚠️ PLACEHOLDER (4 min)

---

## 17 · FAQ

- H2: Ofte stillede spørgsmål

- Q: Hvad er inkluderet i prøvepakken?
  - A: En ergonomisk ShaveSafe-skraber, et barberhoved med 5 blade i svensk stål plus præcisionstrimmer, og 50 ml patenteret barbergel. 79 kr i dag inkl. gratis fragt — du betaler for gelen, skraberen og bladet er med gratis.  ⚠️ PLACEHOLDER (79)
- Q: Hvad er forskellen på 4- og 12-ugers pakken?
  - A: Begge starter med prøvepakken til 79 kr og får samme refill (100 ml gel + 4 blade, 189 kr). 4-ugers pakken sender refill hver 4. uge; 12-ugers hver 12. uge — det giver den laveste pris pr. måned, 90 dages garanti og en større velkomstgave.  ⚠️ PLACEHOLDER (79 / 189)
- Q: Hvad får jeg gratis?
  - A: I prøvepakken: skraberen (99 kr) og bladet. På 12-ugers pakken følger Razor Holder Silver + Travel Case med (78 kr værdi) som velkomstgave; på 4-ugers pakken Razor Holder Silver. Senere leveringer låser flere gaver op. Ved engangskøb betaler du for skraberen.  ⚠️ PLACEHOLDER (99 / 78)
- Q: Hvordan opsiger jeg?
  - A: Med ét klik på din konto, når som helst. Ingen binding, intet opsigelsesgebyr.
- Q: Hvad dækker knop-fri garantien?
  - A: Har du stadig knopper eller indgroede hår efter 3 ugers brug, får du pengene tilbage eller en sensitiv-variant gratis. 4-ugers pakken har 30 dages garanti, 12-ugers pakken 90 dage.
- Q: Kan jeg købe uden abonnement?
  - A: Ja. Du kan købe prøvepakken én gang til 204 kr uden abonnement. Du har altid den lovpligtige 14-dages fortrydelsesret. Bemærk, at engangskøb ikke er omfattet af velkomstgaven eller knop-fri garantien.  ⚠️ PLACEHOLDER (204)
- Q: Hvorfor får jeg knopper, når jeg barberer mig?
  - A: Knopper skyldes bakterier, der trænger ind i de mikroskopiske snit, bladet laver i huden. Det er ikke din hud, der er problemet — det er bakterier. ShaveSafe holder hud og blad rene gennem hele barberingen.
- Q: Kan jeg købe ShaveSafe i Matas?
  - A: Ja, ShaveSafe forhandles i Matas og på apoteker i hele Danmark. Prøvepakke-tilbuddet med gratis fragt findes dog kun her online.

---

## 18 · Final offer block

- Thumbnail badge: TODO-SHOT #1  ⚠️ PLACEHOLDER
- H2: Klar til barbering uden knopper?
- Positioning: Det eneste i Danmark med patent på effekten — og det eneste der giver pengene tilbage, hvis det ikke virker.
- Select label: Vælg pakke
- Dropdown options:
  - Hver 12. uge · bedste værdi — 79 kr i dag  ⚠️ PLACEHOLDER (79)
  - Hver 4. uge · mest populær — 79 kr i dag  ⚠️ PLACEHOLDER (79)
  - Engangskøb — 204 kr, uden abonnement  ⚠️ PLACEHOLDER (204)
- CTA button: Læg i kurv — 79 kr  ⚠️ PLACEHOLDER (79)
- Reassure: Altid gratis fragt på abonnement · 14 dages fortrydelsesret

---

## Sticky bottom bar (tier-aware)

- Product thumb (image only)
- Dropdown options:
  - Hver 12. uge · bedste værdi
  - Hver 4. uge · mest populær
  - Engangskøb — 204 kr  ⚠️ PLACEHOLDER (204)
- CTA button: Læg i kurv — 79 kr  ⚠️ PLACEHOLDER (79)

> Label/price update dynamically via app.js when the user switches tier.

---

## Footer

- Logo image, alt `ShaveSafe`
- © 2026 ShaveSafe · Dansk patent · Alle rettigheder forbeholdes
