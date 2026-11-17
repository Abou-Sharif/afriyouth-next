import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid } from "@/components/feature-grid";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { SectionHead } from "@/components/section-head";
import { mission, values, vision } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we believe and where we are going.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About us" }]}
        title="Africa's young people have the ideas. We help them land."
        lead="AfriYouth Innovation Labs is a home for evidence, innovation and policy, led by young people across Africa."
        image={{
          src: "/img/solar-team.webp",
          width: 1500,
          height: 998,
          alt: "Three young engineers in hard hats reviewing a solar installation",
        }}
      />

      <section>
        <div className="wrap">
          <div className="mv">
            <div className="reveal">
              <h3>Our mission</h3>
              <p>{mission}</p>
            </div>
            <div className="reveal">
              <h3>Our vision</h3>
              <p>{vision}</p>
            </div>
          </div>
          <p className="note">Mission and vision follow the organization&apos;s own wording.</p>
        </div>
      </section>

      <section className="band-surface">
        <div className="wrap">
          <SectionHead kicker="What we believe" title="Our values" />
          <FeatureGrid items={values} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead
            kicker="The platform"
            title="Part of Jobra Competence"
            sub="AfriYouth Innovation Labs sits inside the Jobra Competence platform, which connects young people with skills, jobs and opportunities."
          />
          <ArrowLink href="/services/">See what the labs do</ArrowLink>
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: "/approach/", label: "How we work" },
          { href: "/programs/", label: "Our programs" },
        ]}
      />
      <CtaBand
        title="Want to work with us?"
        text="We are looking for partners, funders and young people who want to build."
      />
    </>
  );
}
