# UE-DT Website — Day 1 to Launch Build Guide

**The single document that combines everything: learning, design, and building.**

**Project:** ue-dt.com rebuild (WordPress → Next.js)  
**Owner:** Ahmed — UE Technology, Cairo  
**Approach:** Learn while building, using Google Stitch for design and Claude Code for development  
**Last Updated:** June 2026  

---

## How to Use This Document

This guide is built to do two things at once: **teach you web development** and **get ue-dt.com built and launched**. You do not learn everything first and then build. You learn each skill exactly when you need it for the next part of the website.

The guide has three layers running in parallel:

1. **Learn** — watch the resource, understand the concept (1–3 hrs/week)
2. **Design** — create the matching screen in Google Stitch
3. **Build** — use the Claude Code prompt to turn it into real code

Work top to bottom. Do not skip ahead. Each stage builds on the one before.

---

## Table of Contents

- [Part 0 — One-Time Setup](#part-0--one-time-setup)
- [Part 1 — The Tech Stack](#part-1--the-tech-stack)
- [Part 2 — Folder Structure](#part-2--folder-structure)
- [Part 3 — The Learning + Building Timeline](#part-3--the-learning--building-timeline)
  - [Stage 1 — Foundations (HTML, CSS, JS)](#stage-1--foundations)
  - [Stage 2 — Tailwind CSS](#stage-2--tailwind-css)
  - [Stage 3 — React](#stage-3--react)
  - [Stage 4 — Next.js](#stage-4--nextjs)
  - [Stage 5 — Design All Pages in Stitch](#stage-5--design-all-pages-in-google-stitch)
  - [Stage 6 — Build the Pages](#stage-6--build-the-pages-page-by-page)
  - [Stage 7 — Framer Motion Animations](#stage-7--framer-motion-animations)
  - [Stage 8 — GSAP Scroll Effects](#stage-8--gsap-scroll-effects)
  - [Stage 9 — Polish, SEO, Launch](#stage-9--polish-seo-and-launch)
- [Part 4 — Master Claude Code Prompt Library](#part-4--master-claude-code-prompt-library)
- [Part 5 — Launch Checklist](#part-5--launch-checklist)

---

## Part 0 — One-Time Setup

Do these once before anything else.

### 0.1 Install the tools

| Tool | How |
|------|-----|
| Node.js (v20+) | Download from nodejs.org — needed for everything |
| VS Code | Your code editor |
| Claude Code | `npm install -g @anthropic-ai/claude-code` |
| Git | For version control |
| Google account | For Google Stitch (stitch.withgoogle.com) |

### 0.2 Set up the project manually

> **Why manual instead of `create-next-app`:** The project folder and placeholder files are created first in step 0.5. Running `create-next-app` afterwards conflicts with those files and installs Tailwind v3 — not v4. Manual config gives full control.

Create these four files in the project root (plain text, named exactly as shown):

**`package.json`**
```json
{
  "name": "ue-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.0",
    "react-hook-form": "^7.54.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.9.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "eslint": "^9",
    "eslint-config-next": "^15.3.3"
  }
}
```

**`tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "allowArbitraryExtensions": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**`next.config.ts`**
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {}

export default nextConfig
```

**`postcss.config.mjs`** (Tailwind v4 uses PostCSS — no `tailwind.config.ts` needed)
```javascript
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

Then update `app/globals.css` (replace entire contents):
```css
@import "tailwindcss";

@theme {
  --color-tertiary: #FFFFFF;
  --color-text-body: #1A1A2E;
  --color-text-muted: #6B7280;
}
```

Then update `app/layout.tsx` (replace entire contents):
```typescript
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'UE Technology | Industry 4.0 Digital Transformation — Cairo, Egypt',
  description: 'UE-DT delivers MES, EMS, OEE, Smart Weighing, and Supply Chain solutions for Egyptian manufacturing plants.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

Install all dependencies:
```bash
npm install
```

### 0.3 Initialise shadcn/ui

```bash
npx shadcn@latest init
```

When prompted:
- Component library → **Radix**
- Preset → **Nova** (Lucide icons + Geist font)

This creates `components.json`, populates `lib/utils.ts` with the `cn()` helper, and wires the Geist font into `app/layout.tsx`.

Commit the result:
```bash
git add package.json tsconfig.json next.config.ts postcss.config.mjs components.json app/globals.css app/layout.tsx lib/utils.ts next-env.d.ts package-lock.json
git commit -m "chore: initialize Next.js 15, Tailwind v4, and shadcn/ui"
```

### 0.4 Start Claude Code and initialise

```bash
cd ue-website
claude
```

Then inside Claude Code, type:

```
/init
```

This lets Claude Code scan your project and create a starter `CLAUDE.md`.

### 0.5 Create your CLAUDE.md

Replace the contents of `CLAUDE.md` with this:

```markdown
# UE-DT Website Project

## Project
Company website for UE Technology (ue-dt.com)
Industry 4.0 digital transformation for Egyptian factories. Cairo, Egypt.

## Stack
Next.js 15 (App Router) · TypeScript · React 19
Tailwind CSS v4 · shadcn/ui · Framer Motion · GSAP · Vercel

## Brand colours
Primary (Mint Green): #39F2AE — CTAs, highlights, active states
Secondary (Charcoal): #323941 — backgrounds, hero, footer, navbar
Tertiary (White): #FFFFFF — card surfaces
Body text: #1A1A2E
Muted text: #6B7280

## Key documents — read these before writing any code
- design-intent/prd.md — full requirements
- design-intent/google-stitch/design-system.md — colours, fonts, spacing

## Rules
- TypeScript on all components
- Add 'use client' only to components using hooks or browser APIs
- Use Next.js <Image> component for all images, never <img>
- Mobile-first responsive design
- Keep Tailwind classes from Stitch exports during conversion
- One feature per session — I will use /clear between tasks
```

### 0.6 Build the folder structure

Paste this entire block into your terminal from the project root:

```bash
# folders
mkdir -p public/assets/branding
mkdir -p public/assets/images/{hero,solutions,about,team,clients,industry,blog}
mkdir -p design-intent/google-stitch/exports
mkdir -p design-intent/wireframes
mkdir -p components/{layout,home,solutions,blog,shared}
mkdir -p content/blog
mkdir -p hooks lib types
mkdir -p app/{about-us,blog,contact-us,industry-4-0,solutions}
mkdir -p app/blog/\[slug\]
mkdir -p app/solutions/\[slug\]
mkdir -p app/api/contact
mkdir -p .claude/commands

# design intent files
touch design-intent/prd.md
touch design-intent/google-stitch/design-system.md
```

Then copy your downloaded `prd.md` into `design-intent/prd.md`.

### 0.7 Connect Stitch MCP (optional but powerful)

Inside Claude Code:

```
/mcp add stitch https://mcp.stitch.withgoogle.com
```

This lets Claude Code read your Stitch designs directly. If it does not work yet, you will use the manual export method instead (covered in Stage 5).

---

## Part 1 — The Tech Stack

Everything you will use, and what each piece does.

| Layer | Tool | What it does |
|-------|------|--------------|
| Design | **Google Stitch** | AI designs your page layouts, exports Tailwind code |
| Language | **TypeScript** | JavaScript + type safety (all your files are `.ts`/`.tsx`) |
| Framework | **Next.js 15** | Page routing, SEO, image optimisation, deployment |
| UI library | **React 19** | The component model — reusable building blocks |
| Styling | **Tailwind CSS v4** | Utility classes for styling — matches Stitch exports |
| Components | **shadcn/ui** | Pre-built buttons, forms, cards |
| Animation | **Framer Motion** | Fade-ins, card reveals, page transitions |
| Scroll FX | **GSAP + ScrollTrigger** | Parallax, pinning, scroll timelines |
| Forms | **React Hook Form + Zod** | Contact form handling and validation |
| Hosting | **Vercel** | Free deployment with a live URL |
| Dev tool | **Claude Code** | Writes the code from your prompts |

**Note on JavaScript:** You are using JavaScript — TypeScript IS JavaScript with types on top. Every tool above runs on JavaScript under the hood. You write `.tsx` files; they compile to JavaScript automatically.

---

## Part 2 — Folder Structure

This is the complete target structure. You built the empty version in Part 0. Files fill in as you build.

```
ue-website/
├── .claude/commands/                 custom Claude Code commands
├── app/                              ← Next.js routes (each folder = a URL)
│   ├── layout.tsx                    root layout (Navbar + Footer)
│   ├── page.tsx                      → /  (Home)
│   ├── not-found.tsx                 → 404 page
│   ├── globals.css
│   ├── api/contact/route.ts          contact form handler
│   ├── about-us/page.tsx             → /about-us
│   ├── blog/page.tsx                 → /blog
│   ├── blog/[slug]/page.tsx          → /blog/post-name
│   ├── contact-us/page.tsx           → /contact-us
│   ├── industry-4-0/page.tsx         → /industry-4-0
│   ├── solutions/page.tsx            → /solutions
│   └── solutions/[slug]/page.tsx     → /solutions/mes, /ems, etc.
│
├── components/
│   ├── layout/                       Navbar, Footer, MobileMenu
│   ├── home/                         HeroSection, SolutionsSection, etc.
│   ├── solutions/                    SolutionCard, SolutionDetail, etc.
│   ├── blog/                         BlogCard, PostHeader, etc.
│   ├── shared/                       PageHero, CTABanner, ContactForm, etc.
│   └── ui/                           shadcn/ui (auto-generated, don't edit)
│
├── content/blog/                     MDX blog post files
│
├── design-intent/                    ← NEVER deployed — design reference
│   ├── prd.md                        the requirements document
│   ├── google-stitch/
│   │   ├── exports/                  Stitch .html + .png files
│   │   └── design-system.md          brand colours and fonts
│   └── wireframes/                   optional sketches
│
├── hooks/                            useScrollAnimation, useNavbarScroll
├── lib/                              utils, solutions-data, team-data
├── types/                            TypeScript type definitions
│
├── public/assets/                    ← deployed — all live images
│   ├── branding/                     logo.svg, og-image.jpg
│   └── images/
│       ├── hero/  solutions/  about/
│       ├── team/  clients/  industry/  blog/
│
├── CLAUDE.md                         Claude Code reads every session
├── next.config.ts  postcss.config.mjs  tsconfig.json  package.json  package-lock.json
```

### Key rules to remember

- **`app/` folders become URLs.** A folder named `about-us` with a `page.tsx` inside becomes `ue-dt.com/about-us`.
- **`[slug]` is a dynamic route.** One `page.tsx` inside `[slug]/` handles all 5 solution pages and all blog posts.
- **`public/` is invisible in URLs.** An image at `public/assets/images/hero/bg.webp` is referenced as `/assets/images/hero/bg.webp` — no "public".
- **`design-intent/` never goes live.** It is your private workspace for Stitch files and the PRD.
- **Component files are PascalCase** (`HeroSection.tsx`). **Image files are lowercase-hyphen** (`hero-factory-bg.webp`).

---

## Part 3 — The Learning + Building Timeline

This is the heart of the guide. Each stage tells you what to **learn**, what to **design**, and what to **build** — in order.

> **Time assumption:** 1–3 hours per week. Adjust the week numbers to your pace. The order matters more than the speed.

---

### Stage 1 — Foundations

**Weeks 1–6 · Learn HTML, CSS, and JavaScript**

You will not hand-code the website, but you must understand what Claude Code generates. Without this, you cannot tell good code from broken code, and your prompts stay vague.

#### Learn

| Resource | Link | Focus |
|----------|------|-------|
| HTML & CSS Full Course — SuperSimpleDev | youtube.com/watch?v=G3e-cpL7ofc | Structure & layout |
| JavaScript Full Course — Bro Code | youtube.com/watch?v=lfmg-EJ8gm4 | Logic, functions, DOM |
| freeCodeCamp Responsive Web Design | freecodecamp.org | Hands-on practice |
| javascript.info | javascript.info | Reference, reads like a book |

#### Build (practice only — not the real site yet)

Open Claude Code and try this learning prompt:

```
I'm learning web development. Create a simple HTML page with a
heading, a paragraph, and a button. Then explain each line in
plain English so I understand what it does.
```

**Milestone:** You can read an HTML file and understand what each part does.

---

### Stage 2 — Tailwind CSS

**Weeks 7–9 · Learn utility-first styling**

Google Stitch exports Tailwind. You need to read and adjust it.

#### Learn

| Resource | Link |
|----------|------|
| Tailwind CSS V4 Crash Course — PedroTech | youtube.com/watch?v=H_kSd4kn0E8 |
| Tailwind in React Crash Course | youtube.com/watch?v=bnfhmr1v028 |
| Official docs | tailwindcss.com/docs |

#### Build

```
Explain what each of these Tailwind classes does in plain English:
"flex items-center justify-between px-12 py-6 bg-gray-900 text-white"
Then show me how to change the background to charcoal #323941.
```

**Milestone:** You can look at Tailwind classes and know what they style.

---

### Stage 3 — React

**Weeks 10–16 · Learn components, props, state, hooks**

React is the core of everything — used in Next.js and any standalone apps you build later.

#### Learn

| Resource | Link |
|----------|------|
| React Tutorial Beginner to Pro — SuperSimpleDev | youtube.com/watch?v=TtPXvEcE11E |
| React with Tailwind — freeCodeCamp | youtube.com/watch?v=IJ85kCdqWao |
| Official React docs | react.dev/learn |
| shadcn/ui components | ui.shadcn.com |

#### Build

```
Explain the difference between props and state in React using a
simple example: a SolutionCard component that receives a title
and description as props. Write the component in TypeScript and
explain each part.
```

**Milestone:** You understand components, props, and how data flows.

---

### Stage 4 — Next.js

**Weeks 17–20 · Learn routing, layouts, SEO**

Next.js is React with superpowers: automatic routing, SEO, and image optimisation.

#### Learn

| Resource | Link |
|----------|------|
| Next.js 15 Pro in 1.5 Hours — PedroTech | youtube.com/watch?v=6jQdZcYY8OY |
| Master Next.js 15 — 7hr course | youtube.com/watch?v=3qGQ4dGA42o |
| Official Next.js learn course | nextjs.org/learn |

#### Build

```
Read design-intent/prd.md. Explain how the App Router works in
my project: how does a folder in app/ become a URL? Walk me
through how app/solutions/[slug]/page.tsx creates 5 different
solution pages from one file.
```

**Milestone:** You understand how your folder structure maps to website URLs.

---

### Stage 5 — Design All Pages in Google Stitch

**Weeks 21–23 · Design before you build**

Now you design every screen visually in Stitch before writing real code. Design all pages first, then build them all.

#### How to design in Stitch

1. Go to **stitch.withgoogle.com**, sign in with Google
2. For each page, write a detailed prompt (templates below)
3. Iterate until each screen looks right
4. Export each as Tailwind, save to `design-intent/google-stitch/exports/`

#### The desktop-first rule

Always end every Stitch prompt with these three lines:

```
Desktop-first layout. Design for 1440px wide desktop.
Use Tailwind CSS utility classes throughout.
Export-ready HTML structure.
```

#### Stitch prompt — Homepage

```
Design a professional B2B homepage for UE Technology (UE-DT), an
Industry 4.0 digital transformation company in Cairo, Egypt.
Audience: factory managers and operations directors.

Brand colours:
- Mint green #39F2AE for CTAs, highlights, active states
- Charcoal #323941 for backgrounds, hero, footer
- White #FFFFFF for cards
Style: modern, industrial, clean, trustworthy.

Sections:
1. Full-screen hero — headline, subtitle, 2 CTA buttons
2. Five solution cards: MES, EMS, OEE, Smart Scale, Supply Chain
3. Industries served: factories, poultry/farming, waste management
4. Stats row: factories served, years active, clients
5. Mission and Vision
6. Why UE-DT differentiators
7. Client logos strip
8. Footer with contact and links

Desktop-first layout. Design for 1440px wide desktop.
Use Tailwind CSS utility classes throughout.
Export-ready HTML structure.
```

#### Stitch prompts — remaining pages

Design these screens (use the homepage prompt as a template, swapping the sections):

| Screen | Save export as |
|--------|---------------|
| Navigation bar | `navbar.html` + `navbar.png` |
| Footer | `footer.html` + `footer.png` |
| Homepage | `homepage.html` + `homepage.png` |
| Solutions overview | `solutions-overview.html` |
| Single solution card | `solution-card.html` |
| Solution detail page | `solution-detail.html` |
| Industry 4.0 page | `industry-4-0.html` |
| About Us page | `about-us.html` |
| Contact Us page | `contact-us.html` |
| Blog list page | `blog-list.html` |
| Blog post page | `blog-post.html` |

#### How to export and save

1. Click the screen → click the code icon (`< >`)
2. Choose **Tailwind CSS** export
3. Click **Download**
4. Move and rename from your terminal:

```bash
mv ~/Downloads/index.html design-intent/google-stitch/exports/homepage.html
```

5. Also save a screenshot: right-click the screen in Stitch → Save image → name it `homepage.png` in the same folder.

#### Fill in your design system

After designing, open `design-intent/google-stitch/design-system.md` and paste your final colours and fonts:

```markdown
# UE-DT Design System

## Colours
Primary (Mint Green): #39F2AE
Secondary (Charcoal): #323941
White: #FFFFFF
Body text: #1A1A2E
Muted: #6B7280

## Fonts
Headings: [font from Stitch]
Body: [font from Stitch]

## Spacing
Section padding: 96px top/bottom desktop, 48px mobile
```

**Milestone:** All 11 screens designed and exported to `design-intent/google-stitch/exports/`.

---

### Stage 6 — Build the Pages (Page by Page)

**Weeks 24–32 · Convert Stitch designs into the real website**

Now you turn your Stitch exports into working code with Claude Code. Build in this exact order — shared pieces first, then pages.

> **Golden rule:** One component or page per Claude Code session. Use `/clear` between each. Always start a session with: *"Read CLAUDE.md and design-intent/prd.md first."*

#### Build order and prompts

**6.1 — Navbar** (appears on every page, build first)

```
Read CLAUDE.md and design-intent/prd.md first.
Convert the Stitch export at design-intent/google-stitch/exports/
navbar.html into a React TypeScript component.
- Keep all Tailwind classes from Stitch
- Links: Home, Solutions, Industry 4.0, Blog, About Us, Contact Us
- Sticky, transparent over hero, solid charcoal #323941 on scroll
- Mobile hamburger that opens a drawer
- Use Next.js Image for the logo from /assets/branding/logo-white.svg
- Add 'use client' (it uses scroll state)
Save to: components/layout/Navbar.tsx
```

**6.2 — Footer**

```
Read CLAUDE.md first.
Convert design-intent/google-stitch/exports/footer.html into a
React TypeScript component. Keep Stitch Tailwind classes.
3 columns: solution links, company links, contact info.
Charcoal background, mint green hover on links.
Save to: components/layout/Footer.tsx
```

**6.3 — Root layout** (wires Navbar + Footer into every page)

```
Read CLAUDE.md first.
Update app/layout.tsx to import and render Navbar at the top and
Footer at the bottom, with {children} between them. Set up the
global metadata: title "UE Technology | Industry 4.0 Egypt",
and the brand fonts using next/font.
```

**6.4 — Homepage hero**

```
Read CLAUDE.md first.
Convert the hero section from design-intent/google-stitch/exports/
homepage.html into components/home/HeroSection.tsx.
- TypeScript, keep Stitch Tailwind classes
- Headline: "Catalyzing Innovation, Driving Excellence"
- Two CTA buttons: "Our Solutions" (mint green) and "Contact Us"
- Background image via Next.js Image from /assets/images/hero/
- Add 'use client'
```

**6.5 — Solution card (reusable)**

```
Read CLAUDE.md first.
Convert design-intent/google-stitch/exports/solution-card.html
into a reusable component with TypeScript props: title,
description, icon, href, imageSrc. Keep Stitch Tailwind classes.
Add a hover state with mint green accent.
Save to: components/solutions/SolutionCard.tsx
```

**6.6 — Solutions data file**

```
Read CLAUDE.md first.
Create lib/solutions-data.ts with a typed array of all 5 UE-DT
solutions. Each has: slug ('mes'|'ems'|'oee'|'scale'|
'supply-chain'), title, shortDescription, fullDescription,
icon (Lucide icon name), imagePath, features (string array).
Export the array and a getSolution(slug) helper function.
Also create the matching types in types/index.ts.
```

**6.7 — Solutions section on homepage**

```
Read CLAUDE.md first.
Build components/home/SolutionsSection.tsx. Import SolutionCard
and the data from lib/solutions-data.ts. Render all 5 cards in a
responsive grid: 3 columns desktop, 2 tablet, 1 mobile.
Each card links to /solutions/[slug].
```

**6.8 — Assemble the homepage**

```
Read CLAUDE.md first.
Build app/page.tsx (the homepage). Import and stack these
components in order: HeroSection, SolutionsSection. Leave
placeholders for StatsSection and MissionSection. Add SEO
metadata for the homepage.
```

**6.9 — Solution detail pages (dynamic)**

```
Read CLAUDE.md first.
Build app/solutions/[slug]/page.tsx using the design from
design-intent/google-stitch/exports/solution-detail.html.
- Use generateStaticParams to create all 5 solution pages
- Pull content from lib/solutions-data.ts using the slug
- Sections: hero, features list, how it works, related solutions
- Add per-page SEO metadata using the solution title
- Show 404 if slug doesn't match a real solution
```

**6.10 — Remaining pages**

Repeat the convert-and-build pattern for each:

```
Read CLAUDE.md first.
Build app/about-us/page.tsx from design-intent/google-stitch/
exports/about-us.html. Keep Stitch Tailwind classes. Sections:
page hero, company story, mission/vision, team grid, location.
Pull team data from lib/team-data.ts (create it with placeholder
members). Add SEO metadata.
```

```
Read CLAUDE.md first.
Build the contact form: convert design-intent/google-stitch/
exports/contact-us.html into components/shared/ContactForm.tsx.
Use React Hook Form + Zod validation. Fields: name, company,
job title, email, phone, industry (select), solution interest,
message. On submit, POST to /api/contact. Show success state.
Then build app/contact-us/page.tsx that uses this form.
```

```
Read CLAUDE.md first.
Build app/industry-4-0/page.tsx from the Stitch export
industry-4-0.html. Educational page explaining Industry 4.0 for
Egyptian factories and how UE-DT's 5 solutions map to it.
```

```
Read CLAUDE.md first.
Build the blog: app/blog/page.tsx (post grid using a BlogCard
component) and app/blog/[slug]/page.tsx (individual post). Read
posts from MDX files in content/blog/. Create components/blog/
BlogCard.tsx from blog-list.html. Add one sample post.
```

**Milestone:** Every page renders and you can click through the whole site locally with `npm run dev`.

---

### Stage 7 — Framer Motion Animations

**Weeks 33–35 · Add React animations**

Stitch does not do animation. You add it now on top of your built components.

#### Learn

| Resource | Link |
|----------|------|
| Framer Motion Beginner to Advanced | youtube.com/watch?v=JALCoY9MQg8 |
| React Animation Course — PedroTech | youtube.com/watch?v=9-fO_2xTpgY |
| Official docs | motion.dev/docs |

#### Build

```
Read CLAUDE.md first.
Create components/shared/AnimatedSection.tsx — a reusable Framer
Motion wrapper that fades children up into view on scroll using
whileInView. Respect prefers-reduced-motion with the
useReducedMotion hook. Add 'use client'.
```

```
Read CLAUDE.md first.
Add Framer Motion animations to these existing components,
keeping all Tailwind classes unchanged:
1. HeroSection.tsx — fade + slide up on load, stagger headline
   then subtitle then buttons
2. SolutionsSection.tsx — staggerChildren so cards reveal one by
   one as they scroll into view
3. StatsSection.tsx — numbers count up from 0 when scrolled into
   view using useInView
```

**Milestone:** Sections fade and stagger smoothly as you scroll.

---

### Stage 8 — GSAP Scroll Effects

**Weeks 36–38 · Add advanced scroll animations**

GSAP handles the dramatic effects: parallax, pinning, scroll timelines.

#### Learn

| Resource | Link |
|----------|------|
| Mind-Bending Scroll Animations GSAP | youtube.com/watch?v=1iVRHjreOUI |
| Next.js Scroll Animations GSAP | youtube.com/watch?v=Tyt2Sq1UMAY |
| Official docs | gsap.com/resources/get-started |

#### Build

```
Read CLAUDE.md first.
Set up GSAP in my Next.js project. Create lib/gsap-config.ts that
registers the ScrollTrigger plugin once. Install @gsap/react for
the useGSAP hook. Explain how to use it inside a 'use client'
component.
```

```
Read CLAUDE.md first.
Add GSAP ScrollTrigger effects using the useGSAP hook. Keep all
Tailwind classes:
1. HeroSection.tsx — parallax: background image moves at 0.5x
   scroll speed
2. SolutionsSection.tsx — pin the heading while cards scroll in
3. Add a scroll progress bar at the top of app/layout.tsx
Disable all these effects on mobile (under 768px) gracefully.
```

**Milestone:** Hero has parallax, sections pin, scroll bar fills as you scroll.

---

### Stage 9 — Polish, SEO, and Launch

**Weeks 39–42 · Make it production-ready and go live**

#### Build — SEO

```
Read CLAUDE.md and design-intent/prd.md first.
Add complete SEO to every page:
- Metadata (title, description, openGraph) on all pages
- JSON-LD Organization schema on homepage
- Create app/sitemap.ts to auto-generate the sitemap
- Create app/robots.ts
- Verify every Next.js Image has descriptive alt text
```

#### Build — Performance

```
Read CLAUDE.md first.
Audit my site for performance:
- Confirm Server Components are used by default
- Confirm 'use client' is only on components that need it
- Add priority prop to the hero image
- Lazy load below-fold heavy components with dynamic import
- Check all images are .webp and reasonably sized
```

#### Add your real images

Place your real images in the right folders (see Part 2). Naming: lowercase with hyphens, `.webp` for photos, `.svg` for logos.

| Image type | Folder | Example name |
|-----------|--------|--------------|
| Hero background | `public/assets/images/hero/` | `hero-factory-bg.webp` |
| Solution cards | `public/assets/images/solutions/` | `mes-card.webp` |
| Team photos | `public/assets/images/team/` | `ahmed-lastname.webp` |
| Client logos | `public/assets/images/clients/` | `client-name-logo.svg` |
| Logo | `public/assets/branding/` | `logo.svg`, `logo-white.svg` |
| Social share | `public/assets/branding/` | `og-image.jpg` (1200×630) |

#### Deploy to Vercel

```
Read CLAUDE.md first.
Walk me through deploying to Vercel step by step:
1. Push my project to a GitHub repository
2. Connect the repo to Vercel
3. Set up environment variables for the contact form
4. Add ue-dt.com as a custom domain
Give me the exact commands and dashboard steps.
```

**Milestone:** ue-dt.com is live.

---

## Part 4 — Master Claude Code Prompt Library

Quick-reference prompts you will reuse constantly.

### Starting any session

```
Read CLAUDE.md and design-intent/prd.md before doing anything.
```

### Converting a Stitch export

```
Convert design-intent/google-stitch/exports/[FILE].html into a
React TypeScript component. Keep all Tailwind classes. Replace
<img> with Next.js Image. Add 'use client' if it uses hooks.
Save to: components/[folder]/[ComponentName].tsx
```

### Understanding code (learning)

```
Explain what this component does line by line in plain English,
as if teaching someone new to React. [paste code or file path]
```

### Fixing something

```
This component isn't working as expected: [describe the problem].
Here's the file: [path]. Diagnose the issue and fix it, then
explain what was wrong.
```

### Making it responsive

```
Make [component path] fully responsive: 1 column on mobile,
2 on tablet, 3 on desktop. Keep the existing design intact.
```

### Adding a feature to an existing component

```
Add [feature] to [component path]. Keep all existing Tailwind
classes and structure. Only add what's needed for the new feature.
```

### Session hygiene

- `/clear` — wipe context between unrelated tasks
- `/init` — re-scan project if structure changed a lot
- Keep prompts to **one component or feature** at a time

---

## Part 5 — Launch Checklist

Before you call it done:

- [ ] All 12 routes load without errors (`npm run build` passes)
- [ ] Homepage hero, solutions, stats, mission all render
- [ ] All 5 solution pages work via `/solutions/[slug]`
- [ ] Contact form submits and sends an email
- [ ] Blog list and at least one blog post render
- [ ] Navbar turns solid on scroll, mobile menu opens/closes
- [ ] Framer Motion reveals work on Chrome, Firefox, Safari
- [ ] GSAP effects disable cleanly on mobile
- [ ] `prefers-reduced-motion` disables animations
- [ ] Every image has alt text and is `.webp` or `.svg`
- [ ] Lighthouse: Performance ≥ 90, SEO ≥ 95
- [ ] OG image shows correctly on WhatsApp and LinkedIn shares
- [ ] Google Analytics fires on page load
- [ ] Sitemap at ue-dt.com/sitemap.xml
- [ ] Custom domain ue-dt.com connected with SSL

---

## Quick Reference — The Whole Journey

| Stage | Weeks | Learn | Design | Build |
|-------|-------|-------|--------|-------|
| 1 | 1–6 | HTML, CSS, JS | — | Practice prompts |
| 2 | 7–9 | Tailwind | — | Practice prompts |
| 3 | 10–16 | React | — | Practice prompts |
| 4 | 17–20 | Next.js | — | Understand routing |
| 5 | 21–23 | — | All 11 screens in Stitch | Export to design-intent/ |
| 6 | 24–32 | — | — | Convert + build all pages |
| 7 | 33–35 | Framer Motion | — | Add animations |
| 8 | 36–38 | GSAP | — | Add scroll effects |
| 9 | 39–42 | SEO, performance | — | Polish + launch |

**Total: ~10 months at 1–3 hrs/week. Faster if you have more time.**

The website grows with your skills. By the time you finish learning each tool, you have already built the part of ue-dt.com that uses it. You are not learning in theory — you are learning by shipping.

---

*This is your single source of truth. Keep it open beside the PRD. Reference both at the start of every Claude Code session.*

*Save to: `design-intent/build-guide.md`*
