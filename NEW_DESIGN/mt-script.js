/* The M&T Company — interactions */
(function () {
  "use strict";

  /* ---- Build the Charleston fanlight (radiating spokes + concentric arcs) ---- */
  var fan = document.getElementById("haFan");
  if (fan) {
    // concentric arcs, sized as a % of the fan width, centred on the horizon
    [58, 92, 128].forEach(function (w, i) {
      var arc = document.createElement("div");
      arc.className = "arc";
      arc.style.width = w + "%";
      arc.style.aspectRatio = "1";
      arc.style.opacity = (0.5 - i * 0.12).toFixed(2);
      fan.appendChild(arc);
    });
    // spokes fanning up from the horizon centre, behind the sun
    var spokes = 19;
    for (var s = 0; s < spokes; s++) {
      var t = s / (spokes - 1);           // 0..1
      var deg = -84 + t * 168;            // -84..84
      var sp = document.createElement("div");
      sp.className = "spoke";
      var center = 1 - Math.abs(deg) / 90; // taller toward the middle
      sp.style.height = (62 + center * 30) + "%";
      sp.style.opacity = (0.4 + center * 0.5).toFixed(2);
      sp.style.transform = "translateX(-50%) rotate(" + deg + "deg)";
      fan.appendChild(sp);
    }
  }

  /* ---- Sweetgrass along the waterline ---- */
  var grass = document.getElementById("haGrass");
  if (grass) {
    var blades = 44;
    for (var b = 0; b < blades; b++) {
      var bl = document.createElement("div");
      bl.className = "blade";
      var depth = Math.random();                 // front blades taller/darker
      bl.style.left = (b / blades) * 100 + (Math.random() * 2 - 1) + "%";
      bl.style.height = (16 + depth * 44) + "px";
      bl.style.opacity = (0.45 + depth * 0.5).toFixed(2);
      var lean = (Math.random() * 2 - 1) * 12;
      bl.style.transform = "rotate(" + lean + "deg)";
      grass.appendChild(bl);
    }
  }

  /* ---- Scroll reveal (rAF + getBoundingClientRect; robust across embeds) ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var checkReveals = function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = reveals.length - 1; i >= 0; i--) {
        var el = reveals[i];
        var r = el.getBoundingClientRect();
        // reveal once the element's top enters the lower ~92% of the viewport
        if (r.top < vh * 0.92 && r.bottom > 0) {
          el.classList.add("in");
          reveals.splice(i, 1);
        }
      }
    };
    var scheduled = false;
    var onScroll = function () {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(function () { scheduled = false; checkReveals(); });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // initial passes (cover late layout / font load)
    checkReveals();
    setTimeout(checkReveals, 120);
    setTimeout(checkReveals, 500);
    // failsafe: never leave content invisible
    setTimeout(function () { reveals.forEach(function (el) { el.classList.add("in"); }); }, 2500);
  }

  /* ---- FAQ accordion ---- */
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      items.forEach(function (other) {
        other.classList.remove("open");
        var oa = other.querySelector(".faq-a");
        if (oa) oa.style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
  // keep an open FAQ sized correctly on resize
  window.addEventListener("resize", function () {
    var open = document.querySelector(".faq-item.open .faq-a");
    if (open) open.style.maxHeight = open.scrollHeight + "px";
  });

  /* ---- Subtle parallax drift on the hero moon (gentle, unhurried) ---- */
  var moon = document.querySelector(".hero-art .moon-lg");
  if (moon && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < 900) moon.style.transform = "translateY(" + (y * 0.04) + "px)";
    }, { passive: true });
  }
})();
