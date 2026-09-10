# Technical Overview and Project Structure

## What this project is

This repository is a statically generated academic portfolio. It presents a home page, research index and detail pages, publications, teaching/outreach, professional experience, a web CV, and a custom not-found page.

The site is designed to publish on GitHub Pages without a server or database. Astro converts the source files into plain HTML, CSS, images, and a small amount of browser JavaScript in `dist/`. GitHub Pages serves that generated output.

## Technology stack

| Technology | Role in the project | Why it fits |
| --- | --- | --- |
| [Astro 7](https://astro.build/) | Page routing, components, layouts, content loading, and static generation | Produces fast static pages while allowing reusable components and content-driven routes |
| TypeScript 6 | Type checking for component props, path utilities, and Astro configuration | Catches invalid data shapes and component usage before deployment |
| Astro Content Collections | Loads and validates research Markdown | Keeps research writing separate from layout code and generates consistent cards/detail pages |
| Zod through `astro/zod` | Defines the research-content schema | Stops builds when a required field is missing or has the wrong type |
| Authored CSS | Responsive layout, typography, colors, and component styling | Avoids a runtime styling framework and keeps the design system explicit |
| `@astrojs/sitemap` | Generates a sitemap from the configured production site | Helps search engines discover the static routes |
| GitHub Actions | Automated install, check, build, artifact upload, and Pages deployment | Publishes every push to `main` reproducibly |
| GitHub Pages | Static hosting | Matches the static output and provides owner-controlled hosting without a server |

There is no React, Vue, database, CMS, API server, or client-side router. Most pages ship as HTML and CSS. The only authored client-side JavaScript is a small header scroll handler in `src/components/Header.astro`.

## Repository map

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages CI/CD
├── public/
│   ├── images/og/                  # Social-sharing image
│   ├── favicon.svg                 # Browser icon
│   └── robots.txt                  # Search-crawler policy
├── src/
│   ├── components/                 # Reusable UI building blocks
│   ├── content/
│   │   └── research/*.md           # Structured research records and prose
│   ├── layouts/
│   │   └── BaseLayout.astro        # Shared document shell and metadata
│   ├── lib/
│   │   └── paths.ts                # GitHub Pages-safe URL helper
│   ├── pages/                      # File-based routes
│   │   ├── research/
│   │   │   ├── index.astro         # /research/
│   │   │   └── [id].astro          # Generated /research/{project-id}/ pages
│   │   ├── 404.astro
│   │   ├── cv.astro
│   │   ├── experience.astro
│   │   ├── index.astro             # Home page
│   │   ├── publications.astro
│   │   └── teaching-outreach.astro
│   ├── styles/
│   │   ├── global.css              # Reset, typography, shared layout utilities
│   │   └── tokens.css              # Design tokens
│   └── content.config.ts           # Research collection schema
├── astro.config.mjs                # Production URL, base path, static output, sitemap
├── package.json                    # Scripts and pinned development dependencies
├── package-lock.json               # Reproducible npm dependency tree
└── tsconfig.json                   # Strict TypeScript configuration
```

`dist/`, `.astro/`, and `node_modules/` are generated locally and should not be hand-edited. Source changes belong in `src/`, `public/`, or the root configuration files.

## Routing and rendering

Astro uses file-based routing:

| Source file | Route |
| --- | --- |
| `src/pages/index.astro` | `/` |
| `src/pages/cv.astro` | `/cv/` |
| `src/pages/experience.astro` | `/experience/` |
| `src/pages/publications.astro` | `/publications/` |
| `src/pages/teaching-outreach.astro` | `/teaching-outreach/` |
| `src/pages/research/index.astro` | `/research/` |
| `src/pages/research/[id].astro` | One route per research Markdown file |
| `src/pages/404.astro` | `/404.html` in the static build |

The dynamic-looking `[id].astro` route still produces static files. Its `getStaticPaths()` function loads every entry from the `research` collection and supplies each file name as an `id`. During the build, Astro renders one HTML page for each project; no request-time server is required.

## Research content pipeline

Research is the most structured part of the site:

```text
src/content/research/*.md
        │
        ├── validated by src/content.config.ts
        │
        ├── listed by src/pages/research/index.astro
        ├── reused as selected work on src/pages/index.astro
        └── rendered by src/pages/research/[id].astro
```

Each Markdown file has YAML frontmatter followed by normal Markdown prose. The schema requires:

- titles, institution, dates, question, summary, and figure caption as strings;
- `featured` as a boolean;
- `order` as a number;
- methods and collaborators as arrays of strings;
- `figure` as one of four supported schematic variants;
- an optional status label.

This architecture creates one source of truth for core project details. Changing a project summary or method in its Markdown file updates the research listing, home-page card, and project detail page together.

The `featured` field is currently validated and stored but is not used to filter either listing. The home page explicitly selects the Ediacaran project by ID for its large feature, while all projects are mapped into the selected-work list.

## Components and layout

[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) wraps every page with the shared HTML document. It supplies:

- the header, footer, and main-content landmark;
- page title and meta description;
- canonical URL;
- Open Graph and Twitter card metadata;
- social-sharing image URL;
- JSON-LD `Person` structured data;
- global CSS and a keyboard-accessible skip link.

Reusable components keep repeated presentation consistent:

- `Header.astro`: desktop/mobile navigation, active-route state, and the only client scroll script.
- `Footer.astro`: common contact and identity footer.
- `SocialLinks.astro`: email, LinkedIn, and GitHub links with inline SVG icons.
- `ProjectCard.astro`: project summary card fed by content-collection data.
- `PublicationItem.astro`: typed publication row.
- `TimelineItem.astro`: typed date/title/organization timeline row.
- `ScientificGraphic.astro`: four authored inline-SVG scientific schematics.
- `SectionHeading.astro`: consistent section introduction.
- `TagList.astro`: accessible list of methods or categories.

Astro component props use TypeScript interfaces. Component styles are scoped by Astro, while intentionally shared rules live in `global.css`.

## Design system and responsive behavior

[`src/styles/tokens.css`](src/styles/tokens.css) defines the site’s design tokens:

- a paper-and-ink neutral palette with one blue primary accent;
- serif display and system sans-serif body font stacks;
- fluid font sizes using `clamp()`;
- shared spacing, content-width, and reading-width values.

[`src/styles/global.css`](src/styles/global.css) provides box sizing, typography, focus treatment, containers, section spacing, buttons, common grids, prose styles, and responsive fallbacks. Component-local styles own component-specific layouts.

The layouts generally collapse multi-column grids at 700–900 px. Interactive links have minimum touch-target heights, visible keyboard focus is defined globally, semantic landmarks are used, and reduced-motion preferences suppress transitions. Fonts use local system stacks, so the site does not depend on a third-party font request.

## GitHub Pages-safe paths

Project sites are served below a repository path such as `/roshini-website/`, not necessarily at the domain root. [`src/lib/paths.ts`](src/lib/paths.ts) reads Astro’s `BASE_URL`, normalizes it, and prefixes internal authored links and public assets.

For example:

```astro
<a href={withBase('research/')}>Research</a>
```

can build to `/roshini-website/research/` for a project site or `/research/` for an account site. Authors should use `withBase()` for internal `href` and public-asset paths instead of hard-coding `/research/` or `/images/...`.

[`astro.config.mjs`](astro.config.mjs) controls:

- `site`: canonical production origin;
- `base`: repository subpath, or `/` for an account site;
- `output: 'static'`: build all pages ahead of time;
- the sitemap integration.

## Build and development commands

The supported commands are defined in [`package.json`](package.json):

```sh
npm install       # install the locked dependency tree
npm run dev       # local development server with live reload
npm run check     # Astro and TypeScript validation
npm run build     # validation followed by a production static build
npm run preview   # serve dist/ locally after a build
```

`npm run build` deliberately runs `astro check` first. A production build should fail before deployment if component typing or content validation is invalid.

The project pins exact development dependency versions and commits `package-lock.json`, which makes local and CI installs more reproducible. Astro telemetry is disabled in all npm scripts.

## Deployment pipeline

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on:

- every push to `main`;
- a manual `workflow_dispatch` from GitHub’s Actions interface.

The build job checks out the repository and uses Astro’s official Pages action to install, build, and upload the static artifact. The deploy job waits for the build, obtains GitHub’s Pages environment, and deploys with `actions/deploy-pages`. Workflow permissions are limited to repository read access, Pages write access, and the identity token required for deployment.

The hosting repository must select **GitHub Actions** as the Pages source. See [`README_GITHUB_PAGES_HANDOFF.md`](README_GITHUB_PAGES_HANDOFF.md) for ownership and publishing instructions.

## Search and social metadata

The base layout produces canonical, Open Graph, Twitter card, and JSON-LD data. Individual pages provide their own title and description to that layout. The sitemap integration uses the `site` setting, while `public/robots.txt` permits crawling.

When the public domain, account, owner identity, role, or affiliation changes, update both visible page content and the machine-readable data in `BaseLayout.astro`. When the preview image changes, keep its layout reference and `public/images/og/` file synchronized.

## Maintenance conventions

- Put research facts and narratives in the collection Markdown rather than duplicating them in page templates.
- Keep publication status precise; do not silently turn submitted work into accepted or published work.
- Keep claims traceable to the current CV or other supplied source material.
- Prefer Astro and semantic HTML; add client-side JavaScript only when interaction requires it.
- Reuse CSS custom properties and the single accent color.
- Use `withBase()` for internal site and public-asset URLs.
- Run `npm run check` and `npm run build` before merging or publishing.
- Test keyboard navigation, mobile layout, all external links, and the deployed repository subpath.
- Do not edit generated output in `dist/`; rebuild it from source.

For a content-only update, start with [`README_CONTENT_EDITING.md`](README_CONTENT_EDITING.md). For repository ownership, collaborators, and hosting, use [`README_GITHUB_PAGES_HANDOFF.md`](README_GITHUB_PAGES_HANDOFF.md).
