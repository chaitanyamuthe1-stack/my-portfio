# Premium Personal Portfolio — Chaitanya Muthe

> **"Engineering Intelligence. Creating Impact. Building the Future."**

A premium, futuristic, recruiter-ready personal portfolio website engineered for **Chaitanya Muthe**, Final-Year B.Tech Artificial Intelligence & Machine Learning Student at **Deogiri Institute of Engineering and Management Studies (DIEMS)** affiliated with **Dr. Babasaheb Ambedkar Technological University (DBATU)**.

---

## 🌟 Live Preview & Design Aesthetic

- **Design Philosophy**: High-end futuristic developer aesthetic, deep space black (`#080B12`), dark navy secondary background (`#101522`), electric blue (`#377DFF`), neon purple (`#8957FF`), and cyber cyan accents (`#00F0FF`).
- **Interactive Canvas Constellation**: Custom HTML5 particle network reacting smoothly to mouse velocity and screen dimensions.
- **Glassmorphism & Glows**: Layered backdrop blur panels with subtle radial light gradients and illuminated borders.
- **Micro-Interactions**: Real-time typewriter effect, active scroll spy, custom resume viewer & printer, dynamic project category filter, and celebration confetti.

---

## 📁 Project Architecture & Clean Folder Structure

```text
portfilo/
├── public/
│   └── Chaitanya_Muthe_Resume.pdf    # Valid downloadable/printable resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx                 # Bio, 3 core highlight cards, DIEMS/DBATU affiliation
│   │   ├── Achievements.jsx          # Honors, academic awards, hackathons, symposiums
│   │   ├── BrandIcons.jsx            # High-precision SVG vectors (GitHub, LinkedIn, LeetCode, HackerRank)
│   │   ├── CertificateModal.jsx      # Modal for verified certificate inspection
│   │   ├── Certifications.jsx        # Certificate gallery with credential IDs
│   │   ├── Contact.jsx               # Validated contact form, 1-click email copy, confetti
│   │   ├── DeveloperProfiles.jsx     # Coding profiles (GitHub, LinkedIn, LeetCode, HackerRank)
│   │   ├── Education.jsx             # Vertical luminous timeline (B.Tech, 12th, 10th)
│   │   ├── Experience.jsx            # Capstone research, training, transparent status
│   │   ├── Footer.jsx                # Branding, quick links, copyright 2026, back to top
│   │   ├── Hero.jsx                  # Typewriter role animation, glowing avatar frame, CTAs
│   │   ├── Interests.jsx             # "Beyond the Code" icon cards
│   │   ├── Navbar.jsx                # Sticky glassmorphic navbar with mobile drawer
│   │   ├── ParticleBackground.jsx    # Interactive canvas physics particle engine
│   │   ├── ProjectModal.jsx          # In-depth architectural breakdown modal
│   │   ├── Projects.jsx              # Filterable project gallery (AI/ML, Java, Python, Web)
│   │   ├── Resume.jsx                # Interactive resume overview section
│   │   ├── ResumeModal.jsx           # Fullscreen clean printable resume document
│   │   └── ScrollProgress.jsx        # Top viewport scroll indicator & floating return button
│   ├── data/
│   │   └── portfolioData.js          # Centralized, 100% editable profile data file
│   ├── App.jsx                       # Root application component with scroll tracking
│   ├── index.css                     # Tailwind utilities, glassmorphism, glowing gradients
│   └── main.jsx                      # Vite React entry point
├── dist/                             # Pre-compiled high-performance production build
├── index.html                        # SEO meta tags, Google Fonts, CM SVG favicon, OG metadata
├── package.json                      # Project dependencies & scripts
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.js                # Custom color palette, shadows, keyframes
└── vite.config.js                    # Vite bundler configuration
```

---

## 🛠️ Tech Stack & Libraries

- **Framework**: React 18
- **Build Tool**: Vite (Lightning-fast HMR & optimized roll-up production bundle)
- **Styling**: Tailwind CSS + Custom Glassmorphism CSS Utilities
- **Icons**: Lucide React + Custom Brand SVG Vectors
- **Interactive Effects**: HTML5 Canvas Particle Engine & Canvas-Confetti
- **Typography**: Space Grotesk, Inter, JetBrains Mono

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
This generates the optimized, production-ready bundle inside the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize & Edit Data

All personal details, projects, academic metrics, and links are cleanly separated in a single file:
**`src/data/portfolioData.js`**

You can easily update:
1. **Personal Information**:
   - `fullName`, `professionalTitle`, `college`, `university`, `tagline`, `heroDescription`.
   - `email`, `location`, `githubUrl`, `linkedinUrl`, `leetcodeUrl`.
2. **Education Details**:
   - CGPA, coursework modules, 12th / 10th school names and percentages.
3. **Projects**:
   - Add new projects or update existing repositories, demo URLs, problem statements, and features.
4. **Skills Matrix**:
   - Add newly learned programming languages, ML models, or frameworks.
5. **Certifications & Achievements**:
   - Add new certificates, issue dates, and credential verification IDs.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Chaitanya Muthe Portfolio"
   git branch -M main
   git remote add origin https://github.com/chaitanyamuthe/chaitanya-muthe-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. Your portfolio will be live worldwide in seconds with an SSL certificate.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.js`, add:
   ```javascript
   export default defineConfig({
     base: '/<repository-name>/',
     plugins: [react()],
   });
   ```
2. Build and publish the `dist` directory using GitHub Actions or `gh-pages`.

---

## 📄 License & Attribution

Designed & Developed for **Chaitanya Muthe**.  
© 2026 Chaitanya Muthe. All Rights Reserved.
