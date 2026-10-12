import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    text: "Identify the actual problem and expected behavior.",
  },
  {
    n: "02",
    title: "Investigate",
    text: "Analyze errors, logs, code, dependencies, and system behavior.",
  },
  {
    n: "03",
    title: "Reason",
    text: "Break the problem into smaller components and identify possible root causes.",
  },
  {
    n: "04",
    title: "Test",
    text: "Evaluate different solutions and verify assumptions.",
  },
  {
    n: "05",
    title: "Fix",
    text: "Implement the most reliable solution.",
  },
  {
    n: "06",
    title: "Validate",
    text: "Make sure the fix works without creating new issues.",
  },
  {
    n: "07",
    title: "Improve",
    text: "Refactor or improve the implementation when necessary.",
  },
];

export default function Debugging() {
  return (
    <section id="debugging" className="border-b border-line bg-paper-dim py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="/debugging"
            title={"I Don't Just Fix Errors. I Find the Root Cause."}
            lede="When something breaks, I focus on understanding why it happened rather than applying a quick workaround."
          />
        </Reveal>

        <ol className="relative border-l border-line pl-8 sm:pl-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <li className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-trace bg-paper font-mono text-[10px] text-trace sm:-left-[49px]">
                  {step.n}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
