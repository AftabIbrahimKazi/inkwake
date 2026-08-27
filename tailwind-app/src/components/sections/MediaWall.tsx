const MEDIA_TILES = [
  { title: "Winter Collection", span: "row-span-2", aspect: "aspect-[3/4]", price: "$128" },
  { title: "Studio Process", span: "", aspect: "aspect-square", price: null },
  { title: "Collector Spotlight", span: "", aspect: "aspect-square", price: null },
  { title: "Behind the Ink", span: "col-span-2", aspect: "aspect-[16/7]", price: null },
  { title: "Streetwear Drop", span: "", aspect: "aspect-square", price: "$38" },
  { title: "Print Series 04", span: "", aspect: "aspect-square", price: "$22" },
];

export default function MediaWall() {
  return (
    <section className="bg-hero-bg w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">In the wild</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Media wall</h2>
        </div>

        <div className="grid grid-cols-2 gap-lg md:grid-cols-4">
          {MEDIA_TILES.map((tile) => (
            <a
              href="#"
              key={tile.title}
              className={`from-gradient-start to-gradient-end group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tile.aspect} ${tile.span}`}
            >
              <div className="absolute inset-0 flex flex-col justify-end gap-xs bg-black/20 p-lg transition-colors duration-200 group-hover:bg-black/40">
                <span className="text-sm font-bold text-white">{tile.title}</span>
                {tile.price && (
                  <span className="flex items-center gap-sm text-xs font-bold text-white">
                    <span className="rounded-full bg-white/20 px-md py-xs backdrop-blur-md">Shop the look</span>
                    <span>{tile.price}</span>
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
