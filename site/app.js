/* CJ AI Automation — interactions (scroll-based reveal; no IntersectionObserver) */
(function () {
  "use strict";

  /* ---- Sticky nav shadow ---- */
  var nav = document.getElementById("nav");
  function onNavScroll() {
    if (window.scrollY > 8) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onNavScroll, { passive: true });
  onNavScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  function setMenu(open) {
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.style.display = open ? "block" : "none";
  }
  toggle.addEventListener("click", function () {
    setMenu(!toggle.classList.contains("open"));
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });

  /* ---- Reveal + counters via scroll position (robust without IO) ---- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  var started = {};

  function finalCount(el) {
    el.innerHTML = el.getAttribute("data-count") + '<span class="u">' + (el.getAttribute("data-suffix") || "") + "</span>";
  }
  function animateCount(el, key) {
    if (started[key]) return;
    started[key] = true;
    if (document.hidden) { finalCount(el); return; }
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1300, start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(eased * target);
      el.innerHTML = val + '<span class="u">' + suffix + "</span>";
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function check() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = revealEls.length - 1; i >= 0; i--) {
      var el = revealEls[i];
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) {
        el.classList.add("in");
        revealEls.splice(i, 1);
      }
    }
    counters.forEach(function (el, idx) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.85 && r.bottom > 0) animateCount(el, idx);
    });
  }

  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);

  // If the page is hidden/throttled (transitions & rAF won't run), reveal instantly
  // so content is never frozen at opacity 0. Visible tabs get the animated reveal.
  function revealInstant() {
    document.documentElement.classList.add("reveal-instant");
    revealEls.forEach(function (el) { el.classList.add("in"); });
    revealEls.length = 0;
    counters.forEach(function (el, idx) { animateCount(el, idx); });
  }
  document.addEventListener("visibilitychange", function () { if (!document.hidden) check(); });

  if (document.hidden) {
    revealInstant();
  } else {
    check();
    requestAnimationFrame(check);
    setTimeout(check, 300);
  }
  // hard safety net: after entrance animations would have finished, lock in the
  // final visible state with no transition — so content can never freeze at opacity 0
  // (e.g. in a backgrounded/throttled tab where transitions & rAF are paused).
  setTimeout(function () {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    var vh = window.innerHeight || document.documentElement.clientHeight;
    counters.forEach(function (el, idx) {
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) { started[idx] = true; finalCount(el); }
    });
    document.documentElement.classList.add("reveal-instant");
  }, 1500);

  /* ---- FAQ accordion ---- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));
  items.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      items.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
  if (items.length) {
    items[0].classList.add("open");
    var firstA = items[0].querySelector(".faq-a");
    requestAnimationFrame(function () { firstA.style.maxHeight = firstA.scrollHeight + "px"; });
  }
})();
