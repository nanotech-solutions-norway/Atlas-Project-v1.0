# Atlas AI Wix Page Build Checklist

Status: Proposed for review
Date: 2026-06-08
Owner system: GitHub
Related issue: #4

## Page-level checklist

For each Wix page or dynamic template:

- [ ] Route exists in `docs/website/page-map.yml`.
- [ ] Route exists in `docs/website/sitemap.yml`.
- [ ] Metadata exists in `docs/seo/metadata-register.yml`.
- [ ] Hreflang pair exists in `docs/seo/hreflang-register.yml` where bilingual.
- [ ] Target intent and keyword exist in `docs/seo/keyword-map.yml`.
- [ ] Internal links follow `docs/seo/internal-link-map.yml`.
- [ ] Public claims are either removed or mapped to approved claim references.
- [ ] Provider references follow `docs/legal/provider-disclosure.md`.
- [ ] AI limitations follow `docs/legal/ai-output-disclaimer.md`.
- [ ] Form routes include no-confidential-upload warning.
- [ ] Mobile layout is reviewed.
- [ ] Reduced-motion/accessibility controls are respected.
- [ ] Screenshots or preview URLs are added to the implementation register before publication.

## Dynamic CMS page checklist

- [ ] CMS field names match `docs/cms/schema.json`.
- [ ] Public/private classification is reviewed.
- [ ] No secret, credential, customer confidential data or protected package logic is exposed.
- [ ] Empty-state and unpublished-state behavior is reviewed.
- [ ] Dynamic title, meta description and Open Graph fields are configured.

## Package page checklist

- [ ] Package name follows updated Atlas AI naming policy and does not imply vendor ownership.
- [ ] Scope and exclusions are visible.
- [ ] Trust Center link is visible.
- [ ] Pricing/license policy link is visible.
- [ ] CTA routes to low-risk onboarding or architecture review as appropriate.
- [ ] Managed Secure is not described as active unless secure-path evidence exists.
