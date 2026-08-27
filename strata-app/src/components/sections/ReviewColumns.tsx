const REVIEWS = [
  { name: "Mika T.", product: "Ronin Scale Figure", rating: 5, text: "The sculpt detail is genuinely better than pieces twice the price. Packaging alone felt premium." },
  { name: "Dev R.", product: "Ronin Scale Figure — Deluxe", rating: 5, text: "Ordered the deluxe size on a whim — worth it. The finish work on the base is incredible." },
  { name: "Sana K.", product: "Streetwear Drop Hoodie", rating: 4, text: "Shipping took a bit longer than expected but the studio kept me updated the whole time." },
  { name: "Owen P.", product: "Winter Collection Figure", rating: 5, text: "First time buying an original-art figure instead of licensed — won't go back." },
  { name: "Lior B.", product: "Print Series 04", rating: 5, text: "The art print series matches my figure shelf perfectly. Framing was straightforward." },
  { name: "Ama N.", product: "Streetwear Drop Hoodie", rating: 4, text: "Great customer support when I needed to change my shipping address last minute." },
  { name: "Cass W.", product: "Ronin Scale Figure", rating: 5, text: "The price estimator on the site was spot on — no surprise costs at checkout." },
  { name: "Rin F.", product: "Collector membership", rating: 5, text: "Collector concierge tier is worth it if you're buying more than one piece a quarter." },
];

export default function ReviewColumns() {
  return (
    <section className="bg-[var(--color-bg-hero)] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)] text-center">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Collector reviews</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">What the community is saying</h2>
        </div>

        {/* Strata has no CSS multi-column/masonry utility — a row-cols
            equal-height grid is the native substitute, same real gap
            already flagged in bootstrap-app's build. */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {REVIEWS.map((review) => (
            <div key={review.name} className="col">
              <div className="card bg-[var(--color-bg-surface)] h-100 p-[var(--space-xl)] d-flex flex-column gap-[var(--space-md)]">
                <div className="d-flex gap-[var(--space-xs)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-primary" : "text-muted"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-body fs-[var(--font-size-sm)]">&ldquo;{review.text}&rdquo;</p>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="text-muted fw-bold fs-[var(--font-size-xs)]">{review.name}</span>
                  <a href="#" className="text-primary fw-bold fs-[var(--font-size-xs)]">
                    on {review.product}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
