const CATEGORY_OPTIONS = ["Custom figure", "Apparel design", "Art print commission", "Bulk / wholesale"];
const ADDON_OPTIONS = ["Rush production", "Gift packaging", "Certificate of authenticity", "Display base"];

export default function IntakeSheet() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100" id="intakeSheet">
      <div className="mx-auto w-100 max-w-[56rem] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Custom commissions</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Intake sheet</h2>
          <p className="text-muted fs-[var(--font-size-lg)]">
            Tell us what you&apos;re picturing — the studio reviews every intake sheet within two
            business days.
          </p>
        </div>

        <form className="card bg-[var(--color-bg-hero)] p-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)]">
          <div className="row g-[var(--space-xl)]">
            <div className="col-12 col-md-6 d-flex flex-column gap-[var(--space-sm)]">
              <label htmlFor="intake-name" className="text-body fw-bold fs-[var(--font-size-sm)]">
                Full name
              </label>
              <input id="intake-name" type="text" required className="form-control rounded-pill" placeholder="Your name" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-[var(--space-sm)]">
              <label htmlFor="intake-email" className="text-body fw-bold fs-[var(--font-size-sm)]">
                Email
              </label>
              <input id="intake-email" type="email" required className="form-control rounded-pill" placeholder="you@example.com" />
            </div>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <label htmlFor="intake-category" className="text-body fw-bold fs-[var(--font-size-sm)]">
              Commission type
            </label>
            <select id="intake-category" className="form-select rounded-pill">
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="intake-budget" className="text-body fw-bold fs-[var(--font-size-sm)]">
                Budget range
              </label>
              <span data-budget-display className="text-primary fw-bold fs-[var(--font-size-sm)]" suppressHydrationWarning>
                $250
              </span>
            </div>
            <input id="intake-budget" type="range" min="50" max="2000" step="25" defaultValue="250" data-budget-input className="form-range" />
            <div className="text-muted d-flex justify-content-between fs-[var(--font-size-xs)]">
              <span>$50</span>
              <span>$2,000+</span>
            </div>
          </div>

          <fieldset className="border-0 p-0 m-0 d-flex flex-column gap-[var(--space-sm)]">
            <legend className="text-body fw-bold fs-[var(--font-size-sm)]">Add-ons</legend>
            <div className="row row-cols-2 g-[var(--space-sm)]">
              {ADDON_OPTIONS.map((addon, i) => (
                <div key={addon} className="col form-check">
                  <input type="checkbox" value={addon} className="form-check-input" id={`addon-${i}`} />
                  <label className="text-muted fs-[var(--font-size-sm)]" htmlFor={`addon-${i}`}>
                    {addon}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="d-flex flex-column gap-[var(--space-sm)]">
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="intake-notes" className="text-body fw-bold fs-[var(--font-size-sm)]">
                Project notes
              </label>
              <span data-notes-count className="text-muted fs-[var(--font-size-xs)]" suppressHydrationWarning>
                0 / 500
              </span>
            </div>
            <textarea
              id="intake-notes"
              rows={4}
              maxLength={500}
              data-notes-input
              className="form-control rounded-[16px]"
              placeholder="Describe the piece, references, and any deadlines..."
            ></textarea>
          </div>

          <button type="submit" className="btn-primary text-white rounded-pill fw-bold fs-[var(--font-size-sm)] pt-[var(--space-md)] pb-[var(--space-md)]">
            Submit intake sheet
          </button>
        </form>
      </div>
    </section>
  );
}
