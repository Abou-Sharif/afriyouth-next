# Add a program

Programs live in one array, `programs` in `content/programs.ts`. Adding an entry creates the program page, its card on `/programs/`, its entry in the header menu and its static route. A few places that mention programs are written by hand and need a manual edit (see the last section).

## Steps

1. **Add the image.** Put a `.webp` in `public/img/`. Note its pixel width and height. The file name is what you put in `image` (no folder, no leading slash).
2. **Add an entry** at the end of the `programs` array in `content/programs.ts`. Copy an existing entry and change every field (the table below explains them). Pick `icon` and each `track[].icon` from the names in `lib/icon-paths.ts`.
3. **Check it.** Run `pnpm dev` and open `/programs/<slug>/`, then `/programs/` and the Programs menu.
4. **Run the checks** before you commit: `pnpm lint`, `pnpm format`, `pnpm format:check`, `pnpm build`.

## Fields

| Field                                | What it does                                                                                                                                                                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                 | Anchor id of the card on `/programs/` (`/programs/#<id>`). Must be unique.                                                                                                                                                                |
| `slug`                               | The URL: `/programs/<slug>/`. Lowercase, hyphens, unique.                                                                                                                                                                                 |
| `name`                               | Page title and `h1`, card title, menu title, breadcrumb, browser tab title.                                                                                                                                                               |
| `tag`                                | Short label above the card title, the kicker on the page, and the second line of the menu entry.                                                                                                                                          |
| `summary`                            | One or two sentences on the card.                                                                                                                                                                                                         |
| `image`, `imageWidth`, `imageHeight` | File name in `public/img/` and its real pixel size. Used for the hero image on the page and the card image. Wrong sizes cause layout shift.                                                                                               |
| `imageAlt`                           | Alt text of the hero image. The card image is decorative and has empty alt.                                                                                                                                                               |
| `categories`                         | Which filter buttons on `/programs/` show the card. Only `students`, `professionals` and `teams` match a button (see `programFilters` in `content/programs-page.ts`). A card with no matching category appears only under "All programs". |
| `bestFor`                            | The "Best for:" line on the card.                                                                                                                                                                                                         |
| `icon`                               | Icon beside the program in the header menu.                                                                                                                                                                                               |
| `lead`                               | Intro under the page `h1` and the meta description.                                                                                                                                                                                       |
| `audience`                           | "Who it is for" paragraph. The line "Dates and eligibility: to be confirmed." is written in the page template, not in the data.                                                                                                           |
| `gets`                               | Bullets under "What you get".                                                                                                                                                                                                             |
| `steps`                              | Three entries expected (the page maps them to three icons). Title and text for "Three steps, start to finish".                                                                                                                            |
| `stepsLink`                          | `{ href, label }` for a link under the steps, or `null` for none.                                                                                                                                                                         |
| `track`                              | Three entries expected: icon, title and text for "What we will track".                                                                                                                                                                    |
| `series`                             | Keys from `seriesInfo` in the same file (`evidence`, `policy`, `futures`) for the "What we publish from it" list. Use `[]` for none.                                                                                                      |
| `faq`                                | Questions and answers in the accordion.                                                                                                                                                                                                   |
| `lab`                                | `{ href, label }` for the "See the lab behind it" link, usually an anchor on `/services/`.                                                                                                                                                |

The type `Program` at the top of the file is the contract: TypeScript fails the build if a field is missing or has the wrong type.

## What updates automatically

- **The page.** `generateStaticParams` in `app/programs/[slug]/page.tsx` returns one route per entry, so `/programs/<slug>/` is exported at build time. An unknown slug returns the 404 page.
- **The card on `/programs/`** and the filter behavior (`ProgramsBrowser`).
- **The Programs menu** in the header (`programMenu` in `content/site.ts` is built from `programs`).
- **Page title and description** of the new page (`generateMetadata`).

## What does not update automatically

- **Footer links** (`footerColumns` in `content/site.ts`) are a hand-written list.
- **Home page cards** (`featuredPrograms` in `content/home.ts`) are a hand-written list of three.
- **The word "five"**: "Five programs, one clear place to start" and the meta description in `app/programs/page.tsx`, and "Compare all five programs" in `components/home/programs.tsx`.
- **Card layout.** The cards are laid out by CSS (`.pcards`). Check `/programs/` at 390, 768 and 1440 wide after adding a sixth card.

## Worked example

Add a program called "Green Skills Studio". First copy a photo to `public/img/green-skills.webp` (1600 by 1000 pixels, say). Then add this entry at the end of the array:

```ts
{
  id: "green",
  slug: "green-skills-studio",
  name: "Green Skills Studio",
  tag: "For career changers",
  summary: "Short projects that build skills for the clean energy sector.",
  image: "green-skills.webp",
  imageWidth: 1600,
  imageHeight: 1000,
  categories: ["professionals"],
  bestFor: "People moving into clean energy",
  icon: "sprout",
  lead: "Short projects that build skills for the clean energy sector.",
  imageAlt: "Two technicians checking a solar panel",
  audience: "Professionals who want to work in clean energy.",
  gets: ["Hands-on projects", "Coaching from practitioners"],
  steps: [
    { title: "Choose a project", text: "Pick a short project that fits your goal." },
    { title: "Build it", text: "Work with a coach and a small group." },
    { title: "Show it", text: "Present the result to employers." },
  ],
  stepsLink: null,
  track: [
    { icon: "users", title: "People trained", text: "How many finish." },
    { icon: "briefcase", title: "New roles", text: "How many find work." },
    { icon: "msg", title: "Employer feedback", text: "What employers tell us." },
  ],
  series: [],
  faq: [{ q: "Does it cost anything?", a: "Fees are to be confirmed." }],
  lab: { href: "/services/#capacity", label: "Leadership and Skills Lab" },
},
```

After `pnpm build`, `out/programs/green-skills-studio/index.html` exists, the card appears on `/programs/` under "All programs" and "Professionals", and "Green Skills Studio" appears in the header menu on every page.

## Remove or rename a program

Delete the entry. If you rename a `slug`, search the repo for the old one: the footer, the home page and some page copy link to program URLs by hand (for example `content/site.ts`, `content/home.ts`, `app/opportunities/page.tsx`).
