const TIERS = ["Standard", "Plus", "Collector"];

const FEATURE_ROWS = [
  { label: "Free shipping", values: [false, true, true] },
  { label: "Early drop access", values: [false, false, true] },
  { label: "Limited variant eligibility", values: [false, true, true] },
  { label: "Certificate of authenticity", values: [false, false, true] },
  { label: "Priority restock alerts", values: [true, true, true] },
  { label: "Dedicated collector concierge", values: [false, false, true] },
];

export default function FeatureTable() {
  return (
    <section className="bg-surface w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Membership tiers</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">What each tier unlocks</h2>
        </div>

        <div className="border-border-subtle/10 overflow-x-auto rounded-2xl border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-border-subtle/10 border-b">
                <th className="text-muted px-xl py-lg text-sm font-bold">Benefit</th>
                {TIERS.map((tier) => (
                  <th key={tier} className="text-heading px-xl py-lg text-center text-sm font-bold">
                    {tier}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_ROWS.map((row, rowIndex) => (
                // bg-hero-bg and bg-surface resolve to the identical colour
                // in every theme this app defines (dark/light/dim each set
                // both tokens to the same value) — a bg-hero-bg/40 zebra
                // stripe on a bg-surface table is invisible in all three,
                // not just dark. A row border reads in every theme instead.
                <tr
                  key={row.label}
                  className={rowIndex !== FEATURE_ROWS.length - 1 ? "border-border-subtle/10 border-b" : ""}
                >
                  <td className="text-heading px-xl py-lg text-sm">{row.label}</td>
                  {row.values.map((included, i) => (
                    <td key={i} className="px-xl py-lg text-center">
                      {included ? (
                        <span className="bg-accent/15 text-accent mx-auto flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-muted/40 mx-auto flex h-6 w-6 items-center justify-center text-xs">
                          —
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
