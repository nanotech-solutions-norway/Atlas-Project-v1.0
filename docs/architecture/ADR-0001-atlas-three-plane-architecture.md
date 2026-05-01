# ADR-0001: Atlas Three-Plane Architecture

Status: Accepted
Date: 2026-05-01
Phase: 0 - Architecture and Governance Baseline

## Context

Atlas is a multi-surface AI enablement business. It requires a public commercial layer, a future secure runtime/control layer, and an engineering governance layer. The operating model must support native ChatGPT-first packages, later Copilot/Gemini lanes, deployment services, and managed secure mode without forcing all concerns into one platform.

The project strategy rejects a single-platform build because:

- Wix alone is strong for public commercial presentation, CMS, SEO, and intake, but is not the secure system of record for protected delivery.
- GitHub Pages alone is suitable for static documentation/control-plane prototypes, but not the primary commercial CMS or secure runtime.
- Azure-only from day one would overbuild the backend before the market-facing offer structure and intake flows are stable.

## Decision

Atlas will use a three-plane architecture:

| Plane | Primary system | Responsibility | Phase 0 boundary |
|---|---|---|---|
| Commercial / content plane | Wix Studio | Public website, CMS, package pages, SEO, proof/trust pages, lead capture, onboarding shell, light portal shell | Wix is the public commercial shell, not the secure system of record. |
| Secure execution / control plane | Azure | Identity, entitlements, secure APIs, runtime orchestration, controlled artifact delivery, logs, audit, tenant/workspace state | Not started in Phase 0; architecture seam reserved. |
| Engineering / governance plane | GitHub | Source control, schemas, code-managed artifacts, CI/CD, documentation, QA, release control, rollback | Active governance source of truth. |

Supporting systems:

- Gamma is a design/source-reference layer, not the operational CMS.
- Domeneshop is DNS only unless a specific backend-hosting requirement is approved later.
- ChatGPT-native packages remain the first commercial lane; secure managed delivery is a later controlled-runtime lane.

## Non-goals

- Do not put sensitive runtime logic, secrets, entitlement rules, or protected artifact delivery into Wix.
- Do not use GitHub Pages as the primary Atlas business website.
- Do not start Azure implementation until the first managed-secure use case or protected delivery workflow is commercially selected.
- Do not treat Gamma boards as deployment source of truth unless their URLs are registered in the implementation register.

## Consequences

Positive consequences:

- Clear platform separation reduces rework.
- Wix can move quickly without compromising future secure delivery.
- GitHub becomes the controlled source for schemas, governance, release rules, and code-managed artifacts.
- Azure can be introduced only when needed, with a defined handoff contract.

Trade-offs:

- Atlas must maintain a cross-platform implementation register.
- Wix/Gamma/GitHub drift must be actively controlled.
- Secure delivery cannot be claimed as implemented until Azure or equivalent backend controls exist.

## Architecture acceptance criteria

Phase 0 architecture is accepted when:

- This ADR exists in GitHub.
- Platform responsibilities are documented and not contradicted by implementation work.
- The implementation register links Wix, GitHub, Gamma, Domeneshop, and future Azure objects.
- Branch/release governance exists before further feature expansion.
- Azure is explicitly marked as not started until a backend implementation is approved.

## Operating rule

All future Atlas tasks must map to one primary plane and one system of record. If a task spans planes, the implementation register must identify the owner system, dependent systems, validation evidence, and next gate.
