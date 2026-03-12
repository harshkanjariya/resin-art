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
npm run preview   # preview production build
```

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
