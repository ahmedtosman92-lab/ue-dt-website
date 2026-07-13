# UE Technology (UE-DT) — Website Product Requirements Document

**Version:** 1.0  
**Last Updated:** June 2026  
**Owner:** Ahmed — Co-founder & Marketing Director, UE Technology  
**Status:** Active  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Tech Stack](#3-tech-stack)
4. [Design System](#4-design-system)
5. [Site Architecture](#5-site-architecture)
6. [Page Requirements](#6-page-requirements)
7. [Component Library](#7-component-library)
8. [Animation Specifications](#8-animation-specifications)
9. [Responsive Design](#9-responsive-design)
10. [SEO Requirements](#10-seo-requirements)
11. [Performance Requirements](#11-performance-requirements)
12. [Development Workflow](#12-development-workflow)
13. [Folder Structure & File Placement](#13-folder-structure--file-placement)
14. [Deployment](#14-deployment)
15. [Browser Support](#15-browser-support)
16. [Acceptance Criteria](#16-acceptance-criteria)

---

## 1. Project Overview

### 1.1 Company Summary

UE Technology (UE-DT) is an Egypt-based hardware and software company specialising in Industry 4.0 localisation for Egyptian factories and manufacturing plants. The company bridges the gap between global digital transformation standards and the practical needs of Egyptian industrial operators.

**Headquarters:** Cairo, Egypt  
**Website (current):** [ue-dt.com](https://www.ue-dt.com) (WordPress / Elementor — to be replaced)  

### 1.2 Core Solutions

| Slug | Full Name | Category |
|------|-----------|----------|
| `mes` | Manufacturing Execution System | Production |
| `ems` | Energy Management System | Utilities |
| `oee` | Overall Equipment Effectiveness | Analytics |
| `scale` | Smart Weighing & Scale Customisation | Hardware |
| `supply-chain` | Supply Chain Visibility | Logistics |

### 1.3 Target Industries

- Manufactueers
- Factories
- Poultry and animal farming (slaughterhouses)
- Waste Management (recycling plants)
- Business Owners

### 1.4 Target Audience

**Primary:** Operations directors, plant managers, and procurement heads at Egyptian manufacturing companies  
**Secondary:** Investors, potential partners, engineering students and recruits  
**Language:** English (primary), Arabic (planned future phase)

### 1.5 Project Scope

Full redesign and rebuild of ue-dt.com from WordPress/Elementor to a modern Next.js application. The new site must convey technical credibility, showcase the five solutions clearly, generate inbound leads, and be fast, SEO-optimised, and visually distinctive.

---

## 2. Goals & Success Metrics

### 2.1 Business Goals

- Increase qualified inbound leads via the contact form
- Reduce bounce rate vs the current WordPress site
- Establish UE-DT as the leading Industry 4.0 partner for Egyptian manufacturers
- Support the sales team with a credible, shareable digital presence

### 2.2 User Goals

- Understand what UE-DT does within 5 seconds of landing on the homepage
- Find the relevant solution page in under 2 clicks
- Contact or request a demo with minimal friction

### 2.3 Success Metrics

| Metric | Target |
|--------|--------|
| Core Web Vitals — LCP | < 2.5 s |
| Core Web Vitals — CLS | < 0.1 |
| Core Web Vitals — FID | < 100 ms |
| Lighthouse Performance Score | ≥ 90 |
| Lighthouse SEO Score | ≥ 95 |
| Contact form conversion rate | ≥ 3% of sessions |
| Mobile usability (Google Search Console) | 0 errors |

---

## 3. Tech Stack

### 3.1 Design & Prototyping

| Tool | Version / Status | Purpose |
|------|-----------------|---------|
| **Figma** | Connected via MCP | Primary UI/UX design tool — all screens, components, and design system live here |
| **Google Stitch** | Connected via MCP | AI screen generation for rapid exploration and ideation — feeds into Figma |

> **Note:** Figma is the source of truth for all final designs. Stitch is used for fast first-draft generation via Claude Code (MCP), with outputs reviewed and refined in Figma before any code is written. Both MCPs are active — Claude Code can call both tools directly.

### 3.2 Frontend Framework

| Tool | Version | Purpose |
|------|---------|---------|
| **Next.js** | 15 (App Router) | Full-site framework — routing, SSR, SEO, image optimisation |
| **React** | 19 | Component model — used in Next.js and all standalone apps |
| **TypeScript** | 5+ | Type safety across all components and utilities |

### 3.3 Styling

| Tool | Version | Purpose |
|------|---------|---------|
| **Tailwind CSS** | v4 | Utility-first styling — matches Stitch Tailwind export format |
| **shadcn/ui** | Latest | Pre-built accessible components (buttons, forms, cards, dialogs) |

### 3.4 Scroll Animation Libraries

| Tool | Version | Purpose | Use Case |
|------|---------|---------|----------|
| **Framer Motion** | Latest | React-native animation | Fade-ins, stagger reveals, page transitions, hover effects |
| **GSAP** | 3.x | Professional scroll engine | Parallax, pinning, timelines, scroll progress bar |
| **GSAP ScrollTrigger** | Plugin | Scroll-based triggers | Viewport entry animations, scrubbing effects |

### 3.5 Utilities & Tooling

| Tool | Purpose |
|------|---------|
| `clsx` + `tailwind-merge` | Conditional Tailwind class merging (auto-installed with shadcn/ui) |
| React Hook Form | Contact form state management |
| Zod | Form validation schema |
| `next/image` | Optimised image delivery |
| `next/font` | Self-hosted font loading |
| ESLint + Prettier | Code quality and formatting |
| Husky | Pre-commit hooks |

### 3.6 Infrastructure

| Tool | Purpose |
|------|---------|
| **Vercel** | Deployment, CDN, preview environments (free tier) |
| GitHub | Version control |
| Google Analytics 4 | Traffic and conversion tracking |

---

## 4. Design System

> **Note:** Exact values below are placeholders. Final values are extracted from the Figma design file and locked here before development begins. Use the Figma MCP (`get_design_context`, `get_variable_defs`) or inspect the file manually to pull final tokens.

### 4.1 Brand Colours

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `--color-primary` | Mint Green | `#39F2AE` | CTAs, highlights, icons, active states, hover accents |
| `--color-secondary` | Charcoal | `#323941` | Backgrounds, hero, footer, navbar, section fills |
| `--color-tertiary` | White | `#FFFFFF` | Card surfaces, overlays |
| `--color-text-body` | Dark | `#1A1A2E` | Body copy |
| `--color-text-muted` | Mid grey | `#6B7280` | Labels, captions |

### 4.2 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display / Hero | To be set from Figma | 700 | 56–72px |
| H1 | To be set from Figma | 600 | 40–48px |
| H2 | To be set from Figma | 600 | 32–36px |
| H3 | To be set from Figma | 500 | 24px |
| Body | To be set from Figma | 400 | 16–18px |
| Caption / Label | To be set from Figma | 400 | 12–14px |

### 4.3 Spacing Scale

Use Tailwind's default spacing scale. Key intervals: `4` (16px), `6` (24px), `8` (32px), `12` (48px), `16` (64px), `24` (96px).

### 4.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-md` | 8px | Buttons, inputs |
| `rounded-xl` | 16px | Cards |
| `rounded-2xl` | 24px | Feature blocks |
| `rounded-full` | 9999px | Pills, avatars |

### 4.5 Shadow Tokens

Defined in `tailwind.config.ts` — pulled from Figma design file (use `get_variable_defs` via Figma MCP or inspect Effects panel manually).

---

## 5. Site Architecture

### 5.1 Navigation Structure

```
ue-dt.com/
├── Home
├── Solutions
│   ├── MES — Manufacturing Execution System
│   ├── EMS — Energy Management System
│   ├── OEE — Overall Equipment Effectiveness
│   ├── Scale — Smart Weighing & Scale Customisation
│   └── Supply Chain — Supply Chain Visibility
├── Industry 4.0
├── About Us
├── Blog
│   └── [Post]
└── Contact Us
```

### 5.2 URL Map

| Page | URL |
|------|-----|
| Home | `/` |
| Solutions overview | `/solutions` |
| MES | `/solutions/mes` |
| EMS | `/solutions/ems` |
| OEE | `/solutions/oee` |
| Scale | `/solutions/scale` |
| Supply Chain | `/solutions/supply-chain` |
| Industry 4.0 | `/industry-4-0` |
| About Us | `/about-us` |
| Blog list | `/blog` |
| Blog post | `/blog/[slug]` |
| Contact | `/contact-us` |
| 404 | `/not-found` |

### 5.3 Shared Layout

Every page shares:
- `Navbar` — sticky, transparent on scroll, solid on scroll past hero
- `Footer` — links, contact info, copyright, social icons
- `MobileMenu` — full-screen drawer on mobile

---

## 6. Page Requirements

---

### 6.1 Home Page — `/`

**Purpose:** First impression for all visitors. Communicate what UE-DT does, build credibility, and direct users to the right solution or to contact.

**Figma source frame:** Homepage frame in the UE-DT Figma file  
**Next.js file:** `app/page.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Hero | `HeroSection.tsx` | Full-viewport, headline, sub-headline, 2 CTAs, animated background |
| 2 | Solutions Grid | `SolutionsSection.tsx` | 5 cards — MES, EMS, OEE, Scale, SCM — with icon, title, description |
| 3 | Industry Coverage | `IndustriesSection.tsx` | Icons/images for 4 target industries |
| 4 | Stats Row | `StatsSection.tsx` | Animated counters: factories served, years active, clients |
| 5 | Mission & Vision | `MissionSection.tsx` | Two-column layout with brand statement |
| 6 | Why UE-DT | `WhySection.tsx` | Differentiators vs competitors |
| 7 | Client Logos | `ClientLogos.tsx` | Horizontal logo strip |
| 8 | CTA Banner | `CTABanner.tsx` | Full-width "Let's build your digital factory" + button |

#### Content Requirements

- Hero headline: *"Catalyzing Innovation, Driving Excellence"*
- Hero sub-headline: One sentence on Industry 4.0 transformation for Egyptian factories
- Two CTAs: `Discover Our Solutions` (primary) and `About Us` (secondary)
- Stats: populate with real numbers from sales team before launch

#### SEO

```typescript
export const metadata = {
  title: "UE Technology | Industry 4.0 Digital Transformation — Cairo, Egypt",
  description: "UE-DT delivers MES, EMS, OEE, Smart Weighing, and Supply Chain solutions for Egyptian manufacturing plants.",
}
```

---

### 6.2 Solutions Overview — `/solutions`

**Purpose:** Show all five solutions at a glance. Allow users to self-select.

**Figma source frame:** Solutions Overview frame in the UE-DT Figma file  
**Next.js file:** `app/solutions/page.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Page Hero | `PageHero.tsx` | Short hero: "Our Solutions", 1-line description |
| 2 | Solutions Grid | `SolutionCard.tsx` × 5 | Larger cards than homepage — image, title, description, CTA |
| 3 | Integration Note | `IntegrationSection.tsx` | How the 5 solutions work together as a platform |
| 4 | CTA Banner | `CTABanner.tsx` | "Not sure which solution fits? Talk to us." |

#### Content Requirements

- Each card includes: icon, title, 2–3 sentence description, "Learn More" link
- Solutions data comes from `lib/solutions-data.ts`

---

### 6.3 Solution Detail Pages — `/solutions/[slug]`

**Purpose:** Deep-dive on each individual solution. Convince operations managers this is the right product.

**Figma source frame:** Solution Detail frame in the UE-DT Figma file  
**Next.js file:** `app/solutions/[slug]/page.tsx`  
**Layout component:** `components/solutions/SolutionDetail.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Solution Hero | `SolutionHero.tsx` | Large image, solution name, 1-sentence pitch |
| 2 | Problem Statement | `ProblemSection.tsx` | "Before UE-DT" — the pain this solves |
| 3 | Features List | `FeaturesList.tsx` | 4–6 key features with icons |
| 4 | How It Works | `HowItWorks.tsx` | 3-step process diagram |
| 5 | Technical Specs | `TechSpecs.tsx` | Collapsible table of specifications |
| 6 | Industry Fit | `IndustryFit.tsx` | Which industries benefit most |
| 7 | Related Solutions | `RelatedSolutions.tsx` | 2 other solutions — cross-link |
| 8 | CTA | `CTABanner.tsx` | "Request a demo for [Solution Name]" |

#### Dynamic Routing

All five solution slugs are generated statically via `generateStaticParams()`:

```typescript
export async function generateStaticParams() {
  return ['mes', 'ems', 'oee', 'scale', 'supply-chain'].map(slug => ({ slug }))
}
```

#### Data Source

All solution content lives in `lib/solutions-data.ts`. No CMS required for MVP.

---

### 6.4 Industry 4.0 — `/industry-4-0`

**Purpose:** Educational page that establishes UE-DT as a thought leader. Explains what Industry 4.0 means for Egyptian factories.

**Figma source frame:** Industry 4.0 frame in the UE-DT Figma file  
**Next.js file:** `app/industry-4-0/page.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Page Hero | `PageHero.tsx` | "What is Industry 4.0?" headline |
| 2 | Explainer | `ExplainerSection.tsx` | Text + diagram of I4.0 pillars |
| 3 | Egypt Context | `EgyptContext.tsx` | Why I4.0 matters for Egyptian manufacturing specifically |
| 4 | UE-DT Role | `UEDTRoleSection.tsx` | How UE-DT's 5 solutions map to I4.0 pillars |
| 5 | Timeline | `Timeline.tsx` | Industry 4.0 adoption journey |
| 6 | Solutions CTA | `CTABanner.tsx` | Link to Solutions overview |

---

### 6.5 About Us — `/about-us`

**Purpose:** Build trust with buyers who want to know the team behind the technology.

**Figma source frame:** About Us frame in the UE-DT Figma file  
**Next.js file:** `app/about-us/page.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Page Hero | `PageHero.tsx` | "We are UE Technology" |
| 2 | Company Story | `CompanyStory.tsx` | Founding narrative, mission, vision |
| 3 | Mission & Vision | `MissionVision.tsx` | Two-column cards |
| 4 | Values | `ValuesSection.tsx` | 3–4 brand values with icons |
| 5 | Team | `TeamSection.tsx` | Grid of team member cards — photo, name, role |
| 6 | Location | `LocationSection.tsx` | Cairo, Egypt — optional map embed |
| 7 | Join Us CTA | `CTABanner.tsx` | "Want to work with us?" |

#### Team Card Component

Each team card renders from a typed data array in `lib/team-data.ts`:

```typescript
type TeamMember = {
  name: string
  role: string
  bio: string
  photo: string   // path to public/assets/images/team/
  linkedin?: string
}
```

---

### 6.6 Blog — `/blog`

**Purpose:** SEO content hub. Drive organic traffic from Egyptian manufacturing search queries.

**Figma source frame:** Blog List frame in the UE-DT Figma file  
**Next.js file:** `app/blog/page.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Page Hero | `PageHero.tsx` | "UE-DT Insights" |
| 2 | Featured Post | `FeaturedPost.tsx` | Large card for the most recent post |
| 3 | Post Grid | `BlogCard.tsx` | Grid of all posts — title, category, date, thumbnail |
| 4 | Category Filter | `CategoryFilter.tsx` | Filter by: Industry 4.0 / MES / EMS / OEE / Case Studies |

#### Blog Post — `/blog/[slug]`

**Figma source frame:** Blog Post frame in the UE-DT Figma file  
**Next.js file:** `app/blog/[slug]/page.tsx`

| # | Section | Component |
|---|---------|-----------|
| 1 | Post Header | `PostHeader.tsx` — title, date, category, author |
| 2 | Post Body | MDX or rich text renderer |
| 3 | Author Card | `AuthorCard.tsx` |
| 4 | Related Posts | `RelatedPosts.tsx` — 3 posts |
| 5 | CTA | `CTABanner.tsx` |

**MVP data approach:** Static MDX files in `content/blog/[slug].mdx`. No CMS for MVP.

---

### 6.7 Contact Us — `/contact-us`

**Purpose:** Primary lead generation page. Make it easy for a factory manager to request a meeting.

**Figma source frame:** Contact Us frame in the UE-DT Figma file  
**Next.js file:** `app/contact-us/page.tsx`

#### Sections

| # | Section | Component | Description |
|---|---------|-----------|-------------|
| 1 | Page Hero | `PageHero.tsx` | "Let's Build Your Digital Factory" |
| 2 | Contact Form | `ContactForm.tsx` | Full form — see fields below |
| 3 | Direct Contact | `ContactInfo.tsx` | Phone, email, office address |
| 4 | Map | `LocationMap.tsx` | Optional embedded Google Maps |

#### Contact Form Fields

| Field | Type | Validation | Required |
|-------|------|-----------|----------|
| Full Name | Text | Min 2 chars | Yes |
| Company Name | Text | Min 2 chars | Yes |
| Job Title | Text | — | No |
| Email Address | Email | Valid email format | Yes |
| Phone Number | Tel | Egyptian format | Yes |
| Industry | Select | From industries list | Yes |
| Solution of Interest | Multi-select | From solutions list | No |
| Message | Textarea | Min 10 chars, max 1000 | Yes |

**Validation library:** Zod  
**Form state:** React Hook Form  
**Submission:** Next.js API Route at `app/api/contact/route.ts`  
**On success:** Inline success message, email notification to UE-DT team  

---

### 6.8 404 Not Found — `/not-found`

**Next.js file:** `app/not-found.tsx`

- Friendly message with UE-DT branding
- Link back to homepage and solutions
- No hero image required

---

## 7. Component Library

### 7.1 Layout Components

| Component | File | Description |
|-----------|------|-------------|
| `Navbar` | `components/layout/Navbar.tsx` | Sticky nav, transparent → solid on scroll, logo left, links right |
| `Footer` | `components/layout/Footer.tsx` | 3-column: solutions links, company links, contact info |
| `MobileMenu` | `components/layout/MobileMenu.tsx` | Full-height drawer, closes on route change |

### 7.2 Page-level Components

| Component | File | Used on |
|-----------|------|---------|
| `PageHero` | `components/shared/PageHero.tsx` | All inner pages |
| `CTABanner` | `components/shared/CTABanner.tsx` | Bottom of most pages |
| `SectionHeader` | `components/shared/SectionHeader.tsx` | Top of each section |
| `AnimatedSection` | `components/shared/AnimatedSection.tsx` | Framer Motion wrapper |

### 7.3 Home Components

| Component | File |
|-----------|------|
| `HeroSection` | `components/home/HeroSection.tsx` |
| `SolutionsSection` | `components/home/SolutionsSection.tsx` |
| `IndustriesSection` | `components/home/IndustriesSection.tsx` |
| `StatsSection` | `components/home/StatsSection.tsx` |
| `MissionSection` | `components/home/MissionSection.tsx` |
| `WhySection` | `components/home/WhySection.tsx` |
| `ClientLogos` | `components/home/ClientLogos.tsx` |

### 7.4 Solution Components

| Component | File |
|-----------|------|
| `SolutionCard` | `components/solutions/SolutionCard.tsx` |
| `SolutionDetail` | `components/solutions/SolutionDetail.tsx` |
| `SolutionHero` | `components/solutions/SolutionHero.tsx` |
| `FeaturesList` | `components/solutions/FeaturesList.tsx` |
| `HowItWorks` | `components/solutions/HowItWorks.tsx` |
| `RelatedSolutions` | `components/solutions/RelatedSolutions.tsx` |

### 7.5 Blog Components

| Component | File |
|-----------|------|
| `BlogCard` | `components/blog/BlogCard.tsx` |
| `FeaturedPost` | `components/blog/FeaturedPost.tsx` |
| `PostHeader` | `components/blog/PostHeader.tsx` |
| `AuthorCard` | `components/blog/AuthorCard.tsx` |
| `RelatedPosts` | `components/blog/RelatedPosts.tsx` |
| `CategoryFilter` | `components/blog/CategoryFilter.tsx` |

### 7.6 Shared Components

| Component | File |
|-----------|------|
| `ContactForm` | `components/shared/ContactForm.tsx` |
| `TeamCard` | `components/shared/TeamCard.tsx` |
| `Timeline` | `components/shared/Timeline.tsx` |
| `StatCounter` | `components/shared/StatCounter.tsx` |

---

## 8. Animation Specifications

### 8.1 Framer Motion — React Animations

All components wrapped with `AnimatedSection.tsx` receive these defaults unless overridden.

**Default entry animation:**
```typescript
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
```

**Stagger children (solution cards, team cards, features):**
```typescript
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}
```

| Component | Animation Type | Trigger |
|-----------|---------------|---------|
| `HeroSection` | Fade + slide up, staggered | On load |
| `SolutionCard` | Fade + scale up | `whileInView` |
| `StatCounter` | Count from 0 | `useInView` |
| `FeaturesList` | Stagger left-to-right | `whileInView` |
| `TeamCard` | Fade up | `whileInView` |
| `CTABanner` | Fade in | `whileInView` |
| Page transitions | Fade in/out | Route change |
| `Navbar` | Slide down | On load |

### 8.2 GSAP + ScrollTrigger — Scroll Effects

All GSAP code must:
- Use the `useGSAP` hook from `@gsap/react`
- Be inside a `'use client'` component
- Register `ScrollTrigger` plugin once in a global `gsap-config.ts` file

| Effect | Location | Config |
|--------|----------|--------|
| Hero parallax | `HeroSection.tsx` | Background moves at `0.5x` scroll speed |
| Solutions pin | `SolutionsSection.tsx` | Heading pinned while cards animate in from right |
| Mission text reveal | `MissionSection.tsx` | Lines split and revealed one by one on scroll |
| Industry 4.0 timeline | `Timeline.tsx` | Line draws as user scrolls down |
| Scroll progress bar | `app/layout.tsx` | Full-width bar at top — fills `0%` → `100%` as page scrolls |
| Navbar opacity | `Navbar.tsx` | Transitions from transparent to solid at `100px` scroll |

### 8.3 Animation Rules

- **Never** animate text that needs to be indexed by Google — ensure content is visible without JavaScript
- **Respect** `prefers-reduced-motion` — wrap all animation variants with the `useReducedMotion` Framer Motion hook
- GSAP and Framer Motion must not conflict on the same element — use one or the other per component, never both

---

## 9. Responsive Design

### 9.1 Breakpoints (Tailwind defaults)

| Name | Min Width | Key layout change |
|------|-----------|-------------------|
| `sm` | 640px | Stack hero columns |
| `md` | 768px | 2-column grids |
| `lg` | 1024px | Full desktop layout |
| `xl` | 1280px | Max content width |
| `2xl` | 1536px | Wide screen padding |

### 9.2 Grid Behaviour

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Solution cards | 1 col | 2 col | 3 col |
| Team cards | 1 col | 2 col | 4 col |
| Blog cards | 1 col | 2 col | 3 col |
| Industry icons | 2 col | 4 col | 4 col |
| Features list | 1 col | 2 col | 3 col |
| Stats row | 2 col | 4 col | 4 col |

### 9.3 Mobile Rules

- Hamburger menu visible on `< lg`
- Hero headline font reduces to `40px` on mobile
- All GSAP horizontal scroll effects disabled on `< md` (fallback to vertical Framer Motion)
- Touch-friendly tap targets: minimum `44 × 44px`
- Images use `next/image` with responsive `sizes` attribute

---

## 10. SEO Requirements

### 10.1 Per-Page Metadata

Every page must export a Next.js `metadata` object with:
- `title` — format: `"[Page Name] | UE Technology — Industry 4.0 Egypt"`
- `description` — 140–160 characters
- `openGraph.title`, `openGraph.description`, `openGraph.image`
- `openGraph.image` — `1200 × 630px`, stored at `public/assets/branding/og-image.jpg`

### 10.2 Structured Data

Add `JSON-LD` structured data to:
- Home page — `Organization` schema
- Solution pages — `Product` or `Service` schema
- Blog posts — `Article` schema

### 10.3 Technical SEO

- `sitemap.xml` — auto-generated via `next-sitemap` package
- `robots.txt` — allow all, point to sitemap
- Canonical URLs on all pages
- No duplicate content across solution pages
- `alt` text required on all `<Image>` components — no empty `alt=""`
- Semantic HTML — `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`

---

## 11. Performance Requirements

### 11.1 Image Optimisation

- All photos in `.webp` format
- All logos and icons in `.svg`
- Use `next/image` with `priority` prop on hero images
- Lazy load all below-fold images
- Hero background: compressed to < 300kb

### 11.2 JavaScript Optimisation

- No unnecessary client components — use Server Components by default
- Add `'use client'` only to components that use hooks or browser APIs
- All animation libraries (Framer Motion, GSAP) loaded only in client components
- Dynamic imports for heavy components below the fold

```typescript
const Timeline = dynamic(() => import('@/components/shared/Timeline'), {
  ssr: false
})
```

### 11.3 Font Loading

- Use `next/font/google` or self-hosted fonts
- Add `display: swap` to prevent layout shift
- Subset to Latin + Arabic characters only

---

## 12. Development Workflow

### 12.1 Full Pipeline

```
Google Stitch via MCP (rapid screen generation / first draft)
     ↓
Review and refine in Figma (primary design tool — final source of truth)
     ↓
Claude Code reads Figma design via Figma MCP
     ↓
Claude Code: convert design → TypeScript React components
     ↓
Place in components/ (see file mapping in Section 13)
     ↓
Assemble components into Next.js app/ pages
     ↓
Add Framer Motion animations
     ↓
Add GSAP ScrollTrigger effects
     ↓
Connect Navbar scroll behaviour
     ↓
SEO metadata on all pages
     ↓
Mobile responsiveness audit
     ↓
Performance audit (Lighthouse)
     ↓
Deploy to Vercel
```

### 12.2 Claude Code Session Rules

- Run `claude` from the project root
- One feature per session — use `/clear` between unrelated tasks
- `CLAUDE.md` at root is read at every session start — keep it updated
- Prefix every session with: `"Read CLAUDE.md and design-intent/PRD.md before starting"`

### 12.3 Claude Code + Design MCPs

Both design MCPs are active. The `/mcp add` slash command does not work in the VSCode extension environment — connections are managed through Claude Code MCP configuration.

**Figma MCP (primary)** — Claude Code can:
- Read any Figma frame or component with `get_design_context`
- Pull design tokens (colours, typography, spacing) with `get_variable_defs`
- Export assets directly with `download_assets`
- Push generated designs back into Figma with `generate_figma_design`

To use: share the Figma file URL or frame link in your prompt and Claude Code will fetch the design directly.

**Stitch MCP (exploration)** — Claude Code can generate first-draft screens from text prompts via `generate_screen_from_text`. Use this for rapid ideation before finalising in Figma.

If either MCP is temporarily unavailable: export from Figma as CSS/HTML manually and save to `design-intent/figma/exports/`, then reference by file path in prompts.

### 12.4 Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — auto-deploys to ue-dt.com |
| `dev` | Active development |
| `feature/[name]` | One branch per page or feature |

---

## 13. Folder Structure & File Placement

> **Where this PRD lives:** `design-intent/PRD.md`  
> Add it to `CLAUDE.md` so every Claude Code session references it.

### 13.1 Complete Project Tree

```
ue-dt-website/
│
├── design-intent/                    ← design source of truth (not deployed)
│   ├── PRD.md                        ← THIS FILE
│   ├── figma/
│   │   ├── exports/                  ← CSS/HTML exports from Figma (fallback when MCP unavailable)
│   │   │   ├── homepage.html
│   │   │   ├── navbar.html
│   │   │   ├── footer.html
│   │   │   ├── solutions-overview.html
│   │   │   ├── solution-card.html
│   │   │   ├── solution-detail.html
│   │   │   ├── industry-4-0.html
│   │   │   ├── about-us.html
│   │   │   ├── contact-us.html
│   │   │   ├── blog-list.html
│   │   │   └── blog-post.html
│   │   └── design-system.md          ← colors, fonts, spacing — sourced from Figma variables
│   ├── google-stitch/
│   │   ├── exports/                  ← Stitch first-draft HTML (exploration only)
│   │   └── design-system.md          ← Stitch design system reference
│   └── wireframes/                   ← optional: hand-drawn sketches
│
├── public/
│   ├── favicon.ico                   ← must be in public/ root
│   ├── robots.txt
│   └── assets/
│       ├── branding/
│       │   ├── logo.svg
│       │   ├── logo-white.svg
│       │   ├── logo-dark.svg
│       │   └── og-image.jpg          ← 1200×630px for social sharing
│       └── images/
│           ├── hero/
│           ├── solutions/            ← mes.webp ems.webp oee.webp scale.webp supply-chain.webp
│           ├── about/
│           ├── team/
│           ├── clients/
│           └── industry/
│
├── app/                              ← Next.js App Router
│   ├── layout.tsx                    ← root layout (Navbar + Footer)
│   ├── page.tsx                      ← /  (Home)
│   ├── not-found.tsx                 ← 404
│   ├── globals.css
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              ← contact form POST handler
│   ├── solutions/
│   │   ├── page.tsx                  ← /solutions
│   │   └── [slug]/
│   │       └── page.tsx              ← /solutions/mes etc.
│   ├── industry-4-0/
│   │   └── page.tsx
│   ├── about-us/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx                  ← /blog
│   │   └── [slug]/
│   │       └── page.tsx              ← /blog/post-title
│   └── contact-us/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                ← from stitch: navbar.html
│   │   ├── Footer.tsx                ← from stitch: footer.html
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── HeroSection.tsx           ← from stitch: homepage.html (hero part)
│   │   ├── SolutionsSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── WhySection.tsx
│   │   └── ClientLogos.tsx
│   ├── solutions/
│   │   ├── SolutionCard.tsx          ← from stitch: solution-card.html
│   │   ├── SolutionDetail.tsx        ← from stitch: solution-detail.html
│   │   ├── SolutionHero.tsx
│   │   ├── FeaturesList.tsx
│   │   ├── HowItWorks.tsx
│   │   └── RelatedSolutions.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── FeaturedPost.tsx
│   │   ├── PostHeader.tsx
│   │   ├── AuthorCard.tsx
│   │   ├── RelatedPosts.tsx
│   │   └── CategoryFilter.tsx
│   ├── shared/
│   │   ├── PageHero.tsx
│   │   ├── CTABanner.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── AnimatedSection.tsx       ← Framer Motion wrapper
│   │   ├── ContactForm.tsx           ← from stitch: contact-us.html
│   │   ├── TeamCard.tsx
│   │   ├── Timeline.tsx
│   │   └── StatCounter.tsx
│   └── ui/                           ← shadcn/ui — auto-generated, do not edit manually
│
├── content/
│   └── blog/                         ← MDX blog post files
│       └── [slug].mdx
│
├── lib/
│   ├── utils.ts                      ← shadcn/ui utility helpers
│   ├── solutions-data.ts             ← MES / EMS / OEE / Scale / SCM content
│   ├── team-data.ts                  ← team member data array
│   ├── gsap-config.ts                ← GSAP plugin registration
│   └── metadata.ts                   ← shared SEO metadata helpers
│
├── hooks/
│   ├── useScrollAnimation.ts         ← GSAP scroll hook
│   └── useNavbarScroll.ts            ← navbar transparency on scroll
│
├── types/
│   └── index.ts                      ← Solution, BlogPost, TeamMember types
│
├── CLAUDE.md                         ← Claude Code reads this every session
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .gitignore
└── package.json
```

### 13.2 Figma Frame → Component Mapping

Claude Code reads each Figma frame via MCP (`get_design_context`) and converts it to a TypeScript React component. If MCP is unavailable, use the HTML export from `design-intent/figma/exports/`.

| Figma frame | Converts to | Final path |
|-------------|-------------|------------|
| Homepage | Sections assembled | `app/page.tsx` |
| Navbar | `Navbar.tsx` | `components/layout/` |
| Footer | `Footer.tsx` | `components/layout/` |
| Solutions Overview | `SolutionsSection.tsx` | `components/home/` |
| Solution Card | `SolutionCard.tsx` | `components/solutions/` |
| Solution Detail | `SolutionDetail.tsx` | `components/solutions/` |
| Industry 4.0 | Page + sections | `app/industry-4-0/page.tsx` |
| About Us | Page + sections | `app/about-us/page.tsx` |
| Contact Us | `ContactForm.tsx` | `components/shared/` |
| Blog List | `BlogCard.tsx` + page | `app/blog/page.tsx` |
| Blog Post | Post layout | `app/blog/[slug]/page.tsx` |

---

## 14. Deployment

### 14.1 Hosting — Vercel

| Environment | Branch | URL |
|-------------|--------|-----|
| Production | `main` | `ue-dt.com` |
| Preview | `dev` | `ue-dt-dev.vercel.app` |
| Feature previews | `feature/*` | Auto-generated Vercel URL |

### 14.2 Environment Variables

Store in Vercel dashboard and `.env.local` (never commit `.env.local`):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # Google Analytics 4
CONTACT_EMAIL_TO=info@ue-dt.com               # Contact form destination
RESEND_API_KEY=re_xxxx                         # Email delivery (Resend.com)
```

### 14.3 Domain Setup

1. Add `ue-dt.com` as a custom domain in Vercel
2. Update DNS records at domain registrar to point to Vercel
3. Vercel handles SSL/TLS automatically

### 14.4 Pre-Launch Checklist

- [ ] All pages render without errors
- [ ] Contact form submits and sends email
- [ ] Lighthouse scores meet targets (Section 2.3)
- [ ] All images have `alt` text
- [ ] Google Analytics fires on page load
- [ ] Sitemap accessible at `ue-dt.com/sitemap.xml`
- [ ] Mobile menu opens and closes correctly
- [ ] All solution slugs resolve to correct pages
- [ ] `prefers-reduced-motion` tested
- [ ] Meta tags verified in Facebook Debugger + LinkedIn Post Inspector

---

## 15. Browser Support

| Browser | Minimum Version | Priority |
|---------|----------------|---------|
| Chrome | 110+ | High |
| Firefox | 110+ | High |
| Safari (macOS) | 16+ | High |
| Safari (iOS) | 16+ | High |
| Edge | 110+ | Medium |

**Not supported:** Internet Explorer (any version)

---

## 16. Acceptance Criteria

The website is considered ready for launch when:

1. **All 12 routes** resolve without error on both desktop and mobile
2. **Contact form** submits successfully and triggers an email notification
3. **All 5 solution pages** render the correct content from `solutions-data.ts`
4. **Lighthouse scores** reach targets defined in Section 2.3
5. **Framer Motion** scroll reveals function on Chrome, Firefox, Safari
6. **GSAP ScrollTrigger** effects are disabled gracefully on mobile
7. **`prefers-reduced-motion`** disables all animations when user setting is on
8. **Google Analytics** records page views on all routes
9. **Open Graph** images render correctly when URL is shared on LinkedIn and WhatsApp
10. **All images** have descriptive `alt` attributes

---

*This document is the single source of truth for the UE-DT website rebuild. Update it as requirements change and reference it at the start of every Claude Code session.*

*Document path:* `design-intent/PRD.md`
