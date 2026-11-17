import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Turn good ideas into real change across Africa.</h1>
          <p className="lead">
            We help young people and organizations find out what works, build it, and make it last.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-solid" href="/programs/">
              Explore programs
              <Icon name="arrow" />
            </Link>
            <Link className="btn btn-line" href="/contact/?topic=partner#partner">
              Partner with us
            </Link>
          </div>
          <p className="hero-aud">
            <span>Jump to</span>
            <Link href="/programs/">Programs for young people</Link>
            <Link href="/services/">Services for organizations</Link>
            <Link href="/opportunities/">Open opportunities</Link>
          </p>
        </div>
        <div className="mosaic">
          <figure className="m-a">
            <Image
              src="/img/startup.webp"
              width={1066}
              height={1600}
              alt="A young woman celebrating with a Start Up sign in a shared workspace"
              priority
            />
            <figcaption>
              <Icon name="users" />
              <span>Young people learn, build and test ideas together.</span>
            </figcaption>
          </figure>
          <figure className="m-b">
            <Image
              src="/img/solar-team.webp"
              width={1500}
              height={998}
              alt="Three young engineers in hard hats at a solar installation"
            />
          </figure>
          <figure className="m-c">
            <Image
              src="/img/soldering.webp"
              width={1600}
              height={914}
              alt="Hands soldering a circuit board"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
