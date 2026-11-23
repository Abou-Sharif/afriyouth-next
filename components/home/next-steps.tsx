import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { EmailLink, PhoneLinks } from "@/components/contact-links";
import { nextSteps } from "@/content/home";

export function NextSteps() {
  return (
    <section id="partner" className="j-cta">
      <div className="wrap">
        <h2>What would you like to do next?</h2>
        <ul className="j-cta-l">
          {nextSteps.map((s) => (
            <li key={s.href}>
              <Link href={s.href}>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="j-cta-b">
          <ButtonLink href="/contact/" variant="light" icon="arrow">
            Get in touch
          </ButtonLink>
          <span>
            Email <EmailLink /> or call <PhoneLinks first />.
          </span>
        </div>
      </div>
    </section>
  );
}
