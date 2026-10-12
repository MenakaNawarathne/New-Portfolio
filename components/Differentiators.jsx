import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Problem Solving",
    text: "I break problems into smaller parts and troubleshoot issues step by step.",
  },
  {
    title: "Teamwork",
    text: "I work well in team projects using Git branches, commits, and clear communication.",
  },
  {
    title: "Self-Learning",
    text: "I keep picking up new tools and frameworks on my own.",
  },
  {
    title: "Design + Development",
    text: "My graphic design background helps me build interfaces that look as good as they work.",
  },
];

export default function Differentiators() {
  return (
    <div>
      <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
        What makes me different
      </p>
      <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="h-full bg-ink p-6 text-paper">
              <h3 className="font-display text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
