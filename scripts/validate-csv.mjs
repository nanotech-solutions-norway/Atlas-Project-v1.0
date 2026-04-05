import { access, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

async function exists(relPath) {
  try {
    await access(path.join(root, relPath), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function validateCsv(relPath) {
  const fullPath = path.join(root, relPath);
  const raw = await readFile(fullPath, 'utf8');
  const normalized = raw.replace(/^\uFEFF/, '').trim();

  if (!normalized) {
    throw new Error(`CSV file is empty: ${relPath}`);
  }

  const lines = normalized.split(/\r?\n/);
  if (lines.length < 2) {
    throw new Error(`CSV file must include header and at least one data row: ${relPath}`);
  }

  const header = lines[0].split(',').map(cell => cell.trim());
  if (header.length < 2) {
    throw new Error(`CSV header looks invalid in ${relPath}`);
  }

  console.log(`Validated CSV: ${relPath}`);
}

const requiredFiles = [
  'cms-seeds/platforms.csv',
  'cms-seeds/deployment-modes.csv',
  'cms-seeds/customer-segments.csv',
  'cms-seeds/offers-packages.csv',
  'cms-seeds/cta-configs.csv',
  'cms-seeds/support-routes.csv',
  'cms-seeds/proof-assets.csv',
  'cms-seeds/compliance-claims.csv',
  'cms-seeds/faqs-approved-knowledge.csv'
];

for (const relPath of requiredFiles) {
  if (!(await exists(relPath))) {
    throw new Error(`Missing required CSV file: ${relPath}`);
  }
  await validateCsv(relPath);
}

console.log('CSV validation passed.');
