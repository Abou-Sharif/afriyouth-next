import Link from "next/link";
import { footerColumns } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/logo-white.svg" alt="AfriYouth Innovation Labs" width={214} height={112} />
          <p>
            Email to be confirmed
            <br />
            Phone or WhatsApp to be confirmed
            <br />
            Address to be confirmed
          </p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="wrap legal">
        <span>&copy; 2026 AfriYouth Innovation Labs. Fueling Innovators for Sustainable Development.</span>
        <span>Privacy and Terms to be added.</span>
      </div>
    </footer>
  );
}
