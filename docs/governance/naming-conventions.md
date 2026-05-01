# Atlas Naming Conventions

Status: Active
Date: 2026-05-01
Phase: 0 - Architecture and Governance Baseline

## Purpose

This document locks naming conventions for Atlas assets so Wix, Gamma, GitHub, Domeneshop, and future Azure work can be tracked consistently.

## General rules

- Use stable names before implementation starts.
- Do not rename public routes, CMS collections, schemas, or GitHub paths without a change-control entry.
- Prefer descriptive names over abbreviations unless the abbreviation is already established in Atlas.
- Every deployment-relevant item must appear in the implementation register.

## Repository paths

| Asset type | Convention | Example |
|---|---|---|
| Architecture decisions | `docs/architecture/ADR-####-short-topic.md` | `ADR-0001-atlas-three-plane-architecture.md` |
| Governance docs | `docs/governance/topic.md` | `branch-and-release-policy.md` |
| Implementation register | `docs/implementation/implementation-register.md` | `implementation-register.md` |
| Wix notes | `docs/wix/topic.md` | `wix-page-map.md` |
| Gamma notes | `docs/gamma/topic.md` | `gamma-reference-register.md` |
| Azure placeholders | `future-azure/domain/artifact.md` | `future-azure/handoff/intake-contract.md` |
| QA checklists | `qa/phase/checklist.md` | `qa/phase-1/wix-shell-validation.md` |

## Branch naming

| Branch type | Pattern | Use |
|---|---|---|
| Feature | `feature/short-topic` | New functionality. |
| Chore | `chore/short-topic` | Governance, documentation, repo hygiene. |
| Fix | `fix/short-topic` | Defect correction. |
| Content | `content/short-topic` | Commercial copy and CMS seed updates. |
| Release | `release/vX.Y.Z` | Release stabilization. |

## Commit message convention

Use clear imperative messages, for example:

- `Add Phase 0 architecture decision record`
- `Update Wix page map for Wave 1 packages`
- `Validate CMS seed schema`

## Wix naming

| Object | Convention | Example |
|---|---|---|
| Pages | Title Case display, kebab-case route | `ChatGPT Solutions` / `/chatgpt-solutions` |
| Sections | order-prefixed kebab-case | `01-hero`, `02-proof-bar`, `03-packages` |
| CMS collections | PascalCase plural nouns | `PlatformLanes`, `ProductPackages` |
| CMS fields | camelCase | `packageName`, `deliveryMode` |
| Velo element IDs | camelCase with role suffix | `submitBtn`, `emailInput` |

## Gamma naming

| Object | Convention | Example |
|---|---|---|
| Deck title | `Atlas - Page or Flow - Version` | `Atlas - Homepage - v0.1` |
| Reference ID | `GAM-###` | `GAM-001` |
| Section mapping | Match Wix section slug where possible | `01-hero` |

## Future Azure naming placeholder

Azure is not started. Azure names remain placeholders until Phase 3 creates a landing-zone decision record.

Suggested placeholder structure:

- resource group: `rg-atlas-env-region`
- service name: `atlas-service-env`
- environments: `dev`, `stg`, `prod`

## Rename control

A rename requires change-control entry if it affects a public URL, CMS collection, CMS field, schema path, package identifier, GitHub Pages route, future Azure contract, or onboarding form field.

## Acceptance criteria

This convention is active when new files follow the documented paths and Wix, Gamma, GitHub, Domeneshop, and future Azure items can be matched through the implementation register.
