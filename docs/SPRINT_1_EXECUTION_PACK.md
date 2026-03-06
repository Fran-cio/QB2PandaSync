# Sprint 1 Execution Pack

## Goal
Deliver an execution-ready baseline that can run a **full mock invoice sync flow** end-to-end and provide team-ready operational artifacts.

## Scope Delivered in Sprint 1
1. Documentation package for execution and operations
2. Execution backlog and field mapping
3. Minimal runnable integration scaffold (`mock` mode)
4. Test coverage for core business rules (idempotency + required fields)

## Deliverables
- Technical:
  - `src/index.js`
  - `src/sync.js`
  - `src/connectors/quickbooks.mock.js`
  - `src/connectors/pandadoc.mock.js`
  - `src/store/memory-store.js`
  - `test/sync.test.js`
- Data:
  - `data/mock-invoices.json`
- Documentation:
  - `docs/IMPLEMENTATION_BACKLOG.md`
  - `docs/INTEGRATION_FIELD_MAPPING.md`
  - `docs/OPERATIONS_RUNBOOK.md`
  - `docs/UAT_CHECKLIST_NON_TECHNICAL.md`

## Acceptance Criteria
- Running `npm run sync:once` processes mock invoices.
- Invalid invoices are rejected with clear reason.
- Duplicate invoice IDs are prevented from creating duplicate PandaDoc docs.
- `npm test` passes.

## How to Execute (Non-Technical Friendly)
1. Install Node.js (v20+).
2. Open terminal in project folder.
3. Run:
   - `cp .env.example .env` (optional)
   - `npm run sync:once`
4. Confirm output includes a sync summary (processed/sent/failed/duplicates).

## Next Step (Sprint 2)
- Replace mock connectors with live QuickBooks/PandaDoc connectors.
- Add persistent store (DB) for cross-run idempotency.
- Add retry queue and webhook-based status updates.
