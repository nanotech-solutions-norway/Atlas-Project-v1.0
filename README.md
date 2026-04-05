# Atlas Project v1.0

Governed repository pack for the Atlas ChatGPT-first launch in Wix Studio.

## Purpose

This repository pack implements the GitHub governance boundary defined in the Atlas website strategy and GitHub build strategy:
- Wix remains the public commercial shell and light state surface
- GitHub governs schemas, seed packs, routing logic, Velo code, module specs, QA assets, and future Azure placeholders
- The public launch is ChatGPT-first while preserving future seams for Gemini and Azure

## Repository structure

- `docs/` Architecture decisions, page map, interaction model, operating rules, and source review
- `schemas/` CMS field dictionary, publication policy, enums, and route contracts
- `cms-seeds/` CSV import packs for Wix CMS starter records
- `velo/` Velo source skeletons and deployment map
- `components/` Interaction-module specifications derived from SIW and MIW
- `qa/` Launch, regression, and governance validation packs
- `future-azure/` Placeholder contracts for later secure-mode activation
- `.github/workflows/` Validation workflow for governance artifacts

## Launch boundary

Public at launch:
- Home
- ChatGPT Solutions
- How It Works
- Atlas Knowledge
- Proof / Trust / Compliance
- Pricing / Packages
- FAQ
- Demo / Sandbox
- Contact / Onboarding

Prepared but not public:
- Gemini public lane
- Managed Secure Mode
- Azure-backed secure delivery
- Entitlement-aware workspaces
- Protected downloads

## Important operating rule

Do not use this repository as a substitute for Wix page composition.
Use it as the canonical source for structure, logic, seed data, and code-managed artifacts.

## Current GitHub connector limitation

The available connector in this workspace can create files only inside an existing repository.
It does **not** expose a repository-creation endpoint.
This pack is therefore delivered as a repo-ready file set for import into a manually created GitHub repository named:

`Atlas Project v1.0`

## Recommended initial branches

- `main` — approved source of truth
- `develop` — working branch for schema, code, and content-governance updates

## First commit recommendation

`Initial Atlas Project v1.0 governance pack: schemas, seeds, Velo skeletons, interaction model, QA, and future Azure placeholders`
