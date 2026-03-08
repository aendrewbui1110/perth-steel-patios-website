# Perth Steel Patios -- Business Setup & Automation Roadmap

**Created:** 2026-03-07
**Lead:** Claude (AI)
**Status:** Phase 1 -- Foundation

---

## Phase 1: Foundation (Business Infrastructure)
> Get the basics running. Everything else depends on this.

### 1.1 Domain Name
- [ ] Choose domain (e.g., perthsteelpatios.com.au)
- [ ] Register via a registrar (Namecheap, VentraIP, Crazy Domains)
- [ ] Recommendation: `.com.au` requires ABN -- you have one (ABN 59 164 284 722)

### 1.2 Phone Number (eSIM)
- [ ] Research cheapest eSIM options in Australia for a business line
- [ ] Options to evaluate: Boost Mobile, Amaysim, Circles.Life, Mobi
- [ ] Requirement: cheap plan, can receive calls/SMS, separate from personal number

### 1.3 Google Workspace (Business Email)
- [ ] Purchase Google Workspace Starter (~$10.80 AUD/month)
- [ ] Connect your domain to Google Workspace
- [ ] Set up DNS records (MX, SPF, DKIM, DMARC)
- [ ] Create email addresses:
  - admin@yourdomain.com.au (main admin)
  - info@yourdomain.com.au (public-facing, website contact form)
  - quotes@yourdomain.com.au (for sending quotes/contracts)
- [ ] All inboxes can be managed from one Gmail login

### 1.4 Website Hosting
- [ ] Build React site for production (`npm run build`)
- [ ] Host options to evaluate:
  - Cloudflare Pages (free, fast, easy)
  - Netlify (free tier)
  - Vercel (free tier)
- [ ] Connect domain to hosting provider
- [ ] Set up SSL (automatic with all three options above)

**Phase 1 complete when:** You have a domain, email, phone number, and website live.

---

## Phase 2: Documents (Contract Agreement)
> Add contract agreement to your existing document generator tool.

### 2.1 Contract Agreement Template
- [ ] Add new "Contract Agreement" tab to invoice generator
- [ ] Build HTML template matching reference PDF layout
- [ ] Variable fields: client name, address, phone, date, scope, specs, timeline, payment
- [ ] Fixed sections: Variations, Warranty, Client Responsibilities, Safety, Cancellation, Dispute, Acceptance/Signatures
- [ ] Signature block for print-and-sign
- [ ] PDF generation via html2pdf.js (same as quotes/invoices)

### 2.2 Test & Refine
- [ ] Generate sample contract agreements
- [ ] Compare against reference PDF
- [ ] Adjust styling until professional and matching

**Phase 2 complete when:** Invoice generator can produce all 4 document types (quote, deposit invoice, invoice, contract agreement).

---

## Phase 3: Automation Backend
> Build the engine that connects everything.

### 3.1 Node.js Backend Server
- [ ] Express API server
- [ ] Endpoint: receive raw job data (text input)
- [ ] Parser: extract client name, address, phone, job details, pricing, etc.
- [ ] PDF generation: call document generator logic to produce contract + quote PDFs
- [ ] Email sending: Nodemailer + Google Workspace SMTP
- [ ] Preview/approve flow before sending

### 3.2 Telegram Bot
- [ ] Create bot via @BotFather on Telegram
- [ ] Bot receives raw text message from you
- [ ] Bot sends back generated PDFs for preview
- [ ] Inline buttons: Approve / Reject / Edit
- [ ] On approve: sends email to client with PDFs attached
- [ ] Professional email body template

### 3.3 Integration Testing
- [ ] End-to-end test: send message -> get PDFs -> approve -> email sent
- [ ] Test with your own email first before using on real clients

**Phase 3 complete when:** You can text your Telegram bot from your phone, get back contract + quote PDFs, approve, and have them emailed to a client automatically.

---

## Phase 4: Desktop App (.exe)
> Package the document generator as a standalone Windows app.

### 4.1 Electron Build
- [ ] Wrap invoice/document generator in Electron
- [ ] Build as .exe (no Node.js/terminal required)
- [ ] Distribute via OneDrive shared folder

**Phase 4 complete when:** Double-click .exe opens the document generator.

---

## Phase 5: Marketing & Growth (Future)
> Social media, ads, content -- to be planned when ready.

- [ ] Social media accounts setup
- [ ] Ad content creation
- [ ] SEO for website
- [ ] Google Business Profile

---

## Daily Working Method

Each session:
1. Check this roadmap -- identify the current task
2. Work through tasks in order
3. Spin up agent teams when we hit parallel work (Phase 2+3 can partly overlap)
4. Mark tasks complete as we go
5. Update roadmap if plans change

---

## Key Details

| Item | Value |
|---|---|
| Business Name | Perth Steel Patios LTD PTY |
| ABN | 59 164 284 722 |
| Domain | TBD |
| Email Provider | Google Workspace (planned) |
| Phone | eSIM (TBD) |
| Website Host | TBD |
| Automation Input | Telegram Bot |
| Document Tool | Invoice Generator (to become Document Generator) |
