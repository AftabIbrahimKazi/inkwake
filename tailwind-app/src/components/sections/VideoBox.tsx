export default function VideoBox() {
  return (
    <section className="bg-surface w-full" x-data="{ playing: false }">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm text-center">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Studio film</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Watch the Winter Collection drop</h2>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
          <div className="from-gradient-start to-gradient-end absolute inset-0 bg-gradient-to-br"></div>
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="border-border-subtle/10 bg-hero-bg/80 absolute top-xl left-xl flex items-center gap-md rounded-full border px-lg py-sm backdrop-blur-md">
            <span className="bg-accent h-2 w-2 rounded-full"></span>
            <span className="text-heading text-xs font-bold tracking-wide uppercase">Now streaming</span>
          </div>

          <button
            type="button"
            aria-label="Play studio film"
            className="absolute inset-0 flex items-center justify-center"
            x-show="!playing"
            suppressHydrationWarning
            {...{ "x-on:click": "playing = true" }}
          >
            <span className="border-border-subtle/20 bg-hero-bg/70 flex h-20 w-20 items-center justify-center rounded-full border backdrop-blur-md transition-transform duration-200 hover:scale-105">
              <svg aria-hidden="true" className="text-heading ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>

          <div
            className="absolute inset-0 flex items-center justify-center"
            x-show="playing"
            suppressHydrationWarning
          >
            <span className="text-heading text-sm font-bold tracking-wide uppercase">
              Loading — final film lands in Step 5 asset swap
            </span>
          </div>

          <div className="border-border-subtle/10 bg-hero-bg/80 absolute right-xl bottom-xl left-xl flex items-center justify-between rounded-2xl border px-xl py-lg backdrop-blur-md">
            <div className="flex flex-col gap-xs">
              <span className="text-heading text-sm font-bold">Winter Collection — Studio Film</span>
              <span className="text-muted text-xs">3:24 · Behind the sculpt-to-cast process</span>
            </div>
            <span className="text-accent text-xs font-bold tracking-wide uppercase">HD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
