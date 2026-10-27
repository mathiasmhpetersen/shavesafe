# ShaveSafe LP v2 — Shot list

Product-photography brief (Del 5 of the build-prompt). Every shot below ships now with the closest existing asset as a placeholder; a `TODO-SHOT #n` badge is overlaid on-page, visible only with `?debug=1`.

## Del 5 shot list (#1–#9)

| # | Shot | Use on page | Spec | Placeholder currently used |
|---|------|-------------|------|----------------------------|
| 1 | Offer hero per tier: box contents laid out + "12-ugers pakke" text baked in | Tier card A/B, carousel img 1 — hero image (TODO-SHOT #1 badge) | 1:1 and 4:5, brand backdrop (one neutral tone — warm off-white or ShaveSafe navy, decided once, used everywhere) | `../img/nana-hero.jpg` |
| 2 | Each kit item isolated: skraber, blade (5+1 close-up), gel 50 ml, gel 100 ml, 4-pack blade, rejseetui, holder | Welcome-kit strip with struck-out values; gift ladder; Prøvepakken contents (3× TODO-SHOT #2 badges) | Same backdrop, same lens, same light, centred, 800×800 | Skraber: `../img/razor-handle-product.png` · Blade: `../img/blade-closeup-numbered.jpg` · Gel 50 ml: `../img/gel-product-50ml.png` |
| 3 | "What's inside" exploded: gel tube with a transparent gel swirl and the 4 actives as small labelled callouts | Ingredient section | Replaces a paragraph | None on page yet (ingredient section is a table, no image) |
| 4 | Comparison thumbnails: ShaveSafe gel vs generic foam can (desaturated), ShaveSafe razor vs generic razor | Comparison table header | Competitor generic and grey, ours in colour | Column thumbnails: `../img/gel-product-cutout.png` (ShaveSafe), `../img/razor-handle-cutout.png` (DTC, greyscaled), `../img/razor-closeup.jpg` (supermarked, greyscaled) — no TODO-SHOT badge |
| 5 | Gel texture macro on skin: transparent, hair visible through it | "Den transparente formel" | Visual proof of "se hvor du barberer" | None on page yet |
| 6 | Demo: blade after shaving with foam vs with ShaveSafe gel | Visual element 4 (Del 4) | Real, unretouched; ShaveSafe's egg-drop | None on page yet |
| 7 | Før/efter pairs: bikinilinje, ben, hals (male), armhule | Slider section (4× TODO-SHOT #7 badges) | Same light, same distance, date stamp, written consent on file; no close-up gore — calm skin, not bumps | Bikini: `../img/ba-bikini-dated-v1.png` → `../img/ba-bikini-clean.png` · Ben: `../img/ba-legs-bumps-new.jpg` → `../img/smooth-legs-mirror.png` · Hals: `../img/before-after-side.jpg` → `../img/before-after.jpg` · Armhule: `../img/ba-belly-dated.jpg` → `../img/ba-bikini-studio.png` |
| 8 | Expert/founder video 60–90 s: Nana or Lise-Lotte Hergel, one room, burned-in subtitles | "Videnskab" / evidence section (TODO-SHOT #8 badge) | 16:9 + 9:16 cut for ads | `../img/dermatologist-portrait.jpg` (video-testimonial fallback card in reviews uses `../img/nana-founder.jpg`) |
| 9 | Bathroom lifestyle, un-glossy: the product on a real shelf next to real things | Hero background option, origin section | Honest, not editorial — matches the "not the prettiest product" line | None on page yet |

## Offer-stack gift packshots (new)

The reworked offer stack needs clean square packshots for the welcome-gift (`.tier-gift`) and future-gift (`.tier-future`) thumbnails. All three currently stand in with an unrelated existing asset.

| Gift / product | Needs | Placeholder currently used (`data-todo` img in index.html) |
|----------------|-------|-------------------------------------------------------------|
| Razor Holder Silver (29 kr) | Clean square packshot | `../img/razor-handle-cutout.png` |
| Travel Case (49 kr) | Clean square packshot | `../img/gel-product-cutout.png` |
| Bikini Line Repair Cream 50 ml (229 kr) | Clean square packshot | `../img/gel-product-50ml.png` |

These three must be shot as clean square packshots **on the same backdrop as shot #2** (same lens/light, object centred, 800×800) so the gift strip reads as one kit.

## Rendering rules (Del 5)

- All product images lazy-loaded WebP ≤ 120 KB.
- Carousel order on mobile = 1 → 7 → 6 → 3 → 5 → 2.
- Where a shot is missing, use the closest existing asset from `lp.shavesafe.cn/img/` and overlay a small `TODO-SHOT #n` badge visible only when `?debug=1`.
- AI-static fallback (via the marketingly-ai-statics workflow) is allowed for shots 1–4; never for shots 6–8.
