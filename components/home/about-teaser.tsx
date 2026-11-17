import { ArrowLink } from "@/components/arrow-link";
import { mission, vision } from "@/content/home";

export function AboutTeaser() {
  return (
    <section id="about" className="j-band">
      <div className="wrap">
        <p className="kicker">About AfriYouth</p>
        <h2 className="j-h2w">Africa&apos;s youth, equipped to lead</h2>
        <div className="j-mv">
          <div>
            <h3>Our mission</h3>
            <p className="muted">{mission}</p>
          </div>
          <div>
            <h3>Our vision</h3>
            <p className="muted">{vision}</p>
          </div>
        </div>
        <p className="j-after">
          <ArrowLink href="/about/">Read our story</ArrowLink>
        </p>
      </div>
    </section>
  );
}
