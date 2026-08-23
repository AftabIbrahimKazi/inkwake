const ANNOUNCEMENTS = [
  "Free shipping on orders over $50",
  "New figure drops every week",
  "Original, self-generated art only — no third-party IP",
  "Sign up for the newsletter for 10% off",
];

export default function AnnouncementBar() {
  return (
    <div className="iw-announcement-bar">
      <div className="iw-marquee">
        <div className="iw-marquee-track d-flex gap-5" aria-hidden="true">
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((message, index) => (
            <span key={index} className="iw-announcement-text text-nowrap">
              {message}
            </span>
          ))}
        </div>
      </div>
      <span className="visually-hidden">{ANNOUNCEMENTS.join(". ")}</span>
    </div>
  );
}
