# Atlas AI Robots Policy Reference

Status: Proposed for review
Date: 2026-06-08
Owner system: GitHub
Related issue: #4

## Purpose

This file records the intended robots and crawler-indexing policy for the Atlas AI public website. It is a governance reference for Wix configuration and must not be treated as live `robots.txt` evidence until validated on the active domain.

## Canonical domain

`https://www.atlas-ai.no`

## Public indexing principle

Allow indexing of public commercial, trust, pricing, resource, legal and low-risk onboarding pages when they have completed metadata, canonical, hreflang, claims and QA review.

## Blocked or noindex candidates

- Internal preview routes.
- Test pages.
- Duplicate query-parameter variants.
- Unreviewed CMS drafts.
- Protected artifacts.
- Any route intended for secure intake, customer-private content or Managed Secure delivery.

## Wix validation requirement

Before launch, verify:

- sitemap.xml is generated and submitted,
- no critical launch route is accidentally noindexed,
- canonical URLs point to `www.atlas-ai.no`,
- test-site and preview URLs are not treated as canonical,
- public pages do not expose secure or confidential content.

## Proposed robots.txt intent

```txt
User-agent: *
Allow: /

# Disallow internal/testing surfaces if exposed by route.
Disallow: /_functions/
Disallow: /_partials/
Disallow: /preview/
Disallow: /test/

Sitemap: https://www.atlas-ai.no/sitemap.xml
```

## Evidence rule

Final live robots policy must be validated on the active Wix domain and linked from the implementation register before production publication.
