const STATUS_CARDS = [
  { label: "Order #IK-48213", status: "Out for delivery", tone: "primary" },
  { label: "Ronin Scale Figure", status: "In stock", tone: "primary" },
  { label: "Winter Collection restock", status: "Casting — 3 days", tone: "danger" },
  { label: "International shipping", status: "Delayed — customs", tone: "danger" },
  { label: "Streetwear Drop waitlist", status: "You're #12", tone: "primary" },
  { label: "Print Series 04", status: "Sold out", tone: "secondary" },
];

export default function StatusDashboard() {
  return (
    <section className="bg-black w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">Your account</span>
          <h2 className="text-white fw-bold">Track orders and drops, in real time</h2>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {STATUS_CARDS.map((card) => (
            <div key={card.label} className="col">
              <a href="#" className="card border h-100 p-4 d-flex flex-row align-items-center justify-content-between text-decoration-none">
                <span className="text-white fw-bold small">{card.label}</span>
                <span className={`badge rounded-pill text-bg-${card.tone}`}>{card.status}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
