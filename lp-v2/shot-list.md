# ShaveSafe LP v2 — Shot list

Product-photography brief (Del 5 of the build-prompt), remapped to the reworked IM8-PDP / 8hours layout. Every shot ships now with the closest existing asset as a placeholder; the `TODO-SHOT #n` badge sits on-page, visible only with `?debug=1`.

## Del 5 shot list (#1–#9)

Each row maps to the image standing behind its `TODO-SHOT` badge in the current `index.html`.

| # | Shot | Use on page | Spec | Placeholder currently used |
|---|------|-------------|------|----------------------------|
| 1 | Offer hero per tier: box contents laid out + "12-ugers pakke" text baked in | PDP hero carousel main + thumb #1, Final offer block thumb, sticky-bar thumb (all `TODO-SHOT #1`) | 1:1 and 4:5, brand backdrop (one neutral tone — warm off-white or ShaveSafe navy, decided once, used everywhere) | `../img/product-set.jpg` |
| 2 | Each kit item isolated: skraber, blade (5+1 close-up), gel 50 ml, gel 100 ml, 4-pack blade, rejseetui, holder | Order-1 gift strip + tier-card welcome/future gift thumbnails (no `#2` badge in current markup — see gift packshots table below) | Same backdrop, same lens, same light, centred, 800×800 | `../img/razor-handle-cutout.png` · `../img/gel-product-cutout.png` · `../img/gel-product-50ml.png` |
| 3 | "What's inside" exploded: gel tube with a transparent gel swirl and the 4 actives as small labelled callouts | PDP hero carousel thumb `#3` ("Ingredienspanel") | Replaces a paragraph | `../img/gel-product-cutout.png` |
| 4 | Comparison thumbnails: ShaveSafe gel vs generic foam can (desaturated), ShaveSafe razor vs generic razor | Comparison table column headers | Competitor generic and grey, ours in colour | `../img/gel-product-cutout.png` (ShaveSafe, `data-todo`) · `../img/razor-handle-cutout.png` (DTC, greyscaled) · `../img/razor-closeup.jpg` (supermarked, greyscaled) — no `TODO-SHOT` badge |
| 5 | Gel texture macro on skin: transparent, hair visible through it | PDP hero carousel thumb `#5` ("Gel-tekstur") | Visual proof of "se hvor du barberer" | `../img/gel-squeeze.jpg` |
| 6 | Demo: blade after shaving with foam vs with ShaveSafe gel | Not placed on page yet (Del 4 visual element) | Real, unretouched; ShaveSafe's egg-drop | None on page |
| 7 | Før/efter pairs: bikinilinje, ben, hals (mand), skægpest (mand) | PDP hero carousel thumb `#7` + 4× Før/efter cards (each `TODO-SHOT #7`) | Same light, same distance, date stamp, written consent on file; no close-up gore — calm skin, not bumps | Bikini: `../img/ba-bikini-dated-v1.png` → `../img/ba-bikini-clean.png` · Ben: `../img/ba-legs-bumps-new.jpg` → `../img/smooth-legs-mirror.png` · Hals: `../img/before-after-side.jpg` → `../img/before-after.jpg` · Skægpest: `../img/ba-belly-dated.jpg` → `../img/ba-bikini-studio.png` |
| 8 | Expert/founder video 60–90 s: Nana or Lise-Lotte Hergel, one room, burned-in subtitles | "Anbefalet af læger" section video slot (`TODO-SHOT #8`, 16:9) | 16:9 + 9:16 cut for ads | `../img/dermatologist-portrait.jpg` |
| 9 | Bathroom lifestyle, un-glossy: the product on a real shelf next to real things | Origin section story image (`TODO-SHOT #9`) | Honest, not editorial — matches the "not the prettiest product" line | `../img/nana-founder.jpg` |

## New media the IM8/8hours layout needs

Everything the reworked layout requires but does not yet have, with the existing asset currently standing in.

| Media | Format / spec | Placeholder currently used |
|-------|---------------|-----------------------------|
| Offer visual (shot #1, Kvinde) | Packshot with contents + "12-ugers pakke" + velkomstgave text baked in; 1:1 and 4:5, brand backdrop | `../img/product-set.jpg` |
| MALE offer visual (Kvinde/Mand swap) | Dedicated male version of shot #1 swapped in when **Mand** is selected; same backdrop/baked-in text | `../img/product-set.jpg` (same asset — no male offer visual exists) |
| Creator UGC video 1 | 9:16, native phone-shot, subtitle-burned; format ref `/refs/creator-emma-ranum.mp4`; caption "Troede ikke på det — bikinilinjen er ren nu." | `../img/woman-mirror-towel.jpg` |
| Creator UGC video 2 | 9:16, native, subtitle-burned; caption "Benene efter 3 uger. Ingen knopper." | `../img/smooth-legs-mirror.png` |
| Creator UGC video 3 | 9:16, native, subtitle-burned; caption "Sidste forsøg efter 10 år. Det virkede." | `../img/woman-towel.jpg` |
| Creator UGC video 4 | 9:16, native, subtitle-burned; caption "Skægpest i halsen — væk på 2 uger." | `../img/lifestyle-mirror-towel.jpg` |
| Creator UGC video 5 | 9:16, native, subtitle-burned; caption "Armhulerne tålte endelig en barbering." | `../img/woman-shaving.jpg` |
| Creator UGC video 6 | 9:16, native, subtitle-burned; caption "Jeg tør have bikini på igen." | `../img/nana-hero.jpg` |
| Expert/founder video (shot #8) | 16:9, one room, burned-in subtitles; Nana or Lise-Lotte Hergel | `../img/dermatologist-portrait.jpg` |
| Trusted-by portrait — Lise-Lotte Hergel | Square, uniform crop, consent on file | `../img/dermatologist-portrait.jpg` |
| Trusted-by portrait — Nana | Square, uniform crop, consent on file | `../img/nana-founder.jpg` |
| Trusted-by portrait — Camilla (customer) | Square, uniform crop, consent on file | `../img/woman-mirror-towel.jpg` |
| Trusted-by portrait — Rasmus (customer) | Square, uniform crop, consent on file | `../img/woman-towel.jpg` |
| Gift packshot — Razor Holder Silver (29 kr) | Clean square packshot, same backdrop as shot #2 (same lens/light, centred, 800×800) | `../img/razor-handle-cutout.png` |
| Gift packshot — Travel Case (49 kr) | Clean square packshot, same backdrop as shot #2 | `../img/gel-product-cutout.png` |
| Gift packshot — Bikini Line Repair Cream 50 ml (229 kr) | Clean square packshot, same backdrop as shot #2 (Mand flow → "Repair til ham 50 ml") | `../img/gel-product-50ml.png` |

The three gift packshots must be shot on the same backdrop as shot #2 (same lens/light, object centred, 800×800) so the gift strip reads as one kit. Review-wall video-testimonial card (`TODO — video-testimonial 9:16`, "Sofie, 26") currently stands in with `../img/nana-founder.jpg`.

## Rendering rules (Del 5)

- All product images lazy-loaded WebP ≤ 120 KB.
- Carousel order on mobile = 1 → 7 → 6 → 3 → 5 → 2.
- `TODO-SHOT #n` badges are visible only when the page is loaded with `?debug=1`.
- AI-static fallback (via the marketingly-ai-statics workflow) is allowed for shots **1–4**; **never** for shots **6–8**.
