export default function PriceEstimator() {
  return (
    <section className="iw-bg-surface w-100" id="priceEstimator">
      <div className="iw-container d-flex flex-column flex-md-row align-items-md-center gap-5 py-5">
        <div className="d-flex flex-column gap-3 flex-fill">
          <span className="text-primary small fw-bold text-uppercase">Price estimator</span>
          <h2 className="text-white fw-bold">Build your own estimate</h2>
          <p className="text-secondary fs-5 col-12 col-lg-8">
            Pick a category, size, and quantity — the estimate updates instantly, before you ever reach
            checkout.
          </p>
        </div>

        <div className="card bg-black border p-4 flex-fill d-flex flex-column gap-3">
          <div className="d-flex flex-column gap-2">
            <label htmlFor="estimator-category" className="text-white fw-bold small">
              Category
            </label>
            <select id="estimator-category" data-estimator-category className="form-select rounded-pill">
              <option value="figures">Figures — from $65</option>
              <option value="apparel">Apparel — from $38</option>
              <option value="prints">Art prints — from $22</option>
              <option value="manga">Manga — from $14</option>
            </select>
          </div>

          <div className="d-flex flex-column gap-2">
            <label htmlFor="estimator-size" className="text-white fw-bold small">
              Size
            </label>
            <select id="estimator-size" data-estimator-size className="form-select rounded-pill">
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe (1.6x)</option>
              <option value="life-size">Life-size (4.2x)</option>
            </select>
          </div>

          <div className="d-flex flex-column gap-2">
            <span className="text-white fw-bold small">Quantity</span>
            <div className="d-flex align-items-center gap-3">
              <button type="button" aria-label="Decrease quantity" data-estimator-decrease className="btn btn-outline-light rounded-circle">
                −
              </button>
              <span data-estimator-qty className="text-white fw-bold" suppressHydrationWarning>
                1
              </span>
              <button type="button" aria-label="Increase quantity" data-estimator-increase className="btn btn-outline-light rounded-circle">
                +
              </button>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between border-top pt-3">
            <span className="text-secondary small">Estimated total</span>
            <span data-estimator-total className="text-white fs-3 fw-bold" suppressHydrationWarning>
              $65
            </span>
          </div>

          <a href="#" className="btn btn-primary rounded-pill fw-bold text-white">
            Start this order
          </a>
        </div>
      </div>
    </section>
  );
}
