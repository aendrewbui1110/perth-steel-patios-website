# Perth Steel Patios — Roadmap & Current State

> See also: [CLAUDE.md](CLAUDE.md) (business context), [AGENTS.md](AGENTS.md) (agent ecosystem)

## Bottlenecks & Time Sinks (ranked by pain)
1. **Facebook Marketplace responses** — 2 accounts, high volume, manual replies to schedule inspections
2. **Email back-and-forth** — drafter comms, client site plans, council, constant ping-pong
3. **Organisation** — emails, files, documents all disorganised. ADHD makes this worse.
4. **Council form filling (BA02)** — repetitive with new client details each time, eats hours
5. **Payment tracking** — forgets to chase, no system, money slips through cracks
6. **Follow-ups** — estimated ~20 leads lost from slow/no follow-up
7. **Bookkeeping/filing** — receipts, tax invoices to accountant, filing documents — actively avoided
8. **Scheduling** — not hard but easy to forget or double-book

## What Andrew hates doing (automate FIRST)
- Organising anything (emails, files, documents)
- Replying to clients (especially repetitive messages)
- Sending receipts and tax invoices to accountant
- Filling out council forms
- Replying to emails
- Basically all admin — he'll do it but resents every minute

## ADHD impact on business
- Forgets to follow up → lost leads and unpaid invoices
- Disorganised email and files → can't find things when needed
- Procrastinates on boring-but-important tasks → they pile up
- Needs systems that DO things, not systems that REMIND him to do things

## Current Tools & Systems
- **Facebook:** 2 personal accounts active, ready for Marketplace listings. No business page yet.
- **Email:** contact@perthsteelpatios.com.au — Google Workspace (paid), browser accessible. Needs professional signature and email templates.
- **All-in-One PDF Tool:** Generates quotes, contracts, invoices via iPad browser. Works but needs:
  - Download PDF to iPad → client signs using iOS markup/app → attach to email
  - Pre-built email templates in Gmail for quick send on-site
  - Deposit can be cash (paid on site) or bank transfer (needs tracking)
  - Final payment can be mixed cash + bank transfer or fully one method
- **iPad Mini:** Primary on-site device for PDF tool + photos
- **Accounting:** Has accountant. Plan is organised Google Drive folders (Year > Quarter > Month) with view access for accountant. Not set up yet.
- **Calendar:** Nothing set up. Needs Google Calendar configured with clear system for inspections, jobs, reminders.
- **CRM/Dashboard:** Nothing. Wants a single unified platform — local web app or dashboard — to see everything, communicate with agents, manage the business from one place.
- **Other tools:** Nothing else in use. Everything is messy and starting fresh.

## On-Site Workflow (detailed)
1. Arrive at site with iPad Mini
2. Measure up, take photos, discuss with client
3. Calculate quote mentally ($/sqm), tell client verbally
4. If client agrees → fill out All-in-One PDF Tool on iPad
5. Download quote PDF + contract PDF + deposit invoice PDF
6. Client signs PDFs using iOS signing feature
7. Open Gmail on iPad → select pre-built email template
8. Attach signed quote + contract + deposit invoice → send to client's email
9. If cash deposit → collected on site, deposit invoice is effectively PAID
10. If bank transfer → needs payment tracking by email agent

## Accountant Workflow (planned)
- Google Drive folder structure: Year > Quarter > Month > (Invoices/Expenses/Bank Statements)
- Accountant gets view access
- Agent organises documents into correct folders automatically
- Andrew emails accountant when ready for review

## Dashboard/Hub Vision
- Andrew wants ONE platform to see and manage everything
- View pipeline, communicate with agents, approve actions, see calendar, track payments
- Like a local web app or Vercel dashboard — "everything in one app"
- Mobile-first (iPad/phone accessible)

## What's Built vs What Needs Building

**BUILT (ready to use):**
- VPS provisioned (Hetzner CPX21, 3 vCPU, 4GB RAM, 80GB) — bare, NOT hardened yet
- All-in-One PDF Tool (quotes, contracts, invoices — Phase 1-5)
- Domain perthsteelpatios.com.au (registered, hosting sorted)
- Google Workspace (contact@perthsteelpatios.com.au, paid)
- Google Calendar (linked to Workspace, empty)
- 2 Facebook personal accounts (active, ready for Marketplace)
- Claude Code environment (fully configured — plugins, skills, hooks, memory)

**NOT BUILT (needs doing):**
- VPS security hardening (SSH, firewall, Fail2Ban, Nginx+SSL)
- VPS anti-detection (VPN, residential proxy, browser fingerprinting — HIGH PRIORITY)
- OpenClaw installation and configuration
- n8n installation (Docker)
- Telegram bot setup
- Gmail email templates and professional signature
- Google Calendar structure (inspection slots, job schedule, reminders)
- Facebook Business Page
- Perth Steel Patios website (full site, contact form → webhook)
- Google Drive folder structure for accountant
- Vercel dashboard (the "one platform" hub)
- All OpenClaw agents and skills
- All n8n workflow automations

## VPS Anti-Detection Priority (HIGH)
- Andrew wants the VPS to appear human when browsing — no bot detection
- Residential proxy or VPN to mask VPS IP
- Browser fingerprint management (Playwright stealth / anti-detect browser)
- Human-rhythm timing patterns on all automated actions
- Critical for Facebook Marketplace automation — platform bans bots aggressively

## Website Vision
- Full professional website (not just landing page)
- Contact form → webhook → n8n → OpenClaw lead intake
- Portfolio of completed work
- Service area information
- Pricing guide (general, not exact)
- Reviews/testimonials section

## Interview Progress
- [x] Section 1: Current business operations & workflow
- [x] Section 2: Bottlenecks and time sinks
- [x] Section 3: Current tools and systems
- [x] Section 4: What's built vs what needs building
- [x] Section 5: Non-negotiables and approval boundaries
- [ ] Section 6: VPS and OpenClaw current state
- [ ] Section 7: Success definition — what does the ideal day look like
