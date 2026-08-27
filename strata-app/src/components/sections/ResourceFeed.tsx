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
    <section className="bg-[var(--color-bg-hero)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">Help center</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Resource feed</h2>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {RESOURCES.map((resource) => (
            <div key={resource.title} className="col">
              <a href="#" className="card bg-[var(--color-bg-surface)] p-[var(--space-xl)] d-flex flex-column gap-[var(--space-md)]">
                {/* bg-opacity-25 sets a CSS variable Strata's bg-primary
                    never actually reads (confirmed: bg-primary compiles to
                    a plain `background-color: var(--st-primary)`, no
                    opacity formula) — a genuine no-op in the installed
                    version, not a usage mistake. bg-primary-subtle is
                    Strata's own pre-tinted variant and the idiomatic fix. */}
                <span className="badge bg-primary-subtle text-primary rounded-pill text-uppercase align-self-start">
                  {resource.tag}
                </span>
                <span className="text-body fw-bold fs-[var(--font-size-md)]">{resource.title}</span>
                <span className="text-muted fs-[var(--font-size-xs)]">{resource.meta}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
