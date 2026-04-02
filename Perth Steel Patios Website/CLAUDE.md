# Perth Steel Patios — Website

## What This Is
Public-facing website for Perth Steel Patios. Multi-page React SPA with SEO, blog, suburb landing pages, and contact form. Single commit so far — scaffolded but not yet deployed or content-complete.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build:** Vite 6 + Tailwind CSS 4
- **Routing:** react-router v7 (lazy-loaded pages)
- **Animations:** Motion (Framer Motion successor)
- **Icons:** lucide-react
- **Fonts:** Inter (body) + Oswald (headings) via Google Fonts
- **SEO:** Schema.org structured data (LocalBusiness), Open Graph, sitemap.xml, robots.txt
- **AI integration:** Gemini API key in env (purpose TBC — possibly chat or content generation)
- **Repo:** https://github.com/aendrewbui1110/perth-steel-patios-website
- **Hosting:** Not deployed yet — Cloudflare Pages, Netlify, or Vercel (TBD)
- **Domain:** perthsteelpatios.com.au (registered, not yet pointed)

## Colour System
- Accent: `#C8713A` (golden amber) with dark variant `#B5632E`
- Background: `#0C0C0F` (charcoal), `#151412` (surface), `#1C1A18` (card)
- Text: `#EAE6DF` (ink), `#858580` (muted)
- Secondary: `#3D6B5C` (sage/eucalyptus green)

## Pages & Components
**Pages:** Home, Services, Service Detail (/:slug), Gallery, About, Process, Contact, Suburb (/:suburb), Blog, Blog Post (/:slug), 404
**Components:** Navbar, Footer, HeroSlideshow, HeroVideo, Services, Gallery, Testimonials, Contact, Process, Stats, WhyUs, BeforeAfter, CtaBanner, FloatingQuote, MobileCTA, ExitIntent, SuburbCard, SEOHead, Logo, ScrollToTop

## Current State
- Scaffolded with all pages and components created (single initial commit)
- `node_modules` not installed — run `npm install` first
- `dist/` exists but likely stale — rebuild with `npm run build`
- Data files exist for blog posts, projects, services, and suburbs but content may be placeholder
- Hero images exist in multiple sizes (640/1024/1920) with an optimise script
- No tests, no CI/CD, no deployment pipeline

## Project Context
- **Business:** Perth Steel Patios — steel patio/carport builder in Perth, WA
- **Owner:** Andrew (Toby) Bui
- **Related:** All-in-One PDF Tool (business ops), OpenClaw Agent System (automation)
- **Contact form** should webhook into n8n/OpenClaw for automated lead intake (not wired yet)

## Design Requirements
- Dark theme mandatory (already set up)
- Visual perfectionist — sloppy output is unacceptable
- Mobile-first (clients view on phones from site visits)
- Australian English throughout
- Animations should feel premium, not gimmicky

## Non-Negotiables
- Never modify business contact details (phone, email, ABN, address) without explicit confirmation
- Never push to production without approval
- All content must reflect actual services offered — no fake reviews or fabricated stats
- Schema.org data must stay accurate (currently has placeholder phone: 1300 000 000)

## What's Next
1. **Content audit** — verify all text, testimonials, and stats are real (not placeholder)
2. **Fix placeholder data** — phone number in schema.org, review count, email addresses
3. **Real portfolio images** — replace stock/placeholder hero images with actual job photos
4. **Contact form backend** — wire to webhook (n8n) or email endpoint
5. **Deploy** — pick host (Cloudflare Pages recommended), connect domain, SSL
6. **Google Business Profile** — set up and link to website
7. **SEO polish** — verify suburb pages have unique content, blog posts are real
