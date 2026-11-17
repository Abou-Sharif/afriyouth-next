# Content guide

Text lives in two places: typed files in `content/` (lists, cards, steps, forms) and the page files themselves (headings, intros and short paragraphs written directly in JSX). There is no CMS. To change text, edit the file, run `pnpm dev` to check it, then run the checks in the README and commit.

TypeScript checks the content files. A missing field or a wrong type fails `pnpm build`.

## Where each piece of text is

| Page            | Text in `content/`                                                                                                                               | Text written in the page file                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Home            | `home.ts`: `connects`, `gap`, `journey`, `featuredPrograms`, `orgServices`, `publications`, `mission`, `vision`, `nextSteps`                     | Section headings and the hero in `components/home/*.tsx`           |
| Programs list   | `programs.ts` (cards), `programs-page.ts` (`programFilters`, `simulationSteps`, `joiningSteps`)                                                  | Headings and intro in `app/programs/page.tsx`                      |
| A program page  | `programs.ts` (one entry per program, see `docs/add-a-program.md`)                                                                               | Section headings and fixed lines in `app/programs/[slug]/page.tsx` |
| Services        | `labs.ts` (the five labs)                                                                                                                        | Headings and the two support services in `app/services/page.tsx`   |
| Our approach    | `approach.ts` (`roadPhases`, the ten steps); `labs.ts` for the lab links                                                                         | Headings in `app/approach/page.tsx`                                |
| Opportunities   | `opportunities.ts`: `opportunityJumps`, `glance`, `teamGets`, `challengeStages`, `challengeThemes`, `partnerRoutes`, `workRoutes`, `alertFields` | Headings and intros in `app/opportunities/page.tsx`                |
| About           | `about.ts`: `mission`, `vision`, `values`                                                                                                        | Headings in `app/about/page.tsx`                                   |
| Contact         | `contact.ts`: `contactInfo`, `topicOptions`, `topicParams`, `contactFields`                                                                      | Headings in `app/contact/page.tsx`                                 |
| Header, footer  | `site.ts`: `mainNav`, `programMenu` (built from programs), `footerColumns`                                                                       | none                                                               |
| Site title, SEO | none                                                                                                                                             | `metadata` in `app/layout.tsx`; each page's own `metadata`         |

Note that `mission` and `vision` exist twice: in `content/home.ts` (home page teaser) and in `content/about.ts` (about page). Change both if they should match.

To find where a sentence lives, search the repo for a few words of it.

## Common edits

- **Change a heading or paragraph.** Find it in the page file or content file above and edit the string.
- **Add or remove a card or list item.** Add or remove an object in the matching array. Copy a neighbor so every field is present.
- **Change the contact details.** Edit `contactInfo` in `content/contact.ts`. The email address and location are placeholders today.
- **Change the topics of the contact form.** Edit `topicOptions`. The links such as `/contact/?topic=program` use the keys of `topicParams`, which point at an option by position, so keep both in step.
- **Change the menu or footer.** Edit `mainNav` or `footerColumns` in `content/site.ts`. The Programs menu follows `programs` automatically.
- **Add a program.** See `docs/add-a-program.md`.

## Icons

Icons are drawn from a fixed table in `lib/icon-paths.ts`. A content field named `icon` must be one of these names:

`arrow`, `chev`, `search`, `compass`, `activity`, `book`, `pen`, `box`, `landmark`, `coins`, `rocket`, `chart`, `trend`, `bulb`, `users`, `cap`, `briefcase`, `heart`, `mail`, `pin`, `check`, `globe`, `shield`, `flask`, `eye`, `target`, `file`, `calendar`, `play`, `building`, `layers`, `clock`, `send`, `msg`, `link`, `sprout`, `route`, `award`, `x`.

To add an icon, add its path data to `lib/icon-paths.ts`.

## Images

- Photos are `.webp` files in `public/img/`. Content refers to them by file name.
- Always give the real pixel width and height where a field asks for them. Wrong sizes cause layout shift.
- Logos are in `public/logo/`. The tab icon is `public/logo/favicon.svg` (set in `app/layout.tsx`) with `public/favicon.ico` as a fallback for browsers that ask for it.
- There are six photos today. Photos are reused across pages until more are supplied.

## Forms

Forms are defined as field lists (`contactFields` in `content/contact.ts`, `alertFields` in `content/opportunities.ts`) and drawn by `components/form.tsx`. Required fields are checked in the browser. On a valid submit the form shows a thank-you message and resets. **It does not send the data anywhere.** Connecting a real endpoint means changing `onSubmit` in `components/form.tsx`.

## Tone and rules for copy

- Plain words, short sentences. No claims we cannot back up: results sections say "Figures will appear here once the program runs."
- Where AfriYouth has not supplied text, keep it clearly marked as sample or "to be confirmed" rather than inventing facts.
- Dates and eligibility for every program read "to be confirmed" until they are known. That line is in `app/programs/[slug]/page.tsx`.

## Placeholders still in the content

Sample copy where no text was supplied, placeholder contact details, forms that do not send, Figtree standing in for Gilroy, six photos only, and "Dates and eligibility: to be confirmed". See the README.
