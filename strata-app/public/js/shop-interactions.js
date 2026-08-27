(function () {
  // Business logic (base prices, per-option deltas, multipliers) mirrors
  // tailwind-app's Alpine expressions and bootstrap-app's shop-interactions.js
  // exactly, per the project's "business logic JS identical across variants"
  // guardrail — only the wiring differs (data-attribute state + plain
  // listeners here, matching this app's own state convention).
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    // --- Price estimator ---
    var estimator = document.getElementById("priceEstimator");
    if (estimator) {
      var base = { figures: 65, apparel: 38, prints: 22, manga: 14 };
      var sizeMultiplier = { standard: 1, deluxe: 1.6, "life-size": 4.2 };
      var category = estimator.querySelector("[data-estimator-category]");
      var size = estimator.querySelector("[data-estimator-size]");
      var qtyDisplay = estimator.querySelector("[data-estimator-qty]");
      var totalDisplay = estimator.querySelector("[data-estimator-total]");
      var decreaseBtn = estimator.querySelector("[data-estimator-decrease]");
      var increaseBtn = estimator.querySelector("[data-estimator-increase]");
      var qty = 1;

      function renderEstimate() {
        var unit = Math.round(base[category.value] * sizeMultiplier[size.value]);
        qtyDisplay.textContent = qty;
        totalDisplay.textContent = "$" + unit * qty;
      }

      category.addEventListener("change", renderEstimate);
      size.addEventListener("change", renderEstimate);
      decreaseBtn.addEventListener("click", function () {
        qty = Math.max(1, qty - 1);
        renderEstimate();
      });
      increaseBtn.addEventListener("click", function () {
        qty = Math.min(10, qty + 1);
        renderEstimate();
      });
      renderEstimate();
    }

    // --- Canvas workspace ---
    var workspace = document.getElementById("canvasWorkspace");
    if (workspace) {
      var basePrice = 85;
      var poseDelta = { Standing: 0, Dynamic: 20, Seated: 10 };
      var finishDelta = { Matte: 0, Gloss: 15, Metallic: 30 };
      var previewText = workspace.querySelector("[data-workspace-preview]");
      var priceText = workspace.querySelector("[data-workspace-price]");

      function activePillValue(groupName) {
        var active = workspace.querySelector('[data-pill-group="' + groupName + '"] [data-pill][data-active="true"]');
        return active ? active.dataset.pillValue : null;
      }

      function renderWorkspace() {
        var pose = activePillValue("pose") || "Standing";
        var finish = activePillValue("finish") || "Matte";
        var palette = activePillValue("palette") || "Ink Violet";
        previewText.textContent = pose + " · " + finish + " · " + palette;
        priceText.textContent = "$" + (basePrice + poseDelta[pose] + finishDelta[finish]);
      }

      workspace.addEventListener("iw:pill-change", renderWorkspace);
      renderWorkspace();
    }

    // --- Pricing matrix monthly/yearly toggle ---
    var pricingMatrix = document.getElementById("pricingMatrix");
    if (pricingMatrix) {
      var priceEls = Array.prototype.slice.call(pricingMatrix.querySelectorAll("[data-monthly-price][data-yearly-price]"));

      function renderPricing() {
        var yearlyPill = pricingMatrix.querySelector('[data-pill="yearly"][data-active="true"]');
        priceEls.forEach(function (el) {
          el.textContent = yearlyPill ? el.dataset.yearlyPrice : el.dataset.monthlyPrice;
        });
      }

      pricingMatrix.addEventListener("iw:pill-change", renderPricing);
      renderPricing();
    }

    // --- Video box play button ---
    var playBtn = document.getElementById("videoPlayBtn");
    if (playBtn) {
      playBtn.addEventListener("click", function () {
        playBtn.dataset.stVisible = "false";
        var loading = document.getElementById("videoLoading");
        if (loading) loading.dataset.stVisible = "true";
      });
    }

    // --- Intake sheet: budget display + notes character counter ---
    var intake = document.getElementById("intakeSheet");
    if (intake) {
      var budgetInput = intake.querySelector("[data-budget-input]");
      var budgetDisplay = intake.querySelector("[data-budget-display]");
      if (budgetInput && budgetDisplay) {
        budgetInput.addEventListener("input", function () {
          budgetDisplay.textContent = "$" + budgetInput.value;
        });
      }

      var notesInput = intake.querySelector("[data-notes-input]");
      var notesCount = intake.querySelector("[data-notes-count]");
      if (notesInput && notesCount) {
        notesInput.addEventListener("input", function () {
          notesCount.textContent = notesInput.value.length + " / 500";
        });
      }
    }
  });
})();
