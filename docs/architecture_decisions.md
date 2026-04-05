# Architecture Decisions — Atlas Project v1.0

## AD-001 — Wix is the commercial shell
Wix Studio owns public pages, CMS-managed content, navigation, forms, and light workflow state.
It is not the secure runtime, entitlement plane, or long-term system of record for sensitive delivery logic.

## AD-002 — GitHub governs structure and logic artifacts
GitHub owns code-managed artifacts that should not drift inside the editor:
- CMS schemas and field dictionary
- seed packs
- Velo source
- routing rules and CTA logic
- module contracts
- QA and governance packs
- future Azure placeholders

## AD-003 — Public launch is ChatGPT-first
The public site should sell ChatGPT solutions first.
Gemini and Azure-related structures remain prepared in data and repository architecture but are not public dependencies at launch.

## AD-004 — Platform and deployment mode stay first-class in the model
Even though only ChatGPT is published at launch, `platform` and `deploymentMode` remain first-class entities in schemas and route rules.
This prevents expensive rebuilds later.

## AD-005 — Use a lightweight interaction model derived from SIW and MIW
Atlas should borrow the SIW/MIW pattern:
Orient → Explain → Fit → Prove → Act
This is implemented through a persistent context rail, bounded selector, proof adjacency, and context-aware CTA routing.

## AD-006 — Do not expose public flows that depend on unbuilt secure runtime features
No public claims, navigation paths, or download promises should imply that protected secure runtime functionality is active before it exists.
