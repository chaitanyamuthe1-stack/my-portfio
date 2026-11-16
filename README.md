# Chaitanya Muthe — Portfolio

A responsive React and Vite portfolio for Chaitanya Muthe. It uses a dark navy visual theme with electric-blue and purple accents, glass-style cards, and Framer Motion transitions.

The site includes verified profile, education, and skills content. Projects, work experience, certifications, achievements, developer profiles, interests, and contact details are not fabricated; sections that need more information show a clear empty state or remain hidden.

## Technology

- React 18 and Vite
- JavaScript and CSS, with Tailwind CSS utilities
- Framer Motion
- Lucide React

## Project structure

```text
public/
  resume.pdf
  favicon.svg
src/
  assets/
    documents/
    icons/
    images/
  components/               # Shared UI, navigation, footer, and cards
    Button.jsx
    CertificateCard.jsx
    Footer.jsx
    Navbar.jsx
    ProjectCard.jsx
    SectionTitle.jsx
    SkillCard.jsx
  sections/                 # One component for each portfolio section
    Hero.jsx
    About.jsx
    Education.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Certifications.jsx
    Achievements.jsx
    Resume.jsx
    DeveloperProfiles.jsx
    Interests.jsx
    Contact.jsx
  data/                     # Editable portfolio content
    about.js
    achievements.js
    certificates.js
    developerProfiles.js
    education.js
    experience.js
    interests.js
    profile.js
    projects.js
    skills.js
    portfolioData.js        # Data exports used by page sections
  App.jsx                   # App shell and data-driven section navigation
  styles/
    global.css
    animations.css
  main.jsx                  # React entry point
```

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Vite prints the local development URL in the terminal.

## Deploy with GitHub and Vercel

1. Create a GitHub repository. To avoid a first-push conflict, leave the options to add a README, `.gitignore`, or license unchecked; this project already has those files.
2. Push this project from its root folder. If it is not already a Git repository, run `git init` first. Replace the placeholders with your GitHub account and repository name:

   ```bash
   git add .
   git commit -m "Prepare portfolio for deployment"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git
   git push -u origin main
   ```

   If `origin` is already configured, check it with `git remote -v` and update it with `git remote set-url origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO>.git` instead of adding it again. Complete GitHub authentication in the browser or through your configured Git credential manager; do not put passwords or access tokens in the remote URL.

3. In Vercel, choose **Add New → Project**, authenticate with GitHub, and import the repository.
4. Use these project settings (Vercel usually detects them automatically):
   - Framework preset: **Vite**
   - Root directory: `./`
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
5. Select **Deploy**. When deployment finishes, open the Vercel project’s **Domains** section to find its public `*.vercel.app` URL. Add a custom domain there if desired.
6. To publish later changes, commit and push them to the connected production branch (normally `main`). Vercel builds and deploys each push automatically; pull requests can create preview deployments.

Never commit `.env` files, API keys, passwords, or other credentials. The repository `.gitignore` excludes local environment files and Vercel metadata.

## Update portfolio content

Edit the topic-specific JavaScript files under `src/data/`. Profile and academic facts belong in `profile.js` and `education.js`; skill entries belong in `skills.js`. Add projects in `projects.js`, certificates in `certificates.js`, experience entries in `experience.js`, and achievements in `achievements.js`. These sections remain visible with labeled empty states until verified information is added.

Profile information and section content live in `src/data/`. The résumé link points to `public/resume.pdf`.

# myrepo
