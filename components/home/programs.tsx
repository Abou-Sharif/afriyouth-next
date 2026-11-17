import Image from "next/image";
import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { Icon } from "@/components/icon";
import { SectionHead } from "@/components/section-head";
import { featuredPrograms } from "@/content/home";

export function Programs() {
  return (
    <section id="programs">
      <div className="wrap">
        <SectionHead
          kicker="Programs"
          title="Learn by doing, leave with proof"
          sub="Programs for young people, built around real work and honest feedback. Pick one and see who it is for."
        />

        <div className="j-open">
          <span className="j-pill">Now open</span>
          <span className="muted">
            Open calls and deadlines will be confirmed by AfriYouth. New calls will appear here.
          </span>
          <ArrowLink href="/opportunities/#alerts">Ask about upcoming calls</ArrowLink>
        </div>

        <Link className="j-flag" href="/programs/evidence-to-impact/">
          <Image
            src="/img/solar-team.webp"
            width={1500}
            height={998}
            alt="Three engineers in hard hats reviewing work on a solar installation"
          />
          <div className="j-flag-b">
            <span className="tag">Flagship program</span>
            <span className="j-t">Evidence-to-Impact Accelerator</span>
            <span className="muted">
              Instead of separate research, incubation and training, we combine them. Ten stages take a
              community problem to a tested, measured solution that can grow.
            </span>
            <span className="muted j-small">
              <strong>For:</strong> young innovators with an idea. <strong>Dates and eligibility:</strong>{" "}
              to be confirmed.
            </span>
            <span className="link j-push">
              View program
              <Icon name="arrow" />
            </span>
          </div>
        </Link>

        <div className="j-cards">
          {featuredPrograms.map((p) => (
            <Link key={p.title} className="j-card reveal" href={p.href}>
              <span className="j-card-img">
                <Image src={`/img/${p.image}`} width={p.width} height={p.height} alt="" />
              </span>
              <span className="j-card-b">
                <span className="tag">{p.who}</span>
                <span className="j-t2">{p.title}</span>
                <span className="muted j-small">{p.text}</span>
                <span className="link j-card-go">
                  View program
                  <Icon name="arrow" />
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className="j-after">
          <ArrowLink href="/programs/">Compare all five programs</ArrowLink>
        </p>
      </div>
    </section>
  );
}
