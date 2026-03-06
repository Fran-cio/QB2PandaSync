export class MemoryStore {
  constructor() {
    this.byInvoiceId = new Map();
  }

  has(invoiceId) {
    return this.byInvoiceId.has(invoiceId);
  }

  set(invoiceId, value) {
    this.byInvoiceId.set(invoiceId, value);
  }

  get(invoiceId) {
    return this.byInvoiceId.get(invoiceId);
  }
}
