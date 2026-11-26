import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(path, 'utf8');
const seed = JSON.parse(await read('cms-seeds/product-packages.wave-1.json'));
const specs = [
  {
    id: 'PKG-BIZ-EXEC-WORK-COPILOT',
    name: 'Executive Work Assistant',
    oldName: 'Executive Work Copilot',
    oldSlug: 'executive-work-copilot',
    slug: 'executive-work-assistant',
    route: '/packages/executive-work-assistant'
  },
  {
    id: 'PKG-BIZ-COMMERCIAL-GROWTH-COPILOT',
    name: 'Commercial Growth Assistant',
    oldName: 'Commercial Growth Copilot',
    oldSlug: 'commercial-growth-copilot',
    slug: 'commercial-growth-assistant',
    route: '/packages/commercial-growth-assistant'
  }
];

const ids = seed.items.map(item => item.packageId);
const names = seed.items.map(item => item.packageName);
const slugs = seed.items.map(item => item.slug);
const routes = seed.items.map(item => item.route);
for (const values of [ids, names, slugs, routes]) {
  assert.equal(new Set(values).size, values.length, 'package identifiers, names, slugs, and routes must be unique');
}
for (const spec of specs) {
  const item = seed.items.find(candidate => candidate.packageId === spec.id);
  assert.ok(item, `stable package ID missing: ${spec.id}`);
  assert.equal(item.packageName, spec.name);
  assert.equal(item.slug, spec.slug);
  assert.equal(item.route, spec.route);
  assert.equal(item.route.split('/').at(-1), item.slug);
}

const activePaths = [
  'docs/product/phase-0-5-wave-1-package-cards.md',
  'docs/product/phase-0-5-onboarding-fields.md',
  'docs/wix/phase-1-package-page-blueprint.md',
  'docs/governance/phase-0-5-completion-checklist.md',
  'docs/implementation/implementation-register.md',
  'docs/website/route-map.yml',
  'cms-seeds/offers-packages.csv'
];
const active = new Map(await Promise.all(activePaths.map(async path => [path, await read(path)])));
for (const spec of specs) {
  for (const [path, content] of active) {
    assert.ok(!content.includes(spec.oldSlug), `stale active slug in ${path}: ${spec.oldSlug}`);
    assert.ok(!content.includes(spec.oldName), `stale active package label in ${path}: ${spec.oldName}`);
  }
}
const cards = active.get('docs/product/phase-0-5-wave-1-package-cards.md');
const onboarding = active.get('docs/product/phase-0-5-onboarding-fields.md');
const blueprint = active.get('docs/wix/phase-1-package-page-blueprint.md');
for (const spec of specs) {
  assert.ok(cards.includes(spec.name) && cards.includes(spec.id) && cards.includes(spec.route), `package card reference incomplete: ${spec.name}`);
  assert.ok(onboarding.includes(`### ${spec.name}`), `onboarding heading missing: ${spec.name}`);
  assert.ok(blueprint.includes(`| ${spec.name} | \`${spec.route}\` | Dynamic detail page | \`ProductPackages.slug = ${spec.slug}\` |`), `page blueprint route mismatch: ${spec.name}`);
}

const namesPolicy = await read('docs/governance/naming-conventions.md');
assert.ok(namesPolicy.includes('Change control — ATLASPROJECT-8'));
for (const spec of specs) {
  assert.ok(namesPolicy.includes(`| ${spec.oldName} | ${spec.name} | ` + '`' + spec.id + '`'), `change-control crosswalk missing: ${spec.name}`);
  assert.ok(namesPolicy.includes(spec.oldSlug) && namesPolicy.includes(spec.slug));
}
assert.ok(namesPolicy.includes('No redirect, Wix route, or public record was configured.'));

const historical = await read('docs/wix/phase-1-wix-cms-validation-evidence.md');
assert.ok(historical.includes('Historical evidence snapshot'));
assert.ok(historical.includes('No Wix CMS record was changed by this work.'));
assert.ok(historical.includes('| Executive Work Copilot | `PKG-BIZ-EXEC-WORK-COPILOT` | `c48e700d-ed2f-41cf-ac83-29c54e71f150`'));
assert.ok(historical.includes('| Commercial Growth Copilot | `PKG-BIZ-COMMERCIAL-GROWTH-COPILOT` | `df9574c1-fd68-4ad8-b3b8-c7d603061570`'));

const disclosure = await read('docs/legal/provider-disclosure.md');
const platformEnums = JSON.parse(await read('schemas/platform_deployment_enums.json'));
assert.ok(disclosure.includes('Microsoft 365 Copilot platform lane'), 'explanatory provider lane must remain');
assert.ok(platformEnums.platforms.some(platform => platform.slug === 'microsoft-copilot' && platform.title === 'Microsoft Copilot'), 'provider-lane enum must remain unchanged');

console.log(`Package naming consistency passed: ${seed.items.length} unique packages; ${specs.length} migrated with stable IDs; historical CMS evidence and provider-lane labels preserved.`);
