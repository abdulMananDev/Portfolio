"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Terminal from "./Terminal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="min-h-[100dvh] flex items-center px-6">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center pt-20 pb-16">
        {/* Left — identity + CTAs */}
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-[var(--color-muted)]">
              Available for remote roles
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            className="font-archivo text-[clamp(40px,6vw,72px)] font-bold leading-[1.0] tracking-tight text-[var(--color-fg)] mb-4"
          >
            Abdul Manan
            <br />
            <span className="text-[var(--color-accent)]">Malik</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.22 }}
            className="text-sm font-medium text-[var(--color-muted)] tracking-wide mb-5"
          >
            Senior Front-End Developer · React.js · Next.js · TypeScript
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.34 }}
            className="text-base md:text-lg text-[var(--color-muted)] font-light leading-relaxed max-w-md mb-10"
          >
            I build fast, data-rich web applications for teams that ship.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.46 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View Work <ArrowRight size={14} />
            </a>
            <a
              href="/resume/Abdul Manan Resume - CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-fg)] text-sm font-semibold rounded-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Download size={14} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Right — terminal (desktop only) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="hidden lg:block"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
