const HERO_STATS = [
  { value: "40K+", label: "Pieces shipped" },
  { value: "4.9/5", label: "Collector rating" },
  { value: "100%", label: "Original art" },
];

export default function Hero() {
  return (
    <section className="bg-black position-relative d-flex align-items-center overflow-hidden min-vh-100">
      <canvas
        id="ink-canvas"
        data-ink-cursor
        className="pe-auto position-absolute top-0 start-0 w-100 h-100"
        suppressHydrationWarning
      />

      <div className="iw-container position-relative py-5">
        <div className="row align-items-center g-5 pe-none">
          <div className="col-12 col-md-6 d-flex flex-column align-items-start gap-4">
            <span className="badge rounded-pill border border-primary text-primary fw-bold text-uppercase pe-auto">
              New drop — Winter Collection
            </span>

            <h1 className="hero__title fw-bold text-white">
              Ink that <span className="fw-bold">moves</span> with you.
            </h1>

            <p className="text-secondary fs-5">
              Original figures, apparel, and art built for collectors who want something the algorithm
              hasn&apos;t seen yet. Every piece self-generated, every drop limited.
            </p>

            <div className="d-flex flex-wrap gap-3 pe-auto">
              <a href="#" className="btn btn-primary rounded-pill px-4 py-2 fw-bold text-white">
                Shop the drop
              </a>
              <a href="#" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">
                Watch the film
              </a>
            </div>

            <div className="d-flex gap-4 border-top pt-4 w-100">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="d-flex flex-column gap-1">
                  <span className="fs-3 fw-bold text-white">{stat.value}</span>
                  <span className="text-secondary small">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-md-6 d-none d-md-block">
            <div className="card border rounded-4 p-4 pe-auto">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="text-white fw-bold small">Featured piece</span>
                <span className="text-primary fw-bold small text-uppercase">Limited</span>
              </div>
              <div className="ratio ratio-1x1 rounded-3"></div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <span className="text-white fw-bold fs-5">Ronin Scale Figure</span>
                <span className="text-primary fw-bold fs-5">$128</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
