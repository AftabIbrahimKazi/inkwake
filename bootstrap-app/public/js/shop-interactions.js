(function () {
  // Business logic (base prices, per-option deltas, multipliers) mirrors
  // tailwind-app's Alpine expressions exactly, per the project's "business
  // logic JS identical across variants" guardrail — only the wiring differs
  // (vanilla JS + Bootstrap-native controls here, Alpine reactivity there).
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
      var radios = Array.prototype.slice.call(workspace.querySelectorAll('input[type="radio"]'));

      function renderWorkspace() {
        var pose = workspace.querySelector('input[name="workspacePose"]:checked').value;
        var finish = workspace.querySelector('input[name="workspaceFinish"]:checked').value;
        var palette = workspace.querySelector('input[name="workspacePalette"]:checked').value;
        previewText.textContent = pose + " · " + finish + " · " + palette;
        priceText.textContent = "$" + (basePrice + poseDelta[pose] + finishDelta[finish]);
      }

      radios.forEach(function (radio) {
        radio.addEventListener("change", renderWorkspace);
      });
      renderWorkspace();
    }

    // --- Pricing matrix monthly/yearly toggle ---
    var pricingMatrix = document.getElementById("pricingMatrix");
    if (pricingMatrix) {
      var periodRadios = Array.prototype.slice.call(pricingMatrix.querySelectorAll('input[name="pricingPeriod"]'));
      var priceEls = Array.prototype.slice.call(pricingMatrix.querySelectorAll("[data-monthly-price][data-yearly-price]"));

      function renderPricing() {
        var yearly = pricingMatrix.querySelector('input[name="pricingPeriod"]:checked').value === "yearly";
        priceEls.forEach(function (el) {
          el.textContent = yearly ? el.dataset.yearlyPrice : el.dataset.monthlyPrice;
        });
      }

      periodRadios.forEach(function (radio) {
        radio.addEventListener("change", renderPricing);
      });
      renderPricing();
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
