# Roshini Saravanan — Academic Website

An editorial scientific portfolio built with Astro and TypeScript. The site covers planetary science, paleomagnetism, astrobiology, computational research, science policy, teaching, and outreach.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` before publishing. The production build is written to `dist/`.

## Content

Research projects live in `src/content/research/` and are validated by `src/content.config.ts`. Add or update projects there rather than duplicating their content in page templates.

## Deployment

The site is configured for `https://roshinisaravanan.github.io` and deploys from `main` through the GitHub Pages workflow in `.github/workflows/deploy.yml`.

In the repository's GitHub Pages settings, choose **GitHub Actions** as the source.

## Assets still to add

The web experience intentionally does not invent unavailable source material. Add the current CV at `public/cv/Roshini_Saravanan_CV.pdf` before enabling a download link. Genuine portrait, laboratory, field, figure, teaching, and outreach images can replace or complement the current schematic graphics as they become available.
