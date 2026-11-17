import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

export type Crumb = { label: string; href?: string };
export type HeroImage = { src: string; width: number; height: number; alt: string };

type PageHeroProps = {
  crumbs: Crumb[];
  title: string;
  lead: string;
  /** In-page anchors shown under the lead, as `{ id, label }`. */
  jumps?: { id: string; label: string }[];
  image?: HeroImage;
};

export function PageHero({ crumbs, title, lead, jumps, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <Fragment key={c.label}>
              <span aria-hidden="true">/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
            </Fragment>
          ))}
        </p>
        <div className={`ph-grid${image ? "" : " solo"}`}>
          <div>
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
            {jumps && (
              <div className="ph-jump" aria-label="On this page">
                {jumps.map((j) => (
                  <a key={j.id} href={`#${j.id}`}>
                    {j.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {image && (
            <figure className="ph-fig reveal">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                priority
                fetchPriority="high"
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
