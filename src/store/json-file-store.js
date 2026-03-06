import fs from 'node:fs/promises';
import path from 'node:path';

export class JsonFileStore {
  constructor(filePath = './state/synced-invoices.json') {
    this.filePath = filePath;
    this.byInvoiceId = new Map();
  }

  async load() {
    try {
      const raw = await fs.readFile(this.filePath, 'utf8');
      const parsed = JSON.parse(raw);
      const rows = parsed?.items ?? [];
      this.byInvoiceId = new Map(rows.map((r) => [r.invoiceId, r.documentId]));
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await this.save();
    }
  }

  has(invoiceId) {
    return this.byInvoiceId.has(invoiceId);
  }

  set(invoiceId, documentId) {
    this.byInvoiceId.set(invoiceId, documentId);
  }

  get(invoiceId) {
    return this.byInvoiceId.get(invoiceId);
  }

  async save() {
    const dir = path.dirname(this.filePath);
    await fs.mkdir(dir, { recursive: true });
    const payload = {
      updatedAt: new Date().toISOString(),
      items: [...this.byInvoiceId.entries()].map(([invoiceId, documentId]) => ({ invoiceId, documentId }))
    };
    await fs.writeFile(this.filePath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
  }
}
