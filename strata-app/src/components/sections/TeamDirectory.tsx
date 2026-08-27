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
    <section className="iw-bg-surface bg-[var(--color-bg-surface)] w-100">
      <div className="iw-container mx-auto w-100 max-w-[1152px] px-[var(--space-xl)] d-flex flex-column gap-[var(--space-xl)] py-[var(--space-4xl)]">
        <div className="d-flex flex-column gap-[var(--space-sm)]">
          <span className="text-primary fs-[var(--font-size-xs)] fw-bold text-uppercase">The studio</span>
          <h2 className="text-body fw-bold fs-[var(--font-size-3xl)]">Team directory</h2>
        </div>

        <div className="row row-cols-2 row-cols-md-4 g-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="col d-flex flex-column align-items-center text-center gap-[var(--space-md)]">
              <div className="bg-[linear-gradient(to_bottom_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] ratio ratio-1x1 rounded-[16px] w-100"></div>
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
