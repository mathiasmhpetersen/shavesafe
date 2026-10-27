/* =============================================================
   reviews-sync/filter.js
   The Del 4C review filter as a pure, testable function.
   Used by fetch-reviews.js. No review text is ever edited here —
   we only SELECT and ORDER. Rejected reviews are dropped, not rewritten.
   ============================================================= */

'use strict';

// Rule 3: a review must mention a body area OR a timeframe OR a failed alternative.
var BODY_AREAS = ['bikini', 'ben', 'hals', 'skæg', 'skaeg', 'armhule', 'armhuler', 'intim', 'lår', 'laar'];
var TIMEFRAMES = ['uge', 'uger', 'dag', 'dage', 'år', 'aar', 'måned', 'maaned'];
var FAILED_ALTS = ['prøvet', 'proevet', 'laser', 'voks', 'vokset', 'andre', 'andet', 'opgivet', 'virkede ikke'];

// Rule 4: reviews that are ONLY about delivery/service are excluded.
var DELIVERY_ONLY = ['levering', 'fragt', 'hurtig', 'service', 'pakke kom', 'god pris', 'fornuftig pris'];

// Rule 5: skeptic openers get pinned first.
var SKEPTIC_OPENERS = ['troede ikke', 'troede aldrig', 'skeptisk', 'sidste forsøg', 'sidste forsoeg', 'havde opgivet', 'turde ikke'];

function wordCount(s) {
  return String(s || '').trim().split(/\s+/).filter(Boolean).length;
}
function hasAny(text, list) {
  var t = text.toLowerCase();
  return list.some(function (kw) { return t.indexOf(kw) !== -1; });
}
function isDeliveryOnly(text) {
  // Only exclude if it mentions delivery/service AND nothing result-specific (rule 3 signals).
  var mentionsDelivery = hasAny(text, DELIVERY_ONLY);
  var mentionsResult = hasAny(text, BODY_AREAS) || hasAny(text, TIMEFRAMES) || hasAny(text, FAILED_ALTS);
  return mentionsDelivery && !mentionsResult;
}

/**
 * Decide whether a single normalized review passes the filter.
 * review: { rating:Number, body:String }
 */
function passes(review) {
  if (!review || Number(review.rating) !== 5) return false;        // Rule 1
  var body = String(review.body || '');
  if (wordCount(body) < 25) return false;                           // Rule 2
  var rule3 = hasAny(body, BODY_AREAS) || hasAny(body, TIMEFRAMES) || hasAny(body, FAILED_ALTS);
  if (!rule3) return false;                                         // Rule 3
  if (isDeliveryOnly(body)) return false;                           // Rule 4
  return true;
}

function isSkeptic(review) {
  return hasAny(String(review.body || ''), SKEPTIC_OPENERS);        // Rule 5
}

/**
 * Filter + order a list of normalized reviews.
 * Pins skeptic-opener reviews first (Rule 5), caps to `max` (default 9, Rule 6).
 */
function filterReviews(reviews, max) {
  max = max || 9;
  var kept = (reviews || []).filter(passes).map(function (r) {
    return Object.assign({}, r, { pinned: isSkeptic(r) });
  });
  kept.sort(function (a, b) {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;            // skeptics first
    return 0;                                                       // otherwise keep source order
  });
  return kept.slice(0, max);
}

module.exports = { passes, isSkeptic, filterReviews, wordCount };
