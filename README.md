# Static Site — Deploy to GitHub Pages

This repository contains a small static site (p.html, p.css, p.js, image/). This project includes a GitHub Actions workflow that automatically publishes the site to the `gh-pages` branch on push to `main`.

**Quick deploy steps**

- **Initialize & push:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
# replace <USER> and <REPO> with your GitHub username and repo name
git remote add origin https://github.com/<USER>/<REPO>.git
git push -u origin main
```

- **Create repo via GitHub CLI (optional):**

```bash
# creates repository, sets remote, and pushes
gh repo create <USER>/<REPO> --public --source=. --remote=origin --push
```

- **What the workflow does:**
  - On push to `main`, the Actions workflow deploys repository contents to the `gh-pages` branch using the `GITHUB_TOKEN`.
  - The site will be published at `https://<USER>.github.io/<REPO>/` (or at the repo root if using a username.github.io repo).

- **If Pages doesn't appear:**
  - Visit the repository Settings → Pages and ensure the source is set to the `gh-pages` branch (the action usually does this automatically).
  - Wait a few minutes after the first successful deployment.

- **Check Actions:**
  - Go to the Actions tab to see the deploy workflow run and its logs.

If you want, I can also initialize git locally for you or create the remote repo using the GitHub CLI if you provide permission/credentials or run the commands yourself.
