import type { Feature } from "@/components/feature-grid";

export const programFilters = [
  { id: "all", label: "All programs" },
  { id: "students", label: "Students and graduates" },
  { id: "professionals", label: "Professionals" },
  { id: "teams", label: "Teams and founders" },
] as const;

export const simulationSteps = [
  "Analyze the job description",
  "Research the organization",
  "Customize the CV",
  "Write a cover letter",
  "Apply",
  "Complete an aptitude test",
  "Attend an interview",
  "Complete a case study",
  "Negotiate salary",
  "Receive feedback",
];

export const joiningSteps: Feature[] = [
  {
    icon: "search",
    title: "1. Choose a program",
    text: "Pick the one that matches who you are and what you want next.",
  },
  {
    icon: "msg",
    title: "2. Tell us about you",
    text: "Send a short message. We will reply with what happens next.",
  },
  {
    icon: "rocket",
    title: "3. Start learning and building",
    text: "Join a group, meet your coaches and begin.",
  },
];
