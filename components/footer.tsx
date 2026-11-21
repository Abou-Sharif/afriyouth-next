import Link from "next/link";
import { contact, footerColumns } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/logo-white.svg"
            alt="AfriYouth Innovation Labs"
            width={214}
            height={112}
          />
          <p>
            {contact.email}
            <br />
            {contact.phones.join(" or ")}
          </p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3>{col.title}</h3>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="wrap legal">
        <span>
          &copy; 2026 AfriYouth Innovation Labs. Fueling Innovators for Sustainable Development.
        </span>
      </div>
    </footer>
  );
}
