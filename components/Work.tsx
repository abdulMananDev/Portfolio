"use client";
import Link from "next/link";
import {
  Globe,
  Users,
  Map,
  BarChart2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Reveal from "./Reveal";

type ExternalLinkItem = { label: string; href: string };

const projects: {
  slug: string;
  label: string;
  title: string;
  description: string;
  tech: string[];
  showNo?: Boolean;
  icon: typeof Globe;
  color: string;
  iconColor: string;
  badge: string;
  externalLinks?: ExternalLinkItem[];
  privateLabel?: string;
  ctaLabel?: string;
}[] = [
  // Top row
  {
    slug: "territory-intelligence",
    label: "Enterprise · Geospatial",
    title: "Territory Intelligence Platform",
    description:
      "Enterprise sales-optimization suite handling 200k+ row datasets. Cut map render time from ~60s to ~10s with viewport-aware marker loading. Interactive Leaflet maps, custom analytics composition, and territory modeling.",
    tech: ["D3.js", "Leaflet.js", "jQuery", "Bootstrap", ".NET Core"],
    icon: Globe,
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-600",
    badge: "200K Rows · 6x Faster",
    privateLabel: "Client project",
    ctaLabel: "Case study",
  },
  {
    slug: "leadvector",
    label: "SaaS · AI-Powered",
    title: "LeadVector AI",
    description:
      "SaaS lead-management platform — marketing site and production app. Built dashboards that turn complex AI-generated lead data into clear, actionable infographics, with third-party integrations (Membrane) extending client workflows.",
    tech: ["Next.js", "React", "Responsive", "SEO"],
    icon: BarChart2,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    badge: "Live Production",
    showNo: true,
    externalLinks: [
      { label: "Marketing site", href: "https://leadvector.ai" },
      { label: "App", href: "https://app.leadvector.ai" },
    ],
  },
  // Bottom row
  {
    slug: "indonesia-dashboard",
    label: "Government · Data Visualization",
    title: "Indonesia Digital Economy Dashboard",
    description:
      "Government-commissioned interactive dashboard visualising digital economy KPIs across all 34 provinces. D3.js choropleth maps, real-time REST API feeds, 50k+ row datasets rendered with virtualisation, WCAG 2.1 AA compliant.",
    tech: ["React.js", "D3.js", "Leaflet.js", "REST APIs", "WCAG"],
    icon: Map,
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
    badge: "34 Provinces · Live",
    showNo: true,
    externalLinks: [{ label: "App", href: "https://idie.bappenas.go.id/" }],
  },
  {
    slug: "upliftarray",
    label: "Mental Health · WebRTC",
    title: "UpliftArray",
    description:
      "Internal A/B testing and feature-flag platform with a custom Bayesian statistics engine — eliminated $38k/year in third-party tooling costs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    icon: Users,
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    badge: "Mental Health · WebRTC",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-28 px-6 bg-white border-y border-[var(--color-border)]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-[var(--color-accent)]" />
            <span className="text-xs font-medium text-[var(--color-muted)]">
              Selected work
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-archivo text-[clamp(28px,4vw,44px)] font-bold text-[var(--color-fg)] leading-tight mb-14 tracking-tight">
            Projects that ship
            <br />
            and scale.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const cardClassName =
              "group flex flex-col border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)] hover:shadow-md transition-all duration-300 h-full";
            const cardContent = (
              <>
                {/* Visual */}
                <div
                  className={`min-h-[150px] ${p.color} border-b border-[var(--color-border)] flex flex-col items-center justify-center gap-2 p-8`}
                >
                  <Icon className={p.iconColor} size={38} strokeWidth={1.5} />
                  <p
                    className={`text-[10px] font-semibold tracking-widest uppercase ${p.iconColor}`}
                  >
                    {p.badge}
                  </p>
                </div>
                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-2">
                    {p.label}
                  </p>
                  <h3 className="font-archivo font-bold text-lg text-[var(--color-fg)] mb-3 tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] font-light leading-relaxed flex-1 mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[var(--color-muted-light)] text-[var(--color-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.externalLinks || p.privateLabel ? (
                    <div className="flex flex-col gap-2.5 mt-auto">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        {p.externalLinks &&
                          p.externalLinks.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline underline-offset-4"
                            >
                              {link.label} <ExternalLink size={12} />
                            </a>
                          ))}
                        {p.privateLabel && (
                          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-muted)]">
                            {p.privateLabel}
                          </span>
                        )}
                      </div>
                      {!p.showNo ? (
                        <Link
                          href={`/work/${p.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline underline-offset-4"
                        >
                          {p.ctaLabel ?? "View case study"}{" "}
                          <ArrowRight size={13} />
                        </Link>
                      ) : null}
                    </div>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] group-hover:underline underline-offset-4 mt-auto">
                      View case study <ArrowRight size={13} />
                    </span>
                  )}
                </div>
              </>
            );
            return (
              <Reveal key={p.slug} delay={0.08 + 0.07 * i}>
                {p.externalLinks || p.privateLabel ? (
                  <div className={cardClassName}>{cardContent}</div>
                ) : (
                  <Link href={`/work/${p.slug}`} className={cardClassName}>
                    {cardContent}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
