import type { ContactKind } from "@/components/contact-links";
import type { FieldConfig } from "@/components/field";

type ContactInfo = { icon: string; title: string; kind?: ContactKind; text?: string };

export const contactInfo: ContactInfo[] = [
  { icon: "mail", title: "Email", kind: "email" },
  { icon: "phone", title: "Phone", kind: "phone" },
  { icon: "clock", title: "Reply time", text: "We aim to reply within a few working days." },
];

export const topicOptions = [
  "Joining a program",
  "Partnering or funding",
  "Research or policy work",
  "Working or volunteering with us",
  "Something else",
];

/** Values of `?topic=` that preselect an option of the topic field. */
export const topicParams: Record<string, string> = {
  program: topicOptions[0],
  partner: topicOptions[1],
  work: topicOptions[2],
  join: topicOptions[3],
};

export const contactFields: FieldConfig[] = [
  {
    id: "c-name",
    label: "Your name",
    required: true,
    placeholder: "Full name",
    error: "Please enter your name.",
  },
  {
    id: "c-email",
    label: "Email",
    kind: "email",
    required: true,
    placeholder: "you@example.org",
    error: "Please enter a valid email.",
  },
  { id: "c-topic", label: "What is this about?", kind: "select", options: topicOptions },
  {
    id: "c-msg",
    label: "Message",
    kind: "textarea",
    required: true,
    placeholder: "Tell us a little",
    error: "Please write a short message.",
  },
];
