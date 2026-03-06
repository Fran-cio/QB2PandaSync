export function validateInvoice(invoice) {
  const missing = [];
  if (!invoice?.invoice_id) missing.push('invoice_id');
  if (!invoice?.amount || Number(invoice.amount) <= 0) missing.push('amount');
  if (!invoice?.due_date) missing.push('due_date');
  if (!invoice?.payer?.name) missing.push('payer.name');
  return missing;
}

export async function runSync({ invoices, store, createPaymentDocument }) {
  const summary = {
    processed: 0,
    sent: 0,
    failed: 0,
    duplicates: 0,
    errors: []
  };

  for (const invoice of invoices) {
    summary.processed += 1;

    const missing = validateInvoice(invoice);
    if (missing.length) {
      summary.failed += 1;
      summary.errors.push({ invoiceId: invoice?.invoice_id ?? null, reason: `missing/invalid: ${missing.join(', ')}` });
      continue;
    }

    if (store.has(invoice.invoice_id)) {
      summary.duplicates += 1;
      continue;
    }

    const result = await createPaymentDocument(invoice);
    store.set(invoice.invoice_id, result.documentId);
    summary.sent += 1;
  }

  return summary;
}
