export const connects = [
  "Research",
  "Policy",
  "Human-centered design",
  "Entrepreneurship",
  "Foresight",
];

export const gap = [
  { who: "Youth organizations", does: "focus on training" },
  { who: "Incubators", does: "focus on startups" },
  { who: "Think tanks", does: "focus on research and policy" },
  { who: "Consulting firms", does: "focus on their clients" },
];

export const journey = [
  {
    title: "Understand the problem",
    text: "Name what is not working for young people, then gather the facts: talks with communities, surveys, and studies of what has been tried.",
    youth: { label: "Policy Innovation Challenge", href: "/opportunities/#challenge" },
    org: { label: "Research and evidence", href: "/services/#research" },
  },
  {
    title: "Create the solution",
    text: "Design with the people affected, build a simple first version, and test it.",
    youth: { label: "Evidence-to-Impact Accelerator", href: "/programs/evidence-to-impact/" },
    org: { label: "Design and testing support", href: "/services/#innovation" },
  },
  {
    title: "Get it backed",
    text: "Turn what was learned into clear recommendations, proposals and pitches for the people who decide and fund.",
    youth: { label: "Pitch practice in the program", href: "/programs/evidence-to-impact/" },
    org: { label: "Policy and funding support", href: "/services/#policy" },
  },
  {
    title: "Deliver and grow",
    text: "Measure what changed, share what was learned, and scale what works.",
    youth: { label: "Build a portfolio of real results", href: "/programs/evidence-to-impact/" },
    org: { label: "Impact and learning", href: "/services/#impact" },
  },
];

export const featuredPrograms = [
  {
    image: "electronics.webp",
    width: 1600,
    height: 1067,
    who: "For young people who want to shape policy",
    title: "Policy Innovation Challenge",
    text: "Pick one of Africa's pressing problems, design an evidence-based solution, and pitch it on Demo Day.",
    href: "/opportunities/#challenge",
  },
  {
    image: "vr-woman.webp",
    width: 1066,
    height: 1600,
    who: "For graduates and university students",
    title: "Employability Bootcamp",
    text: "Practice CVs, applications and interviews with real tasks and real feedback.",
    href: "/programs/employability-bootcamp/",
  },
  {
    image: "vr-girl.webp",
    width: 1066,
    height: 1600,
    who: "For young people building a career",
    title: "Professional Development Academy",
    text: "Build leadership, communication, problem-solving, digital and AI skills.",
    href: "/programs/professional-academy/",
  },
];

export const orgServices = [
  {
    id: "research",
    title: "Research and evidence",
    text: "Evidence on the socio-economic challenges that matter, in a form decision makers can use.",
    detail: "Applied policy research, surveys, impact assessments and program evaluations.",
    product: "Evidence Reports",
  },
  {
    id: "policy",
    title: "Policy and governance",
    text: "We turn research into practical policy options and institutional reform.",
    detail: "Policy analysis and design, governance reviews, policy dialogue.",
    product: "Policy Solutions Series",
  },
  {
    id: "funding",
    title: "Funding and investment readiness",
    text: "Great solutions still need resources. We help you find and win them.",
    detail:
      "Grant strategy and proposals, pitch decks, investor readiness, partnership development.",
    product: "",
  },
  {
    id: "impact",
    title: "Impact and learning",
    text: "Show whether your project works, with clear goals, tracking and honest reports.",
    detail: "Plans for what must change, ways to track it, learning reports, impact storytelling.",
    product: "Impact Dashboard",
  },
];

export const publications = [
  { title: "Evidence Reports", text: "Clear, sourced findings on youth, jobs and development." },
  {
    title: "Policy Solutions Series",
    text: "Evidence turned into practical policy options and reform.",
  },
  {
    title: "Africa 2050 Futures Series",
    text: "Short studies on where Africa is heading and how to prepare.",
  },
];

export const nextSteps = [
  {
    href: "/programs/",
    title: "Join a program",
    text: "Find the program that fits you and ask how to take part.",
  },
  {
    href: "/contact/?topic=work#partner",
    title: "Get help for your organization",
    text: "Tell us about your research, policy, impact or funding needs.",
  },
  {
    href: "/contact/?topic=partner#partner",
    title: "Partner with us",
    text: "Explore working together on research, policy, innovation or skills.",
  },
];
