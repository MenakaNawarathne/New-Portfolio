import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SKILLS = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "REST APIs",
  "Firebase",
  "Firestore",
  "Git",
  "GitHub",
];

const CAPABILITIES = [
  "Component-based architecture",
  "Reusable UI development",
  "Responsive web applications",
  "API integration",
  "Real-time applications",
  "State management",
  "Performance optimization",
  "Error handling",
  "Debugging",
  "Accessibility",
  "Cross-browser compatibility",
];

export default function Frontend() {
  return (
    <section id="frontend" className="border-b border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="/frontend — what I do"
            title="Frontend Development"
            lede="I build responsive, scalable, and maintainable frontend applications using modern technologies."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              Capabilities
            </h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-trace" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
