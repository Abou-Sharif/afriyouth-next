import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { SectionHead } from "@/components/section-head";
import { labs, type Lab } from "@/content/labs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "Five labs plus impact and funding support that turn evidence into action.",
  path: "/services/",
});

const totalSteps = 10;

function LabPanel({ lab }: { lab: Lab }) {
  const futures = lab.id === "foresight";
  return (
    <div className="acc-cols">
      <div>
        <h4>What we offer</h4>
        <ul className="svc">
          {lab.services.map((s) => (
            <li key={s}>
              <Icon name="check" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <p className="best muted" style={{ marginTop: 14 }}>
          <strong style={{ color: "var(--ink)" }}>Best for:</strong> {lab.bestFor}
        </p>
      </div>
      <div>
        <h4>Product</h4>
        <div className="prod">
          <b>{lab.product.title}</b>
          <span className="muted">{lab.product.text}</span>
        </div>
        <div className={`mini${futures ? " fs" : ""}`} aria-hidden="true">
          {Array.from({ length: totalSteps }, (_, i) => (
            <i key={i} className={lab.steps.includes(i + 1) ? "on" : ""} />
          ))}
        </div>
        <p className="mini-l">Steps this lab helps with, out of ten</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        title="Five labs and two support services, ready to work with you"
        lead="Each one covers part of the journey from problem to impact. Use one, or work with several."
        jumps={labs.map((l) => ({ id: l.id, label: l.name.replace(" Lab", "") }))}
      />

      <section>
        <div className="wrap">
          <SectionHead
            title="What each one does"
            sub="Open one to see its services and the products you can expect."
          />
          <Accordion
            items={labs.map((lab) => ({
              id: lab.id,
              title: lab.name,
              summary: lab.line,
              icon: lab.icon,
              iconClassName: lab.id === "foresight" ? "pink" : undefined,
              content: <LabPanel lab={lab} />,
            }))}
          />
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/approach/#road", label: "See where each lab fits in the ten steps" },
          { href: "/programs/", label: "Prefer a program for young people?" },
        ]}
      />
      <CtaBand
        title="Need help with a specific problem?"
        text="Tell us what you are working on and we will suggest where to begin."
      />
    </>
  );
}
