export default function Home() {
  return (
    <main className="d-flex flex-column flex-fill">
      <section
        className="bg-black position-relative d-flex vh-100 w-100 align-items-center justify-content-center overflow-hidden text-center"
      >
        <canvas
          id="ink-canvas"
          data-ink-cursor
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ pointerEvents: "auto" }}
          suppressHydrationWarning
        />
        <div
          className="position-relative z-1 d-flex flex-column align-items-center gap-3"
          style={{ pointerEvents: "none" }}
        >
          <h1 className="hero__title fw-bold">Inkwake</h1>
          <p className="hero__subtitle text-secondary">
            Step 2 — ink cursor prototype (Bootstrap build)
          </p>
        </div>
      </section>
    </main>
  );
}
