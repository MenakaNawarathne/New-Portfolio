import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const UX_SKILLS = [
  "User flows",
  "Information architecture",
  "Wireframing",
  "User journeys",
  "Usability",
  "Interaction design",
  "Responsive UX",
  "Accessibility",
];

const UI_SKILLS = [
  "Visual hierarchy",
  "Typography",
  "Spacing systems",
  "Component design",
  "Design systems",
  "Responsive interfaces",
  "Interaction states",
  "Micro-interactions",
];

const TOOLS = ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop", "FigJam"];

export default function UIUX() {
  return (
    <section id="ui-ux" className="border-b border-line bg-paper-dim py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="/ui-ux"
            title="UI/UX Design"
            lede="My UI/UX experience allows me to approach development from the perspective of both the user and the product. I focus on creating interfaces that are not only visually polished but also intuitive, consistent, accessible, and easy to use."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal>
            <SkillCard title="UX Skills" items={UX_SKILLS} accent="trace" />
          </Reveal>
          <Reveal delay={90}>
            <SkillCard title="UI Skills" items={UI_SKILLS} accent="copper" />
          </Reveal>
          <Reveal delay={180}>
            <SkillCard title="Tools" items={TOOLS} accent="trace" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, items, accent }) {
  const dot = accent === "copper" ? "bg-copper" : "bg-trace";
  return (
    <div className="h-full rounded-sm border border-line bg-paper p-6">
      <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
            <span className={`h-1 w-1 shrink-0 rounded-full ${dot}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
