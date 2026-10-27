#!/usr/bin/env node
/* =============================================================
   reviews-sync/fetch-reviews.js
   Pulls reviews from the live Judge.me feed for shavesafe.dk,
   applies the Del 4C filter (filter.js) and writes reviews.json.

   HARD RULE: no review is edited, paraphrased or invented. We store
   the Judge.me review id as `source_id` on every entry. If the feed
   returns nothing after filtering, reviews.json is written with an
   empty `reviews` array — the page then keeps its static fallback.

   USAGE:
     JUDGEME_API_TOKEN=xxxx JUDGEME_SHOP=shavesafe.dk node fetch-reviews.js
     # Then re-run on a schedule (cron) to refresh.

   Judge.me public API docs: https://judge.me/api/v1  (reviews endpoint)
   Trustpilot is an alternative source; map its fields into the same
   normalized shape ({ source_id, rating, body, name, date, product }).
   ============================================================= */

'use strict';

const fs = require('fs');
const path = require('path');
const { filterReviews } = require('./filter');

const TOKEN = process.env.JUDGEME_API_TOKEN;      // TODO: set the private Judge.me API token
const SHOP = process.env.JUDGEME_SHOP || 'shavesafe.dk';
const OUT = path.join(__dirname, 'reviews.json');
const PER_PAGE = 100;

// Map Judge.me product_external_id / product title → page product tag.
// TODO: fill in real product ids/titles from the shop once known.
function productTag(review) {
  const title = (review.product_title || '').toLowerCase();
  if (title.includes('gel')) return 'Gel';
  if (title.includes('skraber') || title.includes('razor')) return 'Skraber';
  if (title.includes('bikini')) return 'Bikini Repair';
  return 'ShaveSafe';
}

function normalize(r) {
  return {
    source: 'judge.me',
    source_id: String(r.id),                     // real review id — required
    rating: Number(r.rating),
    body: String(r.body || '').trim(),
    name: [r.reviewer && r.reviewer.name].filter(Boolean).join(' ') || 'Anonym',
    date: (r.created_at || '').slice(0, 10),
    product: productTag(r),
    verified: !!r.verified_buyer
  };
}

async function fetchPage(page) {
  const url = `https://judge.me/api/v1/reviews?shop_domain=${encodeURIComponent(SHOP)}`
    + `&api_token=${encodeURIComponent(TOKEN)}&per_page=${PER_PAGE}&page=${page}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Judge.me API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.reviews || [];
}

async function main() {
  if (!TOKEN) {
    console.error('✗ JUDGEME_API_TOKEN is not set. Aborting without touching reviews.json.');
    console.error('  Get the private token from the Judge.me dashboard and re-run.');
    process.exit(1);
  }
  let all = [];
  for (let page = 1; page <= 10; page++) {
    const batch = await fetchPage(page);
    if (!batch.length) break;
    all = all.concat(batch.map(normalize));
  }
  const filtered = filterReviews(all, 9);
  const payload = {
    generated_at: new Date().toISOString(),
    source: 'judge.me',
    shop: SHOP,
    total_fetched: all.length,
    total_kept: filtered.length,
    filter: 'Del 4C — 5★, ≥25 ord, nævner kropsområde/tidsramme/fejlet alternativ, ekskl. leverings-only, skeptikere pinned',
    reviews: filtered
  };
  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`✓ Wrote ${filtered.length}/${all.length} reviews to ${OUT}`);
}

main().catch(function (err) { console.error(err); process.exit(1); });
