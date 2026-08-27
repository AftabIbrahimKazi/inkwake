const TEAM_MEMBERS = [
  { name: "Yuki Amano", role: "Founder & Lead Sculptor" },
  { name: "Theo Marchetti", role: "Head of Production" },
  { name: "Nadia Osei", role: "Art Director" },
  { name: "Kenji Waters", role: "Finishing Lead" },
  { name: "Priya Shah", role: "Collector Relations" },
  { name: "Malik Fontaine", role: "Print & Apparel Design" },
  { name: "Elin Vasko", role: "Logistics Manager" },
  { name: "Toma Ricci", role: "Community & Discord" },
];

export default function TeamDirectory() {
  return (
    <section className="iw-bg-surface w-100">
      <div className="iw-container d-flex flex-column gap-4 py-5">
        <div className="d-flex flex-column gap-2">
          <span className="text-primary small fw-bold text-uppercase">The studio</span>
          <h2 className="text-white fw-bold">Team directory</h2>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="col d-flex flex-column align-items-center text-center gap-3">
              <div className="ratio ratio-1x1 rounded-4 w-100"></div>
              <div className="d-flex flex-column gap-1">
                <span className="text-white fw-bold small">{member.name}</span>
                <span className="text-secondary small">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
