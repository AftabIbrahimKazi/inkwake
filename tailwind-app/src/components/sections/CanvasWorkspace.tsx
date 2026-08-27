const POSE_OPTIONS = ["Standing", "Dynamic", "Seated"];
const FINISH_OPTIONS = ["Matte", "Gloss", "Metallic"];
const PALETTE_OPTIONS = [
  { name: "Ink Violet", swatch: "bg-accent" },
  { name: "Neon Magenta", swatch: "bg-accent-alt" },
  { name: "Cyan Flare", swatch: "bg-highlight" },
];

// Business logic (base price + per-option deltas) — must stay identical
// across all three framework ports when this section is built out further,
// per the project's "business logic JS is identical across variants"
// guardrail. Alpine is only the UI-state layer wiring these numbers up.
const WORKSPACE_PRICING =
  "{ pose: 'Standing', finish: 'Matte', palette: 'Ink Violet', basePrice: 85, poseDelta: { Standing: 0, Dynamic: 20, Seated: 10 }, finishDelta: { Matte: 0, Gloss: 15, Metallic: 30 }, get total() { return this.basePrice + this.poseDelta[this.pose] + this.finishDelta[this.finish]; } }";

export default function CanvasWorkspace() {
  return (
    <section className="bg-hero-bg w-full" x-data={WORKSPACE_PRICING}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl md:flex-row md:gap-4xl">
        <div className="border-border-subtle/10 bg-surface relative flex flex-1 flex-col items-center justify-center gap-lg rounded-3xl border p-3xl">
          <span className="text-muted text-xs font-bold tracking-wide uppercase">Live preview</span>
          <div
            className="from-gradient-start to-gradient-end aspect-square w-full max-w-[20rem] rounded-2xl bg-gradient-to-br transition-all duration-200"
          ></div>
          <p className="text-heading text-sm font-bold" x-text="pose + ' · ' + finish + ' · ' + palette" suppressHydrationWarning>
            Standing · Matte · Ink Violet
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-2xl">
          <div className="flex flex-col gap-sm">
            <span className="text-accent text-xs font-bold tracking-wide uppercase">Canvas workspace</span>
            <h2 className="text-heading text-3xl font-bold tracking-tight">Design your own sculpt</h2>
            <p className="text-muted text-lg">
              Choose a pose, finish, and palette — the workspace mirrors your combination before you
              commission it.
            </p>
          </div>

          <div className="flex flex-col gap-sm">
            <span className="text-heading text-sm font-bold">Pose</span>
            <div className="flex flex-wrap gap-sm">
              {POSE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="border-border-subtle/20 text-heading rounded-full border px-lg py-xs text-sm transition-colors duration-200"
                  suppressHydrationWarning
                  {...{
                    "x-on:click": `pose = '${option}'`,
                    ":class": `{ 'bg-accent text-white border-accent': pose === '${option}' }`,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <span className="text-heading text-sm font-bold">Finish</span>
            <div className="flex flex-wrap gap-sm">
              {FINISH_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="border-border-subtle/20 text-heading rounded-full border px-lg py-xs text-sm transition-colors duration-200"
                  suppressHydrationWarning
                  {...{
                    "x-on:click": `finish = '${option}'`,
                    ":class": `{ 'bg-accent text-white border-accent': finish === '${option}' }`,
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-sm">
            <span className="text-heading text-sm font-bold">Palette</span>
            <div className="flex flex-wrap gap-sm">
              {PALETTE_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  className="border-border-subtle/20 text-heading flex items-center gap-sm rounded-full border py-xs pr-lg pl-xs text-sm transition-colors duration-200"
                  suppressHydrationWarning
                  {...{
                    "x-on:click": `palette = '${option.name}'`,
                    ":class": `{ 'border-accent': palette === '${option.name}' }`,
                  }}
                >
                  <span className={`h-6 w-6 rounded-full ${option.swatch}`}></span>
                  {option.name}
                </button>
              ))}
            </div>
          </div>

          <div className="border-border-subtle/10 flex items-center justify-between border-t pt-xl">
            <div className="flex flex-col gap-xs">
              <span className="text-muted text-sm">Commission price</span>
              <span className="text-heading text-2xl font-bold" x-text="'$' + total" suppressHydrationWarning>
                $85
              </span>
            </div>
            <a
              href="#"
              className="bg-accent hover:bg-accent-alt rounded-full px-2xl py-md text-sm font-bold whitespace-nowrap text-white transition-colors duration-200"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
