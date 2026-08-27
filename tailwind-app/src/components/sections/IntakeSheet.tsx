const CATEGORY_OPTIONS = ["Custom figure", "Apparel design", "Art print commission", "Bulk / wholesale"];
const ADDON_OPTIONS = ["Rush production", "Gift packaging", "Certificate of authenticity", "Display base"];

export default function IntakeSheet() {
  return (
    <section
      className="bg-surface w-full"
      x-data="{ budget: 250, notes: '', addons: [] }"
    >
      <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Custom commissions</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Intake sheet</h2>
          <p className="text-muted text-lg">
            Tell us what you&apos;re picturing — the studio reviews every intake sheet within two
            business days.
          </p>
        </div>

        <form className="border-border-subtle/10 bg-hero-bg flex flex-col gap-2xl rounded-3xl border p-2xl">
          <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
            <div className="flex flex-col gap-sm">
              <label htmlFor="intake-name" className="text-heading text-sm font-bold">
                Full name
              </label>
              <input
                id="intake-name"
                type="text"
                required
                className="border-border-subtle/20 text-heading placeholder:text-muted rounded-full border bg-transparent px-lg py-sm text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-sm">
              <label htmlFor="intake-email" className="text-heading text-sm font-bold">
                Email
              </label>
              <input
                id="intake-email"
                type="email"
                required
                className="border-border-subtle/20 text-heading placeholder:text-muted rounded-full border bg-transparent px-lg py-sm text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <label htmlFor="intake-category" className="text-heading text-sm font-bold">
              Commission type
            </label>
            <select
              id="intake-category"
              className="border-border-subtle/20 text-heading rounded-full border bg-transparent px-lg py-sm text-sm"
            >
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <label htmlFor="intake-budget" className="text-heading text-sm font-bold">
                Budget range
              </label>
              <span className="text-accent text-sm font-bold" x-text="'$' + budget" suppressHydrationWarning>
                $250
              </span>
            </div>
            <input
              id="intake-budget"
              type="range"
              min="50"
              max="2000"
              step="25"
              className="accent-accent w-full"
              {...{ "x-model": "budget" }}
            />
            <div className="text-muted flex justify-between text-xs">
              <span>$50</span>
              <span>$2,000+</span>
            </div>
          </div>

          <fieldset className="flex flex-col gap-sm">
            <legend className="text-heading text-sm font-bold">Add-ons</legend>
            <div className="grid grid-cols-2 gap-md">
              {ADDON_OPTIONS.map((addon) => (
                <label key={addon} className="text-muted flex items-center gap-sm text-sm">
                  <input
                    type="checkbox"
                    value={addon}
                    className="accent-accent h-4 w-4"
                    {...{ "x-model": "addons" }}
                  />
                  {addon}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <label htmlFor="intake-notes" className="text-heading text-sm font-bold">
                Project notes
              </label>
              <span className="text-muted text-xs" x-text="notes.length + ' / 500'" suppressHydrationWarning>
                0 / 500
              </span>
            </div>
            <textarea
              id="intake-notes"
              rows={4}
              maxLength={500}
              className="border-border-subtle/20 text-heading placeholder:text-muted rounded-2xl border bg-transparent px-lg py-md text-sm"
              placeholder="Describe the piece, references, and any deadlines..."
              {...{ "x-model": "notes" }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-accent hover:bg-accent-alt rounded-full px-2xl py-md text-sm font-bold whitespace-nowrap text-white transition-colors duration-200"
          >
            Submit intake sheet
          </button>
        </form>
      </div>
    </section>
  );
}
