# ShaveSafe LP v2 — Shot List (Del 5)

Produktfotografering følger IM8-systemet. Manglende shots renderes med nærmeste eksisterende asset fra `../img/` plus et `TODO-SHOT #n` badge, så siden kan shippe nu.

| # | Shot | Use on page | Spec | Placeholder currently used (fra `../img/`) |
|---|------|-------------|------|---------------------------------------------|
| 1 | Offer hero per tier: box contents laid out + "12-ugers pakke" text baked in | Tier card A/B, carousel img 1 | 1:1 og 4:5, brand backdrop (vælg én neutral tone, fx warm off-white eller ShaveSafe navy — vælg én gang, brug overalt) | `../img/nana-hero.jpg` (hero-img, badge "TODO-SHOT #1 — offer hero (tier packshot)") |
| 2 | Each kit item isolated: skraber, blade (5+1 close-up), gel 50 ml, gel 100 ml, 4-pack blade, rejseetui, holder | Welcome-kit strip med struck-out values; gift ladder | Samme backdrop, samme lens, samme light, centreret, 800×800 | Prøvepakken offer-contents (alle tre badget "TODO-SHOT #2"): `../img/razor-handle-product.png` (skraber), `../img/blade-closeup-numbered.jpg` (5+1 blade), `../img/gel-product-50ml.png` (gel 50 ml) |
| 3 | "What's inside" exploded: gel tube med transparent gel-swirl og de 4 aktiver som små labelled callouts | Ingredient-sektion | Replaces a paragraph | Ingen dedikeret `<img>` i ingredient-sektionen (tabel-baseret) — intet aktivt placeholder-asset i HTML endnu |
| 4 | Comparison thumbnails: ShaveSafe gel vs generic foam can (desaturated), ShaveSafe razor vs generic razor | Comparison table header | Konkurrent generisk og grå, vores i farve | Comparison-tabel kolonneheaders: `../img/gel-product-cutout.png` (ShaveSafe, `data-todo`), `../img/razor-handle-cutout.png` (typisk abonnement, grayscale), `../img/razor-closeup.jpg` (supermarked, grayscale) |
| 5 | Gel texture macro on skin: transparent, du kan se håret igennem den | "Den transparente formel" | Dette er det visuelle bevis på "se hvor du barberer" | Ingen dedikeret `<img>` / `TODO-SHOT #5` badge i HTML endnu |
| 6 | Demo: blade after shaving med skum vs med ShaveSafe gel | Visual element 4 (Del 4) | Reel, uretoucheret; dette er ShaveSafes egg-drop | Ingen dedikeret `<img>` / `TODO-SHOT #6` badge i HTML endnu |
| 7 | Før/efter pairs: bikinilinje, ben, hals (mand), armhule | Slider-sektion | Samme light, samme distance, date stamp, skriftligt samtykke på fil; ingen close-up gore — vis rolig hud, ikke knopper | Før/efter-kort (badget "TODO-SHOT #7"): bikinilinje `../img/ba-bikini-dated-v1.png` → `../img/ba-bikini-clean.png`; ben `../img/ba-legs-bumps-new.jpg` → `../img/smooth-legs-mirror.png`; hals `../img/before-after-side.jpg` → `../img/before-after.jpg`; armhule `../img/ba-belly-dated.jpg` → `../img/ba-bikini-studio.png` |
| 8 | Expert/founder video 60–90 s: Nana eller Lise-Lotte Hergel, ét rum, burned-in subtitles | "Videnskab"-sektion | 16:9 + 9:16 cut til ads | `../img/dermatologist-portrait.jpg` (video-frame, badge "TODO-SHOT #8 — ekspert/founder-video 60–90 s"). Bonus: review-video-kort bruger `../img/nana-founder.jpg` (badge "TODO — video-testimonial (9:16)") |
| 9 | Bathroom lifestyle, un-glossy: produktet på en reel hylde ved siden af reelle ting | Hero background option, origin-sektion | Honest, ikke editorial — matcher "not the prettiest product"-linjen | Ingen dedikeret `TODO-SHOT #9` badge i HTML. Nærmeste eksisterende lifestyle-assets i brug: how-sektion `../img/lifestyle-gel-hands.jpg`, `../img/lifestyle-shaving-legs.jpg`, `../img/lifestyle-mirror-towel.jpg`; origin-sektion `../img/nana-founder.jpg` |

## Rendering rules (Del 5)

- Alle produktbilleder lazy-loaded WebP ≤ 120 KB.
- Carousel-rækkefølge på mobil = 1 → 7 → 6 → 3 → 5 → 2.
- `TODO-SHOT #n` badge er kun synligt når `?debug=1`.

## AI-static fallback regel

- AI-static fallback er tilladt for shots **1–4** (via `marketingly-ai-statics`-workflowet).
- AI-static fallback er **aldrig** tilladt for shots **6–8** (blade-demo, før/efter og ekspert-/founder-video skal være reelle, uretoucherede optagelser).
