# Operations Runbook

## Purpose
Provide a clear process for operations and support teams to monitor and respond to integration incidents.

## Daily Check (10-15 minutes)
1. Review synchronized invoice count (last 24h)
2. Review failed invoice count
3. Confirm no unusual retry spikes
4. Confirm no duplicate sends reported

## Status Definitions
- **Sent**: Invoice successfully created and sent via PandaDoc
- **Opened**: Customer opened the payment document
- **Paid**: Payment completed
- **Failed**: Integration could not complete processing

## Incident Priority
- **P1**: 50%+ invoice flow failure or complete outage
- **P2**: Partial failures affecting specific customers/invoices
- **P3**: Minor data discrepancy with workaround available

## Failed Invoice Triage
1. Locate failed invoice ID
2. Check error reason category:
   - Missing payer data
   - Invalid amount/date
   - External API temporary failure
   - Authentication/configuration issue
3. Apply action:
   - Data issue: correct in QuickBooks, then resend
   - Temporary API issue: wait for retry cycle
   - Auth/config issue: escalate to technical owner

## Escalation Path
1. Operations owner
2. Project owner
3. Technical integration owner

## Communication Template
"Invoice sync incident detected. Impact: <scope>. Cause: <known/unknown>. Current action: <action>. Next update: <time>."

## Recovery Confirmation
Before closing an incident:
- Confirm new invoices are flowing
- Confirm affected failed invoices were retried/resolved
- Document root cause and prevention action
