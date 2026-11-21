# AfriYouth Innovation Labs website

Public website for AfriYouth Innovation Labs. Next.js 16 (App Router), React 19 and TypeScript, exported as a static site. There is no server, no database and no CMS: content is typed TypeScript files in the repo.

## Run it

Requires Node 20 or newer and pnpm.

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # static site in ./out
pnpm lint
pnpm format         # prettier --write .
pnpm format:check
pnpm typecheck
```

Before every commit, run `pnpm lint`, `pnpm format`, `pnpm format:check` and `pnpm build`. All four must pass.

To look at the built site, serve `out/` with any static server, for example `python3 -m http.server -d out 8090`.

## Pages

| Route               | Source                                               |
| ------------------- | ---------------------------------------------------- |
| `/`                 | `app/page.tsx` and `components/home/*`               |
| `/programs/`        | `app/programs/page.tsx`                              |
| `/programs/<slug>/` | `app/programs/[slug]/page.tsx`, one page per program |
| `/services/`        | `app/services/page.tsx`                              |
| `/approach/`        | `app/approach/page.tsx`                              |
| `/opportunities/`   | `app/opportunities/page.tsx`                         |
| `/about/`           | `app/about/page.tsx`                                 |
| `/contact/`         | `app/contact/page.tsx`                               |

The five program pages are generated from `content/programs.ts`.

## Structure

- `app/` routes, the root layout (`layout.tsx`, fonts and metadata) and all styles in `globals.css`.
- `components/` shared components. `components/home/` holds the home page sections.
- `content/` typed content (see `docs/content-guide.md`).
- `lib/` the icon path table (`icon-paths.ts`) and a reduced-motion hook.
- `public/img/` photos (`.webp`), `public/logo/` logos and favicons, `public/favicon.ico`.
- `docs/` handover guides.

## How it is built

- `next.config.ts` sets `output: "export"`, `trailingSlash: true` and `images.unoptimized`, so every route is a folder with an `index.html` in `out/`.
- Fonts load through `next/font/google` in `app/layout.tsx`: Poppins (500, 600) for headings and Figtree (400, 500, 600) for body text.
- There is one stylesheet, `app/globals.css`, with plain CSS and custom properties. There is no CSS framework.
- The site was built to match a reference HTML build pixel for pixel at 1440, 768 and 390 pixels wide.

## Guides

- [`docs/add-a-program.md`](docs/add-a-program.md) add a program page
- [`docs/content-guide.md`](docs/content-guide.md) where each piece of text lives and how to change it
- [`docs/design-tokens.md`](docs/design-tokens.md) colors, type, spacing, breakpoints and a Figma mapping

## Placeholders and open items

These are known and intentional. Replace them before launch.

- **Sample copy.** Wherever AfriYouth supplied no text, the copy is sample text. Program formats say so on the page ("The format is an example for the sample").
- **Contact details.** The email address and two phone numbers come from the Figma design and live in `contact` in `content/site.ts`. There is no street address, WhatsApp number or privacy and terms page yet.
- **Forms do not send anything.** The contact form, the alert sign-up and the other forms validate in the browser and show a thank-you message, then reset. No data leaves the page (`components/form.tsx`). Connect a form service or an API before launch.
- **Fonts.** Figtree stands in for Gilroy until the brand font files are supplied.
- **Photos.** There are only six (`public/img/`), reused across pages.
- **Dates and eligibility.** Each program page says "Dates and eligibility: to be confirmed."
- **No CMS.** Editing means changing the files in `content/`. A visual editor such as Keystatic over `content/*.ts` has been considered but is not set up and has not been decided.
