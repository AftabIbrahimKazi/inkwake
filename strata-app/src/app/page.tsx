export default function Home() {
  return (
    <main className="d-flex flex-column">
      <section className="bg-[var(--color-bg-hero)] position-relative d-flex min-vh-100 w-100 align-items-center justify-content-center overflow-hidden text-center">
        <canvas
          id="ink-canvas"
          data-ink-cursor
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ pointerEvents: "auto" }}
          suppressHydrationWarning
        />
        <div
          className="position-relative d-flex flex-column align-items-center gap-3"
          style={{ pointerEvents: "none" }}
        >
          <h1 className="fw-bold text-[var(--color-text-heading)] fs-[var(--font-size-4xl)]">Inkwake</h1>
          <p className="text-[var(--color-text-muted)] fs-[var(--font-size-lg)]">Step 2 — ink cursor prototype (Strata build)</p>
        </div>
      </section>
    </main>
  );
}
