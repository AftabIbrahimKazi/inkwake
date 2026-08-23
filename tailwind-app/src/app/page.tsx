export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="bg-hero-bg relative flex h-screen w-full items-center justify-center overflow-hidden text-center">
        <canvas
          id="ink-canvas"
          data-ink-cursor
          className="pointer-events-auto absolute inset-0 h-full w-full"
          suppressHydrationWarning
        />
        <div className="pointer-events-none relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-heading">Inkwake</h1>
          <p className="text-lg text-muted">
            Step 2 — ink cursor prototype (Tailwind build)
          </p>
        </div>
      </section>

      <section className="bg-surface flex h-screen w-full items-center justify-center">
        <p className="text-muted text-lg">
          Placeholder section — proves scroll behaviour, not real content
        </p>
      </section>

      <section className="bg-hero-bg flex h-screen w-full items-center justify-center">
        <p className="text-muted text-lg">
          Placeholder section — proves scroll behaviour, not real content
        </p>
      </section>
    </main>
  );
}
