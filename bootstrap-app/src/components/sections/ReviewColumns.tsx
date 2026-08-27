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
    <section className="bg-black w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2 text-center">
          <span className="text-primary small fw-bold text-uppercase">Collector reviews</span>
          <h2 className="text-white fw-bold">What the community is saying</h2>
        </div>

        {/* Bootstrap has no CSS multi-column/masonry utility (no `columns-*`
            equivalent exists in its utility set) — an equal-height grid via
            row-cols is the native substitute, a real layout divergence from
            tailwind-app's masonry columns, not a stylistic choice. */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {REVIEWS.map((review) => (
            <div key={review.name} className="col">
              <div className="card border h-100 p-4 d-flex flex-column gap-3">
                <div className="d-flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-primary" : "text-secondary"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white small">&ldquo;{review.text}&rdquo;</p>
                <div className="d-flex align-items-center justify-content-between mt-auto">
                  <span className="text-secondary small fw-bold">{review.name}</span>
                  <a href="#" className="text-primary small fw-bold text-decoration-none">
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
