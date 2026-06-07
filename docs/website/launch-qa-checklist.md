# Atlas AI Website Launch QA Checklist

Status: Proposed for review
Date: 2026-06-08
Owner system: GitHub
Related issue: #4

## Launch gate

Do not tag a website release or publish from Wix production until each applicable item is complete, evidence-backed or explicitly deferred with owner approval.

## Technical SEO

- [ ] Launch pages are indexable.
- [ ] Canonical URLs use `https://www.atlas-ai.no` unless a later approved domain decision changes this.
- [ ] Bokmål and English hreflang pairs are reciprocal.
- [ ] Sitemap and robots policy are reviewed.
- [ ] Metadata is unique for each launch route.
- [ ] Each page has one H1.
- [ ] Structured data is valid and aligned with visible page content.
- [ ] Core Web Vitals checks use LCP, INP and CLS.

## AEO/GEO

- [ ] Short answer blocks exist on priority pages.
- [ ] FAQ content is visible before FAQPage schema is used.
- [ ] GEO entity names match the entity register.
- [ ] Resource pages include owner, source basis and last-updated date where possible.
- [ ] Optional `llms.txt` content is reviewed as public-only and non-sensitive.

## Claims and legal

- [ ] Public claims are mapped to `docs/claims/claims-registry.yml`.
- [ ] Security/privacy/vendor/pricing claims have `approval_status=approved` before publication.
- [ ] Provider disclosure is linked from pricing, platform lanes and Trust Center.
- [ ] AI output disclaimer is linked from package pages and forms.
- [ ] Student pages include academic-integrity boundaries.
- [ ] Consumer pages avoid emotional-companion positioning and regulated-decision reliance.

## Forms and routing

- [ ] Public forms include no-confidential-upload warning.
- [ ] Forms do not request confidential, restricted, regulated or customer-sensitive files.
- [ ] Architecture-review path is available for secure-required cases.
- [ ] Confirmation copy is reviewed in Bokmål and English.
- [ ] Form event tracking is consent-aware.

## Evidence

- [ ] Desktop screenshots captured.
- [ ] Mobile screenshots captured.
- [ ] Metadata export or page-source evidence captured.
- [ ] Schema validation evidence captured.
- [ ] Form submission test captured.
- [ ] Analytics event test captured.
- [ ] Implementation register updated.

## Release decision

Release tag allowed only after this checklist is complete and linked in the implementation register.
