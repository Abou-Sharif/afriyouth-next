import Image from "next/image";
import { ArrowLink } from "./arrow-link";
import type { Program } from "@/content/programs";

export function ProgramCard({ program, hidden }: { program: Program; hidden?: boolean }) {
  const href = `/programs/${program.slug}/`;
  return (
    <article className="pcard reveal" id={program.id} hidden={hidden}>
      <Image
        src={`/img/${program.image}`}
        alt=""
        width={600}
        height={375}
        sizes="(max-width: 900px) 100vw, 380px"
      />
      <div className="pc-body">
        <span className="tag">{program.tag}</span>
        <h3>
          <a href={href}>{program.name}</a>
        </h3>
        <p>{program.summary}</p>
        <p className="best muted">
          <strong>Best for:</strong> {program.bestFor}
        </p>
        <span className="pc-links">
          <ArrowLink href={href}>See the program</ArrowLink>
          <ArrowLink href="/contact/?topic=program#partner">Ask about this program</ArrowLink>
        </span>
      </div>
    </article>
  );
}
