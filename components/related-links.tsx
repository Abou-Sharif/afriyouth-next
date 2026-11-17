import { ArrowLink } from "./arrow-link";

/** The row of "where to go next" links at the end of a page. */
export function RelatedLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <section className="xl-sec">
      <div className="wrap xlinks">
        {links.map((l) => (
          <ArrowLink key={l.href} href={l.href}>
            {l.label}
          </ArrowLink>
        ))}
      </div>
    </section>
  );
}
