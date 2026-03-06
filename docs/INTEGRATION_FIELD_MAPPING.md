# Integration Field Mapping (QuickBooks -> PandaDoc)

| QuickBooks Field | PandaDoc Field | Required | Notes |
|---|---|---|---|
| `invoice_id` | `external_id` | Yes | Primary idempotency anchor |
| `amount` | `payment.amount` | Yes | Must match invoice total |
| `due_date` | `payment.due_date` | Yes | ISO date format recommended |
| `payer.name` | `recipient.name` | Yes | Full legal/business name |
| `payer.email` | `recipient.email` | Strongly recommended | Needed for reliable delivery |
| `currency` | `payment.currency` | Yes | e.g., USD, EUR |
| `invoice_number` | `name`/`title` | Recommended | Human-readable reference |

## Validation Rules
- Amount must be greater than 0.
- Due date must not be empty.
- Payer name must not be empty.
- Invoice ID must be unique per business entity.

## Idempotency Rule
Use `invoice_id` as the unique key. If an existing mapping is found, update status instead of creating a new PandaDoc document.
