import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { SectionHead } from "@/components/section-head";
import { journey } from "@/content/home";

export function HowWeWork() {
  return (
    <section id="how" className="j-band">
      <div className="wrap">
        <SectionHead
          kicker="How we work"
          title="One journey, from a problem to real change"
          sub="Every project follows the same four steps. At each step, there is a way for young people to take part and a way for organizations to get help."
        />
        <ol className="j-rows">
          {journey.map((step, i) => (
            <li key={step.title} className="j-row j-row-steps reveal">
              <span className="j-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <span className="j-rt">{step.title}</span>
                <span className="muted">{step.text}</span>
              </div>
              <div className="j-small">
                <span className="j-lab">For young people</span>
                <Link className="link" href={step.youth.href}>
                  {step.youth.label}
                </Link>
              </div>
              <div className="j-small">
                <span className="j-lab">For organizations</span>
                <Link className="link" href={step.org.href}>
                  {step.org.label}
                </Link>
              </div>
            </li>
          ))}
        </ol>
        <div className="j-rule" />
        <div className="j-foot">
          <p className="muted">
            All along the way, our employability programs and the Professional Development Academy
            help young people get job-ready and grow as leaders.
          </p>
          <ArrowLink href="/approach/">See the ten-step journey</ArrowLink>
        </div>
      </div>
    </section>
  );
}
