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
    <section className="bg-surface w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">The Journal</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Editorial grid</h2>
        </div>

        <div className="grid grid-cols-1 gap-2xl md:grid-cols-3">
          <a href="#" className="group flex flex-col gap-lg md:col-span-2">
            <div className="from-gradient-start to-gradient-end aspect-video w-full rounded-2xl bg-gradient-to-br"></div>
            <span className="text-accent text-xs font-bold tracking-wide uppercase">{FEATURE_ARTICLE.category}</span>
            <h3 className="text-heading group-hover:text-accent text-2xl font-bold transition-colors duration-200">
              {FEATURE_ARTICLE.title}
            </h3>
            <p className="text-muted text-sm">{FEATURE_ARTICLE.excerpt}</p>
            <span className="text-muted text-xs">{FEATURE_ARTICLE.readTime}</span>
          </a>

          <div className="flex flex-col gap-2xl">
            {SIDE_ARTICLES.map((article) => (
              <a href="#" key={article.title} className="group border-border-subtle/10 flex gap-lg border-b pb-2xl last:border-b-0 last:pb-0">
                <div className="from-gradient-start to-gradient-end aspect-square h-20 w-20 flex-shrink-0 rounded-xl bg-gradient-to-br"></div>
                <div className="flex flex-col gap-xs">
                  <span className="text-accent text-xs font-bold tracking-wide uppercase">{article.category}</span>
                  <h3 className="text-heading group-hover:text-accent text-sm font-bold transition-colors duration-200">
                    {article.title}
                  </h3>
                  <span className="text-muted text-xs">{article.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
