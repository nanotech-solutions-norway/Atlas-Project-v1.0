# ADR-0004: Atlas AI Website SEO/AEO/GEO Governance

Status: Proposed for review
Date: 2026-06-08
Phase: 1 - Commercial Shell, GitHub Control Plane, and Gamma Alignment
Issue: #4

## Context

Atlas AI is being implemented as a governed AI solution-layer company with Wix as the public commercial shell, GitHub as the governance and evidence source of truth, and Azure reserved for qualified secure delivery.

The SEO/AEO/GEO implementation must prevent drift between Wix page composition, CMS data, bilingual copy, structured data, package names, public claims, legal references, analytics events, and future secure-intake contracts.

## Decision

GitHub is the controlling governance plane for Atlas AI SEO, Answer Engine Optimization, and Generative Engine Optimization.

GitHub does not replace Wix as the public CMS and does not become the customer-facing runtime. Instead, GitHub records the approved route model, page inventory, CMS schema, metadata, hreflang pairs, FAQ/AEO content, GEO entity definitions, claims evidence, legal references, analytics taxonomy, secure handoff contract, QA evidence, and release decisions.

## Operating model

Publication follows this controlled path:

1. GitHub issue with route, locale, keyword, claim, risk and owner fields.
2. Branch update to relevant GitHub-controlled registers.
3. Automated validation for schema, metadata, hreflang, links, claims, forbidden terms and secrets.
4. Pull request review by content/governance owner.
5. Wix staging implementation from approved source records.
6. Evidence capture: screenshots, staged URLs, schema tests, metadata checks, mobile checks, form tests and analytics tests.
7. Release tag only after evidence is complete.
8. Wix production publication only after release checklist approval.

## Approved boundaries

| System | Role | Boundary |
|---|---|---|
| Wix | Public commercial website, CMS, forms, SEO presentation and public conversion | Not the secure system of record; no confidential/restricted upload through ordinary forms. |
| GitHub | Governance, registers, templates, validation, release evidence and future IaC source | No secrets, credentials, customer-confidential material or protected package logic. |
| Azure | Future secure intake and Managed Secure control plane | Deferred until commercially selected and evidence-gated. |
| Gamma | Design/reference input | Not operational CMS and not source of truth unless exact URLs/IDs are registered. |

## Domain rule

Use `atlas-ai.no` and `www.atlas-ai.no` as the active implementation domain references. Treat `atlas.ai` as a placeholder only unless a later approved domain decision changes the canonical domain.

## Content and naming controls

Atlas must be positioned as a governed AI solution-layer company. Public wording must not present Atlas AI as a custom-GPT storefront, proprietary foundation-model company, official OpenAI partner, or vendor-branded product reseller.

Approved public terminology:

- Atlas AI solution packages
- Atlas AI work models
- Governed AI assistants
- Managed Secure
- Trust Center
- Platform lanes

Blocked or review-required terminology:

- Atlas GPT
- ChatGPT Atlas
- official OpenAI partner
- guaranteed accuracy
- writes your assignments
- vendor-branded product names used as Atlas-owned package names

## Segment model

Business/professional buyers remain the primary commercial route. Students and consumers remain secondary controlled lanes with explicit safety guardrails.

| Segment | Status | Required guardrail |
|---|---|---|
| Business / professional | Primary | Claims, privacy, data-handling, licensing and human-review boundaries. |
| Student | Secondary controlled | Academic-integrity guardrails; no ghostwriting or assignment-submission framing. |
| Consumer / private user | Secondary controlled | No emotional-companion positioning; no medical/legal/financial decision reliance. |

## Validation requirements

Every public launch route must have:

- page-map entry,
- metadata entry,
- hreflang/canonical entry where localized,
- target keyword/intent entry,
- structured-data eligibility decision,
- linked claim references for public claims,
- legal/trust references where relevant,
- QA/evidence entry before release.

## Release rule

No website release tag may be created for SEO/AEO/GEO publication unless Wix staging evidence, schema validation, metadata review, mobile review, link check and form/analytics tests are recorded.

## Consequences

Positive:

- Reduces Wix/GitHub drift.
- Creates evidence-backed public claims.
- Supports bilingual SEO/AEO/GEO execution.
- Preserves future Azure secure-path readiness.

Trade-offs:

- Adds governance overhead before publication.
- Requires manual Wix staging evidence where connector access is incomplete.
- Requires remediation of earlier package names that conflict with updated vendor-brand naming rules.

## Acceptance criteria

ADR-0004 is accepted when:

- this decision record is merged,
- SEO/AEO/GEO registers exist,
- validation workflow exists,
- issue/PR templates exist,
- implementation register references this workstream,
- remaining Wix/Azure/DNS limitations are documented as follow-up rather than asserted complete.
