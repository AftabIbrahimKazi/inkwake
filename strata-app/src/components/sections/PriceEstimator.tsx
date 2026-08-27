export default function PriceEstimator() {
  return (
    <section className="iw-bg-surface bg-[var(--color-bg-surface)] w-100" id="priceEstimator">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column flex-md-row align-items-md-center gap-[var(--space-3xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-md)] flex-fill">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Price estimator</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Build your own estimate</h2>
          <p className="text-muted max-w-[28rem] fs-[var(--font-size-lg)]">
            Pick a category, size, and quantity — the estimate updates instantly, before you ever reach
            checkout.
          </p>
        </div>

        <div className="card bg-[var(--color-bg-hero)] p-[var(--space-xl)] flex-fill d-flex flex-column gap-[var(--space-md)]">
          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <label htmlFor="estimator-category" className="text-body fw-bold fs-[var(--font-size-sm)]">
              Category
            </label>
            <select id="estimator-category" data-estimator-category className="form-select rounded-pill">
              <option value="figures">Figures — from $65</option>
              <option value="apparel">Apparel — from $38</option>
              <option value="prints">Art prints — from $22</option>
              <option value="manga">Manga — from $14</option>
            </select>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <label htmlFor="estimator-size" className="text-body fw-bold fs-[var(--font-size-sm)]">
              Size
            </label>
            <select id="estimator-size" data-estimator-size className="form-select rounded-pill">
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe (1.6x)</option>
              <option value="life-size">Life-size (4.2x)</option>
            </select>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <span className="text-body fw-bold fs-[var(--font-size-sm)]">Quantity</span>
            <div className="d-flex align-items-center gap-[var(--space-lg)]">
              <button type="button" aria-label="Decrease quantity" data-estimator-decrease className="btn-outline-primary rounded-circle h-[36px] w-[36px]">
                −
              </button>
              <span data-estimator-qty className="text-body fw-bold" suppressHydrationWarning>
                1
              </span>
              <button type="button" aria-label="Increase quantity" data-estimator-increase className="btn-outline-primary rounded-circle h-[36px] w-[36px]">
                +
              </button>
            </div>
          </div>

          <div className="border-top-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] d-flex align-items-center justify-content-between pt-[var(--space-md)]">
            <span className="text-muted fs-[var(--font-size-sm)]">Estimated total</span>
            <span data-estimator-total className="text-body fw-bold fs-[var(--font-size-2xl)]" suppressHydrationWarning>
              $65
            </span>
          </div>

          <a href="#" className="btn-primary text-white rounded-pill text-center fs-[var(--font-size-sm)] fw-bold pt-[var(--space-md)] pb-[var(--space-md)]">
            Start this order
          </a>
        </div>
      </div>
    </section>
  );
}
