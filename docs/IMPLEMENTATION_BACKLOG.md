# Implementation Backlog (Execution-Ready)

This backlog is designed so a delivery team can start implementation immediately.

## Epic 1 — QuickBooks Invoice Ingestion

### Story 1.1: Connect to QuickBooks API
**As** an integration service  
**I want** to authenticate with QuickBooks  
**So that** invoice data can be retrieved securely.

**Acceptance Criteria**
- OAuth credentials are configured via environment variables.
- Connection health endpoint confirms QuickBooks access.
- Authentication errors are logged with actionable messages.

### Story 1.2: Fetch eligible invoices
**As** the integration service  
**I want** to retrieve newly created or updated invoices  
**So that** they can be sent to PandaDoc.

**Acceptance Criteria**
- Supports webhook trigger and/or scheduled polling.
- Filters out invoices that are already synchronized.
- Captures required fields: `invoice_id`, `amount`, `due_date`, `payer`.

## Epic 2 — PandaDoc Document Creation

### Story 2.1: Build PandaDoc payload
**As** the integration service  
**I want** to transform QuickBooks invoice data into PandaDoc format  
**So that** a payment document can be created automatically.

**Acceptance Criteria**
- Field mapping is deterministic and documented.
- Validation prevents missing payer/amount before send.
- Transformation errors are flagged with invoice reference.

### Story 2.2: Create and send payment document
**As** operations  
**I want** invoices sent to PandaDoc automatically  
**So that** billing time is reduced.

**Acceptance Criteria**
- PandaDoc document is created successfully for valid invoices.
- Invoice is sent automatically after creation.
- Integration stores `quickbooks_invoice_id` + `pandadoc_document_id` mapping.

## Epic 3 — Reliability and Operations

### Story 3.1: Idempotency and duplicate protection
**As** finance operations  
**I want** one invoice to be sent once  
**So that** customers do not receive duplicates.

**Acceptance Criteria**
- Duplicate events do not create duplicate PandaDoc documents.
- Idempotency key uses stable invoice identifier.

### Story 3.2: Retry and failure handling
**As** operations  
**I want** transient failures retried automatically  
**So that** manual intervention is minimized.

**Acceptance Criteria**
- Retry strategy with exponential backoff exists.
- Max retries and dead-letter behavior are defined.
- Permanent failures are visible in an error queue/report.

### Story 3.3: Status sync and visibility
**As** operations  
**I want** to see invoice status in one place  
**So that** I can follow up quickly.

**Acceptance Criteria**
- Statuses tracked: `sent`, `opened`, `paid`, `failed`.
- Last update timestamp and source are stored.
- Daily status summary can be generated.

## Suggested Delivery Sequence
1. Epic 1 (ingestion)
2. Epic 2 (document creation)
3. Epic 3.1 (idempotency)
4. Epic 3.2 (retries)
5. Epic 3.3 (status visibility)

## Definition of Done (MVP)
- End-to-end flow works for at least one invoice scenario in production-like environment.
- Duplicate protection is enabled.
- Failed invoices can be retried.
- Non-technical users can execute fallback process from docs.
