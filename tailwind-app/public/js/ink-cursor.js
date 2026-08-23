/**
 * Inkwake ink-cursor effect.
 * Plain canvas/JS, zero dependencies, zero framework coupling.
 * This exact file drops unchanged into every variant's hero section.
 *
 * Usage: <canvas id="ink-canvas"></canvas> then this script self-inits
 * on DOMContentLoaded against any canvas with [data-ink-cursor].
 *
 * Look: a neon paint/ink brush trail. The canvas stays blank — nothing
 * is drawn until the cursor moves. Each move emits glowing ink droplets
 * along the travelled path that drift briefly, then fade out. No ambient
 * field, no idle animation — the brush stroke IS the effect.
 */
(function () {
  "use strict";

  function initInkCursor(canvas) {
    var ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0;
    var height = 0;
    var droplets = [];
    var last = { x: null, y: null };
    var rafId = null;

    var EMIT_SPACING = 6; // min px travelled between emitted droplets
    var DROPLET_LIFE = 400; // ms — short, so the trail tracks the cursor instead of lingering
    var DROPLET_RADIUS_MIN = 4;
    var DROPLET_RADIUS_MAX = 11;
    var DRAG = 0.94;
    var PEAK_ALPHA = 0.26; // background effect — must stay well under foreground content
    var HUE_MIN = 195; // cyan
    var HUE_MAX = 320; // pink/violet
    var HUE_CYCLE_MS = 6000;
    var LIGHTNESS = 46; // additive "lighter" blend washes bright colors toward white/grey — keep this low

    function hueForTime(bornTime) {
      var phase = (bornTime % HUE_CYCLE_MS) / HUE_CYCLE_MS;
      return HUE_MIN + (HUE_MAX - HUE_MIN) * (0.5 - 0.5 * Math.cos(phase * Math.PI * 2));
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      droplets = [];
      last.x = null;
      last.y = null;
    }

    function emitAlong(x0, y0, x1, y1, speed) {
      var dx = x1 - x0;
      var dy = y1 - y0;
      var dist = Math.hypot(dx, dy);
      if (dist === 0) return;
      var steps = Math.max(1, Math.floor(dist / EMIT_SPACING));
      for (var i = 1; i <= steps; i++) {
        var t = i / steps;
        var x = x0 + dx * t;
        var y = y0 + dy * t;
        var speedFactor = Math.min(1, speed / 30);
        var bornTime = performance.now();
        droplets.push({
          x: x,
          y: y,
          vx: (dx / dist) * speedFactor * 0.6 + (Math.random() - 0.5) * 0.6,
          vy: (dy / dist) * speedFactor * 0.6 + (Math.random() - 0.5) * 0.6,
          born: bornTime,
          radius:
            DROPLET_RADIUS_MIN +
            Math.random() * (DROPLET_RADIUS_MAX - DROPLET_RADIUS_MIN) * (0.4 + speedFactor),
          hue: hueForTime(bornTime) + (Math.random() - 0.5) * 18
        });
      }
    }

    function step(time) {
      // Full clear every frame — each droplet fades itself via lifeT-based
      // alpha, so there's no need for a decaying-erase trail buffer. That
      // approach left a faint grey residue: destination-out alpha decay is
      // asymptotic and never truly reaches zero.
      ctx.clearRect(0, 0, width, height);

      if (droplets.length === 0) {
        rafId = requestAnimationFrame(step);
        return;
      }

      ctx.globalCompositeOperation = "lighter";

      for (var i = droplets.length - 1; i >= 0; i--) {
        var d = droplets[i];
        var age = time - d.born;
        if (age >= DROPLET_LIFE) {
          droplets.splice(i, 1);
          continue;
        }

        d.vx *= DRAG;
        d.vy *= DRAG;
        d.x += d.vx;
        d.y += d.vy;

        var lifeT = age / DROPLET_LIFE;
        var alpha = (1 - lifeT) * PEAK_ALPHA;
        var radius = d.radius * (1 + lifeT * 1.4);

        var gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, radius);
        gradient.addColorStop(0, "hsla(" + d.hue.toFixed(1) + ", 85%, " + LIGHTNESS + "%, " + alpha.toFixed(3) + ")");
        gradient.addColorStop(1, "hsla(" + d.hue.toFixed(1) + ", 85%, " + LIGHTNESS + "%, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      rafId = requestAnimationFrame(step);
    }

    function toLocalPoint(clientX, clientY) {
      var rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function onMove(x, y) {
      if (last.x === null) {
        last.x = x;
        last.y = y;
        return;
      }
      var dist = Math.hypot(x - last.x, y - last.y);
      emitAlong(last.x, last.y, x, y, dist);
      last.x = x;
      last.y = y;
    }

    function onPointerMove(e) {
      var p = toLocalPoint(e.clientX, e.clientY);
      onMove(p.x, p.y);
    }

    function onPointerLeave() {
      last.x = null;
      last.y = null;
    }

    function onTouchMove(e) {
      if (!e.touches || !e.touches.length) return;
      var t = e.touches[0];
      var p = toLocalPoint(t.clientX, t.clientY);
      onMove(p.x, p.y);
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("pointerdown", onPointerMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onPointerLeave);

    if (reduceMotion) {
      // No ambient animation loop; a single brush dot still responds to
      // pointerdown so the effect isn't entirely inert, but no continuous
      // rAF trail is run.
      return function destroy() {
        window.removeEventListener("resize", resize);
      };
    }

    rafId = requestAnimationFrame(step);

    return function destroy() {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointerdown", onPointerMove);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onPointerLeave);
    };
  }

  function boot() {
    var canvases = document.querySelectorAll("[data-ink-cursor]");
    for (var i = 0; i < canvases.length; i++) {
      initInkCursor(canvases[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
