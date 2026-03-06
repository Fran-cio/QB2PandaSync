# Script Flow (GitHub Actions or Local)

## End-to-End Flow
1. Load previous sync state from `state/synced-invoices.json`.
2. Read invoice list from source (current mode: `data/mock-invoices.json`).
3. For each invoice:
   - Validate required fields
   - Skip if already synced (idempotency)
   - Create PandaDoc payment document (mock in current mode)
4. Save updated state file.
5. Write run report to `reports/latest-sync-report.json`.
6. Print summary (`processed`, `sent`, `failed`, `duplicates`).

## GitHub Actions Execution
- Trigger manually from **Actions → Run Invoice Sync Now**
- or scheduled weekday run (cron)
- Uploads report and state as workflow artifacts
- Commits state updates automatically when changed

## Local Execution
1. Install Node.js v20+
2. Run `npm run sync:once`
3. Open `reports/latest-sync-report.json` for details
