# ShaveSafe LP v2 — OPEN-QUESTIONS.md

Two irreversible decisions (prices / inventory) block the exact numbers on the
offer stack. The page is built and renders with clearly-flagged placeholders
(`TODO-PRICE`, `TODO-SKU`, `TODO-GIFTS`, visible with `?debug=1`). Everything
else that was mine to decide, I decided and logged under "Decisions made".

---

## 🔴 BLOCKING — need Mathias before go-live

### 1. Refill price on tier A (12-ugers pakke)
The "Bedste værdi" badge is only honest if tier A's price **per måned** is lower
than tier B's. That depends entirely on how the 12-week refill is priced.

- **Known:** standard refill = 189 kr (from 293 kr). 4-ugers tier B = 189 kr hver 4. uge ≈ **189 kr/md**.
- **Option A (same 189 kr, shipped every 12 weeks):** only works if one 189 kr refill
  genuinely lasts 12 weeks — which would mean tier B massively oversupplies. Unlikely.
- **Option B (quarterly bundle — recommended):** a larger refill (≈3× product: 100 ml gel + 4 blade,
  or more) at a discounted quarterly price, giving a lower /md than B. **This is what I
  built as a placeholder: 499 kr hver 12. uge → ≈167 kr/md, "Spar 15 % vs. månedlig".**

👉 **Decision needed:** real tier A price + what the 12-week refill contains. Then I recompute
`/md`, the "Spar X %" pill, and the per-barbering figure. (Currently placeholders: 499 kr, 167 kr/md, 15 %.)

### 2. Welcome kit composition — do rejseetui and skraberholder exist as SKUs?
- Built placeholder (tier A): **Skraber 99 kr + Rejseetui 79 kr + Skraberholder 49 kr = værdi 227 kr · 3 dele**.
- Tier B kit: **Skraber 99 kr**.
- Spec fallback if etui/holder don't exist: **kit = skraber + 1 ekstra gel 50 ml**.

👉 **Decision needed:** (a) do the etui + holder exist and what are their standalone prices?
(b) if not, confirm the fallback kit. Drives the gift strip + struck-out values + "værdi X kr" lines.

### 3. (Related) Tiered guarantee — will ShaveSafe honor 30 / 90 days operationally?
The build uses IM8-style tiered guarantees (30 dage on B, 90 dage on A) instead of the
current site's flat "21 dage". Confirm this is operationally OK, or I revert to a single
flat guarantee period. Statutory 14-day right stays regardless.

### 4. Future gifts inventory (tier A collapsible "Fremtidige gaver")
Placeholder: Måned 3 → gratis gel 50 ml; Måned 6 → ekstra skraberhoved-pakke.
👉 Confirm ShaveSafe can actually fulfil these, or I remove the section (`TODO-GIFTS`).

---

## 🟡 NEEDS DATA (not blocking the draft, but blocking go-live)

| Item | What's needed | Where |
|---|---|---|
| Patent number | `DK ●●●●●●` placeholder on the patent card | CLAIMS #1 |
| Study summary URL | "Klinisk testet" / 94-92-89 stats must link to the study | CLAIMS #3/#4, `TODO-STUDY` |
| Shopify selling-plan IDs | CTA links currently use `?tier=12uger / 4uger / engangskoeb` placeholders | `TODO-PLAN-ID` in index.html; pull plan IDs from shavesafe.dk/collections/provepakke |
| Gel INCI list | gel product page 404'd at build; verify the 4 actives + alkohol/menthol-free | CLAIMS #6/#7, `TODO-INCI` |
| Live reviews | Judge.me API token + product ids to run `reviews-sync/fetch-reviews.js` | reviews-sync/ (no reviews invented; feed empty until synced) |
| B/A photo consent | written consent on file for each real pair | CLAIMS #18 |
| Competitor-guarantee check | dated proof for "eneste med penge-tilbage-garanti" | CLAIMS #2 |

---

## 🟢 DECISIONS MADE (reversible — changed/assumed, logged here)

1. **Removed the fake countdown timer and fake stock bar** from v1. Del 3 + the Del 6 legal
   filter ban "fake countdowns, no fake stock," and theater undermines the skeptic avatar.
2. **Gillette anchor = "ca. 28 kr/blad"** (Matas Mach3 Turbo 5-pak, 140 kr, 2026-10-27),
   not the spec's unverified "ca. 25 kr". The anchor line is drafted but NOT yet placed on the
   page — decide whether to run it in the offer prose (currently per-barbering lives in the tooltip).
3. **One-time tier C = 204 kr** (women's documented before-price). If the LP targets men, the
   documented before-price is 213 kr — pick per audience.
4. **Mechanism wording = "holder hud og blad rene for bakterier"** (mechanical), not "eliminerer
   bakterier" (therapeutic/biocide), per the Del 6 fallback — safe default until supplier clearance confirmed.
5. **Customer number = 100.000+** in the trust bar (one number, per Del 3); review count 277 kept
   separate. Confirm 100.000+ is substantiable (CLAIMS #16).
6. **Named competitors OFF** (`NAMED_COMPETITORS=false`): comparison table uses generic category
   labels ("Typisk DTC-skraber­abonnement", "Skum + engangsskraber"). Turning on named columns needs a
   sourced URL per factual row (noted in the HTML comment).
7. **Charts/urgency:** no shame-based decline on tier C — it's a calm grey text link, as specced.
8. **Shipping:** kept "Altid gratis fragt" on all tiers (true on the real site). Did NOT invent a
   shipping charge for tier C to make it look worse — C is made worse honestly (no kit, no guarantee,
   full price, no per-shave framing). If you want a real shipping differentiator, tell me.
9. **Deliverable location:** `/lp-v2/` at repo root (per spec), images referenced at `../img/`.
