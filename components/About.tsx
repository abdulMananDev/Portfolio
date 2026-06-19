import Reveal from "./Reveal";

const meta = [
  { label: "Location", value: "Delhi, India, remote-ready" },
  { label: "Timezone", value: "IST (UTC+5:30), flexible" },
  { label: "Education", value: "B.Tech CS, GPA 8.45" },
  { label: "Email", value: "malikmanan97@gmail.com", href: "mailto:malikmanan97@gmail.com" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-archivo text-[clamp(28px,4vw,44px)] font-bold text-[var(--color-fg)] leading-tight mb-4 tracking-tight">
            The developer
            <br />
            behind the work.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — bio paragraphs, staggered 80ms each */}
          <div className="flex flex-col gap-5 text-sm text-[var(--color-muted)] leading-relaxed font-light">
            <Reveal delay={0.1} y={16}>
              <p>
                I&apos;m a{" "}
                <strong className="font-semibold text-[var(--color-fg)]">
                  Senior Front-End Developer from Delhi, India
                </strong>{" "}
                with 5+ years of experience turning complex requirements into clean,
                fast, and maintainable web applications.
              </p>
            </Reveal>
            <Reveal delay={0.18} y={16}>
              <p>
                My niche is the intersection of{" "}
                <strong className="font-semibold text-[var(--color-fg)]">
                  data visualization and performance engineering.
                </strong>{" "}
                I&apos;ve built government dashboards for Indonesia, multilingual SaaS
                platforms for international markets, and component libraries used by
                teams of 10+.
              </p>
            </Reveal>
            <Reveal delay={0.26} y={16}>
              <p>
                I work best in{" "}
                <strong className="font-semibold text-[var(--color-fg)]">
                  collaborative, remote-first teams
                </strong>{" "}
                where shipping fast and iterating faster is the norm.
              </p>
            </Reveal>
          </div>

          {/* Right — meta rows, staggered 60ms each, then recognition */}
          <div>
            <dl className="flex flex-col gap-4">
              {meta.map((item, i) => (
                <Reveal key={item.label} delay={0.15 + i * 0.06} y={12}>
                  <div className="flex items-baseline gap-6">
                    <dt className="text-xs font-medium text-[var(--color-muted)] w-[90px] shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-[var(--color-fg)]">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[var(--color-fg)] no-underline hover:text-[var(--color-accent)] hover:underline underline-offset-2 transition-colors duration-150"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.39} y={12}>
              <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                <p className="text-xs font-medium text-[var(--color-muted)] mb-1">
                  Recognition
                </p>
                <p className="text-sm text-[var(--color-fg)]">
                  Best Front-End Developer, Q1 2022
                </p>
                <p className="text-xs text-[var(--color-muted)] font-light mt-1">
                  Recognized by clients and auditors for proactive delivery.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
