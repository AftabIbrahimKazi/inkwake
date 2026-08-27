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
    <section className="bg-black w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">Help center</span>
          <h2 className="text-white fw-bold">Resource feed</h2>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {RESOURCES.map((resource) => (
            <div key={resource.title} className="col">
              <a href="#" className="card border h-100 p-4 d-flex flex-column gap-3 text-decoration-none">
                <span className="badge rounded-pill bg-primary bg-opacity-25 text-primary align-self-start text-uppercase">
                  {resource.tag}
                </span>
                <span className="text-white fw-bold">{resource.title}</span>
                <span className="text-secondary small">{resource.meta}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
