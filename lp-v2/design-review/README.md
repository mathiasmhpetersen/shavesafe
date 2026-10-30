# LP v2 — Design review (Del 7 "Dermatolog" polish pass)

Before/after of the visual-polish pass that takes lp-v2 from a coral/peach/Playfair
Shopify-theme look to the cold **"Dermatolog"** system — one teal brand colour, paper-white
UI, warmth only from skin photography.

| File | What it shows |
|------|---------------|
| `before-1440.png` | Full desktop page — previous coral/peach/Playfair design (git HEAD) |
| `after-1440.png`  | Full desktop page — new teal/Instrument-Serif design |
| `before-390.png`  | Mobile hero + buy box — before (rendered at 500px, headless min viewport) |
| `after-390.png`   | Mobile hero + buy box — after |

## What changed

- **Colour:** removed coral, peach, gold and the dark-green trust bar. One cold world —
  `--teal #1F6F78` as the single brand hue, `--bg #FBFBF9` paper white, `--ink #0F1720`,
  two full-bleed teal bands (clinical stats, trusted-by) and two dark bands (mechanism,
  journal + final CTA). All colour lives in `../tokens.css`; the stylesheet has no stray
  brand hex (only white, ink/white overlays, a dev-only `?debug=1` badge, and the steel
  gradient inside the mechanism blade illustration).
- **Type:** Instrument Serif (display, 400 + italic) + Inter (UI, 400/500/600, never 700).
  Strict scale (H1 64/40 … body 17/16). Second headline line set italic in `--teal` on six
  sections (mechanism, creators, quality, before/after, patent, reviews).
- **Spacing:** 8px grid, every section padded 128px desktop / 80px mobile.
- **Three new components:** seals (thin teal stamps, replace all generic trust icons),
  the doctor block (bg-2 card + portrait + serif-22 quote, reused for the Nana origin),
  and clinical stats (teal band, 2px top rule per column, serif-56 numerals, never boxed).
- **Motion (vanilla, reduced-motion-safe):** fade-up at 20% visibility, number ticker on
  the clinical stats, 200 ms crossfade on tier switch, blurred sticky bar.

## How these were produced

Rendered with headless Chrome at `--force-prefers-reduced-motion` (so number tickers and
fade-ups show their final state). The "before" set is reconstructed from the git HEAD
version of `index.html`/`styles.css`/`app.js`.

> Headless Chrome enforces a 500px-minimum layout viewport, so the `*-390.png` files are the
> true layout at 500px, not 375/390. Horizontal-overflow was verified separately:
> `scrollWidth === clientWidth` at every width — the only `overflow-x` is the intended
> creator-video / thumbnail carousels.
