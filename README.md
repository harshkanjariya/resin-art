# Nehal Dabhi – Resin Art

A modern, elegant frontend website for **Nehal Dabhi**, a resin artist creating handmade jewelry, home decor, and memory preservation art.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **Ant Design (antd)** (UI components)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview        # preview production build at /
npm run preview:gh     # preview with GitHub Pages base path (/resin-art/)
```

## GitHub Pages deployment

**If the site is at harshkanjariya.online/resin-art/** (path on your main site):

1. **GitHub** → **resin-art** repo → **Settings** → **Pages** → **Source:** Deploy from a branch, **Branch:** gh-pages, **/ (root)** → Save (if using gh-pages for this repo).
2. Build (base path `/resin-art/`): `npm run build:gh`
3. Copy everything from `dist/` into the **resin-art** folder of the repo that serves **harshkanjariya.online**. Push that repo.
4. Site: **https://harshkanjariya.online/resin-art/**

Or run `npm run deploy` to build and push to the **gh-pages** branch (for **https://harshkanjariya.github.io/resin-art/** if that URL is available).

## Project Structure

```
src/
  components/     # Reusable UI (Footer, LoadingSkeleton)
  sections/       # Page sections (Hero, About, Collections, etc.)
  pages/          # Route pages (HomePage)
  layouts/        # MainLayout (navbar + footer)
  hooks/          # useScrollReveal
  utils/          # antdTheme, constants
  assets/         # Static assets
```

## Features

- **Landing (Hero)** – Headline, CTAs, gradient and floating animations  
- **About** – Artist intro, portrait placeholder, highlight cards  
- **Collections** – Grid of product categories with Ant Design cards  
- **Memory Preservation** – Service explanation + Ant Design Timeline  
- **Gallery** – Filterable grid (Jewelry / Decor / Preservation) + lightbox  
- **Custom Order Form** – Ant Design Form with file upload  
- **Testimonials** – Customer quote cards  
- **Contact** – Instagram, WhatsApp, email, location + CTA  

Design: luxury, soft beige/pastel pink/ivory/gold palette, glassmorphism, smooth scrolling, responsive layout.


#bca561 : primary color