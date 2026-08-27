const REGIONS = [
  {
    name: "North America",
    warehouses: [
      { city: "Portland, OR", detail: "Primary fulfillment — 2-4 day domestic shipping" },
      { city: "Austin, TX", detail: "Overflow fulfillment for Southern drops" },
    ],
  },
  {
    name: "Europe",
    warehouses: [
      { city: "Rotterdam, NL", detail: "EU fulfillment — 3-5 day shipping across the bloc" },
      { city: "Manchester, UK", detail: "UK-only fulfillment, post-customs" },
    ],
  },
  {
    name: "Asia-Pacific",
    warehouses: [
      { city: "Osaka, JP", detail: "Studio origin — same-region 1-2 day shipping" },
      { city: "Melbourne, AU", detail: "ANZ fulfillment — 3-4 day shipping" },
    ],
  },
];

export default function RegionalDirectory() {
  return (
    <section className="bg-surface w-full" x-data="{ activeRegion: 'North America' }">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">Where we ship from</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Regional directory</h2>
        </div>

        <div className="border-border-subtle/10 flex flex-wrap gap-sm border-b pb-lg">
          {REGIONS.map((region) => (
            <button
              key={region.name}
              type="button"
              className="rounded-full px-xl py-sm text-sm font-bold transition-colors duration-200"
              suppressHydrationWarning
              {...{
                "x-on:click": `activeRegion = '${region.name}'`,
                ":class": `{ 'bg-accent text-white': activeRegion === '${region.name}', 'text-muted border border-border-subtle/20': activeRegion !== '${region.name}' }`,
              }}
            >
              {region.name}
            </button>
          ))}
        </div>

        {REGIONS.map((region) => (
          <div
            key={region.name}
            x-show={`activeRegion === '${region.name}'`}
            suppressHydrationWarning
            className="grid grid-cols-1 gap-lg md:grid-cols-2"
          >
            {region.warehouses.map((warehouse) => (
              <div
                key={warehouse.city}
                className="border-border-subtle/10 bg-hero-bg flex flex-col gap-sm rounded-2xl border p-xl"
              >
                <span className="text-heading text-lg font-bold">{warehouse.city}</span>
                <span className="text-muted text-sm">{warehouse.detail}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
