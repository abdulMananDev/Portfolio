"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const jobs = [
  {
    title: "Senior Front-End Developer",
    company: "Sehr Infotech",
    location: "New Delhi",
    period: "Jun 2024 - Present",
    current: true,
    bullets: [
      "Drove a 40% reduction in page load time via code splitting and lazy loading, cutting LCP from ~4s to under 2s.",
      "Shipped a TypeScript atomic component library that cut new-feature scaffolding by ~35% team-wide.",
      "Delivered 6 client modules (RBAC, dynamic filters, CSV/PDF export), contributing to 20% growth in contract renewals.",
    ],
  },
  {
    title: "Mid-Senior Front-End Developer",
    company: "Alagzoo Softwares",
    location: "Remote",
    period: "May 2023 - Jun 2024",
    current: false,
    bullets: [
      "Achieved top-3 SEO rankings within 3 months on a Next.js yacht-realtor platform via SSR and structured data markup.",
      "Improved on-time delivery by 15% directing standups, pair programming, and code reviews for a team of 3.",
      "Architected a multilingual i18n system supporting 4 languages across 3 new international markets.",
    ],
  },
  {
    title: "Junior Front-End Developer",
    company: "Alagzoo Softwares",
    location: "Remote",
    period: "Jun 2021 - Mar 2023",
    current: false,
    bullets: [
      "~20% faster delivery across 4 concurrent projects via a shared Storybook component library.",
      "Mentored 2 junior developers on React and Redux patterns, cutting UI rework by 20% sprint over sprint.",
    ],
  },
];

function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(/(~?\d+%|\d+\+|\btop-\d+\b)/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-[var(--color-fg)]">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

type Job = (typeof jobs)[0];

function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);
  const moreBullets = job.bullets.slice(1);

  return (
    <div className="relative pl-8 pb-14 border-l border-[var(--color-border)] last:border-l-transparent last:pb-0">
      {/* Timeline dot */}
      <div
        className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
          job.current
            ? "bg-[var(--color-accent)] border-[var(--color-accent)]"
            : "bg-white border-[var(--color-border)]"
        }`}
      />

      {/* Meta */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <span className="font-archivo font-bold text-lg text-[var(--color-fg)]">
          {job.title}
        </span>
        {job.current && (
          <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 bg-blue-50 text-[var(--color-accent)] border border-blue-200 rounded-full">
            Current
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-accent)] font-medium mb-0.5">
        {job.company} · {job.location}
      </p>
      <p className="text-xs text-[var(--color-muted)] font-medium tracking-wide uppercase mb-4">
        {job.period}
      </p>

      {/* First bullet — always visible, leads with the metric */}
      <p className="text-sm text-[var(--color-muted)] leading-relaxed font-light">
        <HighlightNumbers text={job.bullets[0]} />
      </p>

      {/* Expandable remaining bullets */}
      <AnimatePresence initial={false}>
        {expanded && moreBullets.length > 0 && (
          <motion.div
            key="extra"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="pt-3 flex flex-col gap-2.5">
              {moreBullets.map((b, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-sm text-[var(--color-muted)] leading-relaxed font-light"
                >
                  <span className="text-[var(--color-accent)] mt-1.5 shrink-0 text-[10px]">
                    ▸
                  </span>
                  <span>
                    <HighlightNumbers text={b} />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      {moreBullets.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="mt-3 text-[11px] font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors duration-150 tracking-wide"
        >
          {expanded ? "Show less" : `+${moreBullets.length} more`}
        </button>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-archivo text-[clamp(28px,4vw,44px)] font-bold text-[var(--color-fg)] leading-tight mb-4 tracking-tight">
            5 years. 3 companies.
            <br />
            Shipped every time.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-0">
          {jobs.map((job, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <JobCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
