# Atlas Implementation Register

Status: Active implementation register
Date: 2026-05-02
Phase: 1 - Commercial Shell, GitHub Control Plane, and Gamma Alignment

## Purpose

This register is the cross-platform control document for Atlas implementation. It prevents drift between Wix, GitHub, Gamma, Domeneshop, and future Azure work.

## Register rules

- Every deployment-relevant task must have one owner system.
- Every item must have one current status.
- Unknown items must be marked as unknown, not assumed.
- Azure items remain planned until Phase 3 starts.
- Domeneshop is DNS-only unless a separate decision changes that scope.
- Product package names, package IDs, routes, and CMS seeds must not be renamed without change-control entry.
- Wix page/layout work must distinguish between API-validated data/form state and editor-validated visual/page state.

## Status values

| Status | Meaning |
|---|---|
| Planned | Approved direction, not started. |
| In progress | Work has started but is not validated. |
| Validated | Checked and accepted for current phase. |
| Blocked | Cannot progress without input, access, or decision. |
| Deferred | Intentionally moved to later phase. |
| Not started | No implementation has begun. |

## Register

| ID | Platform | Asset / workflow | Owner system | Phase | Status | Validation evidence | Next action |
|---|---|---|---|---|---|---|---|
| ATL-0001 | GitHub | Three-plane architecture ADR | GitHub | 0 | Validated | `docs/architecture/ADR-0001-atlas-three-plane-architecture.md`; PR #1 merged | Maintain as architecture baseline. |
| ATL-0002 | GitHub | Naming conventions | GitHub | 0 | Validated | `docs/governance/naming-conventions.md`; PR #1 merged | Enforce in Phase 1 artifacts. |
| ATL-0003 | GitHub | Branch and release policy | GitHub | 0 | Validated | `docs/governance/branch-and-release-policy.md`; PR #1 merged | Apply repository rules manually where connector cannot. |
| ATL-0004 | GitHub | Implementation register | GitHub | 0+ | Validated | This document | Maintain during every phase. |
| ATL-0005 | Wix | Atlas Project V1 commercial shell | Wix | 1 | In progress | Site inventory: published, Velo enabled, SEO/forms/invoices installed | Complete visual page/CMS/editor audit. |
| ATL-0006 | GitHub | Atlas control plane | GitHub | 1 | In progress | Control-plane files and commits exist | Confirm Pages workflow and custom-domain state. |
| ATL-0007 | Gamma | Atlas Project folder | Gamma | 1 | Blocked | `docs/gamma/phase-1-gamma-reference-register.md`; folder ID `2pc6vh0les2sgcf` | Add exact Gamma URLs or IDs before Phase 1 closure. |
| ATL-0008 | Azure | Secure control plane | Azure | 3 | Not started | User-confirmed not started | Create landing-zone ADR only when Phase 3 starts. |
| ATL-0009 | Domeneshop | DNS to GitHub | Domeneshop | 1 | In progress | User-confirmed DNS connection | Manually verify records and HTTPS. |
| ATL-0010 | Product | Wave 1 package definitions | GitHub / Wix | 0.5 | Validated | `docs/product/phase-0-5-wave-1-package-cards.md`; PR #2 merged | Use as source for Phase 1 Wix package pages. |
| ATL-0011 | Wix CMS seed | ProductPackages collection seed | GitHub / Wix | 1 | Validated | `docs/wix/phase-1-wix-cms-validation-evidence.md`; 5 records inserted, 0 failures | Bind `ProductPackages` to package pages. |
| ATL-0012 | Wix Forms / onboarding | Wave 1 onboarding field map | GitHub / Wix | 1 | Validated | `docs/wix/phase-1-wix-intake-form-evidence.md`; form ID `01dc5dc1-56d2-4ee6-8496-6700da326afb` | Place form on intake/onboarding page and link package CTAs. |
| ATL-0013 | GitHub | Phase 0.5 completion checklist | GitHub | 0.5 | Validated | `docs/governance/phase-0-5-completion-checklist.md`; PR #2 merged | Closed. |
| ATL-0014 | Wix | Wave 1 package page blueprint | Wix / GitHub | 1 | Validated | `docs/wix/phase-1-package-page-blueprint.md` | Implement/validate pages in Wix editor. |

## Required fields for future entries

New entries must include:

- unique ID,
- platform,
- asset or workflow,
- owner system,
- phase,
- status,
- validation evidence,
- next action.

## Review cadence

Review this register at the start and end of every phase. Do not close a phase unless all register entries for that phase are validated, deferred, or explicitly blocked.

## Phase 1 note

Phase 1 has started. The Wix CMS and form layers have been API-validated. Visual Wix page implementation, package-page binding, menu placement, exact Gamma deck registration, GitHub Pages/custom-domain verification, and Domeneshop DNS/HTTPS verification remain open before Phase 1 can fully close.
