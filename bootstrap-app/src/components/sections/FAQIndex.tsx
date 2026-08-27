const FAQ_CATEGORIES = [
  {
    key: "shipping",
    label: "Shipping",
    items: [
      { question: "How long does shipping take?", answer: "Standard orders ship within 3-5 business days; limited drops may take longer due to small-batch casting." },
      { question: "Do you ship internationally?", answer: "Yes — international shipping is available at checkout with duties calculated up front." },
    ],
  },
  {
    key: "orders",
    label: "Orders",
    items: [
      { question: "Can I change my order after placing it?", answer: "You have a 2-hour window after checkout to edit sizing or shipping details from your account." },
      { question: "What's your return policy?", answer: "30-day returns on unopened items; limited variants are final sale once shipped." },
    ],
  },
  {
    key: "product-care",
    label: "Product care",
    items: [
      { question: "How should I clean resin figures?", answer: "Use a soft, dry brush or microfiber cloth — avoid water and solvents on painted finishes." },
      { question: "Are the art prints archival quality?", answer: "Yes, all prints use archival pigment ink rated for 75+ years under UV-glass framing." },
    ],
  },
  {
    key: "membership",
    label: "Membership",
    items: [
      { question: "Can I cancel my membership anytime?", answer: "Yes, cancel anytime from account settings — no lock-in contracts on any tier." },
      { question: "Does Collector tier include past drops?", answer: "Collector concierge covers future drops and any back-in-stock 1-of-1 releases." },
    ],
  },
];

export default function FAQIndex() {
  return (
    <section className="iw-bg-surface w-100">
      <div className="iw-container d-flex flex-column align-items-center gap-4 py-5">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">Support</span>
          <h2 className="text-white fw-bold">Frequently asked questions</h2>
        </div>

        <ul className="nav nav-pills gap-2" role="tablist">
          {FAQ_CATEGORIES.map((category, i) => (
            <li key={category.key} className="nav-item" role="presentation">
              <button
                className={`nav-link rounded-pill ${i === 0 ? "active" : "text-secondary"}`}
                id={`faq-tab-${category.key}`}
                data-bs-toggle="pill"
                data-bs-target={`#faq-pane-${category.key}`}
                type="button"
                role="tab"
                suppressHydrationWarning
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content w-100 col-12 col-lg-8 mx-auto">
          {FAQ_CATEGORIES.map((category, i) => (
            <div
              key={category.key}
              className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
              id={`faq-pane-${category.key}`}
              role="tabpanel"
              suppressHydrationWarning
            >
              <div className="accordion" id={`faq-accordion-${category.key}`}>
                {category.items.map((item, j) => (
                  <div key={item.question} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${category.key}-${j}`}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div id={`faq-${category.key}-${j}`} className="accordion-collapse collapse" data-bs-parent={`#faq-accordion-${category.key}`}>
                      <div className="accordion-body text-secondary small">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
