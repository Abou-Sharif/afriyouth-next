import { programs } from "./programs";

/** Organization contact details, as shown in the footer, on the contact page and in the home call to action. */
export const contact = {
  email: "competence@jobra.africa",
  phones: ["+250783618941", "+250790147305"],
};

export const mainNav = [
  { href: "/services/", label: "Services" },
  { href: "/approach/", label: "Our approach" },
  { href: "/about/", label: "About" },
  { href: "/opportunities/", label: "Opportunities" },
];

export const programMenu = programs.map((p) => ({
  href: `/programs/${p.slug}/`,
  icon: p.icon,
  title: p.name,
  text: p.tag,
}));

export const footerColumns = [
  {
    title: "Programs",
    links: [
      { href: "/programs/evidence-to-impact/", label: "Evidence-to-Impact Accelerator" },
      { href: "/opportunities/#challenge", label: "Policy Innovation Challenge" },
      { href: "/programs/employability-bootcamp/", label: "Employability Bootcamp" },
      { href: "/programs/professional-academy/", label: "Professional Development Academy" },
      { href: "/programs/", label: "All programs" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services/#research", label: "Research and evidence" },
      { href: "/services/#policy", label: "Policy and governance" },
      { href: "/services/#impact", label: "Impact and learning" },
      { href: "/services/#funding", label: "Funding and investment readiness" },
      { href: "/services/", label: "All services" },
    ],
  },
  {
    title: "AfriYouth",
    links: [
      { href: "/opportunities/", label: "Opportunities" },
      { href: "/approach/", label: "Our approach" },
      { href: "/about/", label: "About" },
      { href: "/contact/", label: "Contact us" },
    ],
  },
];
