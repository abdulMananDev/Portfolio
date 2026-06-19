import { Mail, Phone, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#09090B] text-white">
      {/* Tight gradient entry into the dark zone */}
      <div className="bg-gradient-to-b from-[#FAFAFA] to-[#09090B]" />

      <div className="max-w-5xl mx-auto px-6 pt-6 pb-28">
        <Reveal>
          <h2 className="font-archivo text-[clamp(28px,4vw,52px)] font-bold leading-tight tracking-tight mb-4 text-white">
            Let&apos;s build something
            <br />
            great together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base text-zinc-400 font-light max-w-md mb-12">
            Open to senior frontend roles at remote-first, global companies. I
            reply within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:malikmanan97@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[var(--color-accent)] text-white text-sm font-semibold rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Mail size={15} />
              malikmanan97@gmail.com
              <ArrowRight size={14} />
            </a>
            <a
              href="tel:+919596460305"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-zinc-700 text-zinc-300 text-sm font-semibold rounded-md hover:border-zinc-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Phone size={15} />
              +91 9596460305
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Remote, full-time",
              "IST timezone, flexible",
              "Available now",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-3 py-1.5 border border-zinc-800 rounded-full text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
