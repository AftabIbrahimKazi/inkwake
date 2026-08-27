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
    <section className="bg-surface w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2xl px-xl py-4xl">
        <div className="flex flex-col gap-sm">
          <span className="text-accent text-xs font-bold tracking-wide uppercase">The studio</span>
          <h2 className="text-heading text-3xl font-bold tracking-tight">Team directory</h2>
        </div>

        <div className="grid grid-cols-2 gap-xl md:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-md text-center">
              <div className="from-gradient-start to-gradient-end aspect-square w-full rounded-2xl bg-gradient-to-br"></div>
              <div className="flex flex-col gap-xs">
                <span className="text-heading text-sm font-bold">{member.name}</span>
                <span className="text-muted text-xs">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
