const MEDIA_TILES = [
  { title: "Winter Collection", col: "col-6 col-md-3", ratio: "ratio-1x1", price: "$128" },
  { title: "Studio Process", col: "col-6 col-md-3", ratio: "ratio-1x1", price: null },
  { title: "Collector Spotlight", col: "col-6 col-md-3", ratio: "ratio-1x1", price: null },
  { title: "Behind the Ink", col: "col-12 col-md-6", ratio: "ratio-16x9", price: null },
  { title: "Streetwear Drop", col: "col-6 col-md-3", ratio: "ratio-1x1", price: "$38" },
  { title: "Print Series 04", col: "col-6 col-md-3", ratio: "ratio-1x1", price: "$22" },
];

export default function MediaWall() {
  return (
    <section className="bg-black w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">In the wild</span>
          <h2 className="text-white fw-bold">Media wall</h2>
        </div>

        <div className="row g-4">
          {MEDIA_TILES.map((tile) => (
            <div key={tile.title} className={tile.col}>
              <a href="#" className={`ratio ${tile.ratio} rounded-4 position-relative d-block overflow-hidden text-decoration-none`}>
                {/* Bootstrap's `.ratio > *` rule (native, applies to any
                    direct child of a `.ratio` element) sets top:0 and
                    height:100% on this div, which silently overrides the
                    bottom-0 utility below and stretches it to the tile's
                    full height — without justify-content-end the flex
                    content then sits at the top by default, not the
                    bottom. Real bug, caught by screenshot audit. */}
                <div className="position-absolute bottom-0 start-0 end-0 bg-black bg-opacity-25 p-3 d-flex flex-column justify-content-end gap-2">
                  <span className="text-white fw-bold small">{tile.title}</span>
                  {tile.price && (
                    <span className="d-flex align-items-center gap-2">
                      <span className="badge rounded-pill bg-white bg-opacity-25 text-white">Shop the look</span>
                      <span className="text-white fw-bold small">{tile.price}</span>
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
