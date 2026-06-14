# UE Technology Website

The official website for **UE Technology (UE-DT)** — an Industry 4.0 digital transformation company based in Cairo, Egypt.

> Replacing the current WordPress/Elementor site with a fast, modern Next.js application.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework — routing, SSR, SEO |
| React 19 + TypeScript | Component model + type safety |
| Tailwind CSS v4 | Utility-first styling |
| shadcn/ui | Pre-built accessible components |
| Framer Motion | Scroll animations |
| GSAP + ScrollTrigger | Advanced scroll effects |
| Vercel | Deployment |

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Folder Structure

```
ue-website/
├── app/            # Pages — every folder = one URL
├── components/     # Reusable UI building blocks
├── content/        # Blog posts (MDX)
├── design-intent/  # PRD and design files (not deployed)
├── hooks/          # Custom React hooks
├── lib/            # Data files and utilities
├── public/         # Images, logos, favicon
└── types/          # TypeScript type definitions
```

## Pages

| URL | Description |
|-----|-------------|
| `/` | Homepage |
| `/solutions` | All 5 solutions overview |
| `/solutions/mes` | Manufacturing Execution System |
| `/solutions/ems` | Energy Management System |
| `/solutions/oee` | Overall Equipment Effectiveness |
| `/solutions/scale` | Smart Weighing & Scale |
| `/solutions/supply-chain` | Supply Chain Visibility |
| `/industry-4-0` | Industry 4.0 explainer |
| `/about-us` | Company and team |
| `/blog` | Insights and articles |
| `/contact-us` | Lead generation form |

## Deployment

Deployed to **Vercel** — connected to this GitHub repo.
Production URL: [ue-dt.com](https://www.ue-dt.com)
