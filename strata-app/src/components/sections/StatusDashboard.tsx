// tone is a plain string discriminant, not a class-name field — Strata's
// scanner only sees class strings written directly inside a className
// attribute (see DashboardAnalytics for the full explanation), so the
// actual "bg-*" literals live in the inline ternary below, not here.
const STATUS_CARDS = [
  { label: "Order #IK-48213", status: "Out for delivery", tone: "ok" },
  { label: "Ronin Scale Figure", status: "In stock", tone: "ok" },
  { label: "Winter Collection restock", status: "Casting — 3 days", tone: "warn" },
  { label: "International shipping", status: "Delayed — customs", tone: "warn" },
  { label: "Streetwear Drop waitlist", status: "You're #12", tone: "ok" },
  { label: "Print Series 04", status: "Sold out", tone: "off" },
];

export default function StatusDashboard() {
  return (
    <section className="bg-[var(--color-bg-hero)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Your account</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Track orders and drops, in real time</h2>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {STATUS_CARDS.map((card) => (
            <div key={card.label} className="col">
              <a href="#" className="card bg-[var(--color-bg-surface)] p-[var(--space-xl)] d-flex flex-row align-items-center justify-content-between">
                <span className="text-body fw-bold fs-[var(--font-size-sm)]">{card.label}</span>
                <span className="d-flex align-items-center gap-[var(--space-sm)]">
                  <span
                    className={`d-inline-block rounded-circle h-[8px] w-[8px] ${ card.tone === "ok" ? "bg-primary" : card.tone === "warn" ? "bg-[var(--color-magenta)]" : "bg-secondary" }`}
                  ></span>
                  <span className="text-muted fw-bold fs-[var(--font-size-xs)] text-nowrap">{card.status}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
