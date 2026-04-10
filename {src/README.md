# Portfolio — Gerson González

Personal portfolio built with **Vue 3 + Vite + Tailwind CSS**, deployed on GitHub Pages.

## Stack

- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- GitHub Pages

---

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/ggnz/PortfolioApp.git
cd PortfolioApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Edit your content

All portfolio content lives in one file:

```
src/data.js
```

Edit your name, role, experience, projects, skills, and certifications there. No need to touch the components.

---

## Deploy to GitHub Pages

### First time setup

Make sure your repo is named `PortfolioApp` (or update `vite.config.js` base path to match your repo name).

```bash
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch automatically.

### After every update

```bash
npm run deploy
```

Then go to **GitHub → Settings → Pages** and make sure the source is set to the `gh-pages` branch.

Your site will be live at: `https://ggnz.github.io/PortfolioApp/`

---

## Project structure

```
src/
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ExperienceSection.vue
│   ├── ProjectsSection.vue
│   ├── SkillsSection.vue
│   ├── CertificationsSection.vue
│   └── FooterSection.vue
├── App.vue
├── main.js
├── style.css
└── data.js        ← Edit this file to update content
```
