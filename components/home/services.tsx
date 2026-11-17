import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { ButtonLink } from "@/components/button-link";
import { Icon } from "@/components/icon";
import { SectionHead } from "@/components/section-head";
import { orgServices } from "@/content/home";

export function Services() {
  return (
    <section id="services" className="j-band">
      <div className="wrap">
        <SectionHead
          kicker="Services"
          title="Services for organizations"
          sub="Work with one service, or several. Each hands its results to the next."
        />
        <div className="j-rows j-rows-svc">
          {orgServices.map((s) => (
            <Link key={s.id} className="j-row j-row-svc reveal" href={`/services/#${s.id}`}>
              <div>
                <span className="j-rt">{s.title}</span>
                <span className="muted">{s.text}</span>
              </div>
              <div className="muted j-small">
                {s.detail}
                {s.product && <span className="j-prod">{s.product}</span>}
              </div>
              <Icon name="arrow" className="j-go" />
            </Link>
          ))}
        </div>
        <p className="j-after">
          <ArrowLink href="/services/">See all services</ArrowLink>
        </p>
        <div className="j-partner">
          <div>
            <h3>Thinking about a partnership?</h3>
            <p className="muted">
              Development organizations and public institutions work with us on research, policy,
              innovation and young people&apos;s skills. See where we could work together.
            </p>
          </div>
          <ButtonLink href="/contact/?topic=partner#partner" icon="arrow">
            Partner with us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
