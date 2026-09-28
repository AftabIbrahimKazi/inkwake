const FEATURE_ARTICLE = {
  category: "Deep dive",
  title: "Inside the sculpt-to-cast pipeline that ships every drop",
  excerpt:
    "From first sketch to the box on your desk — a full walkthrough of how Inkwake turns a two-inch thumbnail into a limited-run figure.",
  readTime: "9 min read",
};

const SIDE_ARTICLES = [
  { category: "Interview", title: "Meet the sculptor behind the Winter Collection", readTime: "5 min read", image: "/images/editorial-side-01.webp" },
  { category: "Guide", title: "How to store and display resin figures long-term", readTime: "4 min read", image: "/images/editorial-side-02.webp" },
  { category: "Culture", title: "Why original IP is having a moment in collectibles", readTime: "6 min read", image: "/images/editorial-side-03.webp" },
];

export default function EditorialGrid() {
  return (
    <section className="iw-bg-surface w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">The Journal</span>
          <h2 className="text-white fw-bold">Editorial grid</h2>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-8">
            <a href="#" className="d-flex flex-column gap-3 text-decoration-none">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                <img src="/images/editorial-feature.webp" alt={FEATURE_ARTICLE.title} className="object-fit-cover" />
              </div>
              <span className="text-primary small fw-bold text-uppercase">{FEATURE_ARTICLE.category}</span>
              <h3 className="text-white fw-bold fs-3">{FEATURE_ARTICLE.title}</h3>
              <p className="text-secondary small">{FEATURE_ARTICLE.excerpt}</p>
              <span className="text-secondary small">{FEATURE_ARTICLE.readTime}</span>
            </a>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column gap-4">
            {SIDE_ARTICLES.map((article) => (
              <a href="#" key={article.title} className="d-flex gap-3 border-bottom pb-4 text-decoration-none">
                <div className="ratio ratio-1x1 rounded-3 flex-shrink-0 w-25 overflow-hidden">
                  <img src={article.image} alt={article.title} className="object-fit-cover" />
                </div>
                <div className="d-flex flex-column gap-1">
                  <span className="text-primary small fw-bold text-uppercase">{article.category}</span>
                  <h3 className="text-white fw-bold small">{article.title}</h3>
                  <span className="text-secondary small">{article.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
