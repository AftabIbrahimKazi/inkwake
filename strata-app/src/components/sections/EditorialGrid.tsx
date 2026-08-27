const FEATURE_ARTICLE = {
  category: "Deep dive",
  title: "Inside the sculpt-to-cast pipeline that ships every drop",
  excerpt:
    "From first sketch to the box on your desk — a full walkthrough of how Inkwake turns a two-inch thumbnail into a limited-run figure.",
  readTime: "9 min read",
};

const SIDE_ARTICLES = [
  { category: "Interview", title: "Meet the sculptor behind the Winter Collection", readTime: "5 min read" },
  { category: "Guide", title: "How to store and display resin figures long-term", readTime: "4 min read" },
  { category: "Culture", title: "Why original IP is having a moment in collectibles", readTime: "6 min read" },
];

export default function EditorialGrid() {
  return (
    <section className="iw-bg-surface bg-[var(--color-bg-hero)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">The Journal</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Editorial grid</h2>
        </div>

        <div className="row g-[var(--space-xl)]">
          <div className="col-12 col-md-8">
            <a href="#" className="d-flex flex-column gap-[var(--space-md)]">
              <div className="ratio ratio-16x9 bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] rounded-[16px]"></div>
              <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">{FEATURE_ARTICLE.category}</span>
              <h3 className="text-body fw-bold fs-[var(--font-size-2xl)]">{FEATURE_ARTICLE.title}</h3>
              <p className="text-muted fs-[var(--font-size-sm)]">{FEATURE_ARTICLE.excerpt}</p>
              <span className="text-muted fs-[var(--font-size-xs)]">{FEATURE_ARTICLE.readTime}</span>
            </a>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column gap-[var(--space-xl)]">
            {SIDE_ARTICLES.map((article) => (
              <a href="#" key={article.title} className="border-bottom-[1px_solid_color-mix(in_srgb,var(--color-line-subtle)_10%,transparent)] d-flex gap-[var(--space-md)] pb-[var(--space-xl)]">
                <div className="ratio ratio-1x1 bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] rounded-[12px] w-25 flex-shrink-0"></div>
                <div className="d-flex flex-column gap-[var(--space-xs)]">
                  <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">{article.category}</span>
                  <h3 className="text-body fw-bold fs-[var(--font-size-sm)]">{article.title}</h3>
                  <span className="text-muted fs-[var(--font-size-xs)]">{article.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
