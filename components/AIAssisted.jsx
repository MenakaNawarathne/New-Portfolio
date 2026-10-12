import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const AREAS = [
  "Code generation",
  "Code refactoring",
  "Debugging",
  "Error analysis",
  "Technical research",
  "Problem decomposition",
  "Architecture exploration",
  "Documentation",
  "Testing ideas",
  "Optimization",
  "Rapid prototyping",
];

export default function AIAssisted() {
  return (
    <section id="ai" className="border-b border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="/ai-assisted"
              title="AI-Assisted Development"
              lede="I use AI as part of my development workflow to improve productivity, explore solutions, and accelerate problem solving."
            />
            <p className="max-w-md text-balance text-[15px] leading-relaxed text-ink-soft">
              I use AI to accelerate the development process while relying on{" "}
              <strong className="font-medium text-ink">
                engineering reasoning, testing, and validation
              </strong>{" "}
              to ensure the final solution is reliable and appropriate.
            </p>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="rounded-sm border border-line bg-paper-dim p-6 sm:p-8">
              <p className="mb-5 font-mono text-xs uppercase tracking-wider text-muted">
                Working Smarter with AI — supports my workflow in
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                {AREAS.map((area) => (
                  <div key={area} className="text-sm leading-snug text-ink-soft">
                    <span className="mr-1.5 font-mono text-trace">·</span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
