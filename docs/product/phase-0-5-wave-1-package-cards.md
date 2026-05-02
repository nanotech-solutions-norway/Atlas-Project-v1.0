# Atlas Phase 0.5 Wave 1 Package Cards

Status: Phase 0.5 staged
Timestamp: 10:20, 02.05.2026 Europe/Oslo
Owner system: GitHub
Downstream system: Wix CMS / commercial shell

## Purpose

This document converts the Atlas Wave 1 portfolio recommendation into stable package cards before Wix page construction. The cards are intended to prevent offer drift between GitHub, Wix CMS, Gamma references, and later secure-delivery workstreams.

## Source basis

- Phase 0 governance baseline is merged into `main`.
- Phase 0.5 objective is to finalize Wave 1 package definitions before final Wix package pages are built.
- Wave 1 is limited to five launch candidates: Executive Work Copilot, Commercial Growth Copilot, Accounting & Bookkeeping Expert, Study Planner & Exam Coach, and Personal Life Organizer.
- Managed Secure Mode remains a later delivery tier and must not be claimed as deployed.

## Delivery tier definitions

| Tier | Name | Meaning | Phase 0.5 treatment |
|---|---|---|---|
| A | Native self-serve package | Low-friction GPT configuration package with instructions and templates. | Launch-ready for broad offers. |
| B | Native package + onboarding | Native package plus guided setup, intake review, or implementation support. | Use for business packages where setup quality affects outcome. |
| C | Managed Secure Mode | Protected workspace/runtime with entitlement, audit, and controlled delivery. | Future-state only; not active until Azure/secure control plane exists. |

---

## Package card: Executive Work Copilot

| Field | Value |
|---|---|
| Package ID | `PKG-BIZ-EXEC-WORK-COPILOT` |
| Public name | Executive Work Copilot |
| Segment | Business / Professional |
| Priority | Wave 1 anchor |
| Recommended route | `/packages/executive-work-copilot` |
| Primary delivery tier | Tier A; optional Tier B |
| Primary buyer | Solo professionals, consultants, founders, managers, and general knowledge workers. |
| Core job-to-be-done | Convert fragmented business inputs into usable professional output so daily work moves faster with less context switching. |
| Primary outcome | Faster production of emails, meeting briefs, decision memos, action lists, short reports, and professional first drafts. |
| Included scope | Email drafts; meeting prep; summaries; action extraction; short memos; decision briefs; tone templates; recurring workflow checklists. |
| Explicit exclusions | No legal advice; no accounting/tax conclusions; no unsupported business claims; no autonomous external account actions. |
| Suggested CTA | Request setup guidance |
| Commercial note | Broad entry offer; should be positioned around business throughput, not generic AI assistance. |
| Managed Secure Mode relevance | Optional later upgrade for clients wanting private internal knowledge or workspace-controlled templates. |

### Minimum onboarding inputs

- Role or professional function.
- Typical recurring outputs.
- Preferred tone.
- Industry context.
- Sensitive-data level.
- Primary language requirement.
- Desired templates.

### Wix page requirements

- Clear entry-level positioning.
- Comparison against ad hoc ChatGPT use.
- CTA to guided setup.
- FAQ covering privacy, limits, and what the package does not do.

---

## Package card: Commercial Growth Copilot

| Field | Value |
|---|---|
| Package ID | `PKG-BIZ-COMMERCIAL-GROWTH-COPILOT` |
| Public name | Commercial Growth Copilot |
| Segment | Business / Professional |
| Priority | Wave 1 anchor |
| Recommended route | `/packages/commercial-growth-copilot` |
| Primary delivery tier | Tier B; optional Tier C later |
| Primary buyer | SMB owners, sales leads, consultants, agencies, and commercial teams. |
| Core job-to-be-done | Turn rough commercial ideas, notes, and buyer context into client-facing growth material faster. |
| Primary outcome | Faster production of proposals, outreach drafts, positioning summaries, discovery guides, and follow-up material. |
| Included scope | Proposal structures; outreach sequences; discovery questions; competitor framing; offer comparison tables; sales follow-up drafts. |
| Explicit exclusions | No live market-data guarantee; no legal review of commercial terms; no fabricated competitor claims or pricing assertions. |
| Suggested CTA | Build growth workflow |
| Commercial note | Strong monetization candidate because output ties directly to revenue motion and measurable productivity. |
| Managed Secure Mode relevance | Later upgrade for CRM-connected or private-knowledge sales workflows. |

### Minimum onboarding inputs

- Buyer persona.
- Offer type.
- Sales cycle stage.
- Existing sales material.
- Main objections.
- Geographic market.
- Evidence or proof assets available.

### Wix page requirements

- Emphasize proposal and commercial-output acceleration.
- Include sample output categories.
- Add claim-safety warning for externally published material.
- Route to intake form with offer, ICP, and evidence fields.

---

## Package card: Accounting & Bookkeeping Expert

| Field | Value |
|---|---|
| Package ID | `PKG-PRO-ACCOUNTING-BOOKKEEPING-EXPERT` |
| Public name | Accounting & Bookkeeping Expert |
| Segment | Business / Professional |
| Priority | Wave 1 specialist |
| Recommended route | `/packages/accounting-bookkeeping-expert` |
| Primary delivery tier | Tier B; Tier C later for file-grounded or multi-user workflows |
| Primary buyer | Norwegian SMEs, founders, controllers, bookkeepers, and Conta users. |
| Core job-to-be-done | Understand, execute, and validate bookkeeping and reporting tasks under Norwegian operating conditions with traceable calculations. |
| Primary outcome | Better accounting workflow clarity, fewer bookkeeping mistakes, and stronger reconciliation discipline. |
| Included scope | Norwegian bookkeeping guidance; VAT workflow explanation; Conta-oriented process guidance; reconciliation methods; calculation walkthroughs; audit-ready checklist structure. |
| Explicit exclusions | No substitute for licensed accountant/auditor; no tax evasion guidance; no guaranteed filing outcome; statutory rates must be verified for the relevant period before reliance. |
| Suggested CTA | Request accounting setup review |
| Commercial note | High-trust specialist package. Strong asset advantage from existing internal Accounting Expert protocol. |
| Managed Secure Mode relevance | Strong later candidate for protected file-grounded workflows, audit trails, and shared workspace deployment. |

### Minimum onboarding inputs

- Company country and entity type.
- VAT registration status.
- Accounting system; Conta if applicable.
- Reporting period.
- Task type: bookkeeping, VAT, reconciliation, closing, or reporting support.
- Whether uploaded financial files are expected.
- Desired validation level.

### Wix page requirements

- Strong compliance framing.
- Clear disclaimer and human-review boundary.
- Explain validated vs assumption-based outputs.
- Avoid promising filing accuracy without source-data validation.

---

## Package card: Study Planner & Exam Coach

| Field | Value |
|---|---|
| Package ID | `PKG-STU-STUDY-PLANNER-EXAM-COACH` |
| Public name | Study Planner & Exam Coach |
| Segment | Student |
| Priority | Wave 1 anchor |
| Recommended route | `/packages/study-planner-exam-coach` |
| Primary delivery tier | Tier A |
| Primary buyer | Secondary, upper-secondary, college, and university students. |
| Core job-to-be-done | Convert exam pressure and fragmented material into a structured study plan with manageable execution steps. |
| Primary outcome | Reduced study friction, better revision planning, and clearer week-by-week preparation. |
| Included scope | Revision schedules; weekly study plans; exam countdown plans; study session design; prioritization; reflection prompts; progress review templates. |
| Explicit exclusions | No guaranteed grades; no hidden answer generation; no academic-integrity bypass. |
| Suggested CTA | Build study plan |
| Commercial note | Simple category explanation and broad demand. Good low-friction student entry product. |
| Managed Secure Mode relevance | Low priority; native package is sufficient for launch. |

### Minimum onboarding inputs

- Education level.
- Subjects.
- Exam or deadline dates.
- Current confidence level.
- Weekly availability.
- Study material type.
- Preferred study style.

### Wix page requirements

- Emphasize planning and habit support.
- Avoid outcome guarantees.
- Include ethical-use framing.
- Offer simple package comparison with student bundle potential.

---

## Package card: Personal Life Organizer

| Field | Value |
|---|---|
| Package ID | `PKG-CON-PERSONAL-LIFE-ORGANIZER` |
| Public name | Personal Life Organizer |
| Segment | Consumer |
| Priority | Wave 1 anchor |
| Recommended route | `/packages/personal-life-organizer` |
| Primary delivery tier | Tier A |
| Primary buyer | Adults managing busy schedules, household tasks, personal planning, and everyday decisions. |
| Core job-to-be-done | Turn daily disorder into workable plans, routines, and checklists so life administration becomes less cognitively expensive. |
| Primary outcome | Better everyday planning, simpler routines, clearer task sequencing, and reduced decision clutter. |
| Included scope | Weekly planning; task sequencing; household lists; event checklists; travel preparation; simple routines; decision-support prompts. |
| Explicit exclusions | No medical, psychological, financial, or legal advice; no autonomous account actions; no emergency support. |
| Suggested CTA | Organize my week |
| Commercial note | Broad consumer entry product. Must remain practical and avoid vague wellness positioning. |
| Managed Secure Mode relevance | Low priority; native package is sufficient for launch. |

### Minimum onboarding inputs

- Main life-administration pain point.
- Typical weekly responsibilities.
- Planning horizon.
- Preferred tone.
- Family/household context if relevant.
- Tools currently used.
- Sensitive-data level.

### Wix page requirements

- Position around practical daily organization.
- Use simple examples: weekly plan, packing list, household routine, event checklist.
- Add clear boundary against regulated advice.

---

## Cross-package validation rules

1. Each package must have a stable package ID before Wix CMS entry.
2. Each package must have a public route before page build.
3. Each package must specify delivery tier and limitations.
4. Any professional package must include stronger disclaimer and human-review language.
5. Managed Secure Mode must be described as future or optional unless Azure/secure runtime is actually implemented.
6. Any public claim must be evidence-backed or phrased as capability/scope, not guaranteed outcome.
7. Package names and slugs must not be renamed without change-control entry.

## Phase 0.5 completion gate

Phase 0.5 is functionally complete when:

- this package-card document is merged,
- CMS seed data is available,
- onboarding fields are defined,
- implementation register marks Wave 1 package definitions as validated,
- Phase 1 can start Wix page/CMS implementation without changing package identity or scope.
