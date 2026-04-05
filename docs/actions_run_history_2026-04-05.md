# Atlas Actions Run History — 2026-04-05

This note summarizes the known GitHub Actions validation progression for Atlas Project v1.0.

## Commit and validation overview

1. `a5330096fea9eae8a047899a5ae5deb786ebbc32` — Initial commit
   - Repository initialized.

2. `6e571cc74c919477a5b584567f4ad13a477bf76f` — Initialize Atlas Project v1.0 governance baseline
   - First large baseline import.
   - Repo became materially usable, but one schema landed truncated and validator scripts were not present yet.

3. `10c54d63ce4c1c9e08ccbbaae630ba6af7f152b9` — Add repaired Atlas CMS schema copy
   - Added repaired copy because the original `atlas_cms_fields.json` landed truncated.

4. `d81030176fadbf7f5731cab64d8425622917d9f5` — Add interaction module contract
   - Added missing interaction schema.

5. `2083e1d15cfd70aeeca5c1f3ca6f02f0de967241` — Add platform and deployment enums
   - Validation run failed at this stage because validator scripts were still missing.

6. `c10ad8d8196e2267958d5f9985e78a0b03d76258` — Add published record policy
   - Added missing publication policy structure.

7. `caef879a20e08af901e6d335fb473c7c4850ec18` — Add route contracts
   - Added missing routing contract structure.

8. `12e597b515025631e9861e11a057c9f29d551365` — Add missing schema validator script
   - Resolved the first workflow blocker (`scripts/validate-schemas.mjs`).
   - Validation still required the CSV validator script.

9. `75dd04868f18b973eade6e896fd838fdb07e5f7b` — Add missing CSV validator script
   - Resolved the second workflow blocker (`scripts/validate-csv.mjs`).
   - User confirmed the latest validation job for this stage completed successfully.

## Current interpretation

- Earlier failed workflow runs are superseded by the repaired repository state.
- The root-cause blockers were the missing validator scripts, not the Node.js 20 deprecation warning.
- The Node.js 20 message is a warning and does not by itself explain the earlier exit-code failure.

## Remaining technical note

- `schemas/atlas_cms_fields.json` still exists in truncated form from the earlier bulk import.
- `schemas/atlas_cms_fields.repaired.json` is the current canonical schema copy.
- Future cleanup should replace the truncated original path with the repaired content when the GitHub connector supports in-place overwrite or when it is edited directly in GitHub.

## Purpose of this file

This file records the recovery path and also creates a fresh push event so the repository can be validated again on the repaired current state.
