# Atlas Velo Site Module Map

## Global site layer

### `velo/site/state/store.js`
Lightweight state persistence for launch-safe fields only.

### `velo/site/routing/ctaRouter.js`
Resolves CTA labels and target paths from state plus route contracts.

## Page layer

### `velo/pages/home.js`
Wires outcome selector, proof strip context, and primary CTA switching.

### `velo/pages/chatgpt-solutions.js`
Wires package compare cards, fit-state transitions, and proof adjacency.

### `velo/pages/contact-onboarding.js`
Wires prefill behavior for onboarding and consultation flows.

## Backend layer

### `velo/backend/atlasHttp.jsw`
Provides safe backend helpers for:
- bounded demo routing
- CTA routing fallback
- state normalization
- future-safe API handoff placeholder

## Deployment notes

### `velo/deploy-notes/manual_deploy_steps.md`
Manual implementation guidance for Wix Studio / Velo.
