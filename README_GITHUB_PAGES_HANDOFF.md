# GitHub Ownership and GitHub Pages Setup

This guide moves the website into the final owner’s GitHub account and publishes it at a URL controlled by that account.

## Choose the ownership method

### Option A: transfer the existing repository

Use this when the final owner should receive the repository with its commit history, issues, stars, and settings.

1. The current owner opens the repository on GitHub.
2. Go to **Settings → General → Danger Zone → Transfer ownership**.
3. Enter the destination owner’s GitHub username and confirm the repository name.
4. The recipient accepts the transfer if GitHub asks them to do so.
5. Both people update their local clone after the transfer:

   ```sh
   git remote set-url origin https://github.com/NEW-USERNAME/REPOSITORY-NAME.git
   git remote -v
   ```

GitHub normally redirects the old repository URL, but updating the remote prevents future confusion. See GitHub’s [repository transfer documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) for restrictions and organization-specific rules.

### Option B: create a fresh repository from a downloaded copy

Use this when the recipient wants a clean repository in their account and does not need the original Git history.

1. Download the project ZIP and unzip it, or copy the project folder to the recipient’s computer.
2. Do not copy an old `.git` directory. A GitHub ZIP does not include one.
3. Sign in to the recipient’s GitHub account and create a new **public** repository. Leave **Add a README**, `.gitignore`, and license unchecked because the project already has files.
4. In a terminal, enter the copied project directory and run:

   ```sh
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/NEW-USERNAME/REPOSITORY-NAME.git
   git push -u origin main
   ```

5. Refresh the GitHub repository page and confirm the files appear under the recipient’s account.

If the copied folder still contains Git history, do not delete `.git` casually. Either use Option A, or make a fresh copy from a ZIP/archive before initializing the new repository.

## Decide the public URL

GitHub Pages supports two useful arrangements:

| Site type | Repository name | Public URL | Astro `base` |
| --- | --- | --- | --- |
| Account site | exactly `NEW-USERNAME.github.io` | `https://NEW-USERNAME.github.io/` | `/` |
| Project site | any other repository name, for example `academic-website` | `https://NEW-USERNAME.github.io/academic-website/` | `/academic-website` |

An account site gives the shortest personal URL, but an account can have only one repository with the exact `NEW-USERNAME.github.io` name. A project site is appropriate when the account already uses that repository or hosts several sites.

## Update this project for the new URL

Before the final push, edit [`astro.config.mjs`](astro.config.mjs) lines 5–6.

For a project site named `academic-website`:

```js
site: 'https://NEW-USERNAME.github.io',
base: '/academic-website',
```

For an account site in a repository named `NEW-USERNAME.github.io`:

```js
site: 'https://NEW-USERNAME.github.io',
base: '/',
```

The `site` value is the origin only; the repository subdirectory belongs in `base`. Do not add a trailing slash to a project-site base.

Also update:

- [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) line 19: change the `Person` schema’s `url` to the final complete public URL.
- [`README.md`](README.md) deployment section: replace the old account, repository, and URL.
- [`src/components/SocialLinks.astro`](src/components/SocialLinks.astro) line 11 if the public GitHub profile should point to the new owner.
- [`package.json`](package.json) line 2 optionally, if the package name should match the new repository.

The project’s [`withBase()` helper](src/lib/paths.ts) adds the configured base path to internal links and public assets. Continue using it for authored internal URLs so project-site deployment remains safe.

Validate before publishing:

```sh
npm install
npm run check
npm run build
```

## Enable GitHub Pages

The deployment workflow is already present at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It builds the static Astro site and deploys it whenever code is pushed to `main`; it can also be run manually.

In the recipient-owned repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab. If GitHub asks, enable Actions for the repository.
4. Push a commit to `main`, or open **Actions → Deploy to GitHub Pages → Run workflow**.
5. Wait for both the `build` and `deploy` jobs to turn green.
6. Return to **Settings → Pages** and open the published URL.

The workflow requests only the permissions needed to read the repository and deploy Pages. GitHub’s official guides cover [custom GitHub Actions workflows for Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and [configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Add the developer as a collaborator

The repository owner can grant ongoing access without giving up ownership:

1. Open the repository on GitHub.
2. Go to **Settings → Collaborators** (the section may appear as **Collaborators and teams** in an organization).
3. Select **Add people**.
4. Search for the developer’s GitHub username or email, select the correct account, and send the invitation.
5. The invited person accepts the invitation.

For a personal repository, collaborators generally receive write access. For an organization repository, choose the least-privileged role that allows the needed work. Never share a password or personal access token. GitHub documents the current flow in [Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).

Recommended working pattern after collaboration is enabled:

```sh
git switch -c content/update-cv
git add .
git commit -m "Update CV content"
git push -u origin content/update-cv
```

Then open a pull request on GitHub, review the preview and changes, and merge into `main`. A direct push to `main` also deploys, but pull requests make content changes easier to review.

## Troubleshooting

### The site is blank or styles and links are broken

Confirm that `base` in `astro.config.mjs` exactly matches the repository name, including capitalization. Account sites must use `/`; project sites must use `/REPOSITORY-NAME`.

### The workflow succeeds, but the displayed URL is wrong

Update both `site` and `base` in `astro.config.mjs`, plus the structured-data URL in `src/layouts/BaseLayout.astro`, then push again.

### GitHub reports that Pages is not enabled

Open **Settings → Pages** and choose **GitHub Actions** as the source. Also check **Settings → Actions → General** to ensure repository Actions are allowed.

### A deployment fails

Open **Actions → Deploy to GitHub Pages**, select the failed run, and expand the failed step. Run `npm run build` locally first; a local Astro or content-schema error usually provides the fastest diagnosis.

### Changes do not appear

Confirm the commit is on `main`, the latest Pages workflow completed successfully, and the browser is showing the new account’s URL. Then hard-refresh the page or try a private browser window.

## Final handoff checklist

- The repository appears under the final owner’s GitHub account.
- The final owner can open **Settings** and manage access.
- `astro.config.mjs` contains the new username and exact repository base.
- `BaseLayout.astro` contains the final public URL and correct identity data.
- `npm run build` succeeds.
- GitHub Pages uses **GitHub Actions** as its source.
- The latest `Deploy to GitHub Pages` workflow is green.
- The public URL, navigation, images, research pages, and social links work.
- The developer has collaborator access only if ongoing maintenance is desired.
