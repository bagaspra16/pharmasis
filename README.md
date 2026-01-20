# 🏥 Pharmasis | Know Your Medicine

![Pharmasis Banner](/public/pharmasis-logo.png)

**Pharmasis** is a modern, digital health platform designed to provide accurate, easy-to-understand medication information. Our primary goal is to empower users to check for drug interactions, understand medication safety, and make informed health decisions.

Built with performance, accessibility, and modern aesthetics in mind, Pharmasis delivers a premium user experience through smooth animations, glassmorphism design, and localized content for the Indonesian market.

---

## Key Features

- **Drug Interaction Checker**: An intuitive interface for users to check safety between multiple medications.
- **Localized Experience**: tailored for Indonesian users with localized contact information (Jakarta, +62) while maintaining an international English UI.
- **Modern Aesthetics**:
  - **Aurora Backgrounds**: Dynamic, GPU-accelerated background animations.
  - **Glassmorphism**: Premium "frosted glass" UI elements.
  - **Parallax Effects**: Multi-layered scrolling animations in the Hero section using `framer-motion`.
- **High Performance**:
  - Optimized Hydration & SSR.
  - GPU-accelerated animations (`transform-gpu`).
  - Next.js 15+ Server Components.
- **Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **SEO Optimized**: Comprehensive metadata tags, JSON-LD structure, and OpenGraph support.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with SEO & fonts
│   ├── page.tsx          # Main landing page composition
│   ├── services/         # Dynamic service detail pages
│   └── ...
├── components/           # React Components
│   ├── ui/               # Reusable UI atoms (Aurora, etc.)
│   ├── HeroSection.tsx   # Complex parallax hero
│   ├── Header.tsx        # Responsive navigation
│   └── ...
├── lib/                  # Utilities & Data
│   └── data.ts           # Shared data constants
└── ...
```

## Privacy & Legal

We take user data seriously. This project includes dedicated pages for:
- [Privacy Policy](/src/app/privacy-policy/page.tsx)
- [Terms of Service](/src/app/terms-of-service/page.tsx)

## Contact

- **Office**: Jababeka Health Centre, Jababeka, Cikarang
- **Phone/WA**: +62 812-3299-9290
- **Email**: halo@pharmasis.id

---

© 2026 Pharmasis. All rights reserved.
