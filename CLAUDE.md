# Perth Steel Patios — Project Context

> See also: [AGENTS.md](AGENTS.md) (agent ecosystem), [ROADMAP.md](ROADMAP.md) (what's built vs planned)

## Business Overview
- **Business:** Perth Steel Patios (ABN 81 696 071 664)
- **Owner:** Andrew "Toby" Bui
- **Location:** Perth, Western Australia (Wangara unit)
- **Service:** Steel patio installations — residential
- **Patio types:** Skillion, gable, flat, dutch gable
- **Service area:** Perth metro (distance surcharges for outer suburbs)

## What's In This Directory

### All in One PDF Tool
- **Path:** `All in One PDF Tool/`
- **Repo:** https://github.com/aendrewbui1110/all-in-one-pdf-tool
- **Tech:** Vanilla JS + Vite + Supabase
- **Purpose:** Client management, document generation (quotes, contracts, invoices), ledger tracking
- **Status:** Phase 1-5 complete. Phase 6 (Quote Calculator) deferred. Phase 7 (Agent API) not started.
- **Design:** Dark theme, orange accent (#F7941D)
- **Has its own CLAUDE.md** — that is the source of truth for tool-specific context

### Perth Steel Patios Website
- **Path:** `Perth Steel Patios Website/`
- **Repo:** https://github.com/aendrewbui1110/perth-steel-patios-website (TBC)
- **Status:** Initial commit only. Needs CLAUDE.md.

## Business Workflow Pipeline
1. Lead comes in (email, Facebook, Marketplace, website, word of mouth)
2. Site inspection — capture job details
3. Generate quote PDF + contract PDF
4. Send to client via email
5. Client signs and returns contract
6. Generate and send deposit invoice
7. If council approval needed: send job details to drafter
8. Drafter returns drawings → client review → engineering → BA02 form
9. Council submission and tracking
10. Council approves → schedule installation
11. Fortnightly client updates throughout process
12. Job completion → final invoice
13. Payment collected → Google review request

## Document Status Codes
- **B** = Browsing (thinking about it)
- **L** = Lead (active interest)
- **P** = In Progress (job underway)
- **F** = Finalised (job complete)
- **$** = Paid

## Pricing
- Andrew calculates quotes by $/sqm mentally
- Wants itemised breakdowns for clients
- Council drawings: $850 (invoiced separately after deposit)
- Council lodgement: $250 (invoiced separately after deposit)
- Pricing formulas and material costs: TBD (Andrew still working on this)

## Communication Channels
- **Email:** contact@perthsteelpatios.com.au (Gmail)
- **Facebook:** Perth Steel Patios page + Marketplace (multiple accounts)
- **Website:** perthsteelpatios.com.au (contact form → webhook)
- **Client comms:** Email-first, some via Facebook Messenger

## Supabase
- **Project:** psp-business-tool (Sydney ap-southeast-2)
- **URL:** https://wdjjeiihpkfzefgggbqx.supabase.co
- **Tables:** clients, documents, doc_counters, ledger_private
- **Storage:** documents bucket (private, signed URLs)
- **SECURITY:** RLS is wide-open — critical fix needed

## Non-Negotiables
- Nothing client-facing or public without Andrew's approval
- Nothing involving money without Andrew's approval
- Financial data (LEDGER) private — not accessible by other agents
- Off-books items (OB toggle) excluded from accountant reports
- Never modify ABN, bank details, or pricing without explicit confirmation

## Design Principles
- Build tools that are business-agnostic where possible
- Business name, logo, ABN, contact details as config variables
- Designed for future productisation as "TradieClaw"
- Automate repetitive tasks, keep Andrew on high-value decisions

## Current Business State (from interview 2026-03-25)

### Status: Starting fresh
- Previously operated as sole trader under "Reliable Patio Solutions"
- Restarting under "Perth Steel Patios" with new structure
- Zero active leads right now — business is in setup/build phase
- All tools and automation being built before going live

### Lead Generation (historical)
- **Primary source:** Facebook Marketplace (2 personal accounts running listing ads)
- **Result:** High volume of leads when active
- **Plan:** Restart Marketplace ads on both accounts, have OpenClaw manage responses
- **Future:** Facebook Business Page, Google Maps, website — not yet active
- **Word of mouth:** Minimal historically

### Quoting Process
- Andrew does site visit, measures up, discusses with client
- Quote calculated mentally ($/sqm) — fast, done verbally on site
- If client agrees on site: fills out quote + contract on iPad (All-in-One PDF Tool)
- If client wants to think: quote-only email sent with company showcase PDF
- Previously used printed paper — now using the digital tool

### Council Approval
- ~80% of jobs need council approval
- Two drafters available, primary one returns drawings in ≤5 working days
- Council process is the biggest time sink (drawings → client review → engineering → BA02 → submission → waiting)

### Conversion Timeline
- First contact to site visit: ASAP, depends on schedule — leaving it too long loses the lead
- Site visit to quote: Immediate (done on site)
- Quote to job: Varies — on-site closers are instant, "thinking about it" clients need follow-up sequence

### Key Insight
The business hasn't launched yet under the new name. Everything we build is greenfield — no legacy data to migrate, no active clients to disrupt. We're building the entire system before turning on lead generation. This is the ideal scenario for automation.
