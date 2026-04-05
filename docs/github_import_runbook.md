# GitHub Import Runbook

This runbook is for creating and populating the GitHub repository manually when direct repo creation is not available inside the active connector.

## Target repository
- Owner: `nanotech-solutions-norway`
- Repository: `Atlas Project v1.0`
- Visibility: `private`
- Default branch: `main`
- Secondary branch: `develop`

## Recommended sequence
1. Create the empty repository in GitHub.
2. Download the repo pack and extract it locally.
3. Open a terminal in the extracted folder.
4. Ensure GitHub CLI is installed and authenticated.
5. Run one of the included scripts:
   - macOS / Linux: `scripts/create_github_repo.sh`
   - Windows PowerShell: `scripts/create_github_repo.ps1`
6. Confirm the initial tag exists:
   - `v1.0.0-governance-baseline`
7. Confirm the following folders exist in the remote repository:
   - `docs/`
   - `schemas/`
   - `cms-seeds/`
   - `velo/`
   - `components/`
   - `qa/`
   - `future-azure/`
8. Protect `main` manually in GitHub settings if desired.

## First checks after push
- Open `README.md`
- Open `docs/architecture_decisions.md`
- Open `schemas/atlas_cms_fields.json`
- Open `cms-seeds/platforms.csv`
- Open `velo/site_module_map.md`
- Confirm `.github/workflows/validate-governance.yml` is present
