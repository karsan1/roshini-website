# Editing the Website Content

This guide is for the website owner or anyone updating the site from a new CV. It identifies the exact files and current line numbers to edit. Line numbers may move after changes, so also search for the quoted text or run the search commands below.

## Before editing

Install [Node.js](https://nodejs.org/) 22 or newer, open a terminal in the project folder, and run:

```sh
npm install
npm run dev
```

Astro prints a local address, normally `http://localhost:4321/roshini-website/`. Keep the development server running and refresh the browser after edits.

Use a code editor such as Visual Studio Code. Text between HTML-style tags is usually visible page copy:

```astro
<p class="placeholder">[Add your description here.]</p>
```

Replace only the text unless you intentionally want to change the layout:

```astro
<p>I investigate …</p>
```

Removing `class="placeholder"` also removes the italic placeholder styling.

## Find every unfinished section

From the project root, run:

```sh
rg -n '\[Add|placeholder' src
```

Every bracketed `[Add …]` message is an intentional content placeholder. Before publishing, review every result and either replace it with verified content or remove that element.

## Editing map

### Home page

Edit [`src/pages/index.astro`](src/pages/index.astro).

| Current lines | What appears there |
| --- | --- |
| 18–27 | Browser title, search/social description, name, short introduction, and current role |
| 35–53 | The blue “Field Note” panel and its material, record, and question |
| 60–70 | Featured-research heading, role description, institution, lab, position, and dates |
| 81–99 | Research-theme introduction and three theme descriptions |
| 120–129 | Science-policy title, organization, dates, and summary |
| 140 | Publication shown on the home page |
| 147–157 | Teaching/outreach introduction and featured roles |
| 165–175 | Short career timeline |

The research cards on lines 108–119 are generated automatically from the Markdown files described under “Research projects.” Do not duplicate those project details in this page.

### CV page

Edit [`src/pages/cv.astro`](src/pages/cv.astro).

| Current lines | What appears there |
| --- | --- |
| 5–10 | Page metadata, CV introduction, and “updated” date |
| 15–19 | Education |
| 25–31 | Research roles and their descriptions |
| 37–42 | Teaching and policy roles |
| 48–53 | Methods, software, data, and modeling skills |
| 59–66 | Awards and recognition |

To add another CV entry, copy one complete `<article>…</article>` item in the appropriate section and change its date, title, institution, and description. Keep claims, dates, awards, and role status identical to the current CV.

Example:

```astro
<article>
  <span>2026–Present</span>
  <div>
    <h3>Title of role</h3>
    <p>Institution or program</p>
    <p>A concise, factual description of the work.</p>
  </div>
</article>
```

The existing entries are compressed onto one line; either one-line or multi-line formatting works.

### Research projects

Research project content belongs in [`src/content/research/`](src/content/research/):

- [`ediacaran-paleomagnetism.md`](src/content/research/ediacaran-paleomagnetism.md)
- [`moma-mineral-identification.md`](src/content/research/moma-mineral-identification.md)
- [`planetary-informatics.md`](src/content/research/planetary-informatics.md)
- [`wet-lab-astrobiology.md`](src/content/research/wet-lab-astrobiology.md)

In each file, lines 2–14 are frontmatter: structured fields used in research cards, project pages, navigation, and metadata. Lines 17 onward are the full project narrative.

Example frontmatter:

```yaml
---
title: "Full project title"
shortTitle: "Short card title"
institution: "Institution · Lab"
period: "2025–Present"
question: "The research question"
summary: "A short, factual one- or two-sentence summary."
featured: true
order: 1
methods: ["Method one", "Method two", "Software"]
collaborators: ["Verified lab or program name"]
figure: "paleomag"
figureCaption: "An accurate caption for the schematic."
statusLabel: "Current graduate research"
---
```

Important rules:

- Keep quotation marks around text containing punctuation such as colons.
- `order` controls the project-card order.
- `methods` and `collaborators` are YAML lists.
- `figure` must be one of `paleomag`, `moma`, `wetlab`, or `exoplanets`; the allowed values are enforced in [`src/content.config.ts`](src/content.config.ts) lines 7–20.
- The file name becomes the page URL. For example, `planetary-informatics.md` becomes `/research/planetary-informatics/`.
- Do not claim a result, collaborator, publication, or completion status that is not supported by the current CV or other supplied source material.
- “Submitted,” “accepted,” “in press,” and “published” are different statuses. Update a manuscript only when its actual status changes.

To add a project, copy an existing `.md` file, give it a short lowercase hyphenated file name, fill every required frontmatter field, and write the narrative below the second `---`. The listing and detail page are generated automatically.

### Research landing page

Edit [`src/pages/research/index.astro`](src/pages/research/index.astro):

- Line 13: research introduction.
- Lines 28–30: highlighted magnetic/geological, computational, and laboratory methods.

### Experience and policy

Edit [`src/pages/experience.astro`](src/pages/experience.astro):

- Line 10: page introduction.
- Lines 17–21: science-policy role, organization, dates, and description.
- Lines 28–31: mission-design introduction and prior roles.
- Lines 40–41: education summary repeated on this page.

### Teaching, mentorship, and outreach

Edit [`src/pages/teaching-outreach.astro`](src/pages/teaching-outreach.astro):

- Line 9: page introduction.
- Lines 16–20: graduate teaching role.
- Lines 27–30: mentorship role.
- Lines 38–50: outreach introduction and three activities.
- Lines 57–58: earlier teaching role.

### Publications

Edit [`src/pages/publications.astro`](src/pages/publications.astro), especially lines 10 and 14–15. A publication is rendered with:

```astro
<PublicationItem
  title="Publication title"
  authors="Author list in the correct order"
  status="Submitted for review"
  year="2026"
/>
```

Copy the complete component for additional publications. The same featured publication is repeated on the home page at [`src/pages/index.astro`](src/pages/index.astro) line 140, so update both places if that featured item changes.

### Name, email, profile links, and site-wide identity

Review all of these when ownership, affiliation, contact details, or the public URL changes:

- [`src/components/SocialLinks.astro`](src/components/SocialLinks.astro) lines 8–12: email, LinkedIn, and GitHub.
- [`src/components/Header.astro`](src/components/Header.astro) lines 18–20: monogram, name, and accessible home-link label.
- [`src/components/Footer.astro`](src/components/Footer.astro) lines 8–18: footer message, name, and affiliation.
- [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) lines 15–25: search-engine `Person` data, public URL, email, role, affiliations, profiles, and topics.
- Every page’s `<BaseLayout title="…" description="…">`: browser title and search/social description.

Search for every occurrence of the current identity before publishing:

```sh
rg -n 'Roshini|roshini|Purdue|karsan1' src astro.config.mjs README*.md
```

### Images, favicon, and CV PDF

- Social-sharing image: [`public/images/og/roshini-saravanan.jpg`](public/images/og/roshini-saravanan.jpg).
- Browser icon: [`public/favicon.svg`](public/favicon.svg).
- The repository currently does not contain a downloadable CV PDF or a live download button. If one is added, put the current PDF in `public/cv/`, link to it with the `withBase()` helper, and do not commit a private CV containing information that should not be public.

Files inside `public/` are copied to the deployed site without processing. Keep file names lowercase and URL-friendly where practical.

## Preview and validate changes

After editing, run:

```sh
npm run check
npm run build
npm run preview
```

Check every page on both desktop and a narrow mobile window. Confirm that:

- no `[Add …]` placeholders remain;
- names, dates, affiliations, and manuscript statuses agree with the current CV;
- all navigation, research cards, and profile links work;
- no private phone number, home address, or other unintended personal data is present;
- the terminal reports no Astro or TypeScript errors.

Commit and push only after the production build succeeds. The GitHub Pages workflow deploys pushes to `main`.
