const FALLBACK_DATA = {
  sites: [
    {
      id: 'atlas',
      name: 'Atlas',
      url: 'https://www.ainorge.com',
      repo: 'nanotech-solutions-norway/Atlas-Project-v1.0',
      platform: 'GitHub + Wix/Azure operating model',
      priority: 'High',
      status: 'Build',
      owner: 'Commercial + Delivery',
      metrics: {
        sessions: 3820,
        engagedSessions: 2395,
        conversions: 44,
        organicClicks: 512,
        impressions: 22890,
        ctr: 2.24,
        position: 19.4,
        cwvPass: 78,
        indexedPages: 36
      },
      trafficTrend: [280, 310, 295, 340, 360, 392, 410],
      organicTrend: [52, 60, 71, 79, 88, 77, 85],
      topQueries: [
        { query: 'ai norway consulting', clicks: 61, ctr: 3.8, position: 8.9 },
        { query: 'chatgpt business norway', clicks: 42, ctr: 2.2, position: 14.1 },
        { query: 'ai enablement norway', clicks: 29, ctr: 1.7, position: 16.3 }
      ],
      issues: [
        { severity: 'High', title: 'Clarify primary CTA routing by audience lane', owner: 'Growth' },
        { severity: 'Medium', title: 'Expand proof assets for governance and compliance pages', owner: 'Content' },
        { severity: 'Low', title: 'Refine metadata coverage for knowledge pages', owner: 'SEO' }
      ],
      connectors: ['GitHub', 'Google Drive', 'Gmail', 'Google Calendar', 'Gamma']
    }
  ],
  connectorCatalog: [
    { name: 'GitHub', role: 'Code governance and direct repository actions', status: 'Required' },
    { name: 'Google Drive', role: 'Document packs, logs, and working files', status: 'Optional / Recommended' },
    { name: 'GA4', role: 'Traffic and engagement telemetry', status: 'Planned' },
    { name: 'Google Search Console', role: 'Organic search and indexing telemetry', status: 'Planned' },
    { name: 'PageSpeed Insights', role: 'Technical performance snapshots', status: 'Planned' },
    { name: 'Microsoft Clarity', role: 'Behavior diagnostics and recordings', status: 'Planned' },
    { name: 'Gamma', role: 'Page and deck prototyping', status: 'Optional' }
  ],
  operationCatalog: [
    'SEO audit and remediation brief',
    'Metadata rewrite pack',
    'Landing-page CTA improvement',
    'Content accuracy review'
  ]
};

const state = {
  data: FALLBACK_DATA,
  activeSiteId: null,
  prompt: '',
  logs: JSON.parse(localStorage.getItem('atlas-control-plane-logs') || '[]')
};

const els = {
  kpiGrid: document.getElementById('kpi-grid'),
  siteList: document.getElementById('site-list'),
  connectorList: document.getElementById('connector-list'),
  trafficChart: document.getElementById('traffic-chart'),
  organicChart: document.getElementById('organic-chart'),
  issueList: document.getElementById('issue-list'),
  queryTable: document.getElementById('query-table'),
  sitePreview: document.getElementById('site-preview'),
  liveLink: document.getElementById('live-link'),
  repoLink: document.getElementById('repo-link'),
  operationSelect: document.getElementById('operation-select'),
  objectiveInput: document.getElementById('objective-input'),
  toolPills: document.getElementById('tool-pills'),
  notesInput: document.getElementById('notes-input'),
  promptBox: document.getElementById('prompt-box'),
  promptStatus: document.getElementById('prompt-status'),
  logList: document.getElementById('log-list'),
  generatePrompt: document.getElementById('generate-prompt'),
  copyPrompt: document.getElementById('copy-prompt'),
  openChatgpt: document.getElementById('open-chatgpt'),
  copyJson: document.getElementById('copy-json'),
  refreshDemo: document.getElementById('refresh-demo')
};

async function loadData() {
  try {
    const response = await fetch('./data/sites.example.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Could not load JSON');
    state.data = await response.json();
  } catch (error) {
    console.warn('Using fallback portfolio data', error);
  }

  state.activeSiteId = state.data.sites?.[0]?.id || null;
  render();
}

function getActiveSite() {
  return state.data.sites.find((site) => site.id === state.activeSiteId) || state.data.sites[0];
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function formatPct(value) {
  return `${value}%`;
}

function saveLogs() {
  localStorage.setItem('atlas-control-plane-logs', JSON.stringify(state.logs.slice(0, 20)));
}

function addLog(action, detail) {
  const now = new Date();
  state.logs.unshift({
    action,
    detail,
    ts: now.toLocaleString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  });
  saveLogs();
  renderLogs();
}

function repoUrl(repo) {
  return `https://github.com/${repo}`;
}

function createKpiCards(site) {
  const items = [
    { label: 'Sessions', value: formatNumber(site.metrics.sessions), sub: `${formatNumber(site.metrics.engagedSessions)} engaged` },
    { label: 'Conversions', value: formatNumber(site.metrics.conversions), sub: `${site.owner} owner group` },
    { label: 'Organic clicks', value: formatNumber(site.metrics.organicClicks), sub: `${formatNumber(site.metrics.impressions)} impressions` },
    { label: 'Avg. position', value: site.metrics.position.toFixed(1), sub: `${site.metrics.ctr.toFixed(2)}% CTR` },
    { label: 'CWV pass rate', value: formatPct(site.metrics.cwvPass), sub: `${site.metrics.indexedPages} indexed pages` }
  ];

  els.kpiGrid.innerHTML = items.map((item) => `
    <div class="card kpi-card">
      <div class="kpi-label">${item.label}</div>
      <div class="kpi-value">${item.value}</div>
      <div class="kpi-sub">${item.sub}</div>
    </div>
  `).join('');
}

function renderSites() {
  els.siteList.innerHTML = state.data.sites.map((site) => {
    const isActive = site.id === state.activeSiteId;
    return `
      <button class="site-item ${isActive ? 'active' : ''}" data-site-id="${site.id}">
        <div class="site-title-row">
          <span class="site-title">${site.name}</span>
          <span class="muted">${site.platform}</span>
        </div>
        <div class="badges">
          <span class="badge status-${site.status.toLowerCase()}">${site.status}</span>
          <span class="badge priority-${site.priority.toLowerCase()}">${site.priority} priority</span>
          <span class="badge">${site.owner}</span>
        </div>
      </button>
    `;
  }).join('');

  document.querySelectorAll('[data-site-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeSiteId = button.dataset.siteId;
      render();
      addLog('Site selected', `${getActiveSite().name} is now active in the control plane.`);
    });
  });
}

function renderConnectors(site) {
  els.connectorList.innerHTML = state.data.connectorCatalog.map((connector) => {
    const enabled = site.connectors.includes(connector.name);
    return `
      <div class="connector-item">
        <div class="connector-head">
          <strong>${connector.name}</strong>
          <span class="severity ${enabled ? 'low' : 'medium'}">${enabled ? 'In scope' : connector.status}</span>
        </div>
        <div class="muted">${connector.role}</div>
      </div>
    `;
  }).join('');
}

function renderMiniChart(target, series) {
  const max = Math.max(...series, 1);
  target.innerHTML = series.map((value) => {
    const height = Math.max(16, Math.round((value / max) * 82));
    return `<div class="mini-bar" style="height:${height}px" title="${value}"></div>`;
  }).join('');
}

function renderIssues(site) {
  els.issueList.innerHTML = site.issues.map((issue) => `
    <div class="issue-item">
      <div class="issue-head">
        <strong>${issue.title}</strong>
        <span class="severity ${issue.severity.toLowerCase()}">${issue.severity}</span>
      </div>
      <div class="muted">Owner: ${issue.owner}</div>
    </div>
  `).join('');
}

function renderQueries(site) {
  els.queryTable.innerHTML = site.topQueries.map((entry) => `
    <tr>
      <td>${entry.query}</td>
      <td>${entry.clicks}</td>
      <td>${entry.ctr.toFixed(1)}%</td>
      <td>${entry.position.toFixed(1)}</td>
    </tr>
  `).join('');
}

function renderPreview(site) {
  els.sitePreview.src = site.url;
  els.liveLink.href = site.url;
  els.repoLink.href = repoUrl(site.repo);
}

function renderOperations() {
  els.operationSelect.innerHTML = state.data.operationCatalog.map((item) => `
    <option value="${item}">${item}</option>
  `).join('');
}

function renderToolPills(site) {
  const catalog = state.data.connectorCatalog.map((entry) => entry.name);
  const merged = [...new Set([...catalog, ...site.connectors])];
  els.toolPills.innerHTML = merged.map((tool, index) => {
    const checked = site.connectors.includes(tool) || index < 2;
    return `
      <label class="check-pill">
        <input type="checkbox" value="${tool}" ${checked ? 'checked' : ''} />
        <span>${tool}</span>
      </label>
    `;
  }).join('');
}

function selectedTools() {
  return Array.from(els.toolPills.querySelectorAll('input:checked')).map((input) => input.value);
}

function buildPrompt() {
  const site = getActiveSite();
  const operation = els.operationSelect.value;
  const objective = els.objectiveInput.value.trim();
  const notes = els.notesInput.value.trim();
  const tools = selectedTools();

  const issueLines = site.issues.map((issue) => `- ${issue.severity}: ${issue.title} | owner: ${issue.owner}`).join('\n');
  const queryLines = site.topQueries.map((query) => `- ${query.query} | clicks: ${query.clicks} | ctr: ${query.ctr}% | position: ${query.position}`).join('\n');

  state.prompt = `You are the website delivery orchestrator for the following website portfolio task.\n\n` +
    `Active website\n` +
    `- Name: ${site.name}\n` +
    `- Live URL: ${site.url}\n` +
    `- GitHub repository: ${site.repo}\n` +
    `- Platform model: ${site.platform}\n` +
    `- Priority: ${site.priority}\n` +
    `- Status: ${site.status}\n\n` +
    `Requested operation\n` +
    `- Operation type: ${operation}\n` +
    `- Immediate objective: ${objective}\n\n` +
    `Current KPI snapshot\n` +
    `- Sessions: ${site.metrics.sessions}\n` +
    `- Engaged sessions: ${site.metrics.engagedSessions}\n` +
    `- Conversions: ${site.metrics.conversions}\n` +
    `- Organic clicks: ${site.metrics.organicClicks}\n` +
    `- Impressions: ${site.metrics.impressions}\n` +
    `- CTR: ${site.metrics.ctr}%\n` +
    `- Average position: ${site.metrics.position}\n` +
    `- Core Web Vitals pass rate: ${site.metrics.cwvPass}%\n` +
    `- Indexed pages: ${site.metrics.indexedPages}\n\n` +
    `Priority issue queue\n${issueLines}\n\n` +
    `Top query context\n${queryLines}\n\n` +
    `Tools/apps to use when available\n- ${tools.join('\n- ')}\n\n` +
    `Execution requirements\n` +
    `- Inspect the current live state and repository state before proposing changes.\n` +
    `- Use GitHub for direct repo-side actions where possible.\n` +
    `- Use Google Drive for supporting packs, logs, and working documents where relevant.\n` +
    `- Keep the response implementation-ready and structured by findings, actions, and blockers.\n` +
    `- If a stated integration is not technically viable, provide the nearest workable architecture and continue with that.\n` +
    `- Do not invent unavailable endpoints or unsupported embeddings.\n\n` +
    `Additional notes\n${notes}`;

  els.promptBox.textContent = state.prompt;
  els.promptStatus.textContent = `Orchestration brief prepared for ${site.name}. Selected tools: ${tools.join(', ')}.`;
  return state.prompt;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.warn('Clipboard write failed', error);
    return false;
  }
}

async function copyPrompt() {
  const prompt = state.prompt || buildPrompt();
  const ok = await copyToClipboard(prompt);
  els.promptStatus.textContent = ok
    ? 'Prompt copied to clipboard. Open ChatGPT and paste the orchestration brief.'
    : 'Clipboard access failed. Select the prompt manually and copy it.';
  addLog('Prompt copied', `Prompt copied for ${getActiveSite().name}.`);
}

async function copyActiveSiteJson() {
  const site = getActiveSite();
  const ok = await copyToClipboard(JSON.stringify(site, null, 2));
  addLog('Site JSON exported', `Structured site context exported for ${site.name}.`);
  if (ok) {
    els.promptStatus.textContent = `JSON for ${site.name} copied to clipboard.`;
  }
}

async function launchChatgpt() {
  const prompt = state.prompt || buildPrompt();
  await copyToClipboard(prompt);
  window.open('https://chatgpt.com/', '_blank', 'noopener,noreferrer');
  addLog('ChatGPT launched', `Opened ChatGPT for ${getActiveSite().name} orchestration.`);
  els.promptStatus.textContent = 'ChatGPT opened in a new tab. Paste the copied orchestration brief into the session.';
}

function renderLogs() {
  if (!state.logs.length) {
    els.logList.innerHTML = '<div class="log-item"><strong>No execution entries yet.</strong><div class="muted">Generate a prompt, export JSON, or launch ChatGPT to start the local trail.</div></div>';
    return;
  }

  els.logList.innerHTML = state.logs.slice(0, 10).map((entry) => `
    <div class="log-item">
      <strong>${entry.action}</strong>
      <div class="muted">${entry.detail}</div>
      <div class="muted">${entry.ts}</div>
    </div>
  `).join('');
}

function render() {
  const site = getActiveSite();
  createKpiCards(site);
  renderSites();
  renderConnectors(site);
  renderMiniChart(els.trafficChart, site.trafficTrend);
  renderMiniChart(els.organicChart, site.organicTrend);
  renderIssues(site);
  renderQueries(site);
  renderPreview(site);
  renderOperations();
  renderToolPills(site);
  buildPrompt();
  renderLogs();
}

els.generatePrompt.addEventListener('click', () => {
  buildPrompt();
  addLog('Prompt generated', `Generated orchestration brief for ${getActiveSite().name}.`);
});

els.copyPrompt.addEventListener('click', copyPrompt);
els.openChatgpt.addEventListener('click', launchChatgpt);
els.copyJson.addEventListener('click', copyActiveSiteJson);
els.refreshDemo.addEventListener('click', () => {
  addLog('Demo refresh', 'Reloaded portfolio configuration from JSON source.');
  loadData();
});

loadData();
