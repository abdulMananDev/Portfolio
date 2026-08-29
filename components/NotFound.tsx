"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

const ease = [0.16, 1, 0.3, 1] as const;

export default function NotFound() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-[100dvh] flex items-center px-6">
      <div className="w-full max-w-2xl mx-auto py-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-xs font-medium text-[var(--color-muted)]">
            404 · route not found
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.1 }}
          className="font-archivo text-[clamp(40px,6vw,72px)] font-bold leading-[1.0] tracking-tight text-[var(--color-fg)] mb-4"
        >
          Dead
          <br />
          <span className="text-[var(--color-accent)]">link</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
          className="text-base md:text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-md mb-10"
        >
          That page never shipped — or it moved. Here&apos;s everything that
          does exist.
        </motion.p>

        {/* Terminal — mirrors the shell on the home page */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.34 }}
          className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-950 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.22)] font-mono text-[13px] mb-10"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-[11px] text-zinc-500 tracking-wide">
              zsh
            </span>
          </div>

          <div className="p-5 leading-relaxed overflow-x-auto">
            <div className="flex items-center gap-2 text-zinc-100 whitespace-nowrap">
              <span className="text-[var(--color-accent)] select-none">$</span>
              <span>cd .{pathname}</span>
            </div>
            <div className="text-red-400 pl-4 whitespace-nowrap">
              cd: no such file or directory
            </div>

            <div className="h-2.5" />

            <div className="flex items-center gap-2 text-zinc-100 whitespace-nowrap">
              <span className="text-[var(--color-accent)] select-none">$</span>
              <span>ls ./work</span>
            </div>

            <ul className="pl-4 mt-1 space-y-1">
              {caseStudies.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    href={`/work/${cs.slug}`}
                    className="group inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    <span className="underline decoration-zinc-700 underline-offset-4 group-hover:decoration-emerald-400">
                      {cs.slug}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-zinc-100 mt-3 whitespace-nowrap">
              <span className="text-[var(--color-accent)] select-none">$</span>
              <span
                className="inline-block w-[7px] h-[14px] bg-zinc-100"
                style={{ opacity: cursorOn ? 1 : 0 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.46 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <ArrowLeft size={14} /> Back home
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-fg)] text-sm font-semibold rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            View work
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
