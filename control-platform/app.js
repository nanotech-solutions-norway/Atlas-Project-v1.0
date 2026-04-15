const metrics = [
  { label: 'Managed sites', value: '12' },
  { label: 'Organic clicks', value: '48.2k' },
  { label: 'Open SEO issues', value: '37' },
  { label: 'Pending deployments', value: '5' },
];

const sites = [
  {
    name: 'SolarEX',
    status: 'Healthy',
    traffic: '12.4k',
    organic: '+8.2%',
    seoIssues: 3,
    repo: 'nanotech-solutions-norway/SolarEX-v3.2',
    deploy: 'production / main',
  },
  {
    name: 'NanoTech Solutions',
    status: 'Warning',
    traffic: '8.7k',
    organic: '-3.1%',
    seoIssues: 11,
    repo: 'nanotech-solutions-norway/NTSN-v2.1',
    deploy: 'staging review',
  },
  {
    name: 'Atlas',
    status: 'Building',
    traffic: '1.2k',
    organic: '+14.9%',
    seoIssues: 6,
    repo: 'nanotech-solutions-norway/Atlas-Project-v1.0',
    deploy: 'feature branch',
  },
];

function renderMetrics() {
  const root = document.getElementById('metrics');
  root.innerHTML = metrics
    .map(
      (item) => `
      <div class="metric-card">
        <div class="label">${item.label}</div>
        <div class="value">${item.value}</div>
      </div>`
    )
    .join('');
}

function renderSites() {
  const root = document.getElementById('sitesTable');
  root.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>Website</th>
          <th>Status</th>
          <th>Traffic</th>
          <th>Organic</th>
          <th>SEO issues</th>
          <th>Repository</th>
          <th>Deployment</th>
        </tr>
      </thead>
      <tbody>
        ${sites
          .map(
            (site) => `
            <tr>
              <td>${site.name}</td>
              <td>${site.status}</td>
              <td>${site.traffic}</td>
              <td>${site.organic}</td>
              <td>${site.seoIssues}</td>
              <td>${site.repo}</td>
              <td>${site.deploy}</td>
            </tr>`
          )
          .join('')}
      </tbody>
    </table>`;
}

function generateActionPlan(input) {
  const clean = input.trim();
  if (!clean) {
    return 'No instruction provided.';
  }

  return [
    'Execution plan generated for requested change set:',
    '',
    `1. Scope target pages and repository paths relevant to: "${clean}"`,
    '2. Inspect repository state, branch policy, and dependent assets.',
    '3. Review SEO metadata, CTA hierarchy, content structure, and deployment impact.',
    '4. Prepare a branch-safe change set with diff preview and rollback note.',
    '5. Route approved changes into pull request and deployment log workflow.',
    '',
    'Production note: replace this placeholder planner with an API/App/MCP orchestrator that can call GitHub, analytics, and storage adapters under approval controls.',
  ].join('\n');
}

function bindPromptConsole() {
  const input = document.getElementById('instructionInput');
  const result = document.getElementById('promptResult');
  const button = document.getElementById('runPromptBtn');

  result.textContent = generateActionPlan(input.value);
  button.addEventListener('click', () => {
    result.textContent = generateActionPlan(input.value);
  });
}

renderMetrics();
renderSites();
bindPromptConsole();