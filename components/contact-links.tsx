import { contact } from "@/content/site";

export type ContactKind = "email" | "phone";

/** Email address as a mailto link. */
export function EmailLink() {
  return (
    <a className="cl" href={`mailto:${contact.email}`}>
      {contact.email}
    </a>
  );
}

/** Phone numbers as tel links, joined by "or". Pass `first` to show only the first number. */
export function PhoneLinks({ first = false }: { first?: boolean }) {
  const phones = first ? contact.phones.slice(0, 1) : contact.phones;
  return phones.map((p, i) => (
    <span key={p}>
      {i > 0 && " or "}
      <a className="cl" href={`tel:${p}`}>
        {p}
      </a>
    </span>
  ));
}

export function ContactLinks({ kind }: { kind: ContactKind }) {
  return kind === "email" ? <EmailLink /> : <PhoneLinks />;
}
