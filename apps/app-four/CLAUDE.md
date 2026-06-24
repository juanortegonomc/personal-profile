# app-four — David Cruz Personal Portfolio

## Stack

- **React 19** + TypeScript 5.9
- **Vite 8** (bundler / dev server) — port 4200
- **Tailwind CSS 4** (`@tailwindcss/vite` plugin)
- **React Router DOM 6.30** (client-side routing)
- **SCSS** (global styles + Tailwind in `src/styles.scss`)
- **Jest + Testing Library** (unit tests)

## Structure

```
src/
├── app/
│   ├── components/     # Hero, Nav, About, Skills, Experience, Education, Contact
│   ├── data/
│   │   └── profile.ts  # All resume data — single source of truth
│   └── app.tsx
├── main.tsx
└── styles.scss         # @import "tailwindcss" + custom layers (glass, gradient-text, hero-gradient)
```

## Running locally

```bash
# Must use Program Files node — nvm4w has permission issues on this machine
cd apps/app-four
"C:\Program Files\nodejs\node.exe" ../../node_modules/vite/bin/vite.js
# → http://localhost:4200
```

## Design system

- **Theme:** dark background `#0a0a1a`, gradient blue→violet (`from-blue-600 to-violet-600`)
- **Glass cards:** `.glass` utility class (backdrop-blur, semi-transparent border)
- **Gradient text:** `.gradient-text` utility class
- All resume content lives in `src/app/data/profile.ts` — edit there first

## Key conventions

- No new routing pages — this is a single-page scroll portfolio
- All personal data changes go to `profile.ts`, components read from it
- Tailwind utility-first; SCSS only for global base styles and custom utilities

## Skills active in this project

- `react-19` — React 19 patterns (React Compiler, use() hook, Server Components)
- `tailwind-4` — Tailwind v4 patterns (semantic classes, cn() utility)
- `typescript` — TypeScript strict patterns
