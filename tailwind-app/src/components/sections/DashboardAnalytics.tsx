// Tailwind's JIT scanner only picks up class names that appear as literal
// substrings in the source text — a template-literal like `h-[${n}%]` is
// invisible to it (it never evaluates JS), so the generated CSS would be
// missing every bar height. This lookup keeps every value used below as a
// literal string Tailwind can actually find.
const BAR_HEIGHT: Record<number, string> = {
  30: "h-[30%]",
  40: "h-[40%]",
  45: "h-[45%]",
  50: "h-[50%]",
  55: "h-[55%]",
  60: "h-[60%]",
  65: "h-[65%]",
  68: "h-[68%]",
  70: "h-[70%]",
  72: "h-[72%]",
  75: "h-[75%]",
  80: "h-[80%]",
  85: "h-[85%]",
  90: "h-[90%]",
  95: "h-[95%]",
};

const KPI_CARDS = [
  {
    label: "Orders shipped today",
    value: "1,284",
    delta: "+12.4%",
    bars: [40, 55, 45, 70, 60, 80, 95],
  },
  {
    label: "Active drops",
    value: "6",
    delta: "+2 this week",
    bars: [30, 30, 45, 45, 60, 60, 60],
  },
  {
    label: "Collector rating",
    value: "4.9",
    delta: "2,930 reviews",
    bars: [70, 72, 68, 75, 80, 85, 90],
  },
  {
    label: "Restock ETA",
    value: "3 days",
    delta: "on schedule",
    bars: [90, 85, 80, 70, 60, 50, 40],
  },
];

export default function DashboardAnalytics() {
  return (
    <section className="bg-hero-bg w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Live from the floor</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Studio analytics, in the open</h2>
          <p className="text-muted max-w-[36rem] text-lg">
            Real production numbers from the drop floor — because collectors deserve to know exactly
            what they&apos;re waiting on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-xl sm:grid-cols-2 lg:grid-cols-4">
          {KPI_CARDS.map((card) => (
            <div
              key={card.label}
              className="border-border-subtle/10 bg-surface flex flex-col gap-lg rounded-2xl border p-xl"
            >
              <span className="text-muted text-sm">{card.label}</span>
              <span className="text-heading text-3xl font-bold">{card.value}</span>

              <div className="flex h-16 items-end gap-xs">
                {card.bars.map((height, index) => (
                  <span
                    key={index}
                    className={`from-gradient-start to-gradient-end flex-1 rounded-sm bg-gradient-to-t ${BAR_HEIGHT[height]}`}
                  ></span>
                ))}
              </div>

              <span className="text-accent text-xs font-bold">{card.delta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
