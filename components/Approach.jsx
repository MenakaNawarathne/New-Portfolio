import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Understand the Requirements",
    text: "Before coding, I clarify what the system should do and who will use it.",
  },
  {
    n: "02",
    title: "Design the Data",
    text: "I plan the database structure and relationships so the application stays consistent.",
  },
  {
    n: "03",
    title: "Build the Applicaton",
    text: "I implement features using OOP principles, CRUD operations, and clean, readable code.",
  },
  {
    n: "04",
    title: "Test  & Troubleshoot",
    text: "I test the application, trace errors step by step, and fix the root cause.",
  },
  {
    n: "05",
    title: "Collaborate with Git",
    text: "I use branches, commits, and GitHub to work smoothly in a team.",
  },
  {
    n: "06",
    title: "Document and Improve",
    text: "I document the project and keep refining it after feedback.",
  },
];

export default function Approach() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {STEPS.map((step, i) => (
        <Reveal key={step.n} delay={i * 60}>
          <div className="h-full rounded-sm border border-line bg-paper p-6">
            <p className="mb-6 font-mono text-2xl text-trace/40">{step.n}</p>
            <h3 className="font-display text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {step.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
