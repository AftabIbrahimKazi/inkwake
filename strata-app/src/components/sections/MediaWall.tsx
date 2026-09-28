// wide/price are plain data, not class-name fields — Strata's scanner only
// sees class strings written directly inside a className attribute (see
// DashboardAnalytics.tsx for the full explanation), so the actual
// "col-*"/"ratio-*" literals live in the inline ternaries below.
const MEDIA_TILES = [
  { title: "Winter Collection", wide: false, price: "$128", image: "/images/media-01.webp" },
  { title: "Studio Process", wide: false, price: null, image: "/images/media-02.webp" },
  { title: "Collector Spotlight", wide: false, price: null, image: "/images/media-03.webp" },
  { title: "Behind the Ink", wide: true, price: null, image: "/images/media-04.webp" },
  { title: "Streetwear Drop", wide: false, price: "$38", image: "/images/media-05.webp" },
  { title: "Print Series 04", wide: false, price: "$22", image: "/images/media-06.webp" },
];

export default function MediaWall() {
  return (
    <section className="bg-[var(--color-bg-hero)] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">In the wild</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Media wall</h2>
        </div>

        <div className="row g-4">
          {MEDIA_TILES.map((tile) => (
            <div key={tile.title} className={tile.wide ? "col-12 col-md-6" : "col-6 col-md-3"}>
              <a
                href="#"
                className={`ratio ${tile.wide ? "ratio-16x9" : "ratio-1x1"} rounded-[16px] position-relative d-block overflow-hidden`}
              >
                <img src={tile.image} alt={tile.title} />
                <div className="bg-[color-mix(in_srgb,var(--color-black)_25%,transparent)] position-absolute inset-0 d-flex flex-column justify-content-end gap-[var(--space-sm)] p-[var(--space-lg)]">
                  <span className="text-white fw-bold fs-[var(--font-size-sm)]">{tile.title}</span>
                  {tile.price && (
                    <span className="d-flex align-items-center gap-[var(--space-sm)]">
                      <span className="badge bg-[color-mix(in_srgb,var(--color-white)_20%,transparent)] rounded-pill text-white">Shop the look</span>
                      <span className="text-white fw-bold fs-[var(--font-size-sm)]">{tile.price}</span>
                    </span>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
