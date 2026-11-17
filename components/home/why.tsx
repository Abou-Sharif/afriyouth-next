import { ArrowLink } from "@/components/arrow-link";
import { gap } from "@/content/home";

export function Why() {
  return (
    <section id="why" className="j-why">
      <div className="wrap j-why-grid">
        <p className="j-statement reveal">
          By 2030, Africa will have the largest workforce in the world. Young people need the
          ability to solve African problems, and that is what we are here to build.
        </p>
        <div className="reveal">
          <p className="j-lab">Most organizations do one part of the job</p>
          <dl className="j-gap">
            {gap.map((g) => (
              <div key={g.who}>
                <dt>{g.who}</dt>
                <dd>{g.does}</dd>
              </div>
            ))}
          </dl>
          <div className="j-us">
            <b>AfriYouth</b>
            <span>
              connects all four, from training to incubation, research, policy and consulting, in
              one journey
            </span>
          </div>
          <p className="j-after">
            <ArrowLink href="/approach/">See how it works</ArrowLink>
          </p>
          <p className="j-note">Source for the 2030 workforce figure to be added.</p>
        </div>
      </div>
    </section>
  );
}
