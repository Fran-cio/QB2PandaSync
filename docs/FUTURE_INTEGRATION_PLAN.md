# Future Integration Plan

## Integration Vision
Create an automated pipeline where QuickBooks is the source of truth and PandaDoc receives structured invoice data without manual PDF handling.

## Core Data to Sync
- `invoice_id`
- `amount`
- `due_date`
- `payer`

## High-Level Flow
1. Invoice is created or updated in QuickBooks
2. Integration receives event (webhook) or detects change (scheduled sync)
3. Data is validated and normalized
4. PandaDoc payment document is created via API
5. Payer and amount are assigned automatically
6. Document is sent automatically
7. Status is tracked and synchronized

## Architecture Notes
- Idempotency key: use `quickbooks_invoice_id` to avoid duplicate sends
- Retry strategy: automatic retries for transient API failures
- Error queue: unresolved items routed for manual review
- Logging: structured logs for auditing and troubleshooting

## MVP Milestones
1. Read invoice from QuickBooks API
2. Create payment document in PandaDoc API
3. Persist cross-reference mapping
4. Add sync status tracking
5. Add retries + basic alerting

## Risks and Mitigations
- **API limits:** implement rate-limit aware queue
- **Invalid payer data:** add mandatory field checks before send
- **Duplicate events:** enforce idempotency at storage layer
- **Downtime in third-party API:** add backoff and replay mechanism
