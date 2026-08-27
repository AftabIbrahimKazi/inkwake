const RESOURCES = [
  { tag: "Guide", title: "Sizing chart for apparel drops", meta: "Updated weekly" },
  { tag: "PDF", title: "Care instructions for painted resin", meta: "1.2 MB download" },
  { tag: "Video", title: "Unboxing the Winter Collection", meta: "6 min" },
  { tag: "Guide", title: "How restock alerts work", meta: "3 min read" },
  { tag: "Template", title: "Wholesale order request form", meta: "For retailers" },
  { tag: "PDF", title: "Print framing recommendations", meta: "800 KB download" },
];

export default function ResourceFeed() {
  return (
    <section className="bg-hero-bg w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Help center</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Resource feed</h2>
        </div>

        <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="group border-border-subtle/10 bg-surface flex flex-col gap-lg rounded-2xl border p-xl transition-colors duration-200 hover:border-accent"
            >
              <span className="bg-accent/15 text-accent w-fit rounded-full px-md py-xs text-xs font-bold tracking-wide uppercase">
                {resource.tag}
              </span>
              <h3 className="text-heading group-hover:text-accent text-lg font-bold transition-colors duration-200">
                {resource.title}
              </h3>
              <span className="text-muted text-xs">{resource.meta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
