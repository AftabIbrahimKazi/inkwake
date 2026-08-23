const ANNOUNCEMENTS = [
  "Free shipping on orders over $50",
  "New figure drops every week",
  "Original, self-generated art only — no third-party IP",
  "Sign up for the newsletter for 10% off",
];

export default function AnnouncementBar() {
  return (
    <div className="from-gradient-start to-gradient-end bg-gradient-to-r py-xs">
      <div className="iw-marquee">
        <div className="iw-marquee-track gap-4xl" aria-hidden="true">
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((message, index) => (
            <span key={index} className="text-xs font-bold whitespace-nowrap text-white">
              {message}
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">{ANNOUNCEMENTS.join(". ")}</span>
    </div>
  );
}
