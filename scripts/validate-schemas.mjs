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

async function parseJson(relPath) {
  const fullPath = path.join(root, relPath);
  const raw = await readFile(fullPath, 'utf8');
  try {
    JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON in ${relPath}: ${error.message}`);
  }
}

const baseSchema = (await exists('schemas/atlas_cms_fields.repaired.json'))
  ? 'schemas/atlas_cms_fields.repaired.json'
  : 'schemas/atlas_cms_fields.json';

const requiredFiles = [
  baseSchema,
  'schemas/interaction_module_contract.json',
  'schemas/platform_deployment_enums.json',
  'schemas/published_record_policy.json',
  'schemas/route_contracts.json'
];

for (const relPath of requiredFiles) {
  if (!(await exists(relPath))) {
    throw new Error(`Missing required schema file: ${relPath}`);
  }
  await parseJson(relPath);
  console.log(`Validated JSON: ${relPath}`);
}

console.log('Schema validation passed.');
