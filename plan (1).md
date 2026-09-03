# Roshini Saravanan — Personal Academic Website Build Plan

## 1. Project Goal

Build a polished, modern personal website for **Roshini Saravanan** that communicates a clear professional identity across:

- Planetary science
- Paleomagnetism and rock magnetism
- Astrobiology and habitability
- Computational research / machine learning
- Science policy
- Teaching, mentorship, and STEM outreach

The site should feel appropriate for:
- Research faculty and potential PhD advisors
- NASA / JPL researchers and internship mentors
- Conference contacts
- Scientific collaborators
- Science policy organizations
- Technical/research employers

The website should **not** look like:
- A generic AcademicPages/Jekyll template
- A startup landing page
- A portfolio generated from a trendy AI template
- A glassmorphism-heavy “vibe-coded” site
- An overanimated creative agency page
- A visual copy of Katie Bristol's website

The design goal is:

> **Editorial scientific portfolio + modern research lab aesthetic + understated personal branding.**

The website should feel credible first, memorable second.

---

# 2. Reference Website Analysis

Reference:
`https://katiebristol.github.io/`

## What the reference site does well

### Strong academic information architecture
The navigation is immediately understandable:

- Home
- Research
- Publications
- Outreach
- Gallery
- CV
- Resources

This structure is appropriate for an academic/scientific audience and should be retained conceptually.

### Research is organized by themes rather than by job titles
The Research page explains major scientific questions rather than simply duplicating CV entries.

This is important.

Roshini's website should similarly organize research around intellectual themes instead of presenting only a chronological resume.

### Dedicated outreach presence
Outreach is not hidden inside the CV. This communicates that science communication is a meaningful part of the researcher's identity.

### Photo/gallery support
Scientific websites benefit heavily from real imagery:
- field work
- instrumentation
- samples
- conferences
- teaching
- outreach

Photography makes otherwise abstract scientific work tangible.

### CV remains accessible
Visitors who need a conventional academic record can still access it.

---

## Where the reference site feels dated or generic

### 1. Template-driven identity
The persistent profile/sidebar structure makes the website strongly resemble other AcademicPages sites.

The viewer sees the template before seeing the person.

### 2. Homepage hierarchy is weak
The homepage starts with profile metadata and a conventional “About Me” section.

It does not immediately communicate:
- the central research question
- current work
- distinctive expertise
- why the visitor should continue exploring

### 3. Research pages are largely long-form text
Research topics are informative but visually flat.

Roshini's site should use:
- research cards
- figures
- microscopy / field imagery
- small data visualizations
- instrument imagery
- concise “Question / Methods / Why it matters” structure

### 4. Limited visual hierarchy
Most pages use similar text widths, headers, images, and spacing.

A modern implementation should distinguish:
- page introductions
- featured research
- active projects
- previous research
- publications
- outreach
- timeline content

### 5. CV and website content overlap heavily
A personal website should not simply convert a CV into HTML.

The site needs narrative.

---

# 3. Recommended Platform

## Recommendation: GitHub Pages + Astro

Use:

- **Astro**
- TypeScript
- HTML/CSS
- minimal client-side JavaScript
- Markdown or MDX for research/project content
- GitHub Pages hosting
- GitHub Actions deployment

### Why Astro

Astro is a particularly good fit for this website because it provides:

- Very fast static pages
- Excellent SEO
- Minimal JavaScript shipped to users
- Component-based development
- Easy Markdown/MDX content management
- Straightforward GitHub Pages deployment
- Modern development ergonomics without making the site feel like a web app

### Why not plain Jekyll / AcademicPages

Jekyll works, but starting from AcademicPages would reproduce much of the generic appearance we are trying to avoid.

### Why not Next.js

Next.js would also work, but most of its application features are unnecessary here.

This site is predominantly static.

Astro produces a simpler architecture while still allowing React components later if a specific interactive visualization requires them.

### Why GitHub Pages is sufficient

GitHub Pages is appropriate because the site requires no backend for the initial version.

Benefits:
- Free
- Stable
- Git-native
- Easy custom-domain support
- Appropriate for an academic portfolio
- Easy continuous deployment

A move to Vercel is unnecessary unless the site later needs:
- server-side APIs
- dynamic CMS previews
- authenticated content
- backend forms
- advanced server rendering

---

# 4. Core Brand Direction

## Professional identity

The site should position Roshini approximately as:

**Planetary scientist studying planetary magnetic fields, mineral records, and habitability through laboratory, computational, and geospatial approaches.**

Do not lock the site too narrowly to one current thesis project.

Her experience spans:
- paleomagnetism
- rock magnetism
- mineralogy
- astrobiology
- machine learning
- exoplanets
- science policy

That multidisciplinary range should feel deliberate rather than scattered.

---

# 5. Visual Design Direction

## Overall aesthetic

Use an **editorial scientific** design.

Think:
- research journal
- modern university lab
- museum exhibition catalog
- scientific visualization

Avoid:
- neon gradients
- giant blobs
- excessive rounded cards
- floating glass panels
- glowing buttons
- animated stars
- fake terminal elements
- excessive parallax
- “AI-generated portfolio” visual tropes

---

## Color system

Keep the palette restrained.

Suggested base:

- Warm off-white / very pale stone background
- Near-black / charcoal text
- Muted slate secondary text
- One deep scientific accent color

Possible accent directions:
- deep mineral blue
- dark teal
- muted rust / hematite
- desaturated earth green

Do not use more than one main accent plus neutrals.

The accent should appear in:
- links
- small labels
- rules
- active navigation
- subtle project metadata
- selected graphical elements

Do not saturate entire sections.

---

## Typography

Use a two-font hierarchy.

### Display / headings
A serious editorial serif.

Examples:
- Source Serif 4
- Newsreader
- Lora
- Instrument Serif

### UI / body
A clean sans serif.

Examples:
- Inter
- Geist
- IBM Plex Sans
- Source Sans 3

Recommended pairing:

**Newsreader + Inter**

or

**Source Serif 4 + IBM Plex Sans**

Typography should make the site feel scholarly without becoming old-fashioned.

---

## Layout

Use:
- generous whitespace
- max content width around 1180–1240px
- narrower reading widths for long prose
- asymmetric layouts occasionally
- strong vertical rhythm
- large editorial headings
- subtle separators instead of card borders everywhere

Desktop:
- 12-column grid

Mobile:
- clean single-column layout
- no cramped sidebar

---

# 6. Global Navigation

Recommended primary navigation:

1. **About**
2. **Research**
3. **Publications**
4. **Teaching & Outreach**
5. **Experience**
6. **CV**

Right-side utility links/icons:

- Email
- LinkedIn
- GitHub

Optional later:
- Google Scholar
- ORCID

Do not create inactive Scholar/ORCID links before profiles exist.

Use a sticky header that becomes slightly more compact after scrolling.

Avoid a permanent left profile sidebar.

---

# 7. Homepage

The homepage must function as a **research identity overview**, not a resume dump.

## Section A — Hero

Desktop layout:
- approximately 60% text
- approximately 40% portrait or meaningful research image

Suggested content hierarchy:

### Eyebrow
`Planetary Science · Paleomagnetism · Astrobiology`

### Main heading
`Roshini Saravanan`

### Position statement
Example concept:

> I study how magnetic and mineral records preserve the environmental history of planets—and what those records can tell us about planetary evolution and habitability.

This text should eventually be manually refined rather than blindly generated from CV bullets.

### Current role
`M.S. Planetary Science · Purdue University`

### CTAs
Primary:
- Explore my research

Secondary:
- View CV

Text links:
- GitHub
- LinkedIn
- Email

Do not use a giant “Hire Me” button.

---

## Section B — Current Research Highlight

Feature the Purdue Paleomagnetism Lab work prominently.

Title concept:

**Reading Earth's ancient magnetic field from Ediacaran rocks**

Include a concise 2–3 sentence explanation.

Supporting metadata:
- Purdue University
- PMag Lab
- Advisor: Dr. Cauê Borlina
- 2025–Present

Methods tags:
- Paleointensity
- Thermal demagnetization
- MPMS
- FORCs
- Petrography
- QGIS

Use a strong scientific image if available.

Possible assets:
- specimen / core image
- Zijderveld plot
- paleointensity plot
- magnetometer
- microscopy image
- field location

If using a plot, simplify its presentation for a general research audience.

---

## Section C — Research Themes

Use 3 large editorial feature blocks, not six tiny cards.

### Theme 1
**Planetary Magnetism**

Research topics:
- Earth's Ediacaran magnetic field
- paleointensity
- paleomagnetism
- magnetic mineral carriers
- remagnetization

### Theme 2
**Mineralogy, Biosignatures & Habitability**

Research topics:
- mineral identification
- Mars Organic Molecule Analyser
- LDMS mass spectra
- Shewanella experiments
- mineral/environment relationships relevant to habitability

### Theme 3
**Computational Planetary Science**

Research topics:
- machine learning
- network analysis
- exoplanet populations
- geospatial analysis
- scientific data analysis

Each theme should link to the Research page.

---

## Section D — Selected Work

Use 3–4 featured project entries.

Recommended projects:

1. **Ediacaran Paleomagnetism — Catoctin Volcanic Province**
2. **Machine Learning for Mineral Identification — MOMA**
3. **Planetary Informatics & Hot Jupiter Network Analysis**
4. **Data-Center Water Policy & Sustainable Scientific Computing**

Each project preview:
- project title
- institution
- period
- one sentence
- relevant image/figure
- methods
- link to project detail

---

## Section E — Publication

Feature the submitted manuscript:

**Laser Desorption Mass Spectrometry for Mineral Identification**

Authors:
M.C. Raith, R. Saravanan, and R. Arevalo Jr.

Status:
`Submitted for Review`

Do not imply publication before acceptance.

---

## Section F — Teaching + Science Communication

Use an image-supported section.

Highlight:
- Purdue Graduate Teaching Assistant — Earth through Time
- GradSWE Outreach Chair
- Graduate Mentorship Chair
- Purdue WISP Science Day
- Purdue Space Day

Possible heading:

**Science works best when it is shared.**

Keep this section visually different from Research.

---

## Section G — Short Professional Timeline

A restrained timeline can include:

- 2026 — Science Policy Intern, Virginia Senate
- 2025–Present — Graduate Research Assistant, Purdue
- 2024–2026 — M-Class Lab
- 2023 — Carnegie Institution for Science
- 2020 — NASA/VSGC Mission Design
- 2019 — NASA/VSGC Instrument Specialist

Do not reproduce every CV bullet.

---

## Section H — Contact Footer

Simple closing:

`Interested in planetary science, paleomagnetism, habitability, or science policy? I’d be happy to connect.`

Include:
- Email
- LinkedIn
- GitHub

---

# 8. Research Page

The Research page should be the strongest page on the site.

## Intro

Use a short research statement describing the connection between:

**planetary materials → preserved physical/chemical records → planetary environments → habitability**

---

## Research Project Template

Each major project should use the same structure:

### Project title

### One-sentence research question

### Context
Why does the question matter?

### What I do
2–4 concise paragraphs or bullets.

### Methods
Small metadata list.

### Key outputs / findings
Only claims supported by existing work.

### Media
1–3 figures/images.

### Collaborators
Advisor/lab/institution.

### Related outputs
- publication
- poster
- conference
- code
- CV item

---

## Project 1 — Ediacaran Paleomagnetism

Source material from CV:

- Analyze paleointensity and paleomagnetic data to constrain Earth's field behavior during the Ediacaran (~570–550 Ma).
- Work on metarhyolites from the Catoctin Volcanic Province.
- Thermal demagnetization and paleointensity measurements.
- Identification/evaluation of magnetite and hematite magnetic carriers.
- Low-temperature MPMS.
- First Order Reversal Curves.
- Petrographic analysis.
- QGIS geochronology/outcrop work.

Make this the featured project.

---

## Project 2 — ML Mineral Identification for MOMA

Include:

- 13 mineral classes / models
- LDMS data
- 4,000+ mass spectra per dataset
- roughly 500 mass-to-charge ratios
- Random Forest / Python workflow
- confusion matrices and accuracy evaluation
- relevance to MOMA / Mars mineral identification

Be precise about the CV wording.

Do not overstate this as autonomous biosignature detection.

---

## Project 3 — Wet-Lab Astrobiology

Include:
- Shewanella bacteria
- custom marine media
- inoculation
- growth monitoring
- culture preparation
- laboratory documentation

Frame this as research exposure / experience, matching the CV.

Do not inflate it into an independent research project.

---

## Project 4 — Planetary Informatics

Include:
- Carnegie Institution for Science
- Planetary Informatics Exploration project
- NASA exoplanet data
- ~30,000 rows
- hot Jupiter subclasses
- network analysis
- R
- Fruchterman-Reingold clustering
- radius and mass thresholds
- host star influence

---

# 9. Publications Page

Keep this minimal until publication count grows.

For each publication:

- Title
- Authors
- Journal / venue when available
- Status
- Year
- DOI when available
- PDF only when legally distributable
- Code/Data links if relevant

Current entry:

### Laser Desorption Mass Spectrometry for Mineral Identification
M.C. Raith, R. Saravanan, R. Arevalo Jr.

Status:
**Submitted for Review**

Do not invent journal, DOI, publication year, or citation details.

---

# 10. Teaching & Outreach Page

Combine teaching, mentorship, and public engagement into a compelling page.

## Section: University Teaching

### Purdue University
Graduate Teaching Assistant — EAPS112 Earth through Time: Fossils & Rocks

Key facts:
- two weekly sections
- 30 students each
- 3-hour labs
- presentations
- hands-on activities
- lesson/lab planning
- grading
- office hours

### University of Maryland
Undergraduate Teaching Assistant — ENGL101 Academic Writing

---

## Section: Mentorship

### Purdue EAPS Graduate Student Association
Grad Mentorship Chair

Highlight:
- 14 first-year graduate students
- mentor matching
- monthly workshops
- academic strategies
- advisor relationships
- research readiness
- wellness
- long-term planning

---

## Section: STEM Outreach

### GradSWE Purdue
Outreach Chair

Highlight:
- Klondike Elementary STEM Time Capsule
- grades 3–5
- 10 Purdue graduate researchers
- 5 classrooms
- research communication

### Purdue WISP Science Day

### Purdue Space Day

Use photographs wherever possible.

---

# 11. Experience / Policy Page

This page can distinguish Roshini from a standard academic portfolio.

## Featured: Science Policy

### Senate of Virginia — Office of Senator Kannan Srinivasan

Create a visually distinct project section around:

**Data-center water use and sustainable high-performance computing**

Include CV-supported topics:
- Loudoun County
- DEQ regulatory data
- water demand
- cooling-efficiency benchmarking
- water-energy tradeoffs
- WUE
- energy demand
- capital / operating costs
- air, evaporative, and closed-loop cooling systems

Avoid publishing internal or confidential work.

The page can explain the public research problem without exposing non-public legislative materials.

---

## Earlier Space / Mission Work

Use compact entries for:

### Virginia Space Grant Consortium — 2020
Europa mission design / risk and safety

### Virginia Space Grant Consortium — 2019
Forest-Fire Impact & Recovery Evaluation mission

These are useful background but should not visually compete with current graduate research.

---

# 12. CV Page

Do **not** iframe a PDF as the only experience.

Use:

- Short intro
- `Download CV` button
- Optional inline PDF preview on desktop
- On mobile, default to download/open

File path convention:

`/cv/Roshini_Saravanan_CV.pdf`

Add a visible:

`Last updated: Month YYYY`

Do not expose phone number prominently across the website.

Recommendation:
Keep the phone number in the downloadable CV if desired, but omit it from the website UI to reduce spam/privacy issues.

---

# 13. Gallery

Gallery is optional for v1 but valuable if high-quality images exist.

Potential categories:

- Field & Samples
- Laboratory
- Conferences
- Teaching
- Outreach
- Planetary Science

Do not build an empty Gallery page.

Only add it when there are at least ~8–12 meaningful images.

Images should include descriptive captions and alt text.

---

# 14. Content Strategy

## Website != CV

Rewrite content according to this hierarchy:

### CV
Detailed accomplishments and chronological record.

### Website
Research narrative and selected evidence.

Example:

Bad:
> Conduct paleomagnetic and rock magnetic analyses of metarhyolites from the Catoctin Volcanic Province...

Better website style:
> I use magnetic records preserved in Ediacaran volcanic rocks to investigate how Earth's geodynamo behaved during a period of major environmental and biological change.

Then use a “Methods” list for technical details.

---

# 15. Component System

Create reusable Astro components.

Suggested structure:

```text
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── SectionHeading.astro
│   ├── ResearchFeature.astro
│   ├── ProjectCard.astro
│   ├── PublicationItem.astro
│   ├── TimelineItem.astro
│   ├── ExperienceItem.astro
│   ├── ImageFigure.astro
│   ├── TagList.astro
│   └── SocialLinks.astro
│
├── content/
│   ├── research/
│   ├── publications/
│   └── outreach/
│
├── layouts/
│   ├── BaseLayout.astro
│   └── ProjectLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── research/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── publications.astro
│   ├── teaching-outreach.astro
│   ├── experience.astro
│   └── cv.astro
│
└── styles/
    ├── global.css
    └── tokens.css
```

---

# 16. Content Collections

Use Astro Content Collections for research projects.

Example conceptual schema:

```ts
{
  title: string,
  institution: string,
  dateStart: string,
  dateEnd?: string,
  summary: string,
  featured: boolean,
  order: number,
  methods: string[],
  image?: string,
  imageAlt?: string,
  collaborators?: string[],
  relatedLinks?: []
}
```

This lets future projects be added without editing page layout code.

---

# 17. Recommended Repository Structure

```text
roshinisaravanan.github.io/
├── public/
│   ├── images/
│   │   ├── research/
│   │   ├── outreach/
│   │   ├── portraits/
│   │   └── og/
│   ├── cv/
│   │   └── Roshini_Saravanan_CV.pdf
│   ├── favicon.svg
│   └── robots.txt
│
├── src/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── PLAN.md
```

If deploying as:

`https://roshinisaravanan.github.io/`

prefer naming the repository:

`roshinisaravanan.github.io`

This avoids a project subpath and makes asset routing simpler.

---

# 18. Responsive Behavior

## Desktop
- Large editorial hero
- multi-column research features
- wide imagery
- generous margins

## Tablet
- Reduce grid complexity
- retain image/text pairing when practical

## Mobile
- all primary content single-column
- navigation collapses cleanly
- no horizontal timelines
- buttons at least 44px high
- body text ~16–18px
- headings scale with `clamp()`
- tables replaced by stacked metadata where necessary

---

# 19. Motion

Use very little motion.

Allowed:
- subtle opacity/translate entrance for major sections
- 150–250ms link/button transitions
- small image scale on hover
- navigation underline animation

Avoid:
- scroll-jacking
- moving backgrounds
- custom cursor
- rotating planets
- particle systems
- typing animations
- page-long parallax
- excessive Framer Motion-style transitions

Respect:

`prefers-reduced-motion`.

---

# 20. Image Direction

Real research imagery should provide most of the site's visual personality.

Prioritize collecting:

1. professional portrait
2. PMag laboratory image
3. Catoctin rock/sample imagery
4. paleomagnetic figure
5. magnetometer / instrumentation
6. microscope / mineral imagery
7. outreach photos
8. Purdue teaching photo
9. conference / IRM Summer School image
10. relevant field image

Do not substitute generic stock photos of planets or laboratories when real material is available.

If a scientific diagram must be created, keep it schematic and publication-like.

---

# 21. Scientific Figure Treatment

Raw MATLAB/Python plots often look inappropriate when inserted directly into a website.

Create web-specific exports:

- SVG where possible
- transparent or site-matching background
- simplified labels
- larger axis text
- remove unnecessary borders
- provide meaningful captions

Every figure should answer a question.

Example caption style:

> Thermal demagnetization measurements help isolate magnetic components retained by minerals with different unblocking temperatures.

This makes figures accessible to non-specialists.

---

# 22. Accessibility

Target WCAG 2.2 AA.

Required:
- semantic heading hierarchy
- keyboard navigation
- visible focus states
- alt text
- sufficient contrast
- no text embedded only in images
- labeled navigation
- skip-to-content link
- responsive zoom behavior
- reduced motion support

Research figures need explanatory captions, not merely filenames.

---

# 23. SEO / Metadata

Every page should have:

- unique title
- description
- canonical URL
- Open Graph metadata
- Twitter/X card metadata
- social preview image

Homepage title:

`Roshini Saravanan | Planetary Science & Paleomagnetism`

Possible description:

`Planetary scientist at Purdue University studying paleomagnetism, planetary materials, habitability, and computational approaches to planetary science.`

Add:
- sitemap
- robots.txt
- JSON-LD Person schema

Person schema may include:
- name
- affiliation
- alumniOf
- URL
- sameAs for LinkedIn/GitHub
- jobTitle or student/research role

Only include verified public profile URLs.

---

# 24. Performance

Target:

- Lighthouse Performance: 95+
- Accessibility: 100 or near 100
- Best Practices: 95+
- SEO: 100

Requirements:
- responsive images
- Astro image optimization
- lazy-load below-fold images
- self-host fonts or minimize external font requests
- preload only critical font files
- avoid unnecessary JS frameworks
- use SVG icons

---

# 25. Privacy / Contact

Use email as the primary contact method.

Do not display the CV phone number in the header/footer.

Email can be:
`roshinis.career@gmail.com`

Options:
- direct `mailto:`
- lightly obfuscated displayed text if desired

GitHub:
`github.com/roshinisaravanan`

LinkedIn:
`linkedin.com/in/roshini-saravanan`

---

# 26. Initial Content Mapping From CV

## Education

### Purdue University
M.S. Planetary Science  
Aug 2025 – Present

### University of Maryland — College Park
B.S. Computer & Information Science  
Minor in Planetary Science  
Aug 2021 – Dec 2024

College Park Scholars — Science, Discovery & Universe

---

## Primary Research

### Purdue PMag Lab
Graduate Research Assistant  
Advisor: Dr. Cauê Borlina  
Aug 2025 – Present

### M-Class Lab
Undergraduate Researcher  
Advisors: Dr. Ricardo Arevalo, Madeline Raith  
Aug 2024 – Feb 2026

### UMD Geology & Astrobiology Wet Lab
Research / Shadowing Experience  
Mentor: Ashley M. Hanna  
Aug 2024 – Dec 2024

### Carnegie Institution for Science
Planetary Informatics & Biosignature Fellow  
Advisors: Dr. Mike Wong, Dr. Anirudh Prabhu  
Aug 2023 – Dec 2023

---

## Teaching

### Purdue University
Graduate Teaching Assistant  
EAPS112 — Earth through Time: Fossils & Rocks  
Aug 2026 – Present

### University of Maryland
Undergraduate Teaching Assistant  
ENGL101 — Academic Writing  
Aug 2022 – Dec 2022

---

## Science Policy

### Senate of Virginia
Office of Senator Kannan Srinivasan  
Science Policy Intern  
Jun 2026 – Present

---

## Leadership / Outreach

### Purdue EAPS Graduate Student Association
Grad Mentorship Chair

### GradSWE Purdue
Outreach Chair

### Purdue WISP Science Day
EAPS/Physics Graduate Lab Lead

### Purdue Space Day
Stomp Rockets Group Leader

### Technica
Sponsorship Organizer

---

## Publication

**Laser Desorption Mass Spectrometry for Mineral Identification**

M.C. Raith, R. Saravanan, and R. Arevalo Jr.

Status: Submitted for Review

---

## Awards

Use a restrained Awards section rather than putting these on the homepage.

Potential entries:
- UMD Dean's List
- Remitly Hackathon Award
- Ferguson Scholarship
- Presidential Merit Scholarship
- College Park Scholars

---

# 27. Homepage Content Priority

The homepage should prioritize information in this order:

1. Current scientific identity
2. Current Purdue research
3. Major research themes
4. Selected projects
5. Publication
6. Teaching/outreach
7. Science policy
8. Short timeline
9. Contact

Do not prioritize:
- old scholarships
- software skill lists
- every instrument
- every early activity

Those can live deeper in the site or CV.

---

# 28. Skills Presentation

Do not create a huge collection of pill badges.

Instead, organize skills contextually.

Example:

### Magnetic & Geological Methods
Thermal demagnetization · Paleointensity · MPMS · FORCs · VSM · Kappabridge · SQUID · Petrography

### Computational
Python · MATLAB · R · GIS/QGIS · SQL · JavaScript

### Data & Modeling
Pandas · NumPy · Machine Learning · Network Analysis · Scientific Visualization

Skills should reinforce research stories rather than resemble keyword SEO.

---

# 29. Custom Domain

GitHub Pages is fine at first.

Long-term recommendation:

Purchase a simple domain such as:

- `roshinisaravanan.com`
- `roshinisaravanan.me`
- another concise professional variation

Point it to GitHub Pages.

A custom domain improves:
- memorability
- professional appearance
- link permanence if hosting ever changes

Do not delay launch because a domain has not been purchased.

---

# 30. Development Phases

## Phase 1 — Foundation

Codex tasks:

1. Initialize Astro + TypeScript
2. Configure GitHub Pages
3. Set up global design tokens
4. Implement typography
5. Build Header/Footer
6. Build responsive layout primitives
7. Add SEO component
8. Add accessibility baseline

Definition of done:
- empty page architecture deployed successfully
- no visual polish dependency on JavaScript

---

## Phase 2 — Homepage

Implement:

1. hero
2. research highlight
3. research themes
4. selected projects
5. publication
6. teaching/outreach preview
7. timeline
8. contact

Definition of done:
- homepage tells a complete professional story even if user never visits another page

---

## Phase 3 — Research Content

Implement:
- Research index
- dynamic research project pages
- content collection schema
- project navigation

Seed with:
- Ediacaran Paleomagnetism
- MOMA Mineral Identification
- Planetary Informatics
- Wet-Lab Astrobiology

---

## Phase 4 — Supporting Pages

Create:
- Publications
- Teaching & Outreach
- Experience / Policy
- CV
- About if still useful after homepage is complete

Do not create pages purely because the reference site contains them.

---

## Phase 5 — Images & Scientific Media

Add real assets.

For every image:
- optimized WebP/AVIF version
- width/height
- alt text
- caption where meaningful

Add web-friendly research plots.

---

## Phase 6 — QA

Test:

### Browsers
- Chrome
- Safari
- Firefox

### Screens
- iPhone-sized
- modern Android
- iPad
- 13–16" laptop
- large desktop

### Automated
- Lighthouse
- axe accessibility scan
- broken link check
- HTML validation

---

# 31. Codex Implementation Rules

Add these rules to the project's agent instructions.

## Design rules

- Do not introduce gradients without explicit approval.
- Do not introduce glassmorphism.
- Do not add decorative animations unless specifically requested.
- Do not add generic stock imagery.
- Do not use more than one primary accent color.
- Do not turn every content group into a rounded card.
- Use whitespace and typography before borders and shadows.
- Maintain consistent spacing tokens.
- Prioritize accessible semantic HTML.

## Content rules

- Never invent research findings.
- Never upgrade manuscript status.
- Never invent journal names, DOIs, conference presentations, awards, or collaborations.
- Do not change dates without source material.
- Keep scientific claims traceable to source content.
- Clearly distinguish completed work from current work.

## Engineering rules

- Prefer Astro components.
- Keep client JavaScript minimal.
- No React dependency unless an actual interactive component justifies it.
- Use TypeScript.
- Use CSS custom properties for tokens.
- Avoid large UI component frameworks.
- Avoid Tailwind unless explicitly chosen; a small authored CSS system is preferable for this design.
- Run lint/build before committing.
- Ensure GitHub Pages base URL behavior is correct.

---

# 32. Suggested GitHub Issues / Build Tasks

Create issues approximately like:

### Design System
- [ ] Establish typography scale
- [ ] Establish color tokens
- [ ] Establish spacing scale
- [ ] Create buttons and text links
- [ ] Create responsive grid
- [ ] Create figure/caption treatment

### Global
- [ ] Header
- [ ] Mobile navigation
- [ ] Footer
- [ ] SEO
- [ ] Social metadata
- [ ] Accessibility foundations

### Home
- [ ] Hero
- [ ] Current research feature
- [ ] Research themes
- [ ] Selected projects
- [ ] Publication
- [ ] Teaching/outreach
- [ ] Timeline
- [ ] Contact

### Research
- [ ] Research content schema
- [ ] Research index
- [ ] Project detail template
- [ ] Four initial projects

### Supporting
- [ ] Publications page
- [ ] Teaching/outreach page
- [ ] Experience/policy page
- [ ] CV page

### Assets
- [ ] Portrait
- [ ] Paleomagnetism imagery
- [ ] Scientific plots
- [ ] MOMA/mineral image
- [ ] Outreach photos

### Deployment
- [ ] GitHub workflow
- [ ] GitHub Pages settings
- [ ] sitemap
- [ ] robots.txt
- [ ] 404 page

---

# 33. Definition of “Not Vibe-Coded”

Before accepting a design, verify:

- Does the site look credible if every animation is disabled?
- Does typography establish hierarchy by itself?
- Are visual effects solving a communication problem?
- Are there fewer than three types of card treatments?
- Are research images genuine and informative?
- Does every section have a clear reason to exist?
- Would this design still look professional in five years?
- Could this plausibly belong to a serious early-career scientist rather than a SaaS startup?

If the answer to any is no, simplify.

---

# 34. Final Recommended Sitemap

```text
/
├── Research
│   ├── Ediacaran Paleomagnetism
│   ├── Mineral Identification for MOMA
│   ├── Planetary Informatics
│   └── Astrobiology Wet-Lab Experience
│
├── Publications
├── Teaching & Outreach
├── Experience
│   └── Science Policy
├── CV
└── optional Gallery
```

The About content can live primarily on the homepage instead of requiring a separate page.

---

# 35. First Codex Prompt

Use the following after adding this plan to the repository:

```text
Read PLAN.md completely before modifying the repository.

Build Phase 1 only.

Create an Astro + TypeScript static site intended for deployment to the
roshinisaravanan.github.io GitHub Pages repository.

Follow the visual and engineering constraints in PLAN.md carefully.

The site should establish an understated editorial-scientific design system,
not a generic developer portfolio or SaaS landing page.

For Phase 1:

1. initialize/configure Astro
2. create the BaseLayout
3. implement design tokens
4. implement responsive typography
5. implement accessible Header and Footer components
6. create the main page routes as placeholders
7. configure metadata / SEO foundations
8. configure GitHub Pages deployment
9. create a useful 404 page
10. run the build and fix all errors

Do not build the full homepage yet.
Do not invent content.
Do not add unnecessary dependencies.
Do not use gradients, glassmorphism, particle effects, or large animation libraries.

When complete, summarize:
- files created
- major architectural decisions
- commands used to verify the build
- anything still required before Phase 2
```

---

# 36. Recommended Next Step After Phase 1

After the skeleton builds successfully, give Codex the real site assets before asking it to implement Phase 2.

Create:

```text
public/images/portraits/
public/images/research/paleomag/
public/images/research/moma/
public/images/research/exoplanets/
public/images/outreach/
```

Then select the strongest 8–15 images.

The quality of those assets will influence the final site more than adding additional UI effects.
