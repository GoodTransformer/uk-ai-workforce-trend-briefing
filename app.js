const trends = [
  {
    id: "ai-acts-finance",
    title: "AI That Acts in Finance",
    sector: "Finance",
    themes: ["Agentic AI", "Governance", "Workforce"],
    companies: "Lloyds Banking Group (UK)",
    summary: "Banks are moving from GenAI pilots to AI that can take actions in workflows, so people spend less time on routine admin and more time on checks and exceptions.",
    workforceImpact: "Training at scale; routine processing shrinks; demand rises for oversight, controls and process redesign.",
    mechanism: "LLM tools connected to internal systems to draft, search, route and trigger workflow steps.",
    governance: "Mandatory responsible-AI training plus role-based paths for users, builders and leaders.",
    metrics: "Lloyds says the AI Academy covers 67,000 colleagues; target is 100% AI literacy by end of 2026.",
    risks: "Wrong actions at speed; data leakage; weak accountability without logs and escalation rules.",
    sources: "<a href=\"https://www.lloydsbankinggroup.com/assets/pdfs/media/press-releases/2026-press-releases/lloyds/260220-lloyds-launches-ai-academy.pdf\" target=\"_blank\" rel=\"noopener\">Lloyds AI Academy press release (PDF)</a>; <a href=\"https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/ai-driven-benefits-2026.html\" target=\"_blank\" rel=\"noopener\">Lloyds AI-driven benefits 2026</a>",
    soWhat: "The bottleneck moves from having AI to controlling who can act, on what, and when. Expect job redesign towards exception handling and assurance."
  },
  {
    id: "ai-rights-contracts",
    title: "AI Rights in Contracts",
    sector: "Creative",
    themes: ["Governance", "Workforce"],
    companies: "Equity / PACT context (UK film & TV)",
    summary: "UK performers are negotiating clear rules on digital scanning and AI reuse, so consent and compensation are defined up front.",
    workforceImpact: "Sets clear boundaries on how people's likeness and performances can be captured and reused with AI.",
    mechanism: "Contract terms covering scanning, storage, reuse and conditions for synthetic performance.",
    governance: "Collective bargaining used to enforce AI consent and usage rules across productions.",
    metrics: "Equity reports 7,732 eligible; 75.1% turnout; 99%+ support for action to secure AI protections.",
    risks: "Cross-border enforcement; production delays; disputes if consent processes are unclear.",
    sources: "<a href=\"https://www.equity.org.uk/news/2025/performers-prepared-to-take-industrial-action-over-ai-in-landslide-99-vote\" target=\"_blank\" rel=\"noopener\">Equity ballot result and negotiation context</a>",
    soWhat: "AI adoption can trigger labour and legal risk. In more sectors, AI terms will appear in contracts, not just HR policy."
  },
  {
    id: "predictive-staffing",
    title: "Predictive Staffing",
    sector: "Hospitality",
    themes: ["Productivity", "Workforce"],
    companies: "Distinctive Inns (UK)",
    summary: "AI forecasts demand and suggests rotas, so managers spend less time scheduling and staff cover busy periods more accurately.",
    workforceImpact: "Less rota admin; staffing aligns to demand; managers focus more on service quality and coaching.",
    mechanism: "Forecasting models feed labour optimisation and scheduling recommendations.",
    governance: "Human approval remains; rules needed for fairness, fatigue, breaks and predictability.",
    metrics: "Case study reports 2.8% labour savings per site and 9 hours/week less payroll admin and approvals.",
    risks: "Over-optimisation harms service or wellbeing; bias in availability assumptions; staff distrust.",
    sources: "<a href=\"https://uk.fourth.com/case-study/distinctive-inns\" target=\"_blank\" rel=\"noopener\">Fourth case study: Distinctive Inns</a>",
    soWhat: "This directly changes hours and staffing cost. Treat scheduling as a data and governance problem, not just a tool rollout."
  },
  {
    id: "copilots-scale",
    title: "Copilots at Scale",
    sector: "Public Sector",
    themes: ["Productivity", "Governance"],
    companies: "Department for Work and Pensions (UK)",
    summary: "Copilots help staff draft, summarise and find information inside everyday tools, speeding up routine document and email work.",
    workforceImpact: "Drafting and search time falls; review, judgement and stakeholder work grows; new QA habits needed.",
    mechanism: "GenAI embedded into office tools for drafting, summarising and retrieval from internal content.",
    governance: "Rules for sensitive data plus human review for decisions and external outputs.",
    metrics: "Public evaluation reports time savings and adoption insights from DWP's Microsoft 365 Copilot trial.",
    risks: "Hallucinations; inconsistent quality; leakage; uneven adoption across roles.",
    sources: "<a href=\"https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial\" target=\"_blank\" rel=\"noopener\">DWP Copilot trial evaluation</a>",
    soWhat: "Copilots pay off when paired with templates, checklists and review gates. Without that, they increase variance and rework."
  },
  {
    id: "ai-growth-zones",
    title: "AI Growth Zones",
    sector: "Infrastructure",
    themes: ["Infrastructure", "Workforce"],
    companies: "Lanarkshire AI Growth Zone (UK Government / DSIT programme)",
    summary: "The UK is speeding up planning and power access for AI infrastructure, creating local surges in demand for engineering, construction and data-centre roles.",
    workforceImpact: "Pulls demand for data centre build and ops, power engineering, cybersecurity and local training pipelines.",
    mechanism: "Place-based acceleration of planning and infrastructure to unlock compute investment.",
    governance: "Public oversight on local benefit, delivery milestones and infrastructure impacts.",
    metrics: "Government frames Lanarkshire as 3,400 jobs and £8.2bn private investment.",
    risks: "Skills shortages; grid constraints; local opposition; long lead times.",
    sources: "<a href=\"https://www.gov.uk/government/news/more-than-3400-jobs-and-targeted-support-for-local-communities-to-help-tackle-the-cost-of-living-as-lanarkshire-named-latest-ai-growth-zone\" target=\"_blank\" rel=\"noopener\">GOV.UK announcement</a>",
    soWhat: "AI becomes a regional labour-market story. Infrastructure policy can create concentrated demand fast, but delivery depends on skills and grid capacity."
  },
  {
    id: "ai-ready-grid",
    title: "AI-Ready Power Grid",
    sector: "Energy",
    themes: ["Infrastructure", "Governance"],
    companies: "National Grid (UK)",
    summary: "As AI drives electricity demand, grid operators use new forecasting and control tools, shifting work towards resilience, assurance and safe operations.",
    workforceImpact: "More roles in planning, forecasting, resilience operations, safety assurance and cybersecurity.",
    mechanism: "Grid modernisation plus data-driven forecasting and optimisation to manage constraints.",
    governance: "Reliability standards, safety processes, auditability and cyber controls.",
    metrics: "National Grid describes a £30bn investment programme (2025-2029) as part of The Great Grid Upgrade.",
    risks: "Model failure during stress events; cyber risk; opaque vendor systems; accountability gaps.",
    sources: "<a href=\"https://www.nationalgrid.com/the-great-grid-upgrade/whats-happening\" target=\"_blank\" rel=\"noopener\">National Grid overview</a>",
    soWhat: "Energy becomes a constraint on AI growth. Firms need power strategy and operational resilience alongside AI adoption."
  },
  {
    id: "ai-apprenticeships",
    title: "AI Apprenticeships",
    sector: "Insurance",
    themes: ["Workforce", "Governance", "Upskilling"],
    companies: "Zurich UK",
    summary: "Employers are turning AI upskilling into formal apprenticeships, so staff learn practical AI use and safe governance alongside their day jobs.",
    workforceImpact: "Dedicated learning time; faster adoption of approved tools; internal champions who spread practice and standards.",
    mechanism: "17-month programme with live workshops and 1:1 coaching; includes practical AI use plus ethics, governance and accountability; Level 3/4 qualification.",
    governance: "Responsible AI is built into the curriculum with ethics, governance and accountability.",
    metrics: "Zurich reports 92 colleagues in cohort one, around £1.3m levy investment, and 100+ applications; an internal poll found 70% use AI productivity tools daily or weekly, with lack of knowledge a key barrier.",
    risks: "Credential without workflow change; uneven access; shadow AI persists if approved tools and templates lag.",
    sources: "<a href=\"https://www.zurich.co.uk/media-centre/zurich-launches-new-ai-apprenticeship\" target=\"_blank\" rel=\"noopener\">Zurich UK press release</a>",
    soWhat: "This shifts AI from ad hoc usage to repeatable capability-building. Leaders should link training to governance and measurable workflow change."
  },
  {
    id: "exception-led-finance",
    title: "Exception-Led Finance",
    sector: "Finance",
    themes: ["Productivity", "Governance"],
    companies: "Crowe UK",
    summary: "AI automates invoice capture and routing, so finance teams move from data entry to reviewing exceptions and strengthening controls.",
    workforceImpact: "Less manual processing; more time on exceptions, supplier issues, controls and analysis.",
    mechanism: "AI extracts invoice fields, flags anomalies and routes approvals.",
    governance: "Audit trail, segregation of duties, thresholds, and monitoring for drift and fraud.",
    metrics: "Case study reports material reductions in processing effort and review time in an example implementation.",
    risks: "Silent errors at scale; fraud; automating broken processes; weak control design.",
    sources: "<a href=\"https://www.crowe.com/uk/insights/adopting-ai-for-finance\" target=\"_blank\" rel=\"noopener\">Crowe UK insight</a>",
    soWhat: "Back-office AI compounds small savings at scale, but controls are the limiter. Governance and auditability matter as much as automation."
  },
  {
    id: "voice-agents",
    title: "Voice Agents",
    sector: "Contact Centers",
    themes: ["Agentic AI", "Productivity"],
    companies: "Centrica (UK)",
    summary: "Call summarisation is being automated and some centres are piloting voice AI agents, reducing handle time and freeing humans for complex cases.",
    workforceImpact: "Reduced after-call work; shorter handle times; capacity freed for complex cases and sales.",
    mechanism: "Automated call summaries plus early-stage agentic voice flows with escalation to humans.",
    governance: "Pilot-first coverage with monitoring, sampling and clear escalation for edge cases.",
    metrics: "Reported handle-time improvements and journey-level NPS lift in the cited pilot context; pilots cover a minority of queries.",
    risks: "Robotic interactions; compliance issues; speech errors; brand harm if overextended.",
    sources: "<a href=\"https://www.nojitter.com/contact-centers/ai-agents-for-automation-augmentation-and-collaboration\" target=\"_blank\" rel=\"noopener\">No Jitter report (Centrica example)</a>",
    soWhat: "Contact centres are a near-term labour impact zone. The prize is scaling service and quality without scaling headcount, but only with tight governance."
  }
];

const timeline = [
  {
    date: "Feb 2026",
    title: "Output up, jobs down: UK services automate",
    impact: "The UK services sector grew to a five-month high, but employment fell again, extending the longest run of job shedding in 16 years. Firms cite automation and not replacing leavers to protect margins, a clear signal that productivity gains are coming from technology, not headcount.",
    sourceUrl: "https://www.theguardian.com/business/2026/feb/04/uk-service-sector-job-cuts-companies-automate-pmi-survey"
  },
  {
    date: "29 Jan 2026",
    title: "Lanarkshire designated an AI Growth Zone",
    impact: "Government says the designation could crowd in £8.2bn private investment for AI data centres and supporting infrastructure.",
    sourceUrl: "https://questions-statements.parliament.uk/written-statements/detail/2026-01-29/hlws1290"
  },
  {
    date: "29 Jan 2026",
    title: "BBC-reported: Driverless taxis could launch in the UK as early as September",
    impact: "Waymo says it hopes to run London robotaxi pilots in April, with a possible service later in 2026, subject to regulation.",
    sourceUrl: "https://www.bbc.co.uk/news/articles/czej9n578k9o"
  },
  {
    date: "21 Jan 2026",
    title: "Lloyds scales 'agentic AI' from staff pilot to wider deployment",
    impact: "Bank plans to expand use cases and integrate into services, targeting over £100m AI value in 2026.",
    sourceUrl: "https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/ai-driven-benefits-2026.html"
  },
  {
    date: "20 Jan 2026",
    title: "Equity and PACT resume talks on AI scanning and training protections",
    impact: "Improved contract wording proposed on consent and limits for digital scans and reuse in AI training.",
    sourceUrl: "https://www.equity.org.uk/news/2026/equity-welcomes-improved-offer-in-ai-protection-negotiations-in-film-and-tv"
  }
];

const scoreboard = [
  {
    label: "Workers using AI at work",
    value: "88%",
    sourceUrl: "https://www.ey.com/en_gl/newsroom/2025/11/ey-survey-reveals-companies-are-missing-out-on-up-to-40-percent-of-ai-productivity-gains-due-to-gaps-in-talent-strategy"
  },
  {
    label: "Organisations seeing material AI returns",
    value: "6%",
    sourceUrl: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/quantumblack/our%20insights/the%20state%20of%20ai/november%202025/the-state-of-ai-2025-agents-innovation_cmyk-v1.pdf"
  },
  {
    label: "UK businesses currently using AI",
    value: "25%",
    sourceUrl: "https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/businessinsightsandimpactontheukeconomy/8january2026"
  },
  {
    label: "In UK AI-adopting businesses: staff using AI (average)",
    value: "30%",
    sourceUrl: "https://www.gov.uk/government/publications/ai-adoption-research/ai-adoption-research"
  }
];

const panelAmmo = [
  "Adoption is a workflow redesign problem, not a tool rollout. If you cannot point to the exact step that changed in a real process, you do not have adoption yet.",
  "Measure one outcome per use case, or you will measure nothing. Pick a single KPI (time, cost, quality, risk, revenue) and baseline it before you start.",
  "Data handling is the hidden failure point. Define what staff can paste into AI, what systems it can connect to, and what is retained.",
  "Human-in-the-loop needs named owners and triggers. Decide who approves, who audits, and what conditions force escalation or shutdown.",
  "Quality and consistency beat \"cleverness\" in production. Design for predictable outputs: templates, checklists, reference sources, and rollback paths."
];

const audienceQuestions = [
  "Where is AI already being used unofficially, and what is your policy if staff paste sensitive data into those tools?",
  "Which workflow has actually changed, not just been trialled, and what step shifted and moved the numbers?",
  "What is the business case in one KPI, such as cycle time, rework, complaints, late deliveries, utilisation, or win rate?",
  "What data can AI see, what is off-limits, where are outputs stored, and who can access them?",
  "If AI makes a wrong call, who is accountable, who signs off, and what is the stop rule for escalation or shutdown?",
  "If AI takes first drafts of admin and junior work, how will you protect training pathways and progression routes?"
];

const sources = [
  { label: "Tech and transformation - Lloyds Banking Group", url: "https://www.lloydsbankinggroup.com/who-we-are/group-overview/tech-and-transformation.html" },
  { label: "Artificial Intelligence - Lloyds Banking Group", url: "https://www.lloydsbankinggroup.com/who-we-are/group-overview/artificial-intelligence.html" },
  { label: "Lloyds AI-driven benefits 2026 press release", url: "https://www.lloydsbankinggroup.com/media/press-releases/2026/lloyds-banking-group/ai-driven-benefits-2026.html" },
  { label: "Lloyds AI Academy press release (PDF)", url: "https://www.lloydsbankinggroup.com/assets/pdfs/media/press-releases/2026-press-releases/lloyds/260220-lloyds-launches-ai-academy.pdf" },
  { label: "Indicative ballot for AI protections - Equity", url: "https://www.equity.org.uk/campaigns-policy/indicative-ballot-for-ai-protections" },
  { label: "Equity: performers prepared to take industrial action over AI (99% vote)", url: "https://www.equity.org.uk/news/2025/performers-prepared-to-take-industrial-action-over-ai-in-landslide-99-vote" },
  { label: "Equity AI protection negotiations update", url: "https://www.equity.org.uk/news/2026/equity-welcomes-improved-offer-in-ai-protection-negotiations-in-film-and-tv" },
  { label: "AI protections negotiations - AI FILMS Studio", url: "https://studio.aifilms.ai/blog/uk-equity-pact-ai-protection-negotiations-2026" },
  { label: "Unilever Lighthouse site applies AI for impact", url: "https://www.unilever.com/news/news-search/2025/five-ways-unilevers-new-lighthouse-site-applies-ai-for-impact/" },
  { label: "Fourth case study: Distinctive Inns", url: "https://uk.fourth.com/case-study/distinctive-inns" },
  { label: "Parliament statement on Lanarkshire AI Growth Zone", url: "https://questions-statements.parliament.uk/written-statements/detail/2026-01-29/hlws1290" },
  { label: "GOV.UK: Lanarkshire named latest AI Growth Zone", url: "https://www.gov.uk/government/news/more-than-3400-jobs-and-targeted-support-for-local-communities-to-help-tackle-the-cost-of-living-as-lanarkshire-named-latest-ai-growth-zone" },
  { label: "DWP Microsoft 365 Copilot Trial - GOV.UK", url: "https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-365-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial" },
  { label: "Evaluation of the Flexible AI Upskilling Fund (DSIT)", url: "https://www.gov.uk/government/publications/evaluation-of-the-flexible-ai-upskilling-fund/evaluation-of-the-flexible-ai-upskilling-fund" },
  { label: "BBC: Driverless taxis could launch in the UK as early as September", url: "https://www.bbc.co.uk/news/articles/czej9n578k9o" },
  { label: "Zurich UK AI apprenticeship press release", url: "https://www.zurich.co.uk/media-centre/zurich-launches-new-ai-apprenticeship" },
  { label: "Crowe UK: adopting AI for finance", url: "https://www.crowe.com/uk/insights/adopting-ai-for-finance" },
  { label: "No Jitter: AI agents for automation, augmentation, and collaboration", url: "https://www.nojitter.com/contact-centers/ai-agents-for-automation-augmentation-and-collaboration" },
  { label: "AI in hiring: Risk, rights, and responsibility - Shoosmiths", url: "https://www.shoosmiths.com/perspectives/stories/articles/ai-in-hiring-risk-rights-and-responsibility" },
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
  { label: "CIPD: UK employment law changes", url: "https://www.cipd.org/uk/views-and-insights/thought-leadership/insight/employment-law-changes-january-2026/" },
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

  results.forEach((trend, index) => {
    const number = String(index + 1).padStart(2, "0");
    const card = document.createElement("article");
    card.className = "trend-card";
    card.innerHTML = `
      <div class="trend-tags">
        <span>${trend.sector}</span>
        ${trend.themes.map((theme) => `<span>${theme}</span>`).join("")}
      </div>
      <div class="trend-header">
        <span class="trend-number">${number}</span>
        <h4>${trend.title}</h4>
      </div>
      <p>${trend.summary}</p>
      <button class="ghost" data-toggle="${trend.id}">View operational detail</button>
      <div class="trend-details" id="detail-${trend.id}">
        <div><strong>Companies:</strong> ${trend.companies}</div>
        <div><strong>Workforce impact:</strong> ${trend.workforceImpact}</div>
        <div><strong>Mechanism:</strong> ${trend.mechanism}</div>
        <div><strong>Governance:</strong> ${trend.governance}</div>
        <div><strong>Metrics:</strong> ${trend.metrics}</div>
        <div><strong>Risks:</strong> ${trend.risks}</div>
        <div><strong>So what:</strong> ${trend.soWhat}</div>
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
    const node = document.createElement("a");
    node.className = "timeline-item";
    node.href = item.sourceUrl;
    node.target = "_blank";
    node.rel = "noopener";
    node.innerHTML = `
      <div>
        <p class="kicker">${item.date}</p>
        <span>${item.title}</span>
        <p class="metric-label">${item.impact}</p>
      </div>
      <span class="timeline-link">Read source</span>
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
      <a class="score-source" href="${item.sourceUrl}" target="_blank" rel="noopener">Read source</a>
    `;
    scoreboardContainer.appendChild(card);
  });
}

function renderPanelAmmo() {
  panelContainer.innerHTML = panelAmmo
    .map((point, index) => {
      const number = String(index + 1).padStart(2, "0");
      return `
        <div class="panel-card">
          <div class="panel-meta"><span class="panel-number">${number}</span></div>
          <p>${point}</p>
        </div>
      `;
    })
    .join("");
}

function renderQuestions() {
  questionContainer.innerHTML = audienceQuestions
    .map((question) => `<div class="question-item">${question}</div>`)
    .join("");
}

function renderSources() {
  const midpoint = Math.ceil(sources.length / 2);
  const columns = [[], []];

  sources.forEach((source, index) => {
    const columnIndex = index < midpoint ? 0 : 1;
    columns[columnIndex].push(
      `<div><span>${index + 1}.</span> <a href="${source.url}" target="_blank" rel="noopener">${source.label}</a></div>`
    );
  });

  sourcesContainer.innerHTML = columns
    .map((items) => `<div class="sources-column">${items.join("")}</div>`)
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

function scrollToTarget(selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  const header = document.querySelector(".site-header");
  let offset = 0;
  if (header) {
    const position = window.getComputedStyle(header).position;
    const isSticky = position.includes("sticky");
    offset = isSticky ? header.getBoundingClientRect().height + 12 : 0;
  }
  const top = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - offset);
  window.scrollTo({ top, behavior: "smooth" });
}

function bindScrollButtons() {
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      scrollToTarget(button.getAttribute("data-scroll"));
    });
  });
}

function bindNavLinks() {
  document.querySelectorAll(".site-nav a[href^=\"#\"]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToTarget(link.getAttribute("href"));
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
bindNavLinks();
setupObserver();
hydrateLogo();

if (!window.location.hash) {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
}
bindNavLinks();
