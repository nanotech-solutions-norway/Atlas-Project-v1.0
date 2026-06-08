# Atlas AI Quarterly Claim Review

Status: Proposed for review
Date: 2026-06-08
Owner system: GitHub
Related issue: #4

## Purpose

This document defines the quarterly review process for public Atlas AI claims across website pages, CMS records, Trust Center, pricing, provider references, platform lanes, resources, onboarding forms and Managed Secure wording.

## Review scope

Review each quarter:

- provider references and platform-lane wording,
- privacy and data-handling statements,
- pricing and vendor-license policy,
- Managed Secure evidence status,
- student academic-integrity statements,
- consumer safety boundaries,
- AI output disclaimers,
- public performance or productivity statements,
- screenshots/evidence linked from the implementation register.

## Required claim states

| State | Meaning |
|---|---|
| draft | Not approved for public use. |
| pending_review | Requires content/legal/security/commercial review. |
| approved | May be used publicly while review date remains current. |
| rejected | Must not be used publicly. |
| expired | Previously approved but needs revalidation. |

## Quarterly checklist

- [ ] Export or review current Wix public copy.
- [ ] Compare public claims against `docs/claims/claims-registry.yml`.
- [ ] Confirm evidence references are still valid.
- [ ] Confirm provider/license/pricing references remain current.
- [ ] Confirm Managed Secure is not overclaimed.
- [ ] Confirm student/consumer pages still follow guardrails.
- [ ] Update `review_date` and `approval_status`.
- [ ] Add evidence notes to `docs/claims/evidence-index.yml`.
- [ ] Record release or remediation action in implementation register.

## Escalation rule

Any unsupported security, privacy, vendor, pricing, performance, legal or Managed Secure claim must be removed from public copy or marked `public_allowed: false` until approved evidence exists.
