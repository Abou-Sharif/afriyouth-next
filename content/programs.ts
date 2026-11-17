export type Program = {
  id: string;
  slug: string;
  name: string;
  tag: string;
  summary: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  categories: string[];
  bestFor: string;
  icon: string;
  lead: string;
  imageAlt: string;
  audience: string;
  gets: string[];
  steps: { title: string; text: string }[];
  stepsLink: { href: string; label: string } | null;
  track: { icon: string; title: string; text: string }[];
  series: string[];
  faq: { q: string; a: string }[];
  lab: { href: string; label: string };
};

export const programs: Program[] = [
  {
    id: "accelerator",
    slug: "evidence-to-impact",
    name: "Evidence-to-Impact Accelerator",
    tag: "Our flagship",
    summary: "Take a real problem through all ten steps, from first research to a funded trial.",
    image: "solar-team.webp",
    imageWidth: 1500,
    imageHeight: 998,
    categories: ["teams", "policy"],
    bestFor: "Teams with a real problem",
    icon: "users",
    lead: "Take a real problem through all ten steps, from first research to a funded trial. One program, instead of separate research, incubation and training.",
    imageAlt: "Three young engineers in hard hats reviewing a solar installation",
    audience: "Young innovators and teams with a real problem they want to solve.",
    gets: [
      "Research support and listening sessions with communities",
      "Design and testing with coaches",
      "Help preparing for funders and decision makers",
      "A way to measure what changed",
    ],
    steps: [
      {
        title: "Understand the problem",
        text: "Name the problem together with the people it affects and gather the facts.",
      },
      {
        title: "Create and test the solution",
        text: "Design a simple first version and try it with real users.",
      },
      {
        title: "Get it backed and grow",
        text: "Turn the results into proposals and pitches, then measure and share what you learned.",
      },
    ],
    stepsLink: {
      href: "approach.html",
      label: "See all ten steps",
    },
    track: [
      {
        icon: "users",
        title: "Teams supported",
        text: "How many teams take a problem through the program.",
      },
      {
        icon: "rocket",
        title: "Trials started",
        text: "How many solutions reach a real test.",
      },
      {
        icon: "landmark",
        title: "Decisions influenced",
        text: "Where results change a plan or a funding choice.",
      },
    ],
    series: ["evidence", "policy", "futures"],
    faq: [
      {
        q: "Who can apply?",
        a: "Young innovators and teams with a real problem. Final eligibility will be published with the call.",
      },
      {
        q: "How long does it take?",
        a: "The program follows ten steps. The length and schedule are to be confirmed.",
      },
      {
        q: "Does it cost anything?",
        a: "Fees, and any funding for teams, are to be confirmed.",
      },
    ],
    lab: {
      href: "services.html#research",
      label: "Research and Evidence Lab",
    },
  },
  {
    id: "innovation",
    slug: "innovation-accelerator",
    name: "Innovation Accelerator",
    tag: "For ventures",
    summary: "Coaching to build your project, and a showcase day to meet people who can back it.",
    image: "startup.webp",
    imageWidth: 1066,
    imageHeight: 1600,
    categories: ["teams"],
    bestFor: "Founders and young innovators",
    icon: "bulb",
    lead: "Coaching to build your project, and a showcase day to meet people who can back it.",
    imageAlt: "A young woman celebrating with a Start Up sign in a shared workspace",
    audience: "Founders and young innovators with an idea or an early project.",
    gets: [
      "Design and testing support",
      "Coaching on funding and growth",
      "A showcase day in front of backers",
    ],
    steps: [
      {
        title: "Shape your idea",
        text: "Work with coaches to decide who you help and what you will build.",
      },
      {
        title: "Build and test",
        text: "Make a small version and test it with real users.",
      },
      {
        title: "Show it",
        text: "Present at the showcase day to people who can back you.",
      },
    ],
    stepsLink: null,
    track: [
      {
        icon: "bulb",
        title: "Ventures supported",
        text: "How many projects join and finish.",
      },
      {
        icon: "briefcase",
        title: "Jobs and ventures",
        text: "How many projects start earning or create work.",
      },
      {
        icon: "coins",
        title: "Funders reached",
        text: "How many find funders or partners.",
      },
    ],
    series: [],
    faq: [
      {
        q: "Who can join?",
        a: "Founders and young innovators. Final eligibility will be published with the call.",
      },
      {
        q: "When is the showcase day?",
        a: "The date is to be confirmed. We will share it with everyone on the updates list first.",
      },
      {
        q: "Does it cost anything?",
        a: "Fees, and any funding for teams, are to be confirmed.",
      },
    ],
    lab: {
      href: "services.html#innovation",
      label: "Innovation and Entrepreneurship Lab",
    },
  },
  {
    id: "bootcamp",
    slug: "employability-bootcamp",
    name: "Employability Bootcamp",
    tag: "For graduates",
    summary: "Practical skills, coaching and employer links to land your first role.",
    image: "vr-woman.webp",
    imageWidth: 1066,
    imageHeight: 1600,
    categories: ["students"],
    bestFor: "Recent graduates",
    icon: "cap",
    lead: "Practical skills, coaching and employer links to land your first role.",
    imageAlt: "A young woman using a VR headset at her desk",
    audience: "Recent graduates looking for a first role.",
    gets: [
      "Practical job skills and coaching",
      "CV, cover letter and interview training",
      "Introductions to employers",
    ],
    steps: [
      {
        title: "Learn the skills",
        text: "Short sessions on the skills employers ask for most.",
      },
      {
        title: "Practice with a real job",
        text: "Go through a full hiring process for a practice vacancy.",
      },
      {
        title: "Meet employers",
        text: "Get feedback and introductions to people who hire.",
      },
    ],
    stepsLink: null,
    track: [
      {
        icon: "cap",
        title: "Graduates trained",
        text: "How many graduates finish the bootcamp.",
      },
      {
        icon: "briefcase",
        title: "First roles found",
        text: "How many find work after the bootcamp.",
      },
      {
        icon: "msg",
        title: "Employer feedback",
        text: "What employers tell us about our graduates.",
      },
    ],
    series: [],
    faq: [
      {
        q: "Who can join?",
        a: "Recent graduates. Final eligibility will be published with each intake.",
      },
      {
        q: "How long is the bootcamp?",
        a: "The length and schedule are to be confirmed.",
      },
      {
        q: "Does it cost anything?",
        a: "Fees are to be confirmed.",
      },
    ],
    lab: {
      href: "services.html#capacity",
      label: "Leadership and Skills Lab",
    },
  },
  {
    id: "university",
    slug: "university-program",
    name: "University Employability Program",
    tag: "For university students",
    summary: "Build job skills while you study, with support from your campus.",
    image: "vr-girl.webp",
    imageWidth: 1066,
    imageHeight: 1600,
    categories: ["students"],
    bestFor: "University students",
    icon: "book",
    lead: "Build job skills while you study, with support from your campus.",
    imageAlt: "A young person using a VR headset in an electronics workshop",
    audience: "University students at partner campuses.",
    gets: [
      "Skills sessions on campus",
      "Team projects with real organizations",
      "Mentors from industry",
    ],
    steps: [
      {
        title: "Join through your campus",
        text: "Sign up with your university or student group.",
      },
      {
        title: "Work on a real project",
        text: "Team up on a task for a real organization, with a mentor.",
      },
      {
        title: "Build your portfolio",
        text: "Finish with proof of what you can do, ready to show employers.",
      },
    ],
    stepsLink: null,
    track: [
      {
        icon: "book",
        title: "Students reached",
        text: "How many students join and finish.",
      },
      {
        icon: "landmark",
        title: "Campuses",
        text: "How many universities take part.",
      },
      {
        icon: "briefcase",
        title: "Projects completed",
        text: "How many real projects students deliver.",
      },
    ],
    series: [],
    faq: [
      {
        q: "Which universities take part?",
        a: "Partner campuses will be listed here once they are confirmed.",
      },
      {
        q: "Can I join if my campus is not listed?",
        a: "Tell us through the contact page and we will let you know what is possible.",
      },
      {
        q: "Does it cost anything?",
        a: "Fees are to be confirmed.",
      },
    ],
    lab: {
      href: "services.html#capacity",
      label: "Leadership and Skills Lab",
    },
  },
  {
    id: "academy",
    slug: "professional-academy",
    name: "Professional Development Academy",
    tag: "For people at work",
    summary: "Short courses in leadership, communication and impact work.",
    image: "soldering.webp",
    imageWidth: 1600,
    imageHeight: 914,
    categories: ["professionals"],
    bestFor: "Young professionals",
    icon: "briefcase",
    lead: "Short courses in leadership, communication and impact work.",
    imageAlt: "Hands soldering a circuit board",
    audience: "Young professionals who are already at work.",
    gets: [
      "Leadership and communication",
      "Project and impact skills",
      "A network of peers across Africa",
    ],
    steps: [
      {
        title: "Pick a course",
        text: "Choose the short course that fits what you want to grow.",
      },
      {
        title: "Learn and practice",
        text: "Learn with other professionals and practice on real tasks.",
      },
      {
        title: "Apply it at work",
        text: "Use what you learned in your job and stay connected with your peers.",
      },
    ],
    stepsLink: null,
    track: [
      {
        icon: "briefcase",
        title: "Professionals trained",
        text: "How many people finish a course.",
      },
      {
        icon: "award",
        title: "Courses completed",
        text: "How many courses run to the end.",
      },
      {
        icon: "users",
        title: "Peer network",
        text: "How many alumni stay connected.",
      },
    ],
    series: [],
    faq: [
      {
        q: "Who can join?",
        a: "Young professionals. Final eligibility will be published with each course.",
      },
      {
        q: "How long are the courses?",
        a: "Courses are short. Lengths and dates are to be confirmed.",
      },
      {
        q: "Does it cost anything?",
        a: "Fees are to be confirmed.",
      },
    ],
    lab: {
      href: "services.html#capacity",
      label: "Leadership and Skills Lab",
    },
  },
];

export const seriesInfo: Record<string, { title: string; icon: string; text: string }> = {
  evidence: {
    title: "Evidence Reports",
    icon: "book",
    text: "Clear, sourced findings on youth, jobs and development.",
  },
  policy: {
    title: "Policy Solutions Series",
    icon: "landmark",
    text: "Practical policy ideas built on evidence. Our most important publication.",
  },
  futures: {
    title: "Africa 2050 Futures Series",
    icon: "eye",
    text: "Short studies on where Africa is heading and how to prepare.",
  },
};

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
