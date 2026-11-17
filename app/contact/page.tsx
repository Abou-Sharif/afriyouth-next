import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { IconBox } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { contactInfo } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch or partner with AfriYouth Innovation Labs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title="Let us talk"
        lead="Tell us what you need. A real person will read your message and reply."
      />

      <section id="partner">
        <div className="wrap contact-grid">
          <div>
            <h2>Ways to reach us</h2>
            <ul className="c-info" style={{ marginTop: 24 }}>
              {contactInfo.map((c) => (
                <li key={c.title}>
                  <IconBox name={c.icon} />
                  <span>
                    <b>{c.title}</b>
                    <span>{c.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: 32 }}>Looking to partner?</h3>
            <p className="muted" style={{ marginTop: 8 }}>
              Choose the topic in the form and we will send your message to the right team.
            </p>
            <p className="muted" style={{ marginTop: 20 }}>
              Not sure yet? Browse{" "}
              <Link className="link" href="/programs/">
                programs
              </Link>{" "}
              or{" "}
              <Link className="link" href="/services/">
                services
              </Link>{" "}
              first.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
