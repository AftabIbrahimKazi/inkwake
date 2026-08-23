(function () {
  var SHADES = ["dark", "light", "dim"];

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-theme-toggle]");
    if (!button) return;

    var root = document.documentElement;
    var current = root.dataset.themeShade || "dark";
    var next = SHADES[(SHADES.indexOf(current) + 1) % SHADES.length];

    root.dataset.themeShade = next;

    if ("bsTheme" in root.dataset) {
      root.dataset.bsTheme = next === "light" ? "light" : "dark";
    }

    if ("stTheme" in root.dataset) {
      root.dataset.stTheme = next;
    }

    document.querySelectorAll("[data-theme-toggle]").forEach(function (el) {
      el.textContent = next;
    });
  });
})();
