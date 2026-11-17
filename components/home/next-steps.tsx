import Link from "next/link";
import { Icon } from "@/components/icon";
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
          <Link className="btn btn-light" href="/contact/">
            Get in touch
            <Icon name="arrow" />
          </Link>
          <span>Email and WhatsApp details to be confirmed.</span>
        </div>
      </div>
    </section>
  );
}
