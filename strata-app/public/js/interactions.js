(function () {
  var THEME_SHADES = ["dark", "light", "dim"];

  document.addEventListener("click", function (event) {
    var themeBtn = event.target.closest("[data-theme-toggle]");
    if (themeBtn) {
      var root = document.documentElement;
      var current = root.dataset.stTheme || "dark";
      var next = THEME_SHADES[(THEME_SHADES.indexOf(current) + 1) % THEME_SHADES.length];
      root.dataset.stTheme = next;
      document.querySelectorAll("[data-theme-toggle]").forEach(function (el) {
        el.textContent = next;
      });
      return;
    }

    var toggle = event.target.closest("[data-toggle-target]");
    if (toggle) {
      var target = document.querySelector(toggle.getAttribute("data-toggle-target"));
      if (!target) return;
      var attr = toggle.getAttribute("data-toggle-attr") || "visible";
      var key = "st" + attr.charAt(0).toUpperCase() + attr.slice(1);
      var isOpen = target.dataset[key] === "true";
      var nextOpen = !isOpen;
      target.dataset[key] = String(nextOpen);

      if (toggle.hasAttribute("aria-expanded")) {
        toggle.setAttribute("aria-expanded", String(nextOpen));
      }
    }
  });

  document.querySelectorAll("[data-hover-group]").forEach(function (group) {
    var triggers = Array.prototype.slice.call(group.querySelectorAll("[data-hover-target]"));
    var panels = triggers
      .map(function (t) { return document.querySelector(t.getAttribute("data-hover-target")); })
      .filter(Boolean);
    // Panels render as siblings after the group in the DOM (so the mega
    // flyout can be full-width), not as descendants — moving the mouse
    // from a trigger down into its panel would otherwise fire the group's
    // mouseleave immediately (real bug: closed the menu before you could
    // reach a link). Track triggers + panels as one hover set instead of
    // relying on DOM containment, and use a short cancelable close-delay
    // so crossing the tiny gap between a trigger and its panel — or
    // between two triggers when switching categories — doesn't flicker.
    var closeTimer = null;
    var shell = document.getElementById("iwMegaShell");

    // tailwind-app grid-stacks every category in the same cell, so its
    // wrapper's height is the constant max across ALL categories and never
    // changes on a category switch — only the content crossfades. This
    // shell is a sibling of the panels, not a parent, so it can't get that
    // for free from CSS; matching it means computing the max panel height
    // ONCE up front and never touching shell.style.height again after that.
    // Setting it per-hover (the previous approach) snapped the shell to
    // each new panel's exact height with no transition, producing a visible
    // jump on every switch that tailwind-app never has. Same fix as
    // bootstrap-app's mega-menu.js.
    if (shell) {
      var maxPanelHeight = panels.reduce(function (max, panel) {
        return Math.max(max, panel.scrollHeight);
      }, 0);
      shell.style.height = maxPanelHeight + "px";
    }

    function applyShow(trigger) {
      triggers.forEach(function (candidate) {
        var panel = document.querySelector(candidate.getAttribute("data-hover-target"));
        if (panel) panel.dataset.stVisible = candidate === trigger ? "true" : "false";
      });
    }

    function showFor(trigger) {
      // The shell shows on every hover, but since its
      // data-st-visible value doesn't actually CHANGE on a switch (stays
      // "true" the whole session), its own transition never restarts —
      // matching tailwind-app's outer wrapper, which only fades once per
      // open/close, not on every category switch.
      if (shell && shell.dataset.stVisible !== "true") {
        // First open only: Alpine's x-transition (tailwind-app) applies its
        // enter-start class, forces a reflow, then adds enter-end on the
        // next animation frame — a small built-in onset delay before the
        // CSS transition begins. Setting the attribute synchronously here
        // started strata-app's fade ~30ms earlier than tailwind-app's, a
        // real measured gap (confirmed via opacity sampling every 25ms).
        // The double-rAF pattern reproduces that same one-paint-then-
        // transition sequencing — applied to the shell and the content
        // together, so the border/background and content fade in sync.
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            shell.dataset.stVisible = "true";
            applyShow(trigger);
          });
        });
        return;
      }

      applyShow(trigger);
    }

    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        if (shell) shell.dataset.stVisible = "false";
        panels.forEach(function (panel) { panel.dataset.stVisible = "false"; });
      }, 150);
    }

    function cancelClose() {
      clearTimeout(closeTimer);
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("mouseenter", function () {
        cancelClose();
        showFor(trigger);
      });
      trigger.addEventListener("mouseleave", scheduleClose);
    });

    panels.forEach(function (panel) {
      panel.addEventListener("mouseenter", cancelClose);
      panel.addEventListener("mouseleave", scheduleClose);
    });
  });

  // Generic selectable-pill group (FAQ category tabs, region tabs, canvas
  // workspace pose/finish/palette pickers, pricing period toggle). State is
  // driven entirely by data attributes (data-active on the pill,
  // data-st-visible on any linked panel) — never class toggling, per this
  // project's state convention. Reused across every Step 4 section that
  // needs this pattern instead of a bespoke handler per section.
  document.querySelectorAll("[data-pill-group]").forEach(function (group) {
    var pills = Array.prototype.slice.call(group.querySelectorAll("[data-pill]"));

    pills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        pills.forEach(function (p) {
          p.dataset.active = String(p === pill);
        });

        var targetSel = pill.getAttribute("data-pill-target");
        if (targetSel) {
          var target = document.querySelector(targetSel);
          if (target) {
            var panelGroup = target.getAttribute("data-pill-panel-group");
            if (panelGroup) {
              document.querySelectorAll('[data-pill-panel-group="' + panelGroup + '"]').forEach(function (panel) {
                panel.dataset.stVisible = "false";
              });
            }
            target.dataset.stVisible = "true";
          }
        }

        group.dispatchEvent(new CustomEvent("iw:pill-change", { detail: { pill: pill }, bubbles: true }));
      });
    });
  });
})();
