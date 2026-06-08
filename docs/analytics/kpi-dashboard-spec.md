# Atlas AI KPI Dashboard Specification

Status: Proposed for review
Date: 2026-06-08
Owner system: GitHub
Related issue: #4

## Purpose

This specification defines the SEO/AEO/GEO and conversion KPI model for Atlas AI website governance. It is a GitHub-controlled planning artifact and does not confirm that analytics has been deployed in Wix.

## Primary KPI groups

| KPI group | Example metrics | Evidence source |
|---|---|---|
| SEO visibility | impressions, clicks, CTR, average position, indexed pages | Search Console / Bing Webmaster Tools |
| Technical SEO | indexability, canonical status, sitemap status, Core Web Vitals LCP/INP/CLS | Search Console, Lighthouse/PageSpeed, crawl checks |
| AEO readiness | answer blocks published, FAQ records reviewed, eligible FAQ schema count | `docs/seo/aeo-faq-register.yml`, schema evidence |
| GEO readiness | entity records approved, `llms.txt` status, source-grounded resource pages | `docs/seo/geo-entity-register.yml`, `llms.txt`, content evidence |
| Conversion | onboarding starts, form completions, architecture-review requests, package views | consent-aware analytics event taxonomy |
| Trust engagement | Trust Center views, provider disclosure views, trust-pack downloads | analytics event taxonomy and Wix evidence |
| Governance quality | claims approved, claims expired, broken links, metadata defects, hreflang defects | GitHub validation workflow and claims register |

## Segment reporting

Report by segment where lawful and consent-compliant:

- business_professional,
- student,
- consumer_private_user,
- managed_secure_candidate.

## Dashboard controls

- Do not include secrets, customer confidential material, full lead records or protected package logic.
- Use aggregated reporting for public website performance.
- Keep raw form submissions outside GitHub.
- Link evidence summaries in the implementation register rather than committing sensitive exports.

## Review cadence

- Weekly during launch build.
- Monthly for SEO/AEO/GEO operations after launch.
- Quarterly for claims, provider references, legal disclosures and content freshness.
