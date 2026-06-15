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
- design-intent/prd.md — full requirements
- design-intent/google-stitch/design-system.md — brand colours, fonts, spacing
- design-intent/build-guide.md — full build order and Claude Code prompts

## Rules
- TypeScript on all components
- Add 'use client' only to components using hooks or browser APIs
- Use Next.js <Image> component for all images, never <img>
- Mobile-first responsive design
- Keep Tailwind classes from Stitch exports during conversion
- One feature per session — I will use /clear between tasks