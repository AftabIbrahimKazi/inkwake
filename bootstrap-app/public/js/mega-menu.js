(function () {
  // Bootstrap's dropdown component is native-idiom (data-bs-toggle, its own
  // JS class) — only the trigger is changed here, from click to hover, so
  // the mega-menu opens/closes the same way a user experiences it in
  // tailwind-app (Alpine hover) and strata-app (data-hover-target hover),
  // without abandoning Bootstrap's own dropdown JS for Alpine's.
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var nav = document.querySelector(".iw-header-bar .navbar-nav");
    var shell = document.getElementById("iwMegaShell");
    if (!nav || !shell || typeof bootstrap === "undefined") return;

    var items = Array.prototype.slice.call(nav.querySelectorAll(".dropdown"));
    // A short cancelable close-delay, not an instant hide-on-leave: real
    // (non-instantaneous) mouse movement crosses the small gap between the
    // trigger button and its panel — an instant mouseleave->hide closes the
    // menu before the panel is ever reached. Same fix as strata-app.
    var closeTimer = null;

    // tailwind-app grid-stacks every category in the same cell, so its
    // wrapper's height is the constant max across ALL categories and never
    // changes on a category switch — only the content crossfades. This
    // shell is a sibling of the panels, not a parent, so it can't get that
    // for free from CSS; matching it means computing the max panel height
    // ONCE up front and never touching shell.style.height again after that.
    // Setting it per-switch (the previous approach) snapped the shell to
    // each new panel's exact height with no transition, producing a visible
    // jump on every switch that tailwind-app never has.
    var maxPanelHeight = items.reduce(function (max, item) {
      var panel = item.querySelector(".dropdown-menu");
      return panel ? Math.max(max, panel.scrollHeight) : max;
    }, 0);
    shell.style.height = maxPanelHeight + "px";

    function instanceFor(item) {
      var toggle = item.querySelector('[data-bs-toggle="dropdown"]');
      return toggle ? bootstrap.Dropdown.getOrCreateInstance(toggle) : null;
    }

    function applyShow(item) {
      items.forEach(function (candidate) {
        var inst = instanceFor(candidate);
        if (!inst) return;
        if (candidate === item) {
          inst.show();
          // Dropdown.show() focuses the toggle as a matter of course (correct
          // for a real click) — but that means hovering, not just tabbing to,
          // a category shows the browser's focus ring, which tailwind-app/
          // strata-app never trigger since they never programmatically focus
          // on hover. Blur right after: a real click still focuses normally,
          // since this only runs for the hover path.
          var toggle = candidate.querySelector('[data-bs-toggle="dropdown"]');
          if (toggle) toggle.blur();
        } else {
          inst.hide();
        }
      });
    }

    function showOnly(item) {
      if (!shell.classList.contains("open")) {
        // First open only (not a switch between already-open categories):
        // Alpine's x-transition (tailwind-app) applies its enter-start
        // class, forces a reflow, then adds enter-end on the next animation
        // frame — a small built-in onset delay before the CSS transition
        // begins. Adding the class and calling show() synchronously here
        // started bootstrap-app's fade ~30ms earlier than tailwind-app's, a
        // real measured gap (confirmed via opacity sampling every 25ms).
        // The double-rAF pattern is the standard way to reproduce that same
        // one-paint-then-transition sequencing from plain JS — applied to
        // the shell AND the content's show() together, so the border/
        // background and the content fade in in sync rather than the
        // content appearing before its own border does.
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            shell.classList.add("open");
            applyShow(item);
          });
        });
        return;
      }

      applyShow(item);
    }

    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        shell.classList.remove("open");
        items.forEach(function (item) {
          var inst = instanceFor(item);
          if (inst) inst.hide();
        });
      }, 150);
    }

    function cancelClose() {
      clearTimeout(closeTimer);
    }

    items.forEach(function (item) {
      var panel = item.querySelector(".dropdown-menu");
      item.addEventListener("mouseenter", function () {
        cancelClose();
        showOnly(item);
      });
      item.addEventListener("mouseleave", scheduleClose);
      if (panel) {
        panel.addEventListener("mouseenter", cancelClose);
        panel.addEventListener("mouseleave", scheduleClose);
      }
    });
  });
})();
