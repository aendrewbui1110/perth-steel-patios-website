# Perth Steel Patios Website Transformation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the single-page React site into a multi-page, conversion-optimized, SEO-ready premium website that stands out from every generic Perth patio competitor.

**Architecture:** Multi-page React SPA using React Router with shared layout (Navbar/Footer). Each major section becomes its own route. New components for hero parallax slideshow, before/after slider, floating quote widget, cost calculator, and suburb landing pages. Form submission via Resend API. Image pipeline using Sharp for optimization.

**Tech Stack:** React 19, React Router 7, Vite 6, Tailwind CSS 4, Framer Motion, Lucide React, Resend (email), Sharp (images), TypeScript

---

## File Structure

### New Files to Create
```
src/
├── router.tsx                          # React Router configuration
├── layouts/
│   └── MainLayout.tsx                  # Shared layout (Navbar + Footer + MobileCTA)
├── pages/
│   ├── HomePage.tsx                    # Landing page (assembles home sections)
│   ├── ServicesPage.tsx                # All services overview
│   ├── ServiceDetailPage.tsx           # Individual service type page (dynamic route)
│   ├── GalleryPage.tsx                 # Full gallery with filtering
│   ├── AboutPage.tsx                   # Team, story, credentials
│   ├── ProcessPage.tsx                 # Expanded how-it-works
│   ├── ContactPage.tsx                 # Dedicated contact page
│   ├── SuburbPage.tsx                  # Dynamic suburb landing pages
│   └── NotFoundPage.tsx               # 404 page
├── components/
│   ├── HeroSlideshow.tsx              # Parallax slideshow hero (replaces Hero.tsx)
│   ├── HeroVideo.tsx                  # Video loop hero (alternative to slideshow)
│   ├── BeforeAfter.tsx                # Before/after image comparison slider
│   ├── FloatingQuote.tsx              # Floating quote widget (bottom-right)
│   ├── CaseStudy.tsx                  # Project case study card
│   ├── SuburbCard.tsx                 # Suburb landing page content block
│   ├── ExitIntent.tsx                 # Exit-intent popup
│   ├── ScrollToTop.tsx                # Scroll to top on route change
│   └── SEOHead.tsx                    # Per-page meta tags component
├── data/
│   ├── services.ts                    # Service type data (shared across pages)
│   ├── suburbs.ts                     # Suburb data for landing pages
│   ├── testimonials.ts                # Testimonial data (extracted from component)
│   └── projects.ts                    # Project/gallery data (replaces inline data)
├── assets/
│   ├── projects/                      # Real project photos (user provides)
│   ├── hero/                          # Hero slideshow images
│   └── before-after/                  # Before/after comparison photos
public/
├── robots.txt                         # SEO: crawler instructions
├── sitemap.xml                        # SEO: page index
└── og-image.jpg                       # Social sharing preview image
```

### Files to Modify
```
src/App.tsx                            # Replace direct component imports with Router
src/main.tsx                           # Wrap with BrowserRouter
src/index.css                          # Add new utility classes, slideshow animations
src/components/Navbar.tsx              # Convert anchor links to React Router Links
src/components/Footer.tsx              # Convert anchor links to React Router Links
src/components/MobileCTA.tsx           # Update links for routing
src/components/Gallery.tsx             # Extract data, add routing for detail views
src/components/Contact.tsx             # Connect to Resend API
src/components/Hero.tsx                # Keep as fallback, but HeroSlideshow replaces it
index.html                            # Add og:image, canonical, enhanced schema
package.json                          # Add react-router, resend dependencies
vite.config.ts                        # Add SPA fallback for client-side routing
```

### Files to Delete (after migration)
```
(None immediately -- Hero.tsx kept as fallback until slideshow is verified)
```

---

## Phase 1: Architecture & Foundation
> **Can start immediately.** No photo/content dependencies.
> **Parallel agents:** 3 agents, independent work.

### Task 1.1: Install Dependencies & Configure Router

**Files:**
- Modify: `package.json`
- Create: `src/router.tsx`
- Create: `src/layouts/MainLayout.tsx`
- Create: `src/components/ScrollToTop.tsx`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Install react-router**
```bash
cd "/c/Users/aendr/Projects/Patio Business" && npm install react-router
```

- [ ] **Step 2: Create ScrollToTop component**
Create `src/components/ScrollToTop.tsx`:
```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
```

- [ ] **Step 3: Create MainLayout**
Create `src/layouts/MainLayout.tsx` -- wraps every page with Navbar + Footer + MobileCTA. Uses `<Outlet />` from React Router.

- [ ] **Step 4: Create router configuration**
Create `src/router.tsx` with routes:
- `/` → HomePage
- `/services` → ServicesPage
- `/services/:slug` → ServiceDetailPage
- `/gallery` → GalleryPage
- `/about` → AboutPage
- `/process` → ProcessPage
- `/contact` → ContactPage
- `/areas/:suburb` → SuburbPage
- `*` → NotFoundPage

- [ ] **Step 5: Create HomePage**
Create `src/pages/HomePage.tsx` -- moves current App.tsx section assembly here. Same components, just in a page wrapper.

- [ ] **Step 6: Create placeholder pages**
Create minimal versions of all other pages (ServicesPage, GalleryPage, AboutPage, ProcessPage, ContactPage, NotFoundPage) with heading + "Coming soon" so routing works.

- [ ] **Step 7: Update main.tsx**
Wrap app with `BrowserRouter` and render router instead of App directly.

- [ ] **Step 8: Update App.tsx**
Replace direct component imports with `RouterProvider` or `<Routes>` setup.

- [ ] **Step 9: Commit**
```bash
git add -A && git commit -m "feat: add React Router multi-page architecture"
```

### Task 1.2: Update Navigation for Routing

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/MobileCTA.tsx`
- Modify: `src/components/CtaBanner.tsx`

- [ ] **Step 1: Update Navbar**
- Import `Link`, `useLocation` from react-router
- Replace `<a href="#services">` with `<Link to="/services">`
- Keep anchor links for homepage sections (scroll to section if on homepage, navigate if on other page)
- Add active link styling based on current route
- "Get a Free Quote" → `<Link to="/contact">`

- [ ] **Step 2: Update Footer**
- Replace all `<a href="#">` stubs with proper `<Link to="/">` routes
- Privacy Policy and Terms → `/privacy`, `/terms` (or keep as # for now)

- [ ] **Step 3: Update MobileCTA**
- "Get a Quote" → `<Link to="/contact">`
- "Call Now" → keep as `tel:` link

- [ ] **Step 4: Update CtaBanner**
- CTA buttons → `<Link to="/contact">`

- [ ] **Step 5: Verify all navigation works**
```bash
npm run dev
```
Test: click every nav link, verify correct page loads, scroll-to-top works.

- [ ] **Step 6: Commit**
```bash
git commit -m "feat: update all navigation to use React Router links"
```

### Task 1.3: Extract Data from Components

**Files:**
- Create: `src/data/services.ts`
- Create: `src/data/testimonials.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/suburbs.ts`
- Modify: `src/components/Services.tsx`
- Modify: `src/components/Testimonials.tsx`
- Modify: `src/components/Gallery.tsx`

- [ ] **Step 1: Create services data file**
Extract the 8 service objects from Services.tsx into `src/data/services.ts`. Add `slug` field to each (e.g., "flat-roof-patios"). Add `longDescription` field (empty for now, filled in Phase 3).

- [ ] **Step 2: Create testimonials data file**
Extract the 6 testimonial objects from Testimonials.tsx into `src/data/testimonials.ts`.

- [ ] **Step 3: Create projects data file**
Extract the 9 project objects from Gallery.tsx into `src/data/projects.ts`. Add `beforeImage` field (empty for now).

- [ ] **Step 4: Create suburbs data file**
Create `src/data/suburbs.ts` with all 12 suburbs from Footer.tsx. Each suburb object: `name`, `slug`, `description` (empty for now), `councilName`, `distanceFromPerth`.

- [ ] **Step 5: Update components to import from data files**
Modify Services.tsx, Testimonials.tsx, Gallery.tsx to import data instead of defining inline.

- [ ] **Step 6: Verify no regressions**
```bash
npm run build && npm run lint
```

- [ ] **Step 7: Commit**
```bash
git commit -m "refactor: extract component data into shared data files"
```

### Task 1.4: SEO Infrastructure

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Create: `src/components/SEOHead.tsx`
- Modify: `index.html`

- [ ] **Step 1: Create robots.txt**
```
User-agent: *
Allow: /
Sitemap: https://perthsteelpatios.com.au/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**
List all pages: /, /services, /services/[each-type], /gallery, /about, /process, /contact, /areas/[each-suburb].

- [ ] **Step 3: Create SEOHead component**
Uses `document.title` and meta tag manipulation to set per-page title, description, and og tags. (React Router doesn't have built-in head management, so we use useEffect.)

- [ ] **Step 4: Enhance index.html schema**
- Add AggregateRating schema (4.9 stars, 143 reviews)
- Add Service schema for each patio type
- Add og:image pointing to `/og-image.jpg`
- Add canonical tag
- Add Twitter card meta tags

- [ ] **Step 5: Commit**
```bash
git commit -m "feat: add SEO infrastructure (robots.txt, sitemap, schema, meta tags)"
```

### Task 1.5: Performance Fixes

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/assets/hero.jpg` (compress)
- Modify: `package.json` (add image optimization script)

- [ ] **Step 1: Compress hero image**
Use Sharp to compress hero.jpg from 6.5MB to ~300KB:
```bash
npx sharp-cli -i src/assets/hero.jpg -o src/assets/hero-optimized.jpg --quality 80 --resize 1920
```
Or write a one-off Node script using the already-installed Sharp package.

- [ ] **Step 2: Generate responsive sizes**
Create hero-640.jpg, hero-1024.jpg, hero-1920.jpg for srcset.

- [ ] **Step 3: Update Hero.tsx**
Use optimized image, add loading="eager" (above fold), use CSS background-image with multiple sizes via media queries.

- [ ] **Step 4: Verify build size**
```bash
npm run build && ls -la dist/assets/
```

- [ ] **Step 5: Commit**
```bash
git commit -m "perf: compress hero image and add responsive sizes"
```

---

## Phase 2: Hero & Visual Transformation
> **Depends on:** Phase 1 complete. Photos from Andrew (real) or Gemini-generated.
> **Parallel agents:** 2 agents.

### Task 2.1: Parallax Slideshow Hero

**Files:**
- Create: `src/components/HeroSlideshow.tsx`
- Modify: `src/index.css` (add keyframe animations)
- Modify: `src/pages/HomePage.tsx` (swap Hero for HeroSlideshow)

- [ ] **Step 1: Build HeroSlideshow component**
Features:
- Array of 4-5 hero images (configurable)
- Auto-advances every 5 seconds with crossfade transition
- Ken Burns effect (subtle zoom on each image)
- Parallax scroll: image moves at 50% scroll speed
- Gradient overlay for text readability
- Same text/CTA content as current Hero
- Trust bar stats below
- Pause on hover (desktop)
- Simplified to crossfade-only on mobile (no parallax)

- [ ] **Step 2: Add CSS keyframes**
Add Ken Burns zoom animation and crossfade keyframes to index.css.

- [ ] **Step 3: Swap in HomePage**
Replace `<Hero />` with `<HeroSlideshow />` in HomePage.tsx.

- [ ] **Step 4: Test on mobile and desktop**
Verify smooth animations, no jank, text always readable.

- [ ] **Step 5: Commit**
```bash
git commit -m "feat: add parallax slideshow hero with Ken Burns effect"
```

### Task 2.2: Video Loop Hero (Alternative)

**Files:**
- Create: `src/components/HeroVideo.tsx`

- [ ] **Step 1: Build HeroVideo component**
Features:
- `<video>` tag with autoPlay, muted, loop, playsInline
- Poster image (first frame or hero image) for loading state
- Same gradient overlay and text as HeroSlideshow
- Fallback to static image if video fails to load
- Lazy loads video (IntersectionObserver)
- Mobile: shows poster image only (saves bandwidth), video on wifi/desktop

- [ ] **Step 2: Test with Andrew's video**
Drop video into `src/assets/hero/` and verify playback.

- [ ] **Step 3: Commit**
```bash
git commit -m "feat: add video loop hero component"
```

### Task 2.3: Before/After Slider Component

**Files:**
- Create: `src/components/BeforeAfter.tsx`

- [ ] **Step 1: Build BeforeAfter component**
Features:
- Two images stacked (before underneath, after on top)
- Draggable divider handle in the middle
- Touch and mouse support
- Smooth drag with requestAnimationFrame
- Labels: "BEFORE" and "AFTER" on each side
- Props: `beforeImage`, `afterImage`, `beforeLabel`, `afterLabel`
- Responsive: works on all screen sizes

- [ ] **Step 2: Test with placeholder images**
Verify drag works on mobile (touch) and desktop (mouse).

- [ ] **Step 3: Commit**
```bash
git commit -m "feat: add before/after image comparison slider"
```

---

## Phase 3: Page Buildout
> **Depends on:** Phase 1 complete, data files created.
> **Parallel agents:** 4 agents (one per page).

### Task 3.1: Services Overview Page

**Files:**
- Modify: `src/pages/ServicesPage.tsx`
- Modify: `src/data/services.ts` (add long descriptions)

- [ ] **Step 1: Build ServicesPage**
- Hero banner with "Our Services" heading
- Grid of 8 service cards (imported from data/services.ts)
- Each card links to `/services/[slug]`
- Card shows: image, title, short description, arrow icon
- CTA section at bottom: "Not sure which style? Get a free consultation"
- Renovations section below services

- [ ] **Step 2: Commit**

### Task 3.2: Service Detail Pages

**Files:**
- Modify: `src/pages/ServiceDetailPage.tsx`
- Modify: `src/data/services.ts` (add detailed content per type)

- [ ] **Step 1: Build ServiceDetailPage**
- Dynamic route: `/services/:slug`
- Loads service data by slug
- Hero image for that service type
- Detailed description (benefits, use cases, materials)
- Gallery of projects of this type (filtered from projects.ts)
- Specifications section (materials, engineering standards)
- Related services (links to other types)
- CTA: "Get a Free Quote for [Service Type]"
- Breadcrumb: Home > Services > [Service Type]

- [ ] **Step 2: Commit**

### Task 3.3: About Page

**Files:**
- Modify: `src/pages/AboutPage.tsx`

- [ ] **Step 1: Build AboutPage**
- Company story section
- Team section (placeholder for photos)
- Credentials grid: Builder's license, ABN, insurance, HIA membership
- BlueScope/Colorbond partnership mention
- Service area map (embed or static image)
- Values/mission statement
- CTA: "Meet us on-site — book a free consultation"

- [ ] **Step 2: Commit**

### Task 3.4: Gallery Page (Full)

**Files:**
- Modify: `src/pages/GalleryPage.tsx`
- Modify: `src/data/projects.ts`

- [ ] **Step 1: Build full GalleryPage**
- Larger grid than homepage gallery
- Filter by: type, suburb
- Each project card: image, type badge, suburb, hover overlay
- Click opens project detail (lightbox or dedicated section)
- Project detail shows: multiple images, description, type, suburb, before/after if available
- "Get Something Similar" CTA per project
- Pagination or infinite scroll if >12 projects

- [ ] **Step 2: Commit**

### Task 3.5: Expanded Process Page

**Files:**
- Modify: `src/pages/ProcessPage.tsx`

- [ ] **Step 1: Build ProcessPage**
- Same 4 steps but expanded with more detail
- Each step gets a full section with:
  - What happens in detail
  - Timeline (e.g., "48-hour quote turnaround")
  - What the customer needs to provide
  - Optional: photo of that stage
- FAQ section at bottom: common questions about the process
- Council approval explanation (dedicated subsection)
- CTA: "Start with Step 1 — Get Your Free Quote"

- [ ] **Step 2: Commit**

### Task 3.6: Dedicated Contact Page

**Files:**
- Modify: `src/pages/ContactPage.tsx`

- [ ] **Step 1: Build ContactPage**
- Same form as current Contact.tsx but full-page layout
- Map embed (Google Maps or static) showing service area
- Office hours, phone, email prominently displayed
- Service area list with suburb tags
- Trust signals next to form (reviews badge, credentials)
- FAQ: "What happens after I submit?"

- [ ] **Step 2: Commit**

---

## Phase 4: Conversion Optimization
> **Depends on:** Phase 1 routing complete.
> **Parallel agents:** 3 agents.

### Task 4.1: Floating Quote Widget

**Files:**
- Create: `src/components/FloatingQuote.tsx`
- Modify: `src/layouts/MainLayout.tsx` (add widget)

- [ ] **Step 1: Build FloatingQuote component**
Features:
- Fixed bottom-right button (chat-bubble style icon)
- Click expands to mini form: name, phone, suburb (3 fields only)
- Submit sends via same Resend integration as contact form
- Success state: "We'll call you within 24 hours"
- Collapse back to button after success
- Hidden on /contact page (already has a form)
- Hidden on mobile (MobileCTA serves this purpose)
- Smooth expand/collapse animation (Framer Motion)

- [ ] **Step 2: Add to MainLayout**
- [ ] **Step 3: Commit**

### Task 4.2: Connect Contact Form to Resend

**Files:**
- Create: `src/api/contact.ts` (or use Resend client-side)
- Modify: `src/components/Contact.tsx`
- Modify: `.env.example` (add RESEND_API_KEY)

Note: Resend has a client-side send option via their API, or we can use a simple serverless function. Since we don't have a backend yet, we'll use a Vite API route or a free serverless function (Vercel/Cloudflare worker).

- [ ] **Step 1: Set up Resend integration**
- Create API endpoint or use Resend's HTTP API directly
- Send form data as formatted email to Andrew's inbox
- Include all form fields in a clean HTML email template

- [ ] **Step 2: Update Contact.tsx**
- Replace fake 1.5s timeout with real API call
- Add error handling (show error message if send fails)
- Add loading state during send

- [ ] **Step 3: Test with real email**
- [ ] **Step 4: Commit**

### Task 4.3: Exit-Intent Popup

**Files:**
- Create: `src/components/ExitIntent.tsx`
- Modify: `src/layouts/MainLayout.tsx`

- [ ] **Step 1: Build ExitIntent component**
Features:
- Detects mouse leaving viewport (desktop only)
- Shows modal: "Before you go — get a free design consultation"
- Simple form: name + phone only
- Only triggers once per session (sessionStorage flag)
- Dismissible (X button or click outside)
- Doesn't show if user already submitted a form
- Framer Motion entrance animation

- [ ] **Step 2: Add to MainLayout**
- [ ] **Step 3: Commit**

---

## Phase 5: SEO & Content Pages
> **Depends on:** Phase 1 routing, Phase 3 pages.
> **Parallel agents:** 2 agents.

### Task 5.1: Suburb Landing Pages

**Files:**
- Modify: `src/pages/SuburbPage.tsx`
- Modify: `src/data/suburbs.ts` (add full content)
- Create: `src/components/SuburbCard.tsx`

- [ ] **Step 1: Build SuburbPage**
- Dynamic route: `/areas/:suburb`
- Suburb-specific heading: "Steel Patios in [Suburb]"
- Local council info (which council, typical approval time)
- Projects completed in this suburb (filtered from projects.ts)
- Distance from Perth CBD
- Nearby suburbs we also service
- Testimonials from this suburb (filtered)
- CTA: "Get a free quote for your [Suburb] project"
- Unique meta description per suburb for SEO

- [ ] **Step 2: Build SuburbCard component**
Reusable card for listing suburbs on other pages (services, contact).

- [ ] **Step 3: Create suburb content**
Write unique content for each of the 12 suburbs. Each needs:
- 2-3 sentences about the suburb context
- Local council name
- Common patio styles in the area

- [ ] **Step 4: Commit**

### Task 5.2: Blog Architecture (Structure Only)

**Files:**
- Create: `src/pages/BlogPage.tsx`
- Create: `src/pages/BlogPostPage.tsx`
- Create: `src/data/blog-posts.ts`
- Modify: `src/router.tsx` (add blog routes)

- [ ] **Step 1: Build blog page structure**
- `/blog` → list of posts with cards
- `/blog/:slug` → individual post page
- Post data structure: title, slug, excerpt, content (markdown or JSX), date, category, image
- Categories: Guides, Patio Ideas, News, FAQs
- No posts yet -- just the architecture ready to populate

- [ ] **Step 2: Commit**

---

## Phase 6: Polish & Integration
> **Depends on:** All prior phases.
> **Parallel agents:** 2 agents.

### Task 6.1: Accessibility Fixes

**Files:**
- Modify: `src/components/Gallery.tsx` (lightbox ARIA)
- Modify: `src/components/Contact.tsx` (form ARIA)
- Modify: `src/components/Navbar.tsx` (mobile menu ARIA)

- [ ] **Step 1: Fix Gallery lightbox**
- Add `role="dialog"`, `aria-modal="true"`, `aria-label`
- Add keyboard navigation (Escape to close, arrow keys for next/prev)
- Focus trap inside modal

- [ ] **Step 2: Fix Contact form**
- Add `aria-live="polite"` to success message region
- Add `aria-describedby` for form field helper text
- Add `aria-invalid` for validation errors

- [ ] **Step 3: Fix Navbar mobile menu**
- Add `aria-expanded` on hamburger button
- Focus trap inside mobile menu when open
- Escape key closes menu

- [ ] **Step 4: Fix Gallery filter buttons**
- Add `aria-pressed` or `aria-current` for active filter

- [ ] **Step 5: Commit**

### Task 6.2: Analytics & Monitoring

**Files:**
- Modify: `index.html` or `src/main.tsx`

- [ ] **Step 1: Add analytics**
Options (pick one when deploying):
- Vercel Analytics (if hosting on Vercel)
- Plausible (privacy-friendly, paid)
- Google Analytics 4 (free, most data)

- [ ] **Step 2: Commit**

---

## Phase 7: Image & Video Brief (For Andrew)
> **Not code work.** This is the prompt list for generating visuals in Gemini.

### 7.1: Hero Slideshow Images (4-5 needed)
Prompts will be provided after Phase 2 component is built, so dimensions and aspect ratios are locked in.

Themes:
1. Modern flat-roof patio at golden hour, Perth suburban backyard
2. Gable roof patio with outdoor dining setup, family using the space
3. Carport with steel framing, clean driveway, modern house
4. Wide-angle of a large custom patio with Perth hills in background
5. Close-up of steel beam connections and Colorbond roofing

### 7.2: Service Type Images (8 needed)
One per service type for service cards and detail pages.

### 7.3: Before/After Pairs (3-4 needed)
Same backyard, before (bare/old) and after (finished patio).

### 7.4: Hero Video Loop (1 needed, 5-10 seconds)
Slow pan across a completed patio at sunset with ambient movement (plants swaying, light shifting).

### 7.5: Gallery Project Photos (12-20 needed)
Mix of Andrew's real photos + AI-generated renders for types not yet photographed.

---

## Execution Strategy

### Agent Parallelism

| Phase | Agents | Can Start When |
|-------|--------|----------------|
| Phase 1 (Tasks 1.1-1.5) | 3 parallel | Immediately |
| Phase 2 (Tasks 2.1-2.3) | 2 parallel | Phase 1 complete |
| Phase 3 (Tasks 3.1-3.6) | 4 parallel | Phase 1 complete |
| Phase 4 (Tasks 4.1-4.3) | 3 parallel | Phase 1 complete |
| Phase 5 (Tasks 5.1-5.2) | 2 parallel | Phase 3 complete |
| Phase 6 (Tasks 6.1-6.2) | 2 parallel | All phases complete |
| Phase 7 (Image briefs) | Manual (Andrew) | Phase 2 component built |

### Review Checkpoints
- After Phase 1: Code review agent verifies routing, SEO, performance
- After Phase 2+3: Code review agent verifies all pages render correctly
- After Phase 4: Manual testing of all conversion flows
- After Phase 6: Full accessibility audit + Lighthouse score check

### Dependencies
```
Phase 1 ──┬──> Phase 2 (hero components)
           ├──> Phase 3 (page buildout)
           └──> Phase 4 (conversion tools)
                     │
Phase 3 ────────> Phase 5 (suburb pages need routing + data)
                     │
All ───────────> Phase 6 (polish)
```

### What Needs Photos vs What Doesn't
**No photos needed (build now):**
- All of Phase 1 (architecture, routing, SEO, performance)
- Phase 2 component shells (use placeholder images, swap later)
- Phase 3 page structures
- Phase 4 conversion tools
- Phase 5 suburb page templates
- Phase 6 accessibility + analytics

**Photos needed (build structure now, populate later):**
- Hero slideshow images → Phase 7.1
- Service type images → Phase 7.2
- Before/after pairs → Phase 7.3
- Hero video → Phase 7.4
- Gallery photos → Phase 7.5
