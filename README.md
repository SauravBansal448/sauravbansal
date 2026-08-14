# Saurav Bansal — Portfolio

A modern, responsive portfolio built with React + Vite and designed for GitHub Pages.

## 1. Prerequisites

Install:

- Node.js (LTS)
- npm
- Git
- A GitHub account

Verify:

```bash
node -v
npm -v
git --version
```

## 2. Update your links

Open `src/main.jsx` and replace:

```js
github: "https://github.com/YOUR_GITHUB_USERNAME",
linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
```

with your real GitHub and LinkedIn URLs.

The email is already taken from the supplied resume.

## 3. Add your resume

The project expects:

```text
public/resume.pdf
```

Your supplied resume is already copied into that location.

## 4. Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually:

```text
http://localhost:5173
```

Build a production version:

```bash
npm run build
```

## 5. Recommended GitHub repository

For the cleanest personal URL, create a repository named:

```text
YOUR_GITHUB_USERNAME.github.io
```

Then your website will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/
```

The included workflow deploys the Vite build automatically through GitHub Actions.

## 6. Push to GitHub

From this project folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git push -u origin main
```

## 7. Enable GitHub Pages

On GitHub:

1. Open your repository.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Open the `Actions` tab and wait for the deployment workflow to finish.
6. Open your published URL.

## 8. Future updates

Whenever you change the portfolio:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will rebuild and redeploy the website.

## 9. If you use a normal repository instead of a user-site repository

Example:

```text
github.com/YOUR_USERNAME/saurav-portfolio
```

then the URL is:

```text
https://YOUR_USERNAME.github.io/saurav-portfolio/
```

In that case set the workflow build variable to:

```yaml
VITE_BASE_PATH: /saurav-portfolio/
```

and push again.

## 10. Custom domain

You can later connect a domain such as:

```text
sauravbansal.dev
```

through GitHub Pages settings.

## Portfolio sections

- Hero / introduction
- About
- Professional experience
- Selected projects
- Technical skills
- Awards and recognition
- Education
- Certifications
- Publications / blogs
- Contact
- Downloadable resume
- Dark / light mode
- Responsive mobile navigation
