export type Lab = {
  id: string;
  name: string;
  icon: string;
  line: string;
  services: string[];
  bestFor: string;
  /** Steps of the ten-step approach this lab supports. */
  steps: number[];
  product: { title: string; text: string };
};

export const labs: Lab[] = [
  {
    "id": "research",
    "name": "Research and Evidence Lab",
    "icon": "search",
    "line": "Find out what is really happening, with facts you can act on.",
    "services": [
      "Community research and listening sessions",
      "Data collection and analysis",
      "Evidence reports for decision makers"
    ],
    "bestFor": "Governments, NGOs and funders",
    "steps": [
      1,
      2,
      3
    ],
    "product": {
      "title": "Evidence Reports",
      "text": "Plain, well sourced reports on youth, jobs and development."
    }
  },
  {
    "id": "innovation",
    "name": "Innovation and Entrepreneurship Lab",
    "icon": "bulb",
    "line": "Turn good ideas into tested products and ventures.",
    "services": [
      "Design workshops with users",
      "Building and testing small versions",
      "Coaching, growth support and a showcase day"
    ],
    "bestFor": "Founders, young innovators and teams",
    "steps": [
      4,
      5,
      8
    ],
    "product": {
      "title": "Innovation Accelerator",
      "text": "A program that takes ideas from first sketch to launch."
    }
  },
  {
    "id": "policy",
    "name": "Policy and Governance Lab",
    "icon": "landmark",
    "line": "Turn findings into policy that decision makers can use.",
    "services": [
      "Short policy papers and recommendations",
      "Policy design workshops",
      "Dialogues with government and partners"
    ],
    "bestFor": "Ministries, agencies and civic groups",
    "steps": [
      6
    ],
    "product": {
      "title": "Policy Solutions Series",
      "text": "Practical policy ideas built on evidence, our most important publication."
    }
  },
  {
    "id": "capacity",
    "name": "Leadership and Skills Lab",
    "icon": "users",
    "line": "Build the skills and leadership that make change last.",
    "services": [
      "Employability Skills Lab",
      "Professional Skills Academy",
      "Leadership and project management courses"
    ],
    "bestFor": "Graduates, professionals and organizations",
    "steps": [
      9
    ],
    "product": {
      "title": "Professional Development Academy",
      "text": "Practical training for people at work and organizations that grow talent."
    }
  },
  {
    "id": "foresight",
    "name": "Futures Lab",
    "icon": "eye",
    "line": "Look ahead so today's choices fit tomorrow's Africa.",
    "services": [
      "Future scenarios and trend analysis",
      "Strategy sessions for leaders",
      "Research on Africa to 2050"
    ],
    "bestFor": "Leaders, planners and partners",
    "steps": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "product": {
      "title": "Africa 2050 Futures Series",
      "text": "Short studies on where Africa is heading and what to do about it."
    }
  },
  {
    "id": "impact",
    "name": "Impact and Learning Service",
    "icon": "chart",
    "line": "Show whether your project works, with clear goals, tracking and honest reports.",
    "services": [
      "Plans for what must change, and goals to track",
      "Before and after measurement and evaluation",
      "Learning reports and impact stories"
    ],
    "bestFor": "Programs, funders and partners",
    "steps": [
      9,
      10
    ],
    "product": {
      "title": "Impact Dashboard",
      "text": "One place to follow results and learning across projects."
    }
  },
  {
    "id": "funding",
    "name": "Funding and Investment Support",
    "icon": "coins",
    "line": "Helps every lab get ideas ready for funders and investors.",
    "services": [
      "Coaching to get ready for funders",
      "Introductions to funders and partners",
      "Partnership development"
    ],
    "bestFor": "Ventures, programs and partners",
    "steps": [
      7,
      10
    ],
    "product": {
      "title": "Works across all labs",
      "text": "This is a service that supports the other labs, not a separate division."
    }
  }
];
