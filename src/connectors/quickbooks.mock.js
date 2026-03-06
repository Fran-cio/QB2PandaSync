import fs from 'node:fs/promises';

export async function fetchInvoices({ path = './data/mock-invoices.json' } = {}) {
  const raw = await fs.readFile(path, 'utf8');
  const parsed = JSON.parse(raw);
  return parsed.invoices ?? [];
}
