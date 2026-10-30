/* =============================================================
   ShaveSafe LP v2 — app.js  (IM8 PDP + 8hours layout)
   ============================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (new URLSearchParams(location.search).get('debug') === '1') {
    document.body.classList.add('debug');
  }

  /* ── Fade-up on scroll (quiet, once, at 20% visibility) ── */
  if (!reduce && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Number ticker — counts up once when the stat scrolls in ── */
  (function () {
    var nums = document.querySelectorAll('[data-ticker]');
    if (!nums.length) return;
    function tick(el) {
      var target = parseFloat(el.getAttribute('data-ticker'));
      var suffix = el.getAttribute('data-suffix') || '';
      if (reduce || isNaN(target)) { el.textContent = target + suffix; return; }
      var start = null, dur = 1100;
      function frame(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    if ('IntersectionObserver' in window) {
      var nObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { tick(e.target); nObs.unobserve(e.target); } });
      }, { threshold: 0.6 });
      nums.forEach(function (n) { nObs.observe(n); });
    } else {
      nums.forEach(function (n) { tick(n); });
    }
  })();

  /* ── PDP image carousel ── */
  (function () {
    var main = document.getElementById('carMain');
    var thumbs = document.querySelectorAll('#carThumbs .car-thumb');
    if (!main || !thumbs.length) return;
    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        var src = t.getAttribute('data-src');
        if (src) main.src = src;
        thumbs.forEach(function (o) { o.classList.remove('active'); });
        t.classList.add('active');
      });
    });
  })();

  /* ── Gender selector: swaps hero imagery + future-gift logic ── */
  (function () {
    var opts = document.querySelectorAll('.gs-opt');
    if (!opts.length) return;
    var main = document.getElementById('carMain');
    var IMG = { K: '../img/offer-hero.jpg', M: '../img/gel-razor-shower.jpg' }; // TODO-SHOT: dedicated male offer visual
    opts.forEach(function (o) {
      o.addEventListener('click', function () {
        var g = o.getAttribute('data-gender');
        opts.forEach(function (x) { x.classList.toggle('active', x === o); });
        if (main && IMG[g]) main.src = IMG[g];
        // swap gift names (Bikini Line Repair Creme ↔ male repair product) in welcome + future gifts
        document.querySelectorAll('[data-gift-f]').forEach(function (n) {
          var val = g === 'M' ? n.getAttribute('data-gift-m') : n.getAttribute('data-gift-f');
          if (val) n.textContent = val;
        });
      });
    });
  })();

  /* ── FAQ accordion (single-open) ── */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var a = btn.nextElementSibling;
      var open = btn.classList.contains('open');
      document.querySelectorAll('.faq-q').forEach(function (b) { b.classList.remove('open'); });
      document.querySelectorAll('.faq-a').forEach(function (x) { x.classList.remove('open'); });
      if (!open) { btn.classList.add('open'); a.classList.add('open'); }
    });
  });

  /* ── Spec accordion block (independent toggle) ── */
  document.querySelectorAll('.acc-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.parentElement.classList.toggle('open');
    });
  });

  /* ── Tier selection + dropdowns + cart upgrade ── */
  var TIER_META = {
    A: { name: '90-dages forbrug · bedste værdi', cta: 'Læg i kurv — 79 kr' },
    B: { name: '30-dages forbrug · mest populær',  cta: 'Læg i kurv — 79 kr' },
    C: { name: 'Engangskøb · uden abonnement', cta: 'Læg i kurv — 204 kr' }
  };
  var oneTimeLink = document.querySelector('[data-onetime]');
  var ONETIME_URL = oneTimeLink ? oneTimeLink.getAttribute('href') : 'https://shavesafe.dk/collections/provepakke?tier=engangskoeb';
  var selectedTier = 'A';
  var upgradeOn = false;
  var stickyName = document.getElementById('stickyName');

  function ctaUrlFor(tier) {
    if (tier === 'C') return ONETIME_URL;
    var card = document.querySelector('.tier-card[data-tier="' + tier + '"]');
    if (!card) return ONETIME_URL;
    return (upgradeOn && card.getAttribute('data-url-upgrade')) || card.getAttribute('data-url');
  }

  function applyTier(tier) {
    var changed = tier !== selectedTier;
    selectedTier = tier;
    document.querySelectorAll('.tier-card').forEach(function (c) {
      var isSel = c.getAttribute('data-tier') === tier;
      c.classList.toggle('selected', isSel);
      if (isSel && changed && !reduce) {
        var strip = c.querySelector('.gift-collapse');
        if (strip) { strip.classList.remove('fade-swap'); void strip.offsetWidth; strip.classList.add('fade-swap'); }
      }
    });
    document.querySelectorAll('[data-tier-select]').forEach(function (sel) { sel.value = tier; });
    var url = ctaUrlFor(tier);
    document.querySelectorAll('[data-cta]').forEach(function (a) {
      a.setAttribute('href', url);
      var label = a.querySelector('.cta-label');
      if (label) {
        label.textContent = (tier !== 'C' && upgradeOn) ? 'Læg i kurv — 268 kr' : TIER_META[tier].cta;
      }
    });
    if (stickyName) stickyName.textContent = TIER_META[tier].name;
  }

  // tier cards → A/B
  document.querySelectorAll('.tier-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('.tier-pershave') || e.target.closest('.gift-collapse')) return;
      applyTier(card.getAttribute('data-tier'));
    });
  });

  // dropdowns (final block + sticky) → A/B/C
  document.querySelectorAll('[data-tier-select]').forEach(function (sel) {
    sel.addEventListener('change', function () { applyTier(sel.value); });
  });

  // one-time text link → select C
  if (oneTimeLink) {
    oneTimeLink.addEventListener('click', function () { applyTier('C'); /* navigation proceeds */ });
  }

  // cart upgrade (A/B only)
  document.querySelectorAll('.upgrade-cb').forEach(function (cb) {
    cb.addEventListener('change', function () {
      upgradeOn = cb.checked;
      document.querySelectorAll('.upgrade-cb').forEach(function (o) { o.checked = upgradeOn; });
      document.querySelectorAll('.upgrade').forEach(function (u) { u.classList.toggle('checked', upgradeOn); });
      if (selectedTier === 'C') applyTier('A'); // upgrade implies a subscription tier
      else applyTier(selectedTier);
    });
  });

  applyTier('A');

  /* ── Per-shave tooltip ── */
  document.querySelectorAll('.tip').forEach(function (tip) {
    tip.addEventListener('click', function (e) {
      e.preventDefault();
      var wasOpen = tip.classList.contains('open');
      document.querySelectorAll('.tip').forEach(function (t) { t.classList.remove('open'); });
      if (!wasOpen) tip.classList.add('open');
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.tip')) {
      document.querySelectorAll('.tip').forEach(function (t) { t.classList.remove('open'); });
    }
  });

  /* ── Before / after sliders ── */
  document.querySelectorAll('.ba-slider').forEach(function (slider) {
    var after = slider.querySelector('.ba-after');
    var divider = slider.querySelector('.ba-divider');
    var handle = slider.querySelector('.ba-handle');
    var dragging = false;
    function setPos(clientX) {
      var rect = slider.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      after.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      divider.style.left = pct + '%';
      handle.style.left = pct + '%';
    }
    function start(e) { dragging = true; move(e); }
    function move(e) {
      if (!dragging) return;
      var x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
      if (e.cancelable && e.touches) e.preventDefault();
    }
    function end() { dragging = false; }
    handle.addEventListener('mousedown', start);
    slider.addEventListener('mousedown', start);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
    handle.addEventListener('touchstart', start, { passive: true });
    slider.addEventListener('touchstart', start, { passive: true });
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', end);
  });

  /* ── Mechanism animation ── */
  (function () {
    var root = document.getElementById('mechAnim');
    if (!root) return;
    var blade = document.getElementById('mechBlade');
    var shield = document.getElementById('mechShield');
    var caption = document.getElementById('mechCaption');
    var bacts = root.querySelectorAll('.mech-bact');
    var btns = root.querySelectorAll('.mech-frames button');
    var captions = [
      'Bladet laver mikroskopiske snit i huden.',
      'Bakterier trænger ind i snittene — og huden reagerer med røde knopper.',
      'ShaveSafe-gelen lægger et antibakterielt skjold, så bakterierne aldrig når ind.'
    ];
    var timer = null, started = false;
    function render(i) {
      btns.forEach(function (b, bi) { b.classList.toggle('active', bi === i); });
      caption.textContent = captions[i];
      blade.style.transition = 'transform 0.8s ease';
      blade.style.transform = 'translateX(-50%) translateY(' + (i === 0 ? 20 : 0) + 'px)';
      bacts.forEach(function (b) {
        b.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        b.style.opacity = i === 1 ? '1' : '0';
        b.style.transform = i === 1 ? 'translateY(14px)' : 'translateY(0)';
      });
      shield.style.transition = 'opacity 0.6s ease';
      shield.style.opacity = i === 2 ? '1' : '0';
    }
    function play() {
      if (reduce) { render(2); return; }
      render(0);
      var step = 0;
      timer = setInterval(function () { step = (step + 1) % 3; render(step); }, 2600);
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { if (timer) { clearInterval(timer); timer = null; } render(i); });
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, o) {
        entries.forEach(function (e) { if (e.isIntersecting && !started) { started = true; play(); o.disconnect(); } });
      }, { threshold: 0.4 }).observe(root);
    } else { play(); }
  })();

  /* ── Sticky bar visibility (after PDP hero scrolls out) ── */
  var stickyBar = document.querySelector('.sticky-bar');
  var pdp = document.querySelector('.pdp');
  if (stickyBar && pdp && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      stickyBar.classList.toggle('visible', !e[0].isIntersecting);
    }, { threshold: 0 }).observe(pdp);
  }

  /* ── Reviews feed (real Judge.me only; static fallback otherwise) ── */
  (function () {
    var grid = document.getElementById('reviewsGrid');
    if (!grid || location.protocol === 'file:') return;
    fetch('reviews-sync/reviews.json', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !data.reviews || !data.reviews.length) return;
        var pressCard = grid.querySelector('.review-card.press');
        var videoCard = grid.querySelector('.review-card.video');
        var frag = document.createDocumentFragment();
        data.reviews.slice(0, 9).forEach(function (rv) { frag.appendChild(buildCard(rv)); });
        grid.innerHTML = '';
        if (pressCard) grid.appendChild(pressCard);
        grid.appendChild(frag);
        if (videoCard) grid.appendChild(videoCard);
      })
      .catch(function () {});
    function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    var STAR = '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    var CHECK = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
    function buildCard(rv) {
      var card = el('div', 'review-card' + (rv.pinned ? ' pinned' : ''));
      var top = el('div', 'review-top');
      top.appendChild(el('div', 'review-avatar', esc((rv.name || '?').trim().charAt(0).toUpperCase())));
      var who = el('div');
      who.appendChild(el('div', 'review-name', esc(rv.name)));
      who.appendChild(el('div', 'review-verified', CHECK + ' Verificeret køb'));
      top.appendChild(who);
      card.appendChild(top);
      card.appendChild(el('div', 'review-card-stars', STAR + STAR + STAR + STAR + STAR));
      card.appendChild(el('p', 'review-text', esc(rv.body)));
      var foot = el('div', 'review-foot');
      foot.appendChild(el('span', 'review-tag', esc(rv.product || 'ShaveSafe')));
      foot.appendChild(el('span', 'review-date', esc(rv.date || '')));
      card.appendChild(foot);
      return card;
    }
  })();

})();
