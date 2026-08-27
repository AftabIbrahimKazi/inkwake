// Vertical bar charts need each bar's HEIGHT to be a percentage of a
// fixed-height container — Bootstrap ships no fixed pixel-height utility
// (only h-25/50/75/100, which are percentages of the parent's own height,
// and an auto-height flex container resolves those to 0, per the CSS
// spec). Bootstrap's native `.progress` component is width-based instead,
// and block-level width never has that auto-collapse problem, so this
// renders as a small stack of horizontal trend bars rather than a vertical
// bar chart — a genuine Bootstrap gap, not a stylistic choice.
const KPI_CARDS = [
  { label: "Orders shipped today", value: "1,284", delta: "+12.4%", bars: ["w-50", "w-75", "w-100"] },
  { label: "Active drops", value: "6", delta: "+2 this week", bars: ["w-25", "w-50", "w-75"] },
  { label: "Collector rating", value: "4.9", delta: "2,930 reviews", bars: ["w-75", "w-100", "w-100"] },
  { label: "Restock ETA", value: "3 days", delta: "on schedule", bars: ["w-100", "w-75", "w-50"] },
];

export default function DashboardAnalytics() {
  return (
    <section className="bg-black w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">Live from the floor</span>
          <h2 className="text-white fw-bold">Studio analytics, in the open</h2>
          <p className="text-secondary fs-5 col-12 col-md-8 col-lg-6">
            Real production numbers from the drop floor — because collectors deserve to know exactly
            what they&apos;re waiting on.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {KPI_CARDS.map((card) => (
            <div key={card.label} className="col">
              <div className="card border h-100 p-4 d-flex flex-column gap-3">
                <span className="text-secondary small">{card.label}</span>
                <span className="text-white fs-2 fw-bold">{card.value}</span>

                <div className="d-flex flex-column gap-1">
                  {card.bars.map((width, index) => (
                    <div key={index} className="progress" role="progressbar">
                      <div className={`progress-bar bg-primary ${width}`}></div>
                    </div>
                  ))}
                </div>

                <span className="text-primary small fw-bold">{card.delta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
