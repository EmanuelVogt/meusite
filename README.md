<div align="center">

```
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
```

**A retro game-inspired developer portfolio built with Next.js 16, React 19 & Tailwind CSS v4**

![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-BB4B96?style=flat-square&logo=framer)

</div>

---

## Overview

Personal portfolio website with a **retro pixel-art / arcade game aesthetic**. The entire UI is designed around the concept of a character select screen — stats bars, stage selectors, CRT scanlines, and pixel fonts — while keeping the content professional and focused on real-world engineering projects.

### Screenshots

> _Replace with actual screenshots after deployment._

## Features

- **Dark / Light Mode** — CSS custom properties with instant toggle, anti-flash script for SSR, localStorage persistence
- **i18n (PT-BR / EN-US)** — Full bilingual support with flag dropdown selector and typed translations
- **Retro UI System** — Pixel font (Press Start 2P), CRT scanlines, retro box shadows, glow-pulse frames, pixel grid texture background
- **Framer Motion Animations** — Fade-in, slide-in, stagger, and hover effects throughout
- **Project Detail Pages** — Dedicated pages per project with hero image, tech stack, features grid, and architecture breakdown
- **Responsive** — Mobile-first design, works from 320px to ultrawide
- **Static Generation** — All pages pre-rendered at build time for maximum performance

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) with `@theme inline` |
| Animation | [Framer Motion 12](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) + [React Icons (Simple Icons)](https://react-icons.github.io/react-icons/) |
| Font | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P), [Geist](https://vercel.com/font) |

## Architecture

The project follows **Feature-Sliced Design (FSD)** — a scalable frontend architecture that separates concerns by domain rather than technical role.

```
src/
├── entities/              # Domain models & data
│   ├── profile/           #   Player profile (name, stats, socials)
│   └── project/           #   Project definitions (stage, tech, URLs)
│
├── features/              # Encapsulated features
│   └── project-carousel/  #   Draggable carousel with keyboard nav
│
├── shared/                # Shared infrastructure
│   ├── config/            #   Theme constants
│   ├── lib/               #   i18n, motion variants, utilities
│   └── ui/                #   Badge, RetroFrame, Scanlines, Providers...
│
└── widgets/               # Page-level compositions
    ├── hero-section/      #   Main hero (profile + character select + projects)
    └── project-list/      #   Standalone project grid
```

```
app/
├── layout.tsx             # Root layout (fonts, ThemeProvider, LocaleProvider)
├── page.tsx               # Home — single-page portfolio
├── globals.css            # Theme tokens, texture, scrollbar
└── projects/
    └── emergency/
        └── page.tsx       # Dedicated project detail page
```

## Theming

The theme system uses **CSS custom properties** that switch between light and dark palettes via a `.dark` class on `<html>`:

```css
:root {
  --theme-bg: #F5F5F0;
  --theme-text: #1A1A2E;
  /* ... */
}
.dark {
  --theme-bg: #0A0A0A;
  --theme-text: #EDEDED;
  /* ... */
}
```

These are mapped to Tailwind utilities via `@theme inline`, enabling classes like `bg-bg`, `text-text-muted`, `border-border` that automatically adapt to the active theme.

An **anti-flash inline script** in `<head>` reads `localStorage` before first paint to prevent the white flash on dark-mode reload.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

Optimized for **Vercel** (zero-config). All routes are statically generated at build time.

```bash
# Deploy with Vercel CLI
npx vercel
```

## License

This is a personal portfolio. Code structure and UI patterns are free to reference for learning purposes.

---

<div align="center">

**Built by [Emanuel Vogt](https://github.com/EmanuelVogt)**

```
▶ INSERT COIN TO CONTINUE
```

</div>
