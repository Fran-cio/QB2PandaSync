import fs from 'node:fs/promises';
import path from 'node:path';
import { fetchInvoices } from './connectors/quickbooks.mock.js';
import { createPaymentDocument } from './connectors/pandadoc.mock.js';
import { JsonFileStore } from './store/json-file-store.js';
import { runSync } from './sync.js';

const mode = process.env.SYNC_MODE || 'mock';
const invoicesPath = process.env.MOCK_INVOICES_PATH || './data/mock-invoices.json';
const statePath = process.env.SYNC_STATE_PATH || './state/synced-invoices.json';
const reportPath = process.env.SYNC_REPORT_PATH || './reports/latest-sync-report.json';

if (mode !== 'mock') {
  console.log('Live mode is not implemented yet. Use SYNC_MODE=mock for current workflow.');
  process.exit(1);
}

const store = new JsonFileStore(statePath);
await store.load();

const invoices = await fetchInvoices({ path: invoicesPath });
const summary = await runSync({ invoices, store, createPaymentDocument });
await store.save();

const report = {
  runAt: new Date().toISOString(),
  mode,
  summary
};

await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log('QB2PandaSync run summary');
console.log(JSON.stringify(summary, null, 2));
console.log(`Report written to ${reportPath}`);
console.log(`State written to ${statePath}`);
