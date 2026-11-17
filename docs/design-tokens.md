# Design tokens

Every value on this page was read from `app/globals.css` (the `:root` blocks at the top and at the start of the header section) and `app/layout.tsx` (fonts). If you change a token there, change it here too.

Only the custom properties in the first two sections are real CSS variables. Everything after them (type sizes, spacing, shadows, breakpoints) is written as plain values inside the stylesheet, so this page lists them as a reference and they are not tokens you can edit in one place.

## Colors (CSS variables)

| Variable        | Value     | Used for                                                             |
| --------------- | --------- | -------------------------------------------------------------------- |
| `--paper`       | `#F6F6FA` | Page background                                                      |
| `--surface`     | `#FCFCFE` | Alternate bands (`.band-surface`) and the dropdown                   |
| `--ink`         | `#14112B` | Body text, headings, outline buttons                                 |
| `--muted`       | `#575470` | Secondary text                                                       |
| `--line`        | `#DEDDEA` | Borders and dividers                                                 |
| `--accent`      | `#0200A7` | Duke Blue, the single brand accent: links, solid buttons, focus ring |
| `--accent-hi`   | `#0E0BC4` | Hover state of the accent                                            |
| `--accent-soft` | `#E9E9FA` | Pale accent fill, for example icon boxes                             |
| `--pink`        | `#C723DF` | Steel Pink, used sparingly for highlights                            |
| `--pink-soft`   | `#F7E6FB` | Pale pink fill                                                       |
| `--pink-deep`   | `#8400A7` | Pink text and icons on a pale ground                                 |
| `--deep`        | `#0D0624` | Deep purple for the `.partner` closing band                          |

Hard-coded colors that are not variables yet:

| Value     | Where                                                                                  |
| --------- | -------------------------------------------------------------------------------------- |
| `#B9B8CC` | Form control border                                                                    |
| `#D9D9F7` | Small text on the dark `.partner` band (`.ways span`)                                  |
| `#B3261E` | Form error text (`.err`) and invalid field border                                      |
| `#fff`    | Text on dark bands and the footer (`.footer` is `var(--ink)`), light button background |

The focus ring is `3px solid var(--accent)` with a `3px` offset (`:focus-visible`).

## Typography

Fonts load through `next/font/google` in `app/layout.tsx` and are exposed as variables.

| Variable | Resolves to                                          | Weights       | Used for                  |
| -------- | ---------------------------------------------------- | ------------- | ------------------------- |
| `--head` | `var(--font-poppins), system-ui, sans-serif`         | 500, 600      | `h1` to `h3`, big numbers |
| `--body` | `var(--font-figtree), system-ui, -apple-system, ...` | 400, 500, 600 | Body, buttons, labels     |

Figtree stands in for Gilroy until the brand font is supplied. See the README.

Sizes (not variables):

| Item      | Value                                             |
| --------- | ------------------------------------------------- |
| Root size | `clamp(16px, .2vw + 13.4px, 18px)`                |
| Body      | `400 1.0625rem/1.65` Figtree                      |
| `h2`      | `clamp(1.75rem, 3vw, 2.5rem)`, line height `1.15` |
| `h3`      | `1.2rem`, line height `1.3`                       |
| Headings  | weight 600, letter spacing `-.02em`               |
| Kicker    | `.9rem`, weight 600, accent color                 |
| Sub text  | `1.0625rem`, muted, max width `62ch`              |
| Button    | `600 1rem/1.2` Figtree                            |

`h1` sizes: `.hero h1` is `clamp(2.5rem, 4.4vw, 3.8rem)` and `.page-hero h1` is `clamp(2.2rem, 4vw, 3.3rem)`.

## Spacing and layout

| Name             | Value                                      | Where                            |
| ---------------- | ------------------------------------------ | -------------------------------- |
| `--wrap`         | `clamp(1180px, 72vw, 1400px)`              | Content width                    |
| Page gutter      | `.wrap` is `min(var(--wrap), 100% - 48px)` | 24px each side at minimum        |
| Section padding  | `96px` top and bottom                      | `section`                        |
| Section head gap | `48px` below `.head`                       | Section headings                 |
| `--bar-top`      | `112px` (`76px` at 1020px and below)       | Transparent header at top        |
| `--bar-solid`    | `68px` (`64px` at 1020px and below)        | Header once scrolled             |
| Anchor offset    | `scroll-padding-top: 92px` on `html`       | Hash links land below the header |

There is no global spacing scale: gaps and paddings are set per component (typically multiples of 4 such as 8, 12, 14, 24, 36, 48).

## Radii

| Name     | Value                      | Where                                                           |
| -------- | -------------------------- | --------------------------------------------------------------- |
| `--r`    | `10px`                     | Buttons, cards, inputs, icon boxes (used about two dozen times) |
| Large    | `20px`                     | `.j-flag` and `.j-card` (home program cards)                    |
| Dropdown | `12px`                     | Programs dropdown (`.dd`)                                       |
| Pill     | `999px`                    | Pills and tags                                                  |
| Small    | `2px`, `3px`, `6px`, `50%` | Details such as bars and dots                                   |

## Shadows

| Value                                 | Where                                      |
| ------------------------------------- | ------------------------------------------ |
| `0 1px 0 rgba(20,17,43,.03)`          | Solid header bar                           |
| `0 6px 20px -12px rgba(13,6,36,.28)`  | Solid header bar, in the small-screen rule |
| `0 18px 40px -18px rgba(13,6,36,.25)` | Programs dropdown                          |
| `0 0 0 3px rgba(2,0,167,.18)`         | Input focus halo                           |

## Breakpoints (max-width unless noted)

`1180px`, `1100px`, `1020px` (the switch between the desktop menu and the mobile panel), `900px`, `860px`, `760px`, `700px`, `640px`, `560px`, `480px`. There is one range, `min-width:1021px` and `max-width:1180px`. Also `(hover:hover)`, `(pointer:coarse)`, `(prefers-reduced-motion:reduce)` and `(forced-colors:active)`.

The header script (`components/header.tsx`) uses the same `1020px` / `1021px` boundary, so change both together.

## Mapping to Figma variables

Figma variables are not set up in this repo. A direct mapping that keeps names recognizable:

| Figma collection | Variable name (slash groups) | Code variable                           |
| ---------------- | ---------------------------- | --------------------------------------- |
| Color            | `bg/paper`                   | `--paper`                               |
| Color            | `bg/surface`                 | `--surface`                             |
| Color            | `bg/deep`                    | `--deep`                                |
| Color            | `text/ink`                   | `--ink`                                 |
| Color            | `text/muted`                 | `--muted`                               |
| Color            | `border/line`                | `--line`                                |
| Color            | `brand/accent`               | `--accent`                              |
| Color            | `brand/accent-hover`         | `--accent-hi`                           |
| Color            | `brand/accent-soft`          | `--accent-soft`                         |
| Color            | `brand/pink`                 | `--pink`                                |
| Color            | `brand/pink-soft`            | `--pink-soft`                           |
| Color            | `brand/pink-deep`            | `--pink-deep`                           |
| Number           | `radius/base`                | `--r` (10)                              |
| Number           | `layout/wrap-max`            | upper bound of `--wrap` (1400)          |
| Number           | `layout/header-top`          | `--bar-top` (112, 76 on small screens)  |
| Number           | `layout/header-solid`        | `--bar-solid` (68, 64 on small screens) |
| String           | `font/heading`               | Poppins (`--head`)                      |
| String           | `font/body`                  | Figtree (`--body`)                      |

Use Figma modes only if a second theme is ever added; the site has a single light theme.
