import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/accordion";
import { ArrowLink } from "@/components/arrow-link";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid } from "@/components/feature-grid";
import { Icon, IconBox } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { RelatedLinks } from "@/components/related-links";
import { SectionHead } from "@/components/section-head";
import { getProgram, programs, seriesInfo } from "@/content/programs";

type Props = { params: Promise<{ slug: string }> };

const stepIcons = ["search", "pen", "rocket"];

const jumps = [
  { id: "about", label: "What it is" },
  { id: "how", label: "How it works" },
  { id: "results", label: "Results" },
  { id: "faq", label: "Questions" },
];

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = getProgram((await params).slug);
  return program ? { title: program.name, description: program.lead } : {};
}

export default async function ProgramPage({ params }: Props) {
  const program = getProgram((await params).slug);
  if (!program) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Programs", href: "/programs/" }, { label: program.name }]}
        title={program.name}
        lead={program.lead}
        jumps={jumps}
        image={{
          src: `/img/${program.image}`,
          width: program.imageWidth,
          height: program.imageHeight,
          alt: program.imageAlt,
        }}
      />

      <section id="about">
        <div className="wrap">
          <SectionHead kicker={program.tag} title="What it is" />
          <div className="mv">
            <div className="reveal">
              <h3>Who it is for</h3>
              <p>{program.audience}</p>
              <p className="muted" style={{ marginTop: 12 }}>
                Dates and eligibility: to be confirmed.
              </p>
            </div>
            <div className="reveal">
              <h3>What you get</h3>
              <ul className="ticks">
                {program.gets.map((g) => (
                  <li key={g}>
                    <Icon name="check" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band-surface" id="how">
        <div className="wrap">
          <SectionHead kicker="How it works" title="Three steps, start to finish" />
          <FeatureGrid
            items={program.steps.map((s, i) => ({
              icon: stepIcons[i],
              title: `${i + 1}. ${s.title}`,
              text: s.text,
            }))}
          />
          <p className="note">
            The format is an example for the sample. Final details will follow each intake.
          </p>
          {program.stepsLink && (
            <p className="after-steps">
              <ArrowLink href={program.stepsLink.href}>{program.stepsLink.label}</ArrowLink>
            </p>
          )}
        </div>
      </section>

      <section id="results">
        <div className="wrap">
          <SectionHead
            kicker="Results"
            title="What we will track"
            sub="Results appear here as this program runs."
          />
          <FeatureGrid items={program.track} />
          <p className="note">
            Figures will appear here once the program runs. We do not show numbers we cannot back
            up.
          </p>
          {program.series.length > 0 && (
            <>
              <div className="head" style={{ marginTop: 56 }}>
                <h3>What we publish from it</h3>
                <p className="sub">The first publications are being prepared.</p>
              </div>
              <ul className="res-list">
                {program.series.map((key) => {
                  const s = seriesInfo[key];
                  return (
                    <li key={key}>
                      <a href="/opportunities/#alerts">
                        <IconBox name={s.icon} />
                        <b>
                          {s.title}
                          <span className="soon">Coming soon</span>
                        </b>
                        <span className="d">{s.text}</span>
                        <span className="go">
                          <Icon name="arrow" />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="band-surface" id="faq">
        <div className="wrap">
          <SectionHead kicker="Questions" title="Good to know" />
          <Accordion
            variant="plain"
            items={program.faq.map((f, i) => ({
              id: `faq-${i}`,
              title: f.q,
              content: <p className="muted">{f.a}</p>,
            }))}
          />
        </div>
      </section>

      <RelatedLinks
        links={[
          { href: program.lab.href, label: `See the lab behind it: ${program.lab.label}` },
          { href: "/programs/", label: "Compare all programs" },
          { href: "/approach/", label: "See how the ten steps fit together" },
        ]}
      />
      <CtaBand
        title={`Interested in the ${program.name}?`}
        text="Tell us a little about you and we will reply with what happens next."
        label="Ask about this program"
        href="/contact/?topic=program#partner"
      />
    </>
  );
}
