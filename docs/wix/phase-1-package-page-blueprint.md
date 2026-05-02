# Phase 1 Package Page Blueprint

Status: Ready for Wix editor implementation
Timestamp: 13:45, 02.05.2026 Europe/Oslo
Owner system: Wix / GitHub
Target site: Atlas Project V1
Wix site ID: `bb5ac407-bcbb-451f-a2ad-65459e47b8d4`

## Objective

Define the page structure, CMS bindings, CTA behavior, and validation controls for the Atlas Wave 1 package pages.

## Source collections and form

| Object | Wix ID / name | Status |
|---|---|---|
| CMS collection | `ProductPackages` | Existing and populated with 5 Wave 1 records |
| Master intake form | `Atlas Wave 1 Package Intake` | Created |
| Form ID | `01dc5dc1-56d2-4ee6-8496-6700da326afb` | Validated |

## Required pages

| Page | Route | Type | CMS dependency |
|---|---|---|---|
| Packages overview | `/packages` | Static or dynamic listing | `ProductPackages` |
| Executive Work Copilot | `/packages/executive-work-copilot` | Dynamic detail page | `ProductPackages.slug = executive-work-copilot` |
| Commercial Growth Copilot | `/packages/commercial-growth-copilot` | Dynamic detail page | `ProductPackages.slug = commercial-growth-copilot` |
| Accounting & Bookkeeping Expert | `/packages/accounting-bookkeeping-expert` | Dynamic detail page | `ProductPackages.slug = accounting-bookkeeping-expert` |
| Study Planner & Exam Coach | `/packages/study-planner-exam-coach` | Dynamic detail page | `ProductPackages.slug = study-planner-exam-coach` |
| Personal Life Organizer | `/packages/personal-life-organizer` | Dynamic detail page | `ProductPackages.slug = personal-life-organizer` |
| Intake / onboarding | `/intake` or `/onboarding` | Static form page | `Atlas Wave 1 Package Intake` |

## Dynamic package page sections

### `01-hero`

Purpose: immediate package positioning.

CMS bindings:

| Element | CMS field |
|---|---|
| H1 | `packageName` |
| Segment badge | `segment` |
| Wave badge | `wave` |
| Delivery tier badge | `deliveryTier` |
| Primary CTA | `ctaPrimary` |
| CTA link | Master intake form page, prefilled manually or through package context if available |

Acceptance criteria:

- H1 is visible above fold.
- Delivery tier is visible without scrolling on desktop.
- CTA is present and links to intake path.

### `02-job-to-be-done`

Purpose: explain the buyer's core job.

CMS bindings:

| Element | CMS field |
|---|---|
| Body text | `jtbd` |
| Buyer text | `primaryBuyer` |
| Outcome text | `primaryOutcome` |

Acceptance criteria:

- JTBD is written as concrete business/student/consumer progress, not generic AI language.
- Primary buyer and primary outcome are visible.

### `03-included-scope`

Purpose: list what is included.

CMS bindings:

| Element | CMS field |
|---|---|
| Repeater/list | `includedScope` |

Acceptance criteria:

- All included scope items render as separate bullets/cards.
- No scope item is merged into body copy where it becomes hard to scan.

### `04-boundaries-and-exclusions`

Purpose: reduce risk, overpromising, and compliance ambiguity.

CMS bindings:

| Element | CMS field |
|---|---|
| Repeater/list | `exclusions` |
| Future-state note | `managedSecureModeRelevance` |

Acceptance criteria:

- Exclusions are clearly visible.
- Accounting package includes human-review/compliance tone.
- Study package includes academic-integrity tone.
- Consumer package excludes regulated advice.
- Managed Secure Mode is not described as live.

### `05-delivery-path`

Purpose: explain how the user proceeds.

Static content:

1. Select package.
2. Submit intake form.
3. Receive setup guidance or next-step review.
4. Use native package or guided setup.
5. Managed Secure Mode considered only for future/high-sensitivity cases.

Acceptance criteria:

- The user understands the difference between native package and guided setup.
- High-sensitivity cases are routed to human review.

### `06-faq`

Purpose: resolve purchase friction.

Minimum FAQs:

1. What do I receive?
2. Is this a custom GPT or a managed service?
3. Can I use this with sensitive data?
4. Can Atlas configure it for my organization?
5. What is Managed Secure Mode?
6. What is not included?

Acceptance criteria:

- FAQ does not imply Azure or Managed Secure Mode is already active.
- Professional/regulatory packages include review boundary.

### `07-final-cta`

Purpose: conversion.

CMS bindings:

| Element | CMS field |
|---|---|
| CTA label | `ctaPrimary` |
| CTA link | Intake form page or embedded form section |

Acceptance criteria:

- CTA repeats near bottom of page.
- CTA path is identical to hero CTA.

## Packages overview page sections

### `01-hero`

Headline:

```text
Atlas AI Work Models
```

Subhead:

```text
Pre-defined AI operating models for business, study, and everyday execution — structured for faster onboarding and clearer outcomes.
```

Primary CTA:

```text
View Wave 1 packages
```

### `02-package-grid`

CMS binding:

- Repeater connected to `ProductPackages`.
- Sort by `segment`, then `packageName`.
- Card fields: `packageName`, `segment`, `jtbd`, `deliveryTier`, `ctaPrimary`.
- Card route: `route`.

### `03-delivery-tiers`

Static explanation:

| Tier | Meaning |
|---|---|
| Tier A | Native self-serve package |
| Tier B | Native package plus guided onboarding/support |
| Tier C | Managed Secure Mode, future-state only until secure runtime is deployed |

### `04-risk-boundaries`

Static warning:

```text
Atlas packages are designed for structured AI assistance. Regulated, high-sensitivity, legal, accounting, medical, financial, or confidential business workflows require appropriate human review and secure handling.
```

### `05-final-cta`

CTA:

```text
Submit package intake
```

## Intake page requirements

Page route: `/intake` or `/onboarding`.

Required content above form:

```text
Tell us which Atlas package you are interested in and what you want it to help you accomplish. Do not include sensitive personal, legal, accounting, financial, health, or confidential business data in this public intake form. High-sensitivity cases will be routed to a guided review path.
```

Embed/place form:

- Form name: `Atlas Wave 1 Package Intake`
- Form ID: `01dc5dc1-56d2-4ee6-8496-6700da326afb`

## SEO baseline

| Page type | SEO title pattern | Meta description pattern |
|---|---|---|
| Overview | `Atlas AI Work Models | Business, Study and Consumer Packages` | `Explore Atlas Wave 1 AI work models for professional output, commercial growth, accounting support, exam planning and everyday organization.` |
| Package detail | `{packageName} | Atlas AI Work Model` | `{primaryOutcome}` |

## Validation checklist

- [ ] Package overview page exists.
- [ ] Dynamic or equivalent detail pages exist for all 5 Wave 1 packages.
- [ ] `ProductPackages` data renders correctly.
- [ ] CTA links to the master intake form/page.
- [ ] Intake page contains privacy/sensitivity warning.
- [ ] Mobile layout stacks correctly.
- [ ] No page claims Managed Secure Mode is active.
- [ ] SEO title and meta description are set.
- [ ] Routes match the implementation register.

## Known implementation limitation

The current connector execution validated CMS and Forms through Wix APIs. Visual page creation, menu placement, and dynamic page binding may require Wix editor actions if the available connector does not expose page layout operations for existing sites.
