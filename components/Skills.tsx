import Reveal from "./Reveal";

const categories = [
  {
    label: "Core Stack",
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "State & Data",
    tags: [
      "Redux Toolkit",
      "RTK Query",
      "Context API",
      "React Hooks",
      "REST APIs",
    ],
  },
  {
    label: "Visualization",
    tags: [
      "D3.js",
      "Leaflet.js",
      "Choropleth Maps",
      "Heat Maps",
      "Interactive Charts",
    ],
  },
  {
    label: "Testing & Quality",
    tags: [
      "Jest",
      "React Testing Library",
      "ESLint",
      "Prettier",
      "Code Reviews",
    ],
  },
  {
    label: "Styling & UI",
    tags: [
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Atomic Design",
      "Storybook",
    ],
  },
  {
    label: "Build & DevOps",
    tags: ["Webpack", "Vite", "Babel", "CI/CD", "GitHub", "Agile / Scrum"],
  },
  {
    label: "Performance & Quality",
    tags: [
      "Core Web Vitals",
      "WCAG Accessibility",
      "SEO",
      "Lazy Loading",
      "Code Splitting",
      "Web Workers",
    ],
  },
];

const left = categories.slice(0, 3);
const right = categories.slice(3, 6);
const full = categories[6];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-white border-y border-[var(--color-border)]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-archivo text-[clamp(28px,4vw,44px)] font-bold text-[var(--color-fg)] leading-tight mb-14 tracking-tight">
            Built for production.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left column */}
          <div className="divide-y divide-[var(--color-border)] border-b border-[var(--color-border)] lg:border-b-0 lg:border-r lg:pr-10">
            {left.map((cat, i) => (
              <Reveal key={cat.label} delay={0.04 * i}>
                <div className="py-7">
                  <p className="text-xs font-medium text-[var(--color-muted)] mb-2">
                    {cat.label}
                  </p>
                  <p className="text-sm text-[var(--color-fg)] leading-relaxed">
                    {cat.tags.join(", ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right column */}
          <div className="divide-y divide-[var(--color-border)] lg:pl-10">
            {right.map((cat, i) => (
              <Reveal key={cat.label} delay={0.04 * (i + 3)}>
                <div className="py-7">
                  <p className="text-xs font-medium text-[var(--color-muted)] mb-2">
                    {cat.label}
                  </p>
                  <p className="text-sm text-[var(--color-fg)] leading-relaxed">
                    {cat.tags.join(", ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Final full-width category */}
        <div className="border-t border-[var(--color-border)]">
          <Reveal delay={0.04 * 6}>
            <div className="py-7">
              <p className="text-xs font-medium text-[var(--color-muted)] mb-2">
                {full.label}
              </p>
              <p className="text-sm text-[var(--color-fg)] leading-relaxed">
                {full.tags.join(", ")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
