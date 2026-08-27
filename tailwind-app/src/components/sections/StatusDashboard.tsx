// Reframed as customer-facing shop status, not internal ops/engineering
// status (a "system status" page with "checkout: operational" reads as a
// SaaS status board, not a storefront) — same status-pill UI pattern, just
// content a shopper actually cares about: their orders and the drops they
// want.
const STATUS_CARDS = [
  { label: "Order #IK-48213", status: "Out for delivery", tone: "ok" },
  { label: "Ronin Scale Figure", status: "In stock", tone: "ok" },
  { label: "Winter Collection restock", status: "Casting — 3 days", tone: "warn" },
  { label: "International shipping", status: "Delayed — customs", tone: "warn" },
  { label: "Streetwear Drop waitlist", status: "You're #12", tone: "ok" },
  { label: "Print Series 04", status: "Sold out", tone: "off" },
];

const TONE_CLASSES: Record<string, string> = {
  ok: "bg-accent",
  warn: "bg-accent-alt",
  off: "bg-muted",
};

export default function StatusDashboard() {
  return (
    <section className="bg-hero-bg w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Your account</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Track orders and drops, in real time</h2>
        </div>

        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {STATUS_CARDS.map((card) => (
            <a
              href="#"
              key={card.label}
              className="border-border-subtle/10 bg-surface hover:border-accent flex items-center justify-between gap-lg rounded-2xl border p-xl transition-colors duration-200"
            >
              <span className="text-heading text-sm font-bold">{card.label}</span>
              <span className="flex items-center gap-sm">
                <span className={`h-2 w-2 rounded-full ${TONE_CLASSES[card.tone]}`}></span>
                <span className="text-muted text-xs font-bold whitespace-nowrap">{card.status}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
