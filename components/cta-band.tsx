import { ButtonLink } from "./button-link";

type CtaBandProps = {
  title: string;
  text: string;
  label?: string;
  href?: string;
};

export function CtaBand({ title, text, label = "Get in touch", href = "/contact/" }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <ButtonLink href={href} icon="arrow">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
