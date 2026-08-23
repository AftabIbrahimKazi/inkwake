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

    triggers.forEach(function (trigger) {
      trigger.addEventListener("mouseenter", function () {
        triggers.forEach(function (candidate) {
          var panel = document.querySelector(candidate.getAttribute("data-hover-target"));
          if (panel) panel.dataset.stVisible = candidate === trigger ? "true" : "false";
        });
      });
    });

    group.addEventListener("mouseleave", function () {
      triggers.forEach(function (candidate) {
        var panel = document.querySelector(candidate.getAttribute("data-hover-target"));
        if (panel) panel.dataset.stVisible = "false";
      });
    });
  });
})();
