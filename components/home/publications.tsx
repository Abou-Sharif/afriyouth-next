import Link from "next/link";
import { Icon } from "@/components/icon";
import { SectionHead } from "@/components/section-head";
import { publications } from "@/content/home";

export function Publications() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead
          kicker="What we publish"
          title="What we find out, and share"
          sub="Reports and policy options, written for people who have to decide. Each one comes from a program."
        />
        <div className="j-rows j-rows-work">
          {publications.map((p) => (
            <Link
              key={p.title}
              className="j-row j-row-work reveal"
              href="/programs/evidence-to-impact/"
            >
              <span className="j-rt">{p.title}</span>
              <span className="muted">{p.text}</span>
              <Icon name="arrow" className="j-go" />
            </Link>
          ))}
        </div>
        <p className="j-note">
          Reports and results will be listed here as AfriYouth publishes them.
        </p>
      </div>
    </section>
  );
}
