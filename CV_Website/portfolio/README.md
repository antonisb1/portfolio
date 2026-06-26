# Antonis Benardis — Cloud Engineer Portfolio

A modern, dark-themed personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav with active section tracking
│   │   └── Footer.tsx       # Footer with nav links
│   ├── sections/
│   │   ├── Hero.tsx         # Landing hero with typing animation
│   │   ├── About.tsx        # Bio + highlights
│   │   ├── Skills.tsx       # Skill category cards
│   │   ├── Experience.tsx   # Work history timeline
│   │   ├── Projects.tsx     # Project cards with status badges
│   │   ├── Certifications.tsx # Cert cards per provider
│   │   └── Contact.tsx      # Contact info + form UI
│   └── ui/
│       ├── Section.tsx      # Reusable section + header
│       ├── Card.tsx         # Reusable card
│       ├── Badge.tsx        # Colored badge
│       └── Button.tsx       # Primary/secondary/ghost button
├── data/
│   └── index.ts             # All portfolio content
├── hooks/
│   └── useScrollAnimation.ts # IntersectionObserver animation hook
├── types/
│   └── index.ts             # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css                # Tailwind + custom utilities
```

## ✨ Features

- **Dark theme** with a terminal / DevOps aesthetic
- **Typing animation** in hero (cycles through role titles)
- **Scroll-triggered animations** via IntersectionObserver
- **Stagger animations** on skill/project/cert grids
- **Active section highlighting** in navbar
- **Responsive** — mobile-first layout
- **Smooth scroll** navigation throughout

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080c10` |
| Surface | `#0d1117` |
| Card | `#111827` |
| Border | `#1f2937` |
| Accent | `#22d3ee` (cyan-400) |
| Success | `#34d399` (emerald-400) |
| Font (display) | Syne |
| Font (body) | DM Sans |
| Font (mono) | JetBrains Mono |

## 📝 Customization

All content lives in `src/data/index.ts` — edit `PERSON`, `SKILL_CATEGORIES`, `EXPERIENCES`, `CERTIFICATIONS`, and `PROJECTS` to update the site.

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tooling)
- **Tailwind CSS** (utility styling)
- **Lucide React** (icons)
- Scroll animations via native `IntersectionObserver`
