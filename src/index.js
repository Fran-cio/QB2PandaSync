import { fetchInvoices } from './connectors/quickbooks.mock.js';
import { createPaymentDocument } from './connectors/pandadoc.mock.js';
import { MemoryStore } from './store/memory-store.js';
import { runSync } from './sync.js';

const mode = process.env.SYNC_MODE || 'mock';
const path = process.env.MOCK_INVOICES_PATH || './data/mock-invoices.json';

if (mode !== 'mock') {
  console.log('Live mode is not implemented yet. Use SYNC_MODE=mock for Sprint 1.');
  process.exit(1);
}

const store = new MemoryStore();
const invoices = await fetchInvoices({ path });
const summary = await runSync({ invoices, store, createPaymentDocument });

console.log('QB2PandaSync Sprint 1 run summary');
console.log(JSON.stringify(summary, null, 2));
