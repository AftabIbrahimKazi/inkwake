const HERO_STATS = [
  { value: "40K+", label: "Pieces shipped" },
  { value: "4.9/5", label: "Collector rating" },
  { value: "100%", label: "Original art" },
];

export default function Hero() {
  return (
    <section className="bg-hero-bg relative flex min-h-screen w-full items-center overflow-hidden">
      <canvas
        id="ink-canvas"
        data-ink-cursor
        className="pointer-events-auto absolute inset-0 h-full w-full"
        suppressHydrationWarning
      />

      <div className="pointer-events-none relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-3xl px-xl py-5xl md:grid-cols-2">
        <div className="flex flex-col items-start gap-xl">
          <span className="border-border-subtle/20 text-accent rounded-full border px-lg py-xs text-xs font-bold tracking-wide uppercase">
            New drop — Winter Collection
          </span>

          <h1 className="text-heading text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            Ink that
            <span className="from-gradient-start to-gradient-end bg-gradient-to-r bg-clip-text text-transparent"> moves </span>
            with you.
          </h1>

          <p className="text-muted max-w-[28rem] text-lg">
            Original figures, apparel, and art built for collectors who want something the algorithm
            hasn&apos;t seen yet. Every piece self-generated, every drop limited.
          </p>

          <div className="pointer-events-auto flex flex-wrap items-center gap-lg">
            <a
              href="#"
              className="bg-accent hover:bg-accent-alt rounded-full px-2xl py-md text-sm font-bold whitespace-nowrap text-white transition-colors duration-200"
            >
              Shop the drop
            </a>
            <a
              href="#"
              className="border-border-subtle/20 text-heading hover:border-accent rounded-full border px-2xl py-md text-sm font-bold whitespace-nowrap transition-colors duration-200"
            >
              Watch the film
            </a>
          </div>

          <div className="border-border-subtle/10 flex w-full max-w-[28rem] items-center gap-2xl border-t pt-xl">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-xs">
                <span className="text-heading text-2xl font-bold">{stat.value}</span>
                <span className="text-muted text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none relative hidden aspect-square w-full md:block">
          <div className="from-gradient-start to-gradient-end absolute inset-6 rounded-3xl bg-gradient-to-br opacity-20 blur-3xl"></div>
          <div className="border-border-subtle/10 bg-surface/60 relative flex h-full w-full flex-col justify-between rounded-3xl border p-2xl backdrop-blur-md">
            <div className="flex items-center justify-between">
              <span className="text-heading text-sm font-bold">Featured piece</span>
              <span className="text-accent text-xs font-bold tracking-wide uppercase">Limited</span>
            </div>
            <div className="from-gradient-start to-gradient-end aspect-square w-full rounded-2xl bg-gradient-to-br"></div>
            <div className="flex items-center justify-between">
              <span className="text-heading text-lg font-bold">Ronin Scale Figure</span>
              <span className="text-accent text-lg font-bold">$128</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
