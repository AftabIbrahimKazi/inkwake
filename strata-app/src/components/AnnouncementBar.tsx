const ANNOUNCEMENTS = [
  "Free shipping on orders over $50",
  "New figure drops every week",
  "Original, self-generated art only — no third-party IP",
  "Sign up for the newsletter for 10% off",
];

export default function AnnouncementBar() {
  return (
    <div className="iw-brand-gradient bg-[linear-gradient(to_right,var(--color-brand-gradient-start),var(--color-brand-gradient-end))] py-[var(--space-xs)]">
      <div className="iw-marquee">
        <div className="iw-marquee-track d-flex gap-5" aria-hidden="true">
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((message, index) => (
            <span key={index} className="text-white fs-[var(--font-size-xs)] fw-bold text-nowrap">
              {message}
            </span>
          ))}
        </div>
      </div>
      <span className="visually-hidden">{ANNOUNCEMENTS.join(". ")}</span>
    </div>
  );
}
