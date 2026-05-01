# Atlas Branch and Release Policy

Status: Active
Date: 2026-05-01
Phase: 0 - Architecture and Governance Baseline

## Purpose

This policy defines the minimum repository governance controls for Atlas before Phase 1 implementation continues.

## Branch model

| Branch | Role | Rule |
|---|---|---|
| `main` | Approved source of truth | Use pull requests for governed changes. |
| `develop` | Integration branch | Use for active build coordination before promotion to `main`. |
| `feature/*` | New implementation | Merge through pull request. |
| `content/*` | Copy, CMS seeds, page maps | Merge through pull request when public-facing. |
| `chore/*` | Governance, documentation, repo hygiene | Merge through pull request unless urgent. |
| `fix/*` | Defect correction | Merge through pull request. |
| `release/vX.Y.Z` | Release stabilization | Use only when a versioned release is being prepared. |

## Recommended repository ruleset for `main`

- Require pull request before merge.
- Require at least one review for production-impacting changes.
- Require status checks when validation workflows exist.
- Require branch to be current before merge once checks are stable.
- Disable force pushes to `main`.
- Disable deletion of `main`.
- Use signed commits only if this does not interfere with ChatGPT/GitHub connector operations.

## Merge policy

| Change type | Preferred merge method |
|---|---|
| Documentation-only | Squash merge preferred. |
| Small governance artifacts | Squash merge preferred. |
| Feature branches with meaningful commit history | Merge commit acceptable. |
| Hotfix | Squash or merge commit depending on traceability need. |

## Release versioning

Atlas releases use semantic versioning:

- `v0.x` = pre-production governance, shell, and prototype releases.
- `v1.0.0` = first production-ready Atlas public commercial shell and governed repository baseline.
- Patch releases = defect fixes and minor documentation corrections.
- Minor releases = new package, route, schema, or control-plane capability.
- Major releases = architecture or system-of-record change.

## Release checklist

Before tagging a release:

1. Confirm implementation register is current.
2. Confirm all public routes and package names match Wix/GitHub records.
3. Confirm no Azure capability is claimed unless deployed and validated.
4. Confirm DNS state is recorded.
5. Confirm all relevant QA checklists are completed.
6. Confirm changelog entry exists.
7. Confirm rollback notes exist for code-managed assets.

## Change-control trigger

A change-control entry is required for public route changes, CMS collection or field changes, schema changes, package identifier changes, control-plane route changes, future Azure handoff fields, security or access model changes, and any change that creates a customer-facing commitment.

## Phase 0 acceptance criteria

This policy completes the Phase 0 branch/release governance task when it is committed, reviewed, and referenced from the Phase 0 completion report.
