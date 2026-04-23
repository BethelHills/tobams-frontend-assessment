# Tobams Frontend Assessment

## Overview

This project is a pixel-perfect implementation of the Tobams Group Frontend Intern Assessment using Next.js and Tailwind CSS.

The goal of this project is to translate a Figma design into a clean, responsive, and production-ready web application while following best practices for frontend development.

---

## Live Demo

👉 https://tobams-frontend-assessment.vercel.app/

---

## Figma Design

👉 https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment

---

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Vercel (Deployment)

---

## Features

- Pixel-perfect implementation based on Figma design
- Fully responsive layout (Mobile, Tablet, Desktop)
- Reusable component-based architecture
- Semantic HTML structure
- Accessible UI (keyboard navigable, proper alt texts)
- Optimized images using Next.js

---

## Project Structure

**components/**

- `Header.tsx`
- `Hero.tsx`
- `LearningManagement.tsx`
- `TrainingBlocks.tsx`
- `ManagementProgram.tsx`
- `TransformationHub.tsx`
- `TrainingConsultant.tsx`
- `Testimonials.tsx`
- `CallToAction.tsx`
- `Footer.tsx`

**app/**

- `page.tsx`

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BethelHills/tobams-frontend-assessment.git
cd tobams-frontend-assessment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Deployment

This project is deployed on Vercel.

Deployment is handled automatically via Git integration:

```bash
git push origin main
```

---

## Responsive Design

The application is optimized for:

- Mobile (425px)
- Tablet (768px)
- Desktop (1280px and above)

Tailwind responsive utilities were used (`sm`, `md`, `lg`) without custom media queries.

---

## Design Decisions

- Broke the UI into reusable components for maintainability
- Used Tailwind CSS exclusively as required
- Matched spacing, typography, and layout closely to Figma
- Used Flexbox and Grid for responsive layouts

---

## Accessibility

- Semantic HTML elements used (`nav`, `main`, `section`, `footer`)
- All images include descriptive alt text
- Buttons and links are keyboard accessible
- Focus states are implemented

---

## Code Quality

- No inline styles
- Clean naming conventions
- No unused imports or dead code
- Structured and maintainable components

---

## AI Usage Disclosure

AI tools (ChatGPT) were used to assist with:

- Component structuring
- Responsiveness and layout refinement

All code was reviewed, understood, and adjusted manually.

---

## Known Issues

- Minor differences may occur due to font rendering
- Placeholder images used where original assets were unavailable

---

## Author

**Bethel Hillary**  
Frontend Developer
