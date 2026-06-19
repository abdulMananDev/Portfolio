export type BuiltBlock = {
  heading?: string;
  paragraph?: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  tags: string[];
  meta: string;
  overview: string;
  problem: string;
  builtBlocks: BuiltBlock[];
  outcome: string;
  showNo?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "territory-intelligence",
    label: "Enterprise · Geospatial Analytics",
    title: "Territory Intelligence Platform",
    summary:
      "Enterprise sales-optimization suite — interactive maps, custom analytics composition, and territory modeling on 200k+ row datasets.",
    tags: [
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Leaflet.js",
      "D3.js",
      ".NET Core",
    ],
    meta: "Client project · Role: Frontend lead",
    overview:
      "A sales-optimization platform that ingests CRM data — from Excel, APIs, or direct CRM exports — and transforms it into territory analytics, custom dashboards, and interactive maps. I led the frontend, owning the UI architecture across three distinct product surfaces, and the performance work that made enterprise-scale datasets usable in the browser.",
    problem:
      "Rendering a 200,000-row dataset on an interactive map locked the browser for roughly a minute. For a sales tool used daily by enterprise teams, that wasn't usable — it was a tool people avoided. The challenge wasn't just speed; it was making the data feel responsive at scale, on a legacy jQuery + Bootstrap stack where modern rendering optimizations don't come for free.",
    builtBlocks: [
      {
        heading: "Performance — viewport-aware marker loading",
        paragraph:
          "Cut map render time from ~60s to ~10s by rendering only ~600 markers per zoom level and progressively loading the next batch as the user zooms. The map now feels instant at any scale.",
      },
      {
        heading: "Three products, one codebase",
        bullets: [
          "Optimization — territory modeling that generates territories from statistical inputs (target territory count, optimization metric).",
          "Visualization — bar, line, and thematic heatmap views with custom-metric composition. Users build derived metrics (e.g. revenue-per-capita filtered by region and time window) and drill down by clicking a state on a thematic map to surface that region's data.",
          "Lead routing — a custom rule builder where users define routing logic through a drag-to-reorder interface.",
        ],
      },
      {
        heading: "Architecture decisions",
        bullets: [
          "Models and reports load inside iframes to isolate them from the main dashboard, preventing heavy widgets from blocking the primary render.",
          "A customizable scoreboard lets managers compose multiple reports side-by-side as widgets and share across the team.",
          "Models and reports support public/private visibility and sharing between managers and salespeople.",
        ],
      },
    ],
    outcome:
      "The 60s → 10s improvement made the map a daily-use tool instead of an avoided one. The three-product architecture let one codebase serve different user workflows without forking — optimization for analysts, visualization for managers, lead routing for sales ops.",
  },
  {
    slug: "leadvector",
    label: "SaaS · AI-Powered",
    title: "LeadVector AI",
    summary:
      "SaaS lead-management platform — marketing site and production app turning AI-generated lead data into actionable infographics.",
    tags: ["Next.js", "React", "Responsive", "SEO"],
    meta: "Live: leadvector.ai · app.leadvector.ai",
    overview:
      "A SaaS lead-management platform with two surfaces: a marketing site at leadvector.ai and a production application at app.leadvector.ai. I built the frontend across both — the public site in Next.js, the application in React.",
    problem:
      "The AI engine produced rich lead-scoring data, but raw model output isn't usable by business users. They needed clear, scannable infographics — not data tables. The challenge was designing dashboards that bridged the AI engine and non-technical users, and integrating third-party services (like Membrane) to extend client workflows without bloating the interface.",
    builtBlocks: [
      {
        bullets: [
          "Dashboards that transform complex AI-generated lead data into clear, actionable infographics for end users.",
          "Third-party integrations (including Membrane) extending application functionality and streamlining client workflows.",
          "Responsive, user-friendly interfaces across both the marketing site and the production app — the layer that bridges the AI engine and business users.",
        ],
      },
    ],
    outcome:
      "Both surfaces ship in production. The dashboard layer is what drives engagement — users land on infographics, not raw data, and act on them.",
  },
  {
    slug: "indonesia-dashboard",
    label: "Government · Data Visualization",
    title: "Indonesia Digital Economy Dashboard",
    summary:
      "Government-commissioned platform tracking digital-economy KPIs across all 34 Indonesian provinces.",
    tags: ["React", "D3.js", "Leaflet.js", "REST APIs", "WCAG"],
    meta: "Live: idie.bappenas.go.id · Government project",
    overview:
      "A government-commissioned interactive dashboard built for Bappenas, tracking digital-economy KPIs across all 34 provinces of Indonesia. Used as a decision-support tool by government stakeholders.",
    problem:
      "Visualizing 50,000+ row datasets in the browser without sacrificing interactivity — and doing it to WCAG 2.1 AA accessibility standards, since a government tool has to be usable by everyone. Choropleth maps at province granularity, real-time API feeds, and dataset sizes that would break a naive React render.",
    builtBlocks: [
      {
        bullets: [
          "D3.js choropleth maps at province granularity with interactive drill-downs.",
          "Virtualised rendering for 50,000+ row datasets, keeping the interface responsive at scale.",
          "Real-time REST API feeds for live KPI updates.",
          "WCAG 2.1 AA compliance across the full interface — keyboard navigation, screen-reader support, contrast ratios.",
        ],
      },
    ],
    outcome:
      "Live in production at idie.bappenas.go.id, used as a decision-support tool by government decision-makers across all 34 Indonesian provinces.",
  },
  {
    slug: "upliftarray",
    label: "Social Impact · Mental Health",
    title: "UpliftArray",
    summary:
      "A counselor–student wellbeing platform — role-based access, scheduling, and in-app WebRTC video calls for campus mental-health support.",
    tags: ["React", "WebRTC", "RBAC", "Playwright"],
    meta: "Social impact · Mental health",
    overview:
      "A platform connecting college students with counselors for mental-health support — stress, anxiety, and depression. Students browse and choose a counselor they're comfortable with, then communicate and meet through the platform. I worked across onboarding, access control, and the real-time meeting features.",
    problem:
      "Three distinct user types (student, counselor, admin), each needing access to a different slice of the system. A counselor shouldn't see another counselor's session notes. A student shouldn't see the admin dashboard. Role enforcement had to be airtight on both UI and server. Layered on top of that: real-time video calls reliable enough for an actual counseling session.",
    builtBlocks: [
      {
        bullets: [
          "Role-based access enforced on both the UI and the server, scoping each role to only the resources their role permits.",
          "Onboarding flows tailored to each role — students browse and select counselors, counselors set availability, admins manage the system.",
          "Session scheduling with calendar integration.",
          "In-app video calls built on WebRTC, with signaling for reliable connection across networks.",
          "End-to-end test coverage with Playwright across the critical flows.",
        ],
      },
    ],
    showNo: true,
    outcome:
      "A platform where students and counselors meet, schedule, and connect for mental-health support — with the role boundaries and session reliability the use case demands.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
