import type { FieldConfig } from "@/components/field";
import type { Feature } from "@/components/feature-grid";

export const opportunityJumps = [
  { id: "challenge", label: "Policy Innovation Challenge" },
  { id: "partnerships", label: "Partnerships" },
  { id: "work", label: "Work with us" },
  { id: "alerts", label: "Get updates" },
];

export type Glance = { icon: string; title: string; text: string; href: string };

export const glance: Glance[] = [
  {
    icon: "landmark",
    title: "Policy Innovation Challenge",
    text: "A team competition that turns policy ideas into short papers.",
    href: "#challenge",
  },
  {
    icon: "users",
    title: "Program intakes",
    text: "Places in the accelerators, bootcamp, campus program and academy.",
    href: "/programs/",
  },
  {
    icon: "link",
    title: "Partnerships",
    text: "For funders, employers and organizations who want to work with us.",
    href: "#partnerships",
  },
  {
    icon: "briefcase",
    title: "Work with us",
    text: "Jobs, internships, mentoring and volunteering.",
    href: "#work",
  },
];

export const teamGets = [
  "A coach for each team",
  "Research support and expert workshops",
  "A live pitch to decision makers",
  "Help turning the best ideas into short policy papers",
];

export type ChallengeStage = {
  name: string;
  icon: string;
  title: string;
  text: string;
  gets: string[];
};

export const challengeStages: ChallengeStage[] = [
  {
    name: "Call",
    icon: "file",
    title: "The challenge opens",
    text: "We publish the themes and the rules. Teams read them and decide whether to join.",
    gets: ["Themes and rules", "How to apply"],
  },
  {
    name: "Teams",
    icon: "users",
    title: "Teams come together",
    text: "Students, researchers and young professionals form teams and sign up.",
    gets: ["Team of 3 to 5 people", "A coach for each team"],
  },
  {
    name: "Build",
    icon: "flask",
    title: "Research and design",
    text: "Each team studies the problem and designs a practical solution, with help from our labs.",
    gets: ["Research support", "Workshops with experts"],
  },
  {
    name: "Pitch",
    icon: "play",
    title: "Pitch to decision makers",
    text: "Teams present their idea to a panel and to people who can act on it.",
    gets: ["A live pitch event", "Feedback from the panel"],
  },
  {
    name: "Policy",
    icon: "landmark",
    title: "Turn it into a short policy paper",
    text: "The strongest ideas become short policy papers that we help share.",
    gets: ["Published policy paper", "Introductions to decision makers"],
  },
];

export const challengeThemes = [
  { name: "Youth employment", question: "Why do graduates struggle to land a first job?" },
  { name: "Education", question: "How can what is taught match what is needed?" },
  { name: "Digital transformation", question: "Who gets left behind as services move online?" },
  { name: "AI", question: "How can young Africans shape AI, not only use it?" },
  { name: "Agriculture", question: "How do young farmers get fair access to markets?" },
  { name: "Climate", question: "What can communities do now to adapt?" },
  { name: "Health", question: "How can care reach people who live far from a clinic?" },
  { name: "Entrepreneurship", question: "What stops good ideas from becoming businesses?" },
  { name: "Urban development", question: "How can fast-growing cities work for young people?" },
  {
    name: "Regional integration",
    question: "How can people and goods move more freely across borders?",
  },
];

export const partnerRoutes: Feature[] = [
  {
    icon: "coins",
    title: "Funders and sponsors",
    text: "Back a program, a challenge prize or a research series, and see what it achieves.",
  },
  {
    icon: "building",
    title: "Employers",
    text: "Offer internships, host project teams or meet our graduates before you hire.",
  },
  {
    icon: "globe",
    title: "Institutions and networks",
    text: "Governments, universities and development groups can co-host research, events and programs.",
  },
];

export const workRoutes: Feature[] = [
  {
    icon: "briefcase",
    title: "Jobs and internships",
    text: "Roles in research, programs and operations, with a path for young talent.",
  },
  {
    icon: "heart",
    title: "Mentors and experts",
    text: "Coach a team, judge a pitch or run a workshop in your field.",
  },
  {
    icon: "users",
    title: "Volunteers",
    text: "Help at events and on campus, and learn alongside our teams.",
  },
];

export const alertFields: FieldConfig[] = [
  {
    id: "a-email",
    label: "Your email",
    kind: "email",
    required: true,
    placeholder: "you@example.org",
    error: "Please enter a valid email.",
  },
];
