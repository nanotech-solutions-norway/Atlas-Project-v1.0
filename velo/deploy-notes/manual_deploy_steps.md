# Atlas Velo Manual Deploy Steps

## 1. Enable Velo
- Open the Atlas Wix site in Wix Studio
- Enable Dev Mode / Velo
- Confirm page code and backend folders are available

## 2. Create matching page elements

### Home
- `#ctaPrimary`
- `#segmentDropdown`

### ChatGPT Solutions
- `#solutionsCta`
- `#packageIntentDropdown`

### Contact / Onboarding
- `#segmentField`
- `#intentField`
- `#platformField`

## 3. Add site code files
- Place `velo/site/state/store.js`
- Place `velo/site/routing/ctaRouter.js`
- Place page files into matching page code locations
- Place `velo/backend/atlasHttp.jsw` in backend

## 4. Wire CMS and routing
- Import the seed CSVs
- Keep only ChatGPT records published
- Keep Gemini and Managed Secure Mode unpublished
- Use CTA configs and route contracts as the source of truth

## 5. Test launch-safe flows
- Home selector changes CTA label
- Solutions page switches CTA based on package intent
- Contact / Onboarding prefill carries light state only
- No secure-runtime promises appear in public flows

## 6. Future cleanup
- Replace the truncated `schemas/atlas_cms_fields.json` with the repaired schema content during the next direct-edit pass in GitHub or local clone workflow
