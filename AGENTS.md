# Perth Steel Patios — Agent Ecosystem

> See also: [CLAUDE.md](CLAUDE.md) (business context), [ROADMAP.md](ROADMAP.md) (implementation status)

## OpenClaw Integration (Project CLAW)
- **Goal:** Full business automation via 14-agent AI ecosystem on VPS
- **VPS:** Hetzner CPX21 (3 vCPU, 4GB, 80GB) — Phase 0 ~70% complete
- **Interface:** Telegram (primary), Vercel dashboard (visual)
- **Protocol:** openclaw-protocol.md (V3.0)
- **Status:** Planning phase — interview in progress to map full automation roadmap
- See `05-Projects/` in Obsidian vault for ongoing notes

## Key Agents (from Protocol)
- TOBY (CEO) — primary interface, delegates to specialists
- STEEL (Sales) — lead monitoring, responses, follow-ups
- QUOTE (Estimation) — quote generation from site notes
- FORGE (Projects) — pipeline tracking, client updates
- LEDGER (Finance) — invoicing, expense tracking, accountant reports
- SIGNAL (Marketing) — social media, reviews, blog
- ANCHOR (Compliance) — council, insurance, licences

## Email Agent Concept (critical agent)
- Monitors Gmail for sent emails from Andrew (picks up new client submissions)
- Detects if deposit is cash (assume paid) vs bank transfer (track payment, ask Andrew via Telegram)
- Checks if council approval needed → begins council prep workflow
- Communicates with other agents: CRM (add client), PDF (fill BA02), drafter (email drawings request)
- Handles all follow-up sequences (thinking-about-it clients, payment chasing, drafter chasing)
- Drafts ALL outgoing emails → Andrew approves via Telegram before send

## Architecture Decision: n8n + OpenClaw Hybrid
- **n8n** = nervous system (triggers, routing, file moving, notifications, scheduling, Gmail watching)
- **OpenClaw** = brain (thinking, writing, deciding, remembering, conversations)
- n8n detects events → passes to OpenClaw for AI processing → n8n executes the result
- n8n runs as Docker container on same VPS

## All-in-One Tool + Agent Integration
- Andrew handles on-site: measure → quote → fill PDF tool → client signs on iPad → email from Gmail
- Agent picks up from Gmail: detects sent email with attachments
- Agent checks deposit type (cash = assume paid, bank transfer = track and verify via Telegram)
- Agent checks if council needed → begins council prep
- Agent creates final invoice when Andrew reports job complete
- Agent files all documents into client folder (Google Drive)
- Phase 7 of the tool (Agent API) would let agents interact directly with Supabase data

## Model Strategy (decided — no local models)
- **No Llama on VPS** — CPX21 can't run 70B, and smaller models aren't worth the resource cost
- **All models via OpenRouter** — single API key, single bill, automatic fallback
- 4-tier routing:
  - **Gemini 3.1 Flash Lite (50%)** — $0.25/$1.50 per 1M — heartbeats, monitoring, classification, tracking
  - **Kimi K2.5 (25%)** — $0.45/$2.20 per 1M — quotes, invoices, structured docs, research synthesis
  - **Claude Sonnet 4.6 (20%)** — $3.00/$15.00 per 1M — client-facing responses, blog, financial analysis, journal
  - **Claude Opus 4.6 (5%)** — $5.00/$25.00 per 1M — monthly strategy reviews, complex decisions
  - **Perplexity Sonar Pro** — ~$5/1K searches — web research with citations
- Estimated monthly: $45-70 AUD (including VPS)
- OpenRouter allows hot-swapping models without infrastructure changes

## Approval Boundaries

**Agents handle autonomously (no approval needed):**
- All internal operations (CRM updates, file organisation, memory maintenance, logging)
- Document generation (quotes, invoices, receipts — agents CREATE them freely)
- Lead classification and routing
- Calendar management and conflict checking
- Google Drive filing and folder organisation
- System monitoring, cleanup, security scanning
- Internal agent-to-agent communication

**Requires Andrew's approval via Telegram (quick tap):**
- Any email before it's sent to a client (agent drafts fully, Andrew approves)
- Any Facebook message reply (agent suggests reply, Andrew approves)
- Any public content (social media posts, review responses, blog)
- Invoice/receipt before it's sent OR filed for bookkeeping (human check on numbers)
- Quote amounts before going to client
- Any payment status change

**Always escalate to Andrew (not just approve — discuss):**
- Anything involving money decisions (pricing changes, discounts, payment terms)
- Council correspondence that needs a response
- Anything unexpected or outside normal workflow
- Agent errors or conflicts between agents

**Trust Graduation Plan:**
- Start fully supervised (approve everything client-facing)
- After ~50 successful supervised actions per task type, consider relaxing
- Some tasks NEVER go autonomous: quotes >$5K, financial records, council submissions
- Trust is per-agent, per-task — earned not given

## LEDGER Privacy (confirmed)
- Financial agent reports directly to Andrew, NOT through TOBY
- Reasons: (1) off-books job privacy, (2) security principle — no single agent should know everything
- Note: technically agents can't "turn on you" — they have no agency beyond their prompts. But the separation is still good practice for data isolation and limiting blast radius if an agent's prompts get corrupted or injected.
