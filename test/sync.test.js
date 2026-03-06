import test from 'node:test';
import assert from 'node:assert/strict';
import { runSync, validateInvoice } from '../src/sync.js';
import { MemoryStore } from '../src/store/memory-store.js';

test('validateInvoice catches missing fields', () => {
  const missing = validateInvoice({ invoice_id: 'X1', amount: 0, payer: {} });
  assert.deepEqual(missing, ['amount', 'due_date', 'payer.name']);
});

test('runSync sends valid invoices, rejects invalid and duplicates', async () => {
  const invoices = [
    { invoice_id: 'INV-1', amount: 100, due_date: '2026-01-01', payer: { name: 'A' } },
    { invoice_id: 'INV-2', amount: 0, due_date: '2026-01-01', payer: { name: 'B' } },
    { invoice_id: 'INV-1', amount: 100, due_date: '2026-01-01', payer: { name: 'A' } }
  ];

  const store = new MemoryStore();
  const createPaymentDocument = async (invoice) => ({ documentId: `pd_${invoice.invoice_id}` });

  const summary = await runSync({ invoices, store, createPaymentDocument });

  assert.equal(summary.processed, 3);
  assert.equal(summary.sent, 1);
  assert.equal(summary.failed, 1);
  assert.equal(summary.duplicates, 1);
  assert.equal(summary.errors.length, 1);
});
