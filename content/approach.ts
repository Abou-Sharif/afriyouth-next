export type RoadStep = {
  n: number;
  /** One-word name of the step. */
  name: string;
  title: string;
  description: string;
  example: string;
  /** What the client receives from this step. */
  get: string;
  /** Ids of the labs (see labs.ts) that help with it. */
  labs: string[];
};

export type RoadPhase = {
  title: string;
  range: string;
  steps: RoadStep[];
};

/** The ten steps, in four phases. */
export const roadPhases: RoadPhase[] = [
  {
    title: "Understand the problem",
    range: "Steps 01 to 03",
    steps: [
      {
        n: 1,
        name: "Discover",
        title: "Find the problem",
        description:
          "We start by listening. Teams talk with communities to find the problems that matter most to them.",
        example: "Young people in a town finish school but cannot find a first job.",
        get: "A clear problem statement",
        labs: ["research"],
      },
      {
        n: 2,
        name: "Diagnose",
        title: "Understand the causes",
        description: "We dig into the causes, not only the symptoms, so we fix the right thing.",
        example:
          "Employers say graduates lack practical skills, and training does not match what local firms need.",
        get: "A map of root causes",
        labs: ["research"],
      },
      {
        n: 3,
        name: "Research",
        title: "Gather the facts",
        description: "We gather facts and data so every decision rests on evidence, not guesses.",
        example:
          "Surveys, interviews and existing data show which skills employers are missing most.",
        get: "An evidence report",
        labs: ["research"],
      },
    ],
  },
  {
    title: "Create the solution",
    range: "Steps 04 and 05",
    steps: [
      {
        n: 4,
        name: "Design",
        title: "Design it with the people who will use it",
        description: "We design solutions together with the people who will use them.",
        example: "A short work-readiness course built with local employers.",
        get: "A solution concept",
        labs: ["innovation"],
      },
      {
        n: 5,
        name: "Test",
        title: "Try a small version first",
        description: "We build a small version and test it with real users before spending big.",
        example: "The course runs with a first group of graduates, and we watch what works.",
        get: "A tested small version",
        labs: ["innovation"],
      },
    ],
  },
  {
    title: "Get it backed",
    range: "Steps 06 and 07",
    steps: [
      {
        n: 6,
        name: "Policy",
        title: "Turn findings into policy",
        description:
          "When a fix needs a rule or a budget change, we turn findings into clear recommendations for decision makers.",
        example:
          "A short paper asks the ministry to recognize the course in its youth employment plan.",
        get: "A short policy paper",
        labs: ["policy"],
      },
      {
        n: 7,
        name: "Finance",
        title: "Work out who pays",
        description:
          "We work out who pays and how, and get the idea ready for funders and investors.",
        example: "A costed plan shows how the course can be funded by employers and partners.",
        get: "A funding plan",
        labs: ["funding"],
      },
    ],
  },
  {
    title: "Deliver and grow",
    range: "Steps 08 to 10",
    steps: [
      {
        n: 8,
        name: "Implement",
        title: "Run a pilot",
        description: "We launch a pilot and support the team running it.",
        example: "The course opens in a few towns with trained facilitators.",
        get: "A working pilot",
        labs: ["innovation"],
      },
      {
        n: 9,
        name: "Measure",
        title: "Track what changes",
        description: "We track what changes and learn from it, so the next round is better.",
        example: "We follow graduates to see how many find work after the course.",
        get: "Impact results",
        labs: ["capacity", "impact"],
      },
      {
        n: 10,
        name: "Scale",
        title: "Reach more people and places",
        description: "We help what works reach more people and places.",
        example: "Results convince new partners, and the course spreads to more regions.",
        get: "A growth plan",
        labs: ["funding", "impact"],
      },
    ],
  },
];
