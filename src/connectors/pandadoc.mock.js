let seq = 1;

export async function createPaymentDocument(invoice) {
  const id = `pd_${String(seq++).padStart(4, '0')}`;
  return {
    documentId: id,
    status: 'sent',
    invoiceId: invoice.invoice_id
  };
}
