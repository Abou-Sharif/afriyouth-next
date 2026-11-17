import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FeatureGrid } from "@/components/feature-grid";
import { PageHero } from "@/components/page-hero";
import { ProgramsBrowser } from "@/components/programs-browser";
import { SectionHead } from "@/components/section-head";
import { programs } from "@/content/programs";
import { joiningSteps, simulationSteps } from "@/content/programs-page";

export const metadata: Metadata = {
  title: "Programs",
  description: "Five programs for graduates, students, professionals and teams.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Programs" }]}
        title="Five programs, one clear place to start"
        lead="Whether you are finishing school, building a project or leading a team, there is a program built for where you are."
      />

      <section>
        <div className="wrap">
          <SectionHead
            title="Browse programs"
            sub="Filter by who you are. Nothing is hidden for good, you can switch back at any time."
          />
          <ProgramsBrowser programs={programs} />
          <p className="note">
            Looking for a team competition? See the{" "}
            <Link className="link" href="/opportunities/#challenge">
              Policy Innovation Challenge
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="simulation">
        <div className="wrap">
          <div className="j-box j-sim">
            <h3>Learn, practice, apply, improve</h3>
            <p className="muted">
              In the Employability Simulation, participants get a fictional job vacancy and go
              through the whole hiring process, exactly as they would in real life.
            </p>
            <ol className="j-five j-sim-l">
              {simulationSteps.map((step, i) => (
                <li key={step}>
                  <b>{i + 1}</b>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="band-surface">
        <div className="wrap">
          <SectionHead kicker="Joining" title="How to take part" />
          <FeatureGrid items={joiningSteps} />
          <p className="note">
            Process shown here is an example for the sample. Final steps will follow each program.
          </p>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        text="Tell us a little about you and we will point you to the right program."
      />
    </>
  );
}
