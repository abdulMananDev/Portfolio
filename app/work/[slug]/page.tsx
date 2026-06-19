import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — Abdul Manan Malik`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Minimal top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-archivo font-bold text-sm tracking-tight text-[var(--color-fg)]"
          >
            AM<span className="text-[var(--color-accent)]">.</span>
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            All work
          </Link>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="pt-20 pb-14 px-6 border-b border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors mb-8"
              >
                <ArrowLeft size={15} />
                Back to work
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-muted)] mb-5">
                {study.label}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-archivo font-bold text-[clamp(32px,5vw,60px)] text-[var(--color-fg)] leading-[1.1] tracking-tight mb-5">
                {study.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg text-[var(--color-secondary)] font-light leading-relaxed max-w-2xl mb-3">
                {study.summary}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-sm text-[var(--color-muted)] font-medium mb-8">
                {study.meta}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-md bg-[var(--color-muted-light)] text-[var(--color-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Hero image slot */}
        {/* <section className="px-6 py-12 bg-white border-b border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[var(--color-muted-light)]">
                <Image
                  src={`/projects/${study.slug}/hero.jpg`}
                  alt={`${study.title} — main screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            </Reveal>
          </div>
        </section> */}

        {/* Content */}
        <div className="px-6 py-20">
          <div className="max-w-3xl mx-auto space-y-20">
            {/* Overview */}
            <Reveal>
              <section>
                <SectionLabel>Overview</SectionLabel>
                <p className="text-[var(--color-secondary)] leading-[1.8] text-base">
                  {study.overview}
                </p>
              </section>
            </Reveal>

            {/* Screenshot pair */}
            {!study.showNo && (
              <Reveal>
                <div className="h-[240px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ImageSlot
                    src={`/projects/${study.slug}/screen-1.jpg`}
                    alt={`${study.title} — detail view 1`}
                  />
                  <ImageSlot
                    src={`/projects/${study.slug}/screen-2.jpg`}
                    alt={`${study.title} — detail view 2`}
                  />
                </div>
              </Reveal>
            )}

            {/* Problem */}
            <Reveal>
              <section>
                <SectionLabel>The problem</SectionLabel>
                <p className="text-[var(--color-secondary)] leading-[1.8] text-base">
                  {study.problem}
                </p>
              </section>
            </Reveal>

            {/* What I built */}
            <Reveal>
              <section>
                <SectionLabel>What I built</SectionLabel>
                <div className="space-y-8">
                  {study.builtBlocks.map((block, i) => (
                    <div key={i}>
                      {block.heading && (
                        <h3 className="font-archivo font-semibold text-[var(--color-fg)] text-base tracking-tight mb-3">
                          {block.heading}
                        </h3>
                      )}
                      {block.paragraph && (
                        <p className="text-[var(--color-secondary)] leading-[1.8] text-base">
                          {block.paragraph}
                        </p>
                      )}
                      {block.bullets && (
                        <ul className="space-y-3">
                          {block.bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-4">
                              <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                              <span className="text-[var(--color-secondary)] leading-[1.8] text-base">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Built detail screenshot */}
            {!study?.showNo && (
              <Reveal>
                <div className="h-[240px] relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[var(--color-muted-light)]">
                  <Image
                    src={`/projects/${study.slug}/screen-3.jpg`}
                    alt={`${study.title} — built detail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              </Reveal>
            )}

            {/* Outcome */}
            <Reveal>
              <section>
                <SectionLabel>Outcome</SectionLabel>
                <p className="text-[var(--color-secondary)] leading-[1.8] text-base">
                  {study.outcome}
                </p>
              </section>
            </Reveal>

            {/* Footer nav */}
            <Reveal>
              <div className="pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
                >
                  <ArrowLeft size={15} />
                  Back to all work
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:underline underline-offset-4"
                >
                  Get in touch <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-5 h-px bg-[var(--color-accent)]" />
      <h2 className="font-archivo font-semibold text-[var(--color-fg)] text-xl tracking-tight">
        {children}
      </h2>
    </div>
  );
}

function ImageSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-muted-light)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}
