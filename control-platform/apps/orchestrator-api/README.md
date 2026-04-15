# Orchestrator API Starter

This service will act as the governed execution layer between the Atlas control interface and connected services.

## Responsibilities

- Receive scoped AI tasks
- Read and prepare repository context
- Route allowed tool actions
- Prepare drafts, patches, and PR payloads
- Generate deployment log payloads
- Archive approved artifacts

## Initial endpoints

- `POST /api/ai/plan`
- `POST /api/ai/analyze`
- `POST /api/ai/pr-draft`
- `GET /api/sites`
- `GET /api/sites/:siteId`
