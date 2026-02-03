const trends = [
  {
    id: "agentic-finance",
    title: "Autonomous Agentic Systems in Financial Services",
    sector: "Finance",
    themes: ["Agentic AI", "Governance", "Workforce"],
    companies: "Lloyds Banking Group, HSBC",
    summary: "Shift from chatbots to agentic AI that can execute multi-step tasks across internal systems.",
    workforceImpact: "Affects 67,000 employees; moves roles from data entry to consultative support; new AI safety leadership roles.",
    mechanism: "LLM reasoning engines call internal APIs, execute Text-to-SQL, and orchestrate cross-department workflows.",
    governance: "Responsible AI framework with human-in-the-loop escalation for credit and fraud.",
    metrics: "GBP 2B strategic revenue target; GBP 100M direct value forecast for 2026.",
    risks: "Hallucinations in financial advice, data dependency, potential deskilling in junior analyst roles.",
    sources: "Lloyds Banking Group; Rohit Dhawan (Jan 21, 2026)."
  },
  {
    id: "creative-protections",
    title: "Contractual Protections Against Digital Scanning",
    sector: "Creative",
    themes: ["Governance", "Workforce"],
    companies: "Equity Union, PACT",
    summary: "UK-wide protections for performers against non-consensual digital scanning and AI training.",
    workforceImpact: "Covers 7,000 performers; blocks uncompensated synthetic performer creation.",
    mechanism: "Contracts separate consent for VFX scanning vs. AI training rights.",
    governance: "Informed consent must be explicit and prominent; right to refuse scanning without losing primary work.",
    metrics: "99.6% mandate for industrial action; 75.1% turnout.",
    risks: "Concerns over leaked datasets; debate over legacy scanning practices.",
    sources: "Equity; Paul W. Fleming (Jan 20, 2026)."
  },
  {
    id: "manufacturing-allocation",
    title: "AI-Driven Dynamic Workforce Allocation",
    sector: "Manufacturing",
    themes: ["Productivity", "Workforce"],
    companies: "Unilever Lighthouse Sites",
    summary: "Real-time skill-to-task matching allocates staff to production lines based on demand.",
    workforceImpact: "400% productivity increase; 23% of workforce redeployed to digital transformation roles.",
    mechanism: "Vision systems detect anomalies; matching algorithm assigns capable staff to address them.",
    governance: "Ethical oversight to prevent work intensification; used to identify skills gaps.",
    metrics: "85% faster changeovers; 21% defect reduction; 73% higher customer satisfaction.",
    risks: "Algorithmic coercion risks; loss of entry-level training grounds.",
    sources: "Unilever Lighthouse Case Study (Jan 2026); OneAdvanced (Jan 27, 2026)."
  },
  {
    id: "enterprise-copilots",
    title: "Enterprise Copilots for Knowledge Work",
    sector: "Public Sector",
    themes: ["Governance", "Productivity"],
    companies: "DWP, Rolls-Royce",
    summary: "Fine-tuned copilots ingest internal archives for HR, legal, and policy workflows.",
    workforceImpact: "3,500+ DWP staff and 720+ Rolls-Royce workers supported; tasks drop from half-day to 30 minutes.",
    mechanism: "Retrieval-augmented generation using ring-fenced internal data.",
    governance: "Human editing mandatory; pre-defined prompts and AI safety leads oversee deployments.",
    metrics: "19 minutes saved per user per day; 90% of users report time savings.",
    risks: "Over-reliance risk; hallucinations in policy documentation.",
    sources: "DWP Copilot Evaluation (Jan 2026); WorkLife (Aug 2024/Updated Jan 2026)."
  },
  {
    id: "ico-recruitment",
    title: "Regulatory Auditing for AI Recruitment",
    sector: "Recruitment",
    themes: ["Governance"],
    companies: "Information Commissioner's Office",
    summary: "ICO audit outcomes push hiring from self-regulation to formal governance.",
    workforceImpact: "Impacts HR procurement and deployment across UK hiring platforms.",
    mechanism: "Fairness audits, data minimization, and DPIAs; bans inferred ethnicity from bias testing.",
    governance: "Seven compliance principles: fairness, transparency, data minimization, and GDPR Article 22 compliance.",
    metrics: "Audit found critical failings; some providers reported accuracy only better than random.",
    risks: "Regulatory fines; need to collect accurate special category data.",
    sources: "ICO Audit Outcomes (Jan 2026); Lewis Silkin (Nov 2024/Updated Jan 2026)."
  },
  {
    id: "ai-growth-zones",
    title: "Infrastructure-Led AI Growth Zones",
    sector: "Infrastructure",
    themes: ["Infrastructure", "Workforce"],
    companies: "DSIT, DataVita, techUK",
    summary: "Lanarkshire designated as AI Growth Zone with streamlined planning and power access.",
    workforceImpact: "3,400+ jobs targeted; regional talent clusters for HPC and data stewardship.",
    mechanism: "Public-private partnerships linking sector data with AI Growth Lab sandboxes.",
    governance: "Oversight by Sovereign AI Unit; alignment with AI Opportunities Action Plan.",
    metrics: "GBP 8.2B private investment; 12MW new power protection.",
    risks: "Grid stability pressure; urgent local upskilling requirements.",
    sources: "DSIT (Jan 29, 2026); DCNN Magazine (Jan 2026)."
  },
  {
    id: "grid-resilience",
    title: "AI-Enabled Grid Resilience",
    sector: "Energy",
    themes: ["Infrastructure", "Productivity"],
    companies: "National Grid, Centrica",
    summary: "AI-driven load forecasting and grid flexibility reduces alarm fatigue and improves resilience.",
    workforceImpact: "Operators shift from manual monitoring to dynamic grid orchestration.",
    mechanism: "Models classify flexible vs. high-priority workloads and flex demand in real time.",
    governance: "Engineering intelligence strengthens human judgment and safety compliance.",
    metrics: "GBP 30B transformation investment; alarm volume reduced by 50%.",
    risks: "AI power demand strains grid; model failure risk during extreme events.",
    sources: "BusinessGreen (Jan 6, 2026); Power Technology (Jan 9, 2026)."
  },
  {
    id: "internal-talent",
    title: "AI-Driven Internal Talent Marketplaces",
    sector: "HR & Talent",
    themes: ["Workforce", "Governance"],
    companies: "Unilever, Rolls-Royce, Barclays",
    summary: "Skills-centric marketplaces recommend internal roles and stretch opportunities.",
    workforceImpact: "Reduced reliance on external hiring; increased internal mobility and retention.",
    mechanism: "Large skills taxonomies map employees to adjacencies and internal roles.",
    governance: "Profile blinding to reduce bias; focus on skills adjacency over credentials.",
    metrics: "Internal pipelines tripled; 6x cost reduction for build vs. buy talent.",
    risks: "Skills databases become outdated; tension with traditional seniority structures.",
    sources: "Josh Bersin (Jan 2026); Workday Talent Management (Jan 2026)."
  },
  {
    id: "finance-automation",
    title: "AI Automation in Accounts Payable",
    sector: "Retail",
    themes: ["Productivity"],
    companies: "Tesco, SoftCo",
    summary: "AI automates invoice capture and routing to accelerate approvals and forecasting.",
    workforceImpact: "Manual data entry reduced; finance teams shift to scenario planning.",
    mechanism: "ML models analyze sales and weather to optimize inventory and staffing.",
    governance: "Monitoring for model drift; automated data capture improves auditability.",
    metrics: "Reduced data entry errors; 20% higher spend due to improved staffing forecasts.",
    risks: "Automated errors can scale quickly; need for human control on high-value transactions.",
    sources: "SoftCo CFO Guide (Jan 2026); TimeForge Retail News (Jan 13, 2026)."
  },
  {
    id: "contact-centres",
    title: "Agentic AI in Contact Centres",
    sector: "Contact Centers",
    themes: ["Agentic AI", "Productivity"],
    companies: "Centrica, BT Group",
    summary: "Voice-to-voice agentic AI and automatic call summarisation reduce handle time.",
    workforceImpact: "Saves 30-50 seconds per interaction; frees capacity for cross-selling.",
    mechanism: "Speech-to-intent reasoning generates synthetic spoken replies and summaries.",
    governance: "Pilots cover 8% of queries; roadmap toward fully agentic contact centres.",
    metrics: "Handle time reduced from 140 to 87 seconds; NPS up 89 points for specific journeys.",
    risks: "Robotic interactions if speech quality is low; agents disengage from summary review.",
    sources: "Centrica (Jan 2026); Sandip Malaviya (Jan 12, 2026)."
  }
];

const timeline = [
  {
    date: "20 Jan 2026",
    title: "Equity-PACT AI protections agreed",
    impact: "First UK-wide protections against non-consensual digital scanning and AI training."
  },
  {
    date: "21 Jan 2026",
    title: "Lloyds expands agentic AI rollout",
    impact: "Transition from colleague beta to wide-scale app integration."
  },
  {
    date: "29 Jan 2026",
    title: "Lanarkshire named AI Growth Zone",
    impact: "GBP 8.2B investment unlocked for AI-optimized data centers."
  },
  {
    date: "Jan 2026",
    title: "ICO releases recruitment audit outcomes",
    impact: "Seven compliance principles mandated for UK employers."
  },
  {
    date: "18 Feb 2026",
    title: "Employment Rights Act reforms commence",
    impact: "New collective consultation rules for AI-enabled surveillance."
  }
];

const scoreboard = [
  {
    label: "Organizations using AI",
    value: "88%"
  },
  {
    label: "Organizations with meaningful AI returns",
    value: "6%"
  },
  {
    label: "People who use AI regularly",
    value: "66%"
  },
  {
    label: "People who trust AI",
    value: "46%"
  },
  {
    label: "Manufacturers hiring for AI experience",
    value: "71%"
  },
  {
    label: "Manufacturers with mature AI strategy",
    value: "18%"
  }
];

const panelAmmo = [
  "The 70% Human Rule: 70% of AI failure is process inertia and cultural pushback - it is a people transformation.",
  "The End of the Entry-Level?: Automating entry roles risks removing the proving ground for future leaders.",
  "Agentic AI is a Decision-Rights Issue: Moving from prompt engineering to accountability engineering.",
  "Shadow AI is a Management Failure: Trust doubles when AI solves real pain, not when it is mandated.",
  "The Trust Premium in Recruitment: Accurate is the new fair - inferred data breaks the law.",
  "Engineering Intelligence vs. Automation: AI should elevate engineers, not replace them."
];

const audienceQuestions = [
  "If 19 minutes saved per day is refilled with busy work, are we improving productivity or burnout?",
  "With 71% of manufacturers hiring for AI skills, are we creating a two-tier workforce?",
  "Will AI rights become a standard part of collective bargaining by 2027?",
  "If only 18% have mature AI strategies, are the other 82% AI tourists waiting for a failure?",
  "How do we prevent AI Academies from becoming tick-box exercises?",
  "How many AI Growth Zone jobs are truly new versus rebranded roles?"
];

const sources = [
  { label: "Tech and transformation - Lloyds Banking Group", url: "https://www.lloydsbankinggroup.com/who-we-are/group-overview/tech-and-transformation.html" },
  { label: "Artificial Intelligence - Lloyds Banking Group", url: "https://www.lloydsbankinggroup.com/who-we-are/group-overview/artificial-intelligence.html" },
  { label: "Indicative ballot for AI protections - Equity", url: "https://www.equity.org.uk/campaigns-policy/indicative-ballot-for-ai-protections" },
  { label: "AI protections negotiations - AI FILMS Studio", url: "https://studio.aifilms.ai/blog/uk-equity-pact-ai-protection-negotiations-2026" },
  { label: "Unilever Lighthouse site applies AI for impact", url: "https://www.unilever.com/news/news-search/2025/five-ways-unilevers-new-lighthouse-site-applies-ai-for-impact/" },
  { label: "DWP Microsoft 365 Copilot Trial - GOV.UK", url: "https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-365-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial" },
  { label: "AI in hiring: Risk, rights, and responsibility - Shoosmiths", url: "https://www.shoosmiths.com/perspectives/stories/articles/ai-in-hiring-risk-rights-and-responsibility" },
  { label: "AI in recruitment: ICO recommendations - Lewis Silkin", url: "https://www.lewissilkin.com/insights/2024/11/27/ai-in-recruitment-icos-recommendations-and-key-questions" },
  { label: "DCNN Magazine data centre projects", url: "https://dcnnmagazine.com/category/build/projects/" },
  { label: "techUK AI Opportunities Action Plan", url: "https://www.techuk.org/resource/delivery-must-now-be-the-focus-of-the-uk-s-ai-opportunities-action-plan-in-2026.html" },
  { label: "BusinessGreen National Grid workforce rewiring", url: "https://www.businessgreen.com/feature/4523756/national-grid-rewiring-workforce-power-grid-30bn-transformation" },
  { label: "Power Technology smart grids", url: "https://www.power-technology.com/features/redefining-load-forecasting-ai-smart-grids/" },
  { label: "The Access Group AI and jobs", url: "https://www.theaccessgroup.com/en-gb/blog/hcm-ai-job-losses-or-job-evolution/" },
  { label: "Lloyds Banking Group AI Academy press release", url: "https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds/lloyds-banking-group-launches-ai-academy-for-100-percent-ai-lite.html" },
  { label: "Totaljobs recruitment roles", url: "https://www.totaljobs.com/jobs/permanent/explore-recruitment/in-castle-green?cmp=1" },
  { label: "Josh Bersin: Skills-based organization", url: "https://joshbersin.com/2023/07/building-a-skills-based-organization-the-exciting-but-sober-reality/" },
  { label: "SAI Group: AI at the checkout", url: "https://news.saigroups.co.uk/ai-at-the-checkout-when-computer-vision-becomes-the-new-security/" },
  { label: "Educate Ventures: The Skinny on AI", url: "https://www.educateventures.com/the-skinny-24-january-2026" },
  { label: "CIPD: UK employment law changes", url: "https://www.cipd.org/uk/views-and-insights/thought-leadership/insight/employment-law-changes-januarry-2026/" },
  { label: "Seeking Alpha Lloyds earnings call transcript", url: "https://seekingalpha.com/article/4863792-lloyds-banking-group-plc-lyg-q4-2025-earnings-call-transcript" },
  { label: "WebProNews Lloyds AI strategy", url: "https://www.webpronews.com/how-lloyds-banking-groups-ai-strategy-is-redefining-financial-services-through-strategic-human-machine-collaboration/" },
  { label: "Josh Bersin: AI in corporate learning", url: "https://joshbersin.com/2023/12/ai-is-transforming-corporate-learning-even-faster-than-i-expected/" },
  { label: "Deloitte: Unlocking hidden workforce potential", url: "https://www.deloitte.com/us/en/insights/topics/talent/future-of-workforce-planning/hidden-workforce-capabilities.html" },
  { label: "Salesforce: Centrica story", url: "https://www.salesforce.com/eu/customer-stories/centrica-connected-home/" },
  { label: "FilmStories: AI scanning opposition", url: "https://filmstories.co.uk/news/uk-actors-union-to-ballot-on-digital-scanning-protection/" },
  { label: "Equity ballots film & TV performers", url: "https://www.equity.org.uk/news/2025/equity-ballots-film-tv-performers-on-action-over-ai" },
  { label: "ThisWeek Culture: Equity members support action", url: "https://thisweekculture.com/article/equity-members-support-industrial-action-over-ai-protections/" },
  { label: "OneAdvanced manufacturing outlook", url: "https://www.oneadvanced.com/resources/manufacturings-2026-outlook-ai-ambition-vs.-operational-reality" },
  { label: "GLAA: AI and labour exploitation", url: "https://www.gla.gov.uk/publications/resources/glaa-webinars/emerging-technology-and-labour-exploitation-the-role-of-artificial-intelligence-january-2026" },
  { label: "Make a Difference: Augmentation over substitution", url: "https://makeadifference.media/culture/workplace-ai-adoption-wellbeing-culture/" },
  { label: "Digiday: Rolls-Royce HR gen AI", url: "https://digiday.com/marketing/8-months-in-how-rolls-royce-and-conagra-hr-teams-use-gen-ai-for-talent-development/" },
  { label: "ICO plan of action", url: "https://ico.org.uk/about-the-ico/our-information/our-strategies-and-plans/artificial-intelligence-and-biometrics-strategy/our-plan-of-action/" },
  { label: "Simmons & Simmons: ICO lifts the curtain", url: "https://www.simmons-simmons.com/publications/cm6ye0gyw004otfm0oly7a0bd/ai-in-recruitment-the-ico-lifts-the-curtain-on-providers-of-ai-tools" },
  { label: "GDPR Local: AI compliance guide", url: "https://gdprlocal.com/it/ai-compliance-uk-companies/" },
  { label: "DSIT organisation page", url: "https://www.gov.uk/government/organisations/department-for-science-innovation-and-technology" },
  { label: "Lleverage AI automation guide", url: "https://www.lleverage.ai/blog/ai-automation-in-the-uk-how-british-businesses-are-transforming-operations" },
  { label: "Browne Jacobson: AI in construction 2026", url: "https://www.brownejacobson.com/insights/2026-horizon-scanning-in-construction/ai-and-emerging-legal-challenges" },
  { label: "AI Opportunities Action Plan: One Year On", url: "https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on/ai-opportunities-action-plan-one-year-on" },
  { label: "City AM: Energy hiring under AI pressure", url: "https://www.cityam.com/big-tech-steps-up-energy-hiring-as-grid-creaks-under-ai-pressure/" },
  { label: "4M Analytics: Utility mapping", url: "https://www.4manalytics.com/blog/ai-utility-mapping-how-utilities-are-building-better-together" },
  { label: "No Jitter: AI agents for contact centers", url: "https://www.nojitter.com/contact-centers/ai-agents-for-automation-augmentation-and-collaboration" },
  { label: "Samarpan Infotech: AI integration in telecom", url: "https://www.samarpaninfotech.com/blog/how-ai-integration-helps-scaling-telecom-business-operations/" },
  { label: "Megaproject: AI reshaping engineering capacity", url: "https://megaproject.com/news/electrical/how-ai-is-reshaping-engineering-capacity-in-the-energy-sector" },
  { label: "Megaproject: Utility industry outlook 2026", url: "https://megaproject.com/news/electrical/utility-industry-outlook-2026-navigating-demand-reliability-and-digital-transformation" },
  { label: "SourceForge succession planning software", url: "https://sourceforge.net/software/succession-planning/integrates-with-greenhouse/" },
  { label: "Workday talent management", url: "https://www.workday.com/en-gb/products/talent-management/overview.html" },
  { label: "SoftCo CFO guide 2026", url: "https://softco.com/guides/ai-in-finance-2026-the-cfo-guide-to-automation-compliance-ap-efficiency/" },
  { label: "TimeForge retail news", url: "https://timeforge.com/industry-news/grocery-retailers-use-workforce-planning-for-expansion-strategies/" },
  { label: "Art of Service Academy course", url: "https://academy.theartofservice.com/course/view.php?id=1503" },
  { label: "TUC pro-worker AI strategy", url: "https://www.tuc.org.uk/research-analysis/reports/building-pro-worker-ai-innovation-strategy" },
  { label: "Learning Pool: AI as we move from 25 to 26", url: "https://learningpool.com/blog/ai-as-we-move-from-25-to-26" },
  { label: "Consultancy.uk: Cybersecurity tops UK tech investment", url: "https://www.consultancy.uk/news/42892/cybersecurity-pips-ai-to-become-top-uk-tech-investment-for-2026" },
  { label: "techUK response to 10 Year Workforce Plan", url: "https://www.techuk.org/resource/techuk-s-response-to-the-10-year-workforce-plan-call-for-evidence.html" },
  { label: "GOV.UK: AI Skills for Life and Work", url: "https://www.gov.uk/government/publications/ai-skills-for-life-and-work-rapid-evidence-review/ai-skills-for-life-and-work-rapid-evidence-review" }
];

const sectorTags = [...new Set(trends.map((trend) => trend.sector))];
const themeTags = [...new Set(trends.flatMap((trend) => trend.themes))];

const state = {
  sector: new Set(),
  theme: new Set(),
  query: ""
};

const trendGrid = document.getElementById("trend-grid");
const sectorContainer = document.getElementById("sector-tags");
const themeContainer = document.getElementById("theme-tags");
const searchInput = document.getElementById("search-input");
const resetButton = document.getElementById("reset-filters");

const timelineContainer = document.getElementById("timeline");
const scoreboardContainer = document.getElementById("scoreboard");
const panelContainer = document.getElementById("panel-cards");
const questionContainer = document.getElementById("audience-questions");
const sourcesContainer = document.getElementById("sources-list");

function renderTags(tags, container, type) {
  container.innerHTML = "";
  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.className = "filter-tag";
    button.textContent = tag;
    button.addEventListener("click", () => {
      toggleTag(type, tag, button);
    });
    container.appendChild(button);
  });
}

function toggleTag(type, tag, button) {
  const set = state[type];
  if (set.has(tag)) {
    set.delete(tag);
    button.classList.remove("active");
  } else {
    set.add(tag);
    button.classList.add("active");
  }
  renderTrends();
}

function trendMatches(trend) {
  const sectorMatch = state.sector.size === 0 || state.sector.has(trend.sector);
  const themeMatch =
    state.theme.size === 0 ||
    [...state.theme].some((tag) => trend.themes.includes(tag));
  const query = state.query.toLowerCase();
  const searchMatch =
    query.length === 0 ||
    [trend.title, trend.companies, trend.summary, trend.workforceImpact, trend.metrics, trend.risks]
      .join(" ")
      .toLowerCase()
      .includes(query);
  return sectorMatch && themeMatch && searchMatch;
}

function renderTrends() {
  trendGrid.innerHTML = "";
  const results = trends.filter(trendMatches);
  if (results.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No trends match those filters. Try clearing a tag or searching again.";
    trendGrid.appendChild(empty);
    return;
  }

  results.forEach((trend) => {
    const card = document.createElement("article");
    card.className = "trend-card";
    card.innerHTML = `
      <div class="trend-tags">
        <span>${trend.sector}</span>
        ${trend.themes.map((theme) => `<span>${theme}</span>`).join("")}
      </div>
      <h4>${trend.title}</h4>
      <p>${trend.summary}</p>
      <button class="ghost" data-toggle="${trend.id}">View operational detail</button>
      <div class="trend-details" id="detail-${trend.id}">
        <div><strong>Companies:</strong> ${trend.companies}</div>
        <div><strong>Workforce impact:</strong> ${trend.workforceImpact}</div>
        <div><strong>Mechanism:</strong> ${trend.mechanism}</div>
        <div><strong>Governance:</strong> ${trend.governance}</div>
        <div><strong>Metrics:</strong> ${trend.metrics}</div>
        <div><strong>Risks:</strong> ${trend.risks}</div>
        <div><strong>Sources:</strong> ${trend.sources}</div>
      </div>
    `;
    trendGrid.appendChild(card);
  });

  document.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-toggle");
      const detail = document.getElementById(`detail-${id}`);
      const isOpen = detail.classList.toggle("active");
      button.textContent = isOpen ? "Hide detail" : "View operational detail";
    });
  });
}

function renderTimeline() {
  timelineContainer.innerHTML = "";
  timeline.forEach((item) => {
    const node = document.createElement("div");
    node.className = "timeline-item";
    node.innerHTML = `
      <div>
        <p class="kicker">${item.date}</p>
        <span>${item.title}</span>
        <p class="metric-label">${item.impact}</p>
      </div>
    `;
    timelineContainer.appendChild(node);
  });
}

function renderScoreboard() {
  scoreboardContainer.innerHTML = "";
  scoreboard.forEach((item) => {
    const card = document.createElement("div");
    card.className = "score-item";
    card.style.setProperty("--value", item.value);
    card.innerHTML = `
      <h4>${item.label}</h4>
      <div class="score-bar"><span></span></div>
      <p class="metric">${item.value}</p>
    `;
    scoreboardContainer.appendChild(card);
  });
}

function renderPanelAmmo() {
  panelContainer.innerHTML = panelAmmo
    .map((point) => `<div class="panel-card"><p>${point}</p></div>`)
    .join("");
}

function renderQuestions() {
  questionContainer.innerHTML = audienceQuestions
    .map((question) => `<div class="question-item">${question}</div>`)
    .join("");
}

function renderSources() {
  sourcesContainer.innerHTML = sources
    .map(
      (source, index) =>
        `<div><span>${index + 1}.</span> <a href="${source.url}" target="_blank" rel="noopener">${source.label}</a></div>`
    )
    .join("");
}

function bindSearch() {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderTrends();
  });
}

function bindReset() {
  resetButton.addEventListener("click", () => {
    state.sector.clear();
    state.theme.clear();
    state.query = "";
    searchInput.value = "";
    document.querySelectorAll(".filter-tag").forEach((tag) => tag.classList.remove("active"));
    renderTrends();
  });
}

function bindScrollButtons() {
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.getAttribute("data-scroll"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".score-item").forEach((item) => observer.observe(item));
}

function hydrateLogo() {
  const logo = document.querySelector(".brand-logo");
  if (!logo) return;
  logo.addEventListener("load", () => {
    logo.classList.add("loaded");
  });
  logo.addEventListener("error", () => {
    logo.remove();
  });
}

renderTags(sectorTags, sectorContainer, "sector");
renderTags(themeTags, themeContainer, "theme");
renderTrends();
renderTimeline();
renderScoreboard();
renderPanelAmmo();
renderQuestions();
renderSources();

bindSearch();
bindReset();
bindScrollButtons();
setupObserver();
hydrateLogo();
