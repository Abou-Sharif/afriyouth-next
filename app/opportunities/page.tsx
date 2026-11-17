import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FeatureGrid } from "@/components/feature-grid";
import { Form } from "@/components/form";
import { Icon, IconBox } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { SectionHead } from "@/components/section-head";
import { Tabs } from "@/components/tabs";
import { TickList } from "@/components/tick-list";
import {
  alertFields,
  challengeStages,
  challengeThemes,
  glance,
  opportunityJumps,
  partnerRoutes,
  teamGets,
  workRoutes,
} from "@/content/opportunities";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Challenges, program intakes, partnerships and ways to work with us. Get updates when something opens.",
};

const stageTabs = challengeStages.map((s, i) => ({
  id: String(i),
  tab: (
    <>
      <Icon name={s.icon} />
      <span className="n">Stage {i + 1}</span>
      <b>{s.name}</b>
    </>
  ),
  panel: (
    <>
      <div>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
      </div>
      <div>
        <h4>You get</h4>
        <TickList items={s.gets} />
      </div>
    </>
  ),
}));

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Opportunities" }]}
        title="Ways to take part, partner or join us"
        lead="Nothing is open right now. Here is what we plan to offer, and how to hear first when it does."
        jumps={opportunityJumps}
      />

      <section id="glance">
        <div className="wrap">
          <SectionHead
            kicker="At a glance"
            title="Four ways in"
            sub="None is open yet. Open one to see what to expect."
          />
          <ul className="res-list">
            {glance.map((g) => (
              <li key={g.title}>
                <Link href={g.href}>
                  <IconBox name={g.icon} />
                  <b>
                    {g.title}
                    <span className="soon">Not open yet</span>
                  </b>
                  <span className="d">{g.text}</span>
                  <span className="go">
                    <Icon name="arrow" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band-surface" id="challenge">
        <div className="wrap">
          <SectionHead
            kicker="Challenge"
            title="Policy Innovation Challenge"
            sub="Teams pick a real problem, research it, test a solution and pitch it. The best ideas go forward with our support."
          />
          <div className="mv">
            <div className="reveal">
              <h3>Who it is for</h3>
              <p>Students, researchers and young professionals who work in teams.</p>
              <p className="muted" style={{ marginTop: 12 }}>
                Dates and eligibility: to be confirmed.
              </p>
            </div>
            <div className="reveal">
              <h3>What teams get</h3>
              <TickList items={teamGets} />
            </div>
          </div>
          <Tabs
            id="timeline"
            label="Challenge stages"
            items={stageTabs}
            autoplayMs={7000}
            countNoun="Stage"
            style={{ marginTop: 48 }}
          />
          <h3 style={{ marginTop: 56 }}>Problems teams can take on</h3>
          <p className="muted" style={{ marginTop: 6 }}>
            Pick the one you care about most. Each theme starts with a real question.
          </p>
          <ul className="themes-l">
            {challengeThemes.map((t) => (
              <li key={t.name}>
                <b>{t.name}</b>
                <span>{t.question}</span>
              </li>
            ))}
          </ul>
          <p className="note">
            Final themes, rules and prizes will be confirmed with the call. The strongest ideas are
            published in our{" "}
            <Link className="link" href="/programs/innovation-accelerator/#results">
              Policy Solutions Series
            </Link>
            .
          </p>
          <p className="after-steps">
            <ButtonLink href="#alerts" icon="arrow">
              Tell me when it opens
            </ButtonLink>
          </p>
        </div>
      </section>

      <section id="partnerships">
        <div className="wrap">
          <SectionHead
            kicker="Partnerships"
            title="Partner with us"
            sub="We work with organizations that want to back young people or put evidence to use."
          />
          <FeatureGrid items={partnerRoutes} />
          <p className="after-steps">
            <ButtonLink href="/contact/?topic=partner#partner" icon="arrow">
              Partner with us
            </ButtonLink>
          </p>
        </div>
      </section>

      <section className="band-surface" id="work">
        <div className="wrap">
          <SectionHead
            kicker="Join us"
            title="Join the team or lend your skills"
            sub="There are no open roles today. We plan to list these here first."
          />
          <FeatureGrid items={workRoutes} />
          <p className="after-steps">
            <ButtonLink href="/contact/?topic=join#partner" icon="arrow">
              Tell us how you would like to help
            </ButtonLink>
          </p>
        </div>
      </section>

      <section id="alerts">
        <div className="wrap">
          <SectionHead
            kicker="Updates"
            title="Hear first when something opens"
            sub="Leave your email and we will write only when a call, intake or role opens."
          />
          <Form id="alertForm" variant="inline" fields={alertFields} submitLabel="Notify me" />
        </div>
      </section>
    </>
  );
}
