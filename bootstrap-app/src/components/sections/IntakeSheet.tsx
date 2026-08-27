const CATEGORY_OPTIONS = ["Custom figure", "Apparel design", "Art print commission", "Bulk / wholesale"];
const ADDON_OPTIONS = ["Rush production", "Gift packaging", "Certificate of authenticity", "Display base"];

export default function IntakeSheet() {
  return (
    <section className="w-100" id="intakeSheet">
      <div className="iw-container d-flex flex-column gap-4 py-5 col-12 col-lg-8 mx-auto">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">Custom commissions</span>
          <h2 className="text-white fw-bold">Intake sheet</h2>
          <p className="text-secondary fs-5">
            Tell us what you&apos;re picturing — the studio reviews every intake sheet within two
            business days.
          </p>
        </div>

        <form className="card bg-black border p-4 d-flex flex-column gap-4">
          <div className="row g-4">
            <div className="col-12 col-md-6 d-flex flex-column gap-2">
              <label htmlFor="intake-name" className="text-white fw-bold small">
                Full name
              </label>
              <input id="intake-name" type="text" required className="form-control rounded-pill" placeholder="Your name" />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column gap-2">
              <label htmlFor="intake-email" className="text-white fw-bold small">
                Email
              </label>
              <input id="intake-email" type="email" required className="form-control rounded-pill" placeholder="you@example.com" />
            </div>
          </div>

          <div className="d-flex flex-column gap-2">
            <label htmlFor="intake-category" className="text-white fw-bold small">
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

          <div className="d-flex flex-column gap-2">
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="intake-budget" className="text-white fw-bold small">
                Budget range
              </label>
              <span data-budget-display className="text-primary fw-bold small" suppressHydrationWarning>
                $250
              </span>
            </div>
            <input id="intake-budget" type="range" min="50" max="2000" step="25" defaultValue="250" data-budget-input className="form-range" />
            <div className="d-flex justify-content-between text-secondary small">
              <span>$50</span>
              <span>$2,000+</span>
            </div>
          </div>

          <fieldset className="d-flex flex-column gap-2">
            <legend className="text-white fw-bold small col-form-label p-0">Add-ons</legend>
            <div className="row row-cols-2 g-2">
              {ADDON_OPTIONS.map((addon, i) => (
                <div key={addon} className="col form-check">
                  <input type="checkbox" value={addon} className="form-check-input" id={`addon-${i}`} />
                  <label className="form-check-label text-secondary small" htmlFor={`addon-${i}`}>
                    {addon}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="d-flex flex-column gap-2">
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="intake-notes" className="text-white fw-bold small">
                Project notes
              </label>
              <span data-notes-count className="text-secondary small" suppressHydrationWarning>
                0 / 500
              </span>
            </div>
            <textarea
              id="intake-notes"
              rows={4}
              maxLength={500}
              data-notes-input
              className="form-control rounded-4"
              placeholder="Describe the piece, references, and any deadlines..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary rounded-pill fw-bold text-white">
            Submit intake sheet
          </button>
        </form>
      </div>
    </section>
  );
}
