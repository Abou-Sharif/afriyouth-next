import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { roadPhases } from "@/content/approach";
import { labs } from "@/content/labs";

export const metadata: Metadata = {
  title: "Our approach",
  description: "The ten step journey from evidence to impact, and how the labs fit in.",
};

const labNames = Object.fromEntries(labs.map((l) => [l.id, l.name]));
const pad = (n: number) => String(n).padStart(2, "0");

export default function ApproachPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Our approach" }]}
        title="One journey that carries an idea from problem to impact"
        lead="Most programs cover one part of the road. We cover all ten steps, so good work does not get lost between them."
        jumps={roadPhases.map((p, i) => ({ id: `phase-${i + 1}`, label: p.title }))}
      />

      <section className="road-band" id="road">
        <div className="wrap">
          <p className="rlegend">
            <span className="rl-main"></span>The road, from problem to impact
            <span className="rl-pink"></span>Futures looks ahead at every step
          </p>
          <div className="road">
            {roadPhases.map((phase, k) => (
              <section
                key={phase.title}
                className="rphase"
                id={`phase-${k + 1}`}
                aria-labelledby={`ph${k + 1}`}
              >
                <div className="rphase-head">
                  <p className="rphase-rng">{phase.range}</p>
                  <h2 id={`ph${k + 1}`}>{phase.title}</h2>
                </div>
                <ol className="rsteps">
                  {phase.steps.map((s) => (
                    <li key={s.n} className="rstep" id={`step-${pad(s.n)}`}>
                      <span className="rnode" aria-hidden="true">
                        {pad(s.n)}
                      </span>
                      <div className="rbody">
                        <p className="rtech">
                          Step {pad(s.n)} · {s.name}
                        </p>
                        <h3>{s.title}</h3>
                        <div className="rcols">
                          <div className="rmain">
                            <p className="rdesc">{s.description}</p>
                            <p className="reg">
                              <strong>Illustrative example</strong>
                              {s.example}
                            </p>
                          </div>
                          <dl className="rfacts">
                            <div>
                              <dt>You get</dt>
                              <dd>{s.get}</dd>
                            </div>
                            <div>
                              <dt>Who helps</dt>
                              <dd>
                                {s.labs.map((id, i) => (
                                  <Fragment key={id}>
                                    {i > 0 && ", "}
                                    <Link href={`/services/#${id}`}>{labNames[id]}</Link>
                                  </Fragment>
                                ))}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a problem that needs the full journey?"
        text="Tell us about it and we will show where it fits."
      />
    </>
  );
}
