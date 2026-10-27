/* =============================================================
   ShaveSafe LP v2 — app.js
   ============================================================= */
(function () {
  'use strict';

  /* ── Debug mode (?debug=1 shows TODO-SHOT / TODO badges) ── */
  if (new URLSearchParams(location.search).get('debug') === '1') {
    document.body.classList.add('debug');
  }

  /* ── Reveal on scroll ── */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var a = btn.nextElementSibling;
      var open = btn.classList.contains('open');
      document.querySelectorAll('.faq-q').forEach(function (b) { b.classList.remove('open'); });
      document.querySelectorAll('.faq-a').forEach(function (x) { x.classList.remove('open'); });
      if (!open) { btn.classList.add('open'); a.classList.add('open'); }
    });
  });

  /* ── Tier selection (synced across both offer instances) ──
     data-tier on each card; data-url for the Shopify selling-plan URL.
     Sticky-bar fields read from the hero instance's cards. */
  var TIER_META = {
    A: { name: '12-ugers pakke', price: '167 kr/md', old: '' },
    B: { name: '4-ugers pakke',  price: '189 kr/md', old: '' }
  };
  var selectedTier = 'A';
  var stickyName = document.getElementById('stickyName');
  var stickyPrice = document.getElementById('stickyPrice');
  var stickyOld = document.getElementById('stickyOld');

  function applyTier(tier) {
    selectedTier = tier;
    // card selected states (both instances)
    document.querySelectorAll('.tier-card').forEach(function (c) {
      c.classList.toggle('selected', c.getAttribute('data-tier') === tier);
    });
    // CTA hrefs → selected tier's Shopify URL
    var url = null;
    var chosen = document.querySelector('.tier-card[data-tier="' + tier + '"]');
    if (chosen) { url = chosen.getAttribute('data-url'); }
    if (url) {
      document.querySelectorAll('[data-cta]').forEach(function (a) { a.setAttribute('href', url); });
    }
    // sticky bar
    var meta = TIER_META[tier];
    if (meta) {
      if (stickyName) stickyName.textContent = meta.name;
      if (stickyPrice) stickyPrice.textContent = meta.price;
      if (stickyOld) stickyOld.textContent = meta.old;
    }
  }

  document.querySelectorAll('.tier-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      // let tooltips / summary toggles work without changing tier
      if (e.target.closest('.tier-pershave') || e.target.closest('.tier-future')) return;
      applyTier(card.getAttribute('data-tier'));
    });
  });
  applyTier('A');

  /* ── Per-shave tooltip (tap to toggle on touch, hover on desktop) ── */
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
    var frame = 0, timer = null, started = false;

    function render(i) {
      frame = i;
      btns.forEach(function (b, bi) { b.classList.toggle('active', bi === i); });
      caption.textContent = captions[i];
      // blade position
      blade.style.transition = 'transform 0.8s ease';
      blade.style.transform = 'translateX(-50%) translateY(' + (i === 0 ? 20 : 0) + 'px)';
      // bacteria
      bacts.forEach(function (b, bi) {
        b.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        if (i === 1) {
          b.style.opacity = '1';
          b.style.transform = 'translateY(14px)';
        } else {
          b.style.opacity = '0';
          b.style.transform = 'translateY(0)';
        }
      });
      // shield
      shield.style.transition = 'opacity 0.6s ease';
      shield.style.opacity = i === 2 ? '1' : '0';
    }
    function play() {
      if (reduce) { render(2); return; }
      render(0);
      var seq = [0, 1, 2];
      var step = 0;
      timer = setInterval(function () {
        step = (step + 1) % seq.length;
        render(seq[step]);
      }, 2600);
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () {
        if (timer) { clearInterval(timer); timer = null; }
        render(i);
      });
    });
    // autoplay once visible
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries, o) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !started) { started = true; play(); o.disconnect(); }
        });
      }, { threshold: 0.4 }).observe(root);
    } else { play(); }
  })();

  /* ── Sticky bar visibility (after hero scrolls out) ── */
  var stickyBar = document.querySelector('.sticky-bar');
  var hero = document.querySelector('.hero');
  if (stickyBar && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      stickyBar.classList.toggle('visible', !e[0].isIntersecting);
    }, { threshold: 0 }).observe(hero);
  }

  /* ── Reviews feed ──
     Attempts to load the filtered feed produced by reviews-sync/.
     On success, replaces the review cards (keeping the press + video cards).
     On failure (e.g. file://), the static fallback markup in the HTML stays.
     Hard rule: these must be real, unedited reviews with a source review ID. */
  (function () {
    var grid = document.getElementById('reviewsGrid');
    if (!grid || location.protocol === 'file:') return; // skip fetch on file://
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
      .catch(function () { /* keep static fallback */ });

    function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
    function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    var STAR = '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    var CHECK = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
    function buildCard(rv) {
      var card = el('div', 'review-card' + (rv.pinned ? ' pinned' : ''));
      var initial = (rv.name || '?').trim().charAt(0).toUpperCase();
      var top = el('div', 'review-top');
      top.appendChild(el('div', 'review-avatar', esc(initial)));
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
