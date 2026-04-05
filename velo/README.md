# Atlas Velo Layer

This folder contains the Wix-side execution skeleton for the Atlas ChatGPT-first website.

## Purpose

The Velo layer is responsible for:
- maintaining lightweight cross-page state
- resolving CTA routing from governed route contracts
- prefilling onboarding and contact flows
- exposing safe backend endpoints for bounded demo and routing
- keeping Wix as the commercial shell rather than the secure runtime

## Important boundary

Do not treat this layer as the long-term secure control plane.
Sensitive delivery logic, entitlement controls, protected downloads, and secure managed-mode runtime assumptions belong to the future external secure layer, not to Wix page code.

## Current launch scope

Included in this repository:
- lightweight state store
- CTA router
- page wiring skeletons for Home, ChatGPT Solutions, and Contact / Onboarding
- backend HTTP skeleton
- manual deployment notes

Deferred:
- secure runtime integration
- entitlement-aware protected downloads
- tenant-aware managed workspaces
- full AI assistant orchestration
