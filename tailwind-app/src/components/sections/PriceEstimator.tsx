const ESTIMATOR_DATA = "{ category: 'figures', size: 'standard', quantity: 1, base: { figures: 65, apparel: 38, prints: 22, manga: 14 }, sizeMultiplier: { standard: 1, deluxe: 1.6, 'life-size': 4.2 }, get unitPrice() { return Math.round(this.base[this.category] * this.sizeMultiplier[this.size]); }, get total() { return this.unitPrice * this.quantity; } }";

export default function PriceEstimator() {
  return (
    <section className="bg-surface w-full" x-data={ESTIMATOR_DATA}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl md:flex-row md:items-center md:gap-4xl">
        <div className="flex flex-1 flex-col gap-lg">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Price estimator</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Build your own estimate</h2>
          <p className="text-muted max-w-[28rem] text-lg">
            Pick a category, size, and quantity — the estimate updates instantly, before you ever reach
            checkout.
          </p>
        </div>

        <div className="border-border-subtle/10 bg-hero-bg flex flex-1 flex-col gap-lg rounded-2xl border p-2xl">
          <div className="flex flex-col gap-sm">
            <label className="text-heading text-sm font-bold" htmlFor="estimator-category">
              Category
            </label>
            <select
              id="estimator-category"
              className="border-border-subtle/20 text-heading rounded-full border bg-transparent px-lg py-sm text-sm"
              {...{ "x-model": "category" }}
            >
              <option value="figures">Figures — from $65</option>
              <option value="apparel">Apparel — from $38</option>
              <option value="prints">Art prints — from $22</option>
              <option value="manga">Manga — from $14</option>
            </select>
          </div>

          <div className="flex flex-col gap-sm">
            <label className="text-heading text-sm font-bold" htmlFor="estimator-size">
              Size
            </label>
            <select
              id="estimator-size"
              className="border-border-subtle/20 text-heading rounded-full border bg-transparent px-lg py-sm text-sm"
              {...{ "x-model": "size" }}
            >
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe (1.6x)</option>
              <option value="life-size">Life-size (4.2x)</option>
            </select>
          </div>

          <div className="flex flex-col gap-sm">
            <label className="text-heading text-sm font-bold" htmlFor="estimator-quantity">
              Quantity
            </label>
            <div className="flex items-center gap-lg">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="border-border-subtle/20 text-heading flex h-9 w-9 items-center justify-center rounded-full border"
                {...{ "x-on:click": "quantity = Math.max(1, quantity - 1)" }}
              >
                −
              </button>
              <span className="text-heading w-6 text-center text-sm font-bold" x-text="quantity" suppressHydrationWarning>
                1
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="border-border-subtle/20 text-heading flex h-9 w-9 items-center justify-center rounded-full border"
                {...{ "x-on:click": "quantity = Math.min(10, quantity + 1)" }}
              >
                +
              </button>
            </div>
          </div>

          <div className="border-border-subtle/10 flex items-center justify-between border-t pt-lg">
            <span className="text-muted text-sm">Estimated total</span>
            <span className="text-heading text-2xl font-bold" x-text="'$' + total" suppressHydrationWarning>
              $65
            </span>
          </div>

          <a
            href="#"
            className="bg-accent hover:bg-accent-alt rounded-full px-2xl py-md text-center text-sm font-bold whitespace-nowrap text-white transition-colors duration-200"
          >
            Start this order
          </a>
        </div>
      </div>
    </section>
  );
}
