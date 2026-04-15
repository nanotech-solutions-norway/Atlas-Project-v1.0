# Atlas Control Plane Architecture

## Objective
Build a GitHub-governed web interface for monitoring, analyzing, and operating multiple websites with ChatGPT acting as the orchestration layer for review, change planning, controlled repository actions, and deployment logging.

## Core design principle
ChatGPT should be treated as a governed orchestrator, not as an unrestricted embedded editing surface. The interface may present a sandbox panel or embedded workspace region, but production write operations must route through approved connectors, API tools, permission checks, and repository governance controls.

## Recommended operating model
1. User selects a managed website.
2. User enters a natural-language instruction.
3. Orchestration layer translates the instruction into structured actions.
4. Tool adapters inspect repository state, analytics inputs, and supporting documents.
5. Platform returns an execution plan, diff preview, and deployment/logging impact.
6. User approves or rejects.
7. Approved actions create a branch, commit, and pull request.
8. Deployment logs and supporting artifacts are stored in the designated system of record.

## Control-plane modules
- Portfolio dashboard
- Website workspace
- SEO and traffic diagnostics
- Repository status and deployment history
- Prompt console
- Approval center
- Changelog and rollback references

## Connector targets
- GitHub for repository access, pull requests, approvals, releases, and workflows
- Google Drive for source files, reports, deployment logs, and archives
- Search Console for query, page, indexing, and sitemap data
- GA4 for traffic, engagement, and conversion data
- Optional behavior tooling such as Clarity or equivalent

## Governance requirements
- Protected main branch
- Feature branches per task
- Pull-request gate before merge
- Explicit deploy gate for production
- Full logging for AI-initiated actions
- Least-privilege connector permissions

## UI note on ChatGPT integration
The interface can include a sandboxed orchestrator panel for user interaction and context handoff. However, the actual implementation should use an OpenAI API/App/MCP-backed orchestration service rather than relying on a direct third-party chat iframe as the production control mechanism.

## Initial repository deliverables
- `control-platform/index.html`
- `control-platform/styles.css`
- `control-platform/app.js`
- `docs/atlas-control-plane-architecture.md`

## Phase 1 output
Phase 1 is a static GitHub-hostable control-plane scaffold with:
- Portfolio dashboard
- Site selector
- KPI cards
- Prompt console
- Orchestrator sandbox region
- Suggested actions
- Approval queue placeholders
- Activity log placeholder

## Phase 2 output
Phase 2 should add:
- API backend
- GitHub write workflows
- Analytics aggregation
- Search diagnostics
- Drive integration
- Role-based access
- PR and deployment automation
