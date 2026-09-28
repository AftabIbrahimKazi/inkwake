const TEAM_MEMBERS = [
  { name: "Yuki Amano", role: "Founder & Lead Sculptor", image: "/images/team-01.webp" },
  { name: "Theo Marchetti", role: "Head of Production", image: "/images/team-02.webp" },
  { name: "Nadia Osei", role: "Art Director", image: "/images/team-03.webp" },
  { name: "Kenji Waters", role: "Finishing Lead", image: "/images/team-04.webp" },
  { name: "Priya Shah", role: "Collector Relations", image: "/images/team-05.webp" },
  { name: "Malik Fontaine", role: "Print & Apparel Design", image: "/images/team-06.webp" },
  { name: "Elin Vasko", role: "Logistics Manager", image: "/images/team-07.webp" },
  { name: "Toma Ricci", role: "Community & Discord", image: "/images/team-08.webp" },
];

export default function TeamDirectory() {
  return (
    <section className="bg-[var(--color-bg-surface)] w-100">
      <div className="mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">The studio</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Team directory</h2>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="col d-flex flex-column align-items-center text-center gap-[var(--space-md)]">
              <div className="ratio ratio-1x1 rounded-[16px] w-100 overflow-hidden">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="d-flex flex-column gap-[var(--space-xs)]">
                <span className="text-body fw-bold fs-[var(--font-size-sm)]">{member.name}</span>
                <span className="text-muted fs-[var(--font-size-xs)]">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
