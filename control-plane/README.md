# Atlas Control Plane

Static GitHub Pages-ready interface for multi-site monitoring, SEO operations, traffic review, and ChatGPT-led orchestration.

## What this module does

This module adds a browser-based control plane inside the Atlas repository for:

- portfolio-level overview across multiple owned websites
- per-site monitoring for traffic, SEO, technical health, and release cadence
- a connector matrix for operational dependencies
- a prompt studio that prepares a structured orchestration brief for ChatGPT
- a website sandbox iframe for quick visual reference
- local activity logging in the browser

## Important architecture rule

The public ChatGPT product should **not** be treated as an embeddable website iframe inside this interface.

Instead, this control plane uses a practical operating model:

1. The GitHub-hosted interface stores site context, KPIs, issues, and task intent.
2. The Prompt Studio compiles the active website context into a structured orchestration prompt.
3. The user opens ChatGPT in a separate tab and uses connected apps such as GitHub, Google Drive, Gmail, Calendar, or other supported tools.
4. ChatGPT performs the repo-side or document-side work through its connected apps, while the control plane remains the operational dashboard and launch surface.

## Folder structure

- `control-plane/index.html` — main UI
- `control-plane/styles.css` — styling layer
- `control-plane/app.js` — interaction logic and prompt builder
- `control-plane/data/sites.example.json` — example portfolio configuration

## Configuration model

Each website record can include:

- website name
- live URL
- repository name
- platform
- status
- KPI bundle
- traffic trend
- organic trend
- top queries
- issue queue
- connector availability

## Current operating mode

This is a front-end starter implementation.

It does **not** directly call GA4, Search Console, Clarity, PageSpeed, GitHub, or Google Drive APIs from the browser.
Instead, it provides the UX layer, state model, and orchestration workflow needed to evolve into:

- a static GitHub Pages dashboard with manually refreshed data files, or
- a hybrid app with scheduled data ingestion and backend workers

## Recommended next integration phases

### Phase 1

- replace example JSON with real site inventory
- add real KPI snapshots exported into `control-plane/data/`
- enable GitHub Pages for the repository
- use the Prompt Studio to launch GitHub/Drive-assisted work in ChatGPT

### Phase 2

- add a scheduled data pipeline for GA4, Search Console, and PageSpeed
- store snapshots in JSON or a lightweight backend store
- add issue annotations and release notes
- wire alert thresholds to email or Slack

### Phase 3

- introduce a secure orchestration service or MCP layer for tool routing
- support governed execution records and richer audit logging
- add role-based access and site-specific permissions

## Deployment note

A root `index.html` and `.nojekyll` file are included so the repository can act as a direct static site source when GitHub Pages is enabled.

## Suggested data sources for the next iteration

- GA4 for traffic, engagement, events, and conversion views
- Google Search Console for search performance and indexing state
- PageSpeed Insights for technical performance snapshots
- Microsoft Clarity or similar tools for behavior diagnostics
- GitHub for code and deployment governance
- Google Drive for document packs, logs, and working files
