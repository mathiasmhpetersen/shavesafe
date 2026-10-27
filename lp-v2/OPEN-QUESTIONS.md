# ShaveSafe LP v2 — OPEN-QUESTIONS.md

Page is now built to **Del 0 FINAL** — an IM8-PDP + 8-hours fusion, 18 sections in
the specified order (announcement bar → PDP hero w/ carousel + Kvinde/Mand selector +
buy box → clinical strip → spec accordion → creator-video row → quality row → mechanism
→ doctor "rooted in science" → før/efter → patent+garanti → comparison → trusted-by dark
grid → reviews wall → origin → science journal → FAQ → final offer + sticky). The old
ShaveSafe layout was dropped per instruction.

Offer stack follows Mathias's final rules (27 Oct 2026): prøvepakke stays 79 kr, all
stacking is on the refill, tiers = refill interval, same 189 kr refill on both. The page
renders with these numbers; remaining unknowns are flagged `TODO-PLAN-ID` / `TODO-SHOT` /
`TODO-STOCK` / `TODO-UGC` / `TODO-PATENT-NO` / `TODO-STUDY` / `TODO-INCI` (visible with `?debug=1`).

---

## 🔴 BLOCKING — need Mathias / data before go-live

### 1. Welcome-gift SKUs + standalone prices
Built as specified:
- **Tier A** (hver 12. uge): Razor Holder Silver (29 kr) + Travel Case (49 kr) → "Gratis velkomstgave · 78 kr værdi · 2 dele".
- **Tier B** (hver 4. uge): Razor Holder Silver (29 kr) → "29 kr værdi".

👉 Confirm both SKUs exist and the 29 kr / 49 kr standalone prices are the real
documented values (they drive the struck-through "værdi"). Gift thumbnails are
placeholders (`TODO-SHOT`) until real packshots exist.

### 2. Future-gift inventory + stock fallback
Built as specified:
- **A:** levering 3 → Bikini Line Repair Cream 50 ml (229 kr).
- **B:** levering 3 → Travel Case (49 kr); levering 6 → Bikini Line Repair Cream (229 kr).

⚠️ **Bikini Line Repair Cream was sold out on 2026-10-27.** Page shows "Så længe
lager haves — ellers gel 50 ml" and the subscription app must do a **stock check
and fall back to gel 50 ml** when the cream is unavailable (`TODO-STOCK`).
👉 Confirm the cream is back in stock before relying on it, or keep the gel fallback.

### 3. Male flow (Kvinde / Mand)
Spec: male orders swap the Bikini Line Repair Cream for the male repair product
from `/collections/til-ham`; if none exists, fall back to 100 ml gel. The live site's
Kvinde/Mand selector must map to the right future gift.
👉 Confirm the male repair SKU (or approve the 100 ml gel fallback). Currently the
page shows the female default + an HTML comment; not yet wired to a gender toggle.

### 4. "Spring prøven over" cart upgrade — consumption claim
Upgrade (not pre-selected): 79 + 189 = **268 kr**, welcome gifts ship today.
Copy: "50 ml rækker ca. 3 uger. De fleste opgraderer efter første barbering."
👉 **Verify the 50 ml ≈ 3 ugers consumption figure before printing** (spec requirement),
and confirm the "de fleste opgraderer" claim is substantiable or soften it.

### 5. Backend fulfilment of 0-kr gift line items
Gifts are meant to be 0-kr line items added to the refill order by the subscription
app via selling plan + order-sequence rule (welcome = 1st refill; future = levering 3/6).
👉 Confirm the subscription app (ReCharge / Shopify Subscriptions / etc.) can add
order-sequence-based 0-kr line items. **Never promise in copy what the backend can't ship.**

### 6. Tiered guarantee (30 / 90 dage)
30 dage on B, 90 dage on A (replaces the old flat "21 dage"). Statutory 14-day right
stays on all incl. the one-time tier.
👉 Confirm ShaveSafe will honor the tiered guarantee operationally.

---

## 🟡 NEEDS DATA (not blocking the draft)

| Item | What's needed | Where |
|---|---|---|
| Shopify selling-plan IDs | CTAs use `?tier=12uger/4uger/engangskoeb` + `&refillnow=1` placeholders | `TODO-PLAN-ID` |
| Gift / future-gift packshots | Razor Holder Silver, Travel Case, Bikini Line Repair Cream thumbnails | `TODO-SHOT` |
| Patent number | `DK ●●●●●●` on the patent card | CLAIMS #1 |
| Study summary URL | "Klinisk testet" / 94-92-89 must link to the study | CLAIMS #3/#4 |
| Gel INCI list | gel product page 404'd at build; verify 4 actives + alkohol/menthol-free | CLAIMS #6/#7 |
| Live reviews | Judge.me token to run `reviews-sync/fetch-reviews.js` (no reviews invented) | reviews-sync/ |
| B/A photo consent | written consent on file per real pair | CLAIMS #18 |
| Competitor-guarantee check | dated proof for "eneste med penge-tilbage-garanti" | CLAIMS #2 |
| Creator/UGC videos | 6 vertical 9:16 clips (native, phone-shot, subtitle-burned) for the "Det siger dem der har prøvet alt" row; currently still-image placeholders | `TODO-UGC`; format ref /refs/creator-emma-ranum.mp4 |
| Trusted-by portraits | square portraits + proof pills for Lise-Lotte Hergel, Nana + 2–3 real long-term customers; **consent on file**, no stock faces | §13 `TODO-portræt` |
| Male offer visual + male repair SKU | Kvinde/Mand swaps the hero image and the future gift (Bikini cream → male repair from /collections/til-ham, else gel 50 ml); needs a real male offer visual and the male SKU | §3 gender toggle, `TODO-SHOT` |
| "Siden 2011" founding year | used verbatim per brief; confirm the year is correct | PDP social line / CLAIMS #16 |
| Science-journal read-times | 3 real articles linked (shavesafe.dk/blogs/articles, dates verified); the "X min" read-times are estimates | §16 |

---

## 🟢 DECISIONS MADE (reversible — logged here)

1. **Design pivoted toward IM8 + 8-hours** (per your 27 Oct note): white / warm off-white
   with a peach "product world", warm near-black ink, one restrained coral accent, confident
   dark CTAs, minimal shadow, no gradients, no urgency theater. Kept Playfair display headlines
   for editorial/premium feel (IM8 uses serif for authority). Say the word if you want fully-sans
   headlines à la 8-hours — it's a one-line font swap.
2. **Price per barbering = ca. 8 kr on both A and B** (same 189 kr refill): 189 ÷ (4 blade ×
   ~6 barberinger) ≈ 8 kr, assumption in the tooltip. Per-month shown as ca. 63 kr/md (A) vs
   ca. 189 kr/md (B) — that is what makes A "bedste værdi" honestly, since the refill is identical.
3. **Shipping split now ON** (you authorized it): A/B "Altid gratis fragt", one-time tier C = standard
   fragt + razor paid + no guarantee + no gift. C is a calm grey text link only.
4. **One-time tier C = 204 kr** (women's documented before-price; men's is 213 kr — pick per audience).
5. **Removed the v1 fake countdown + fake stock bar**; mechanism wording "holder hud og blad rene"
   (not "eliminerer bakterier"); Gillette anchor ~28 kr/blad (Matas-sourced) — all retained from first draft.
6. **Named competitors OFF** (`NAMED_COMPETITORS=false`) in the comparison table.
7. **Order 1 is untouched** — skraber + blad are free, you pay for the gel; shown as an IM8-style
   gift strip with struck prices above the tier cards. Nothing added to order 1.

### Resolved since first draft
- ~~Tier A quarterly pricing~~ → both tiers use the same 189 kr refill; difference is interval + gifts + guarantee.
- ~~Welcome kit = rejseetui/holder?~~ → replaced by the specified Razor Holder Silver + Travel Case (pending SKU confirmation, #1).
