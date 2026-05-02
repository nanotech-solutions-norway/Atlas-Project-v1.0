# Atlas Implementation Register

Status: Active implementation register
Date: 2026-05-02
Phase: 0.5 - Product Portfolio and Commercial Packaging

## Purpose

This register is the cross-platform control document for Atlas implementation. It prevents drift between Wix, GitHub, Gamma, Domeneshop, and future Azure work.

## Register rules

- Every deployment-relevant task must have one owner system.
- Every item must have one current status.
- Unknown items must be marked as unknown, not assumed.
- Azure items remain planned until Phase 3 starts.
- Domeneshop is DNS-only unless a separate decision changes that scope.
- Product package names, package IDs, routes, and CMS seeds must not be renamed without change-control entry.

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
| ATL-0005 | Wix | Atlas Project V1 commercial shell | Wix | 1 | In progress | Connector-visible site metadata only | Manual page/CMS/editor audit. |
| ATL-0006 | GitHub | Atlas control plane | GitHub | 1 | In progress | Control-plane files and commits exist | Confirm Pages workflow and custom-domain state. |
| ATL-0007 | Gamma | Atlas Project folder | Gamma | 1 | In progress | Folder confirmed; deck inventory not listed | Add exact Gamma URLs or IDs. |
| ATL-0008 | Azure | Secure control plane | Azure | 3 | Not started | User-confirmed not started | Create landing-zone ADR only when Phase 3 starts. |
| ATL-0009 | Domeneshop | DNS to GitHub | Domeneshop | 1 | In progress | User-confirmed DNS connection | Manually verify records and HTTPS. |
| ATL-0010 | Product | Wave 1 package definitions | GitHub / Wix | 0.5 | Validated | `docs/product/phase-0-5-wave-1-package-cards.md` | Use as source for Phase 1 Wix package pages. |
| ATL-0011 | Wix CMS seed | ProductPackages collection seed | GitHub / Wix | 0.5 | Validated | `cms-seeds/product-packages.wave-1.json` | Import or recreate in Wix CMS during Phase 1. |
| ATL-0012 | Wix Forms / onboarding | Wave 1 onboarding field map | GitHub / Wix | 0.5 | Validated | `docs/product/phase-0-5-onboarding-fields.md` | Build package intake forms during Phase 1. |
| ATL-0013 | GitHub | Phase 0.5 completion checklist | GitHub | 0.5 | Validated | `docs/governance/phase-0-5-completion-checklist.md` | Review and merge Phase 0.5 PR, then close Phase 0.5. |

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

## Phase 0.5 note

Phase 0.5 defines package identity and onboarding structure only. It does not modify Wix, publish package pages, activate Azure, or verify live public status.
