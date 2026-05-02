# Phase 1 Execution Plan

Status: Active draft
Date: 2026-05-02
Phase: 1 - Commercial Shell, GitHub Control Plane, and Gamma Alignment

## Objective

Complete the validated public/commercial Atlas launch layer without starting Azure. Phase 1 proves that Wix, GitHub Pages/control-plane, Gamma references, Domeneshop DNS, and Wave 1 product packaging are synchronized through governed artifacts.

## Current baseline

- Phase 0 has been merged into `main`.
- Atlas implementation register exists on `main`.
- Wix site found: `Atlas Project V1`.
- GitHub root launcher exists and redirects to `/control-plane/`.
- Control-plane interface exists in `control-plane/index.html`.
- Azure remains not started.
- Domeneshop remains DNS connected to GitHub only.

## Phase 1 workstreams

| Workstream | Owner system | Goal | Status |
|---|---|---|---|
| Wix commercial shell audit | Wix | Validate pages, CMS, forms, SEO, Velo, and launch readiness | In progress |
| GitHub Pages/control-plane validation | GitHub | Confirm Pages source, workflow, route, and control-plane readiness | In progress |
| Gamma reference mapping | Gamma / GitHub | Register exact Gamma source URLs or IDs and map to Wix pages | In progress |
| DNS / Domeneshop validation | Domeneshop / GitHub | Confirm DNS records, custom domain, HTTPS, and canonical route | In progress |
| Wave 1 package readiness | Wix / GitHub | Convert Wave 1 product portfolio into page/CMS-ready package definitions | Planned |

## Recommended execution order

1. Validate GitHub Pages/control-plane structure.
2. Audit the Wix site shell and record page/CMS/form/SEO gaps.
3. Register Gamma source-of-truth URLs.
4. Validate Domeneshop DNS and GitHub custom-domain alignment.
5. Convert Wave 1 products into package cards and CMS fields.
6. Update the implementation register with validated evidence.
7. Open Phase 1 closure PR when evidence is complete.

## Phase 1 definition of done

Phase 1 is complete only when:

- Wix page tree and CMS structure are validated or gaps are explicitly logged.
- GitHub Pages/control-plane route is validated or remediation is documented.
- Gamma references are mapped to Wix pages or marked unavailable.
- Domeneshop DNS and HTTPS state are recorded.
- Wave 1 package definitions exist as governed artifacts.
- Implementation register is current.

## Out of scope

- Azure buildout.
- Managed Secure Mode implementation.
- Customer workspace creation.
- Secure artifact delivery.
- Final public live-site QA if deliberately excluded by instruction.
