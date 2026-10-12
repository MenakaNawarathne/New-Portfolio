import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EDUCATION = [
  { period: "Expected 2028", title: "BSc (Hons) Software Engineering (Ug)", place: "ICBT Kandy Campus / Cardiff Metropolitan University" },
  { period: "2023 – 2024", title: "Diploma in Information Technology", place: "LPEC Campus" },
  { period: "2009 – 2023", title: "G.C.E. Advanced Level — Engineering Technology", place: "St. Anthony's College, Kandy" },
];

const ACTIVITIES = [
  "Promotional Manager — organized DrawX, a digital art competition",
  "Organized “Drone Dash”, a drone technology event",
  "Coordinated the Ideamart technology event",
];

export default function Education() {
  return (
    <section id="education" className="border-b border-line bg-paper-dim py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading eyebrow="/education" title="Education & Activities" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
              Education
            </h3>
            <ol className="relative space-y-8 border-l border-line pl-8">
              {EDUCATION.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-trace" />
                  <p className="font-mono text-xs text-copper">{e.period}</p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-ink">{e.title}</h4>
                  <p className="text-sm text-ink-soft">{e.place}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100} className="space-y-8 lg:col-span-5">
            <div className="rounded-sm border border-line bg-paper p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                IT Society — ICBT Kandy (2025 – 2026)
              </h3>
              <ul className="space-y-3">
                {ACTIVITIES.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-line bg-paper p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                Certification
              </h3>
              <p className="text-sm text-ink-soft">
                Certification Course in Graphic Design — Open University of Sri Lanka (2024 – 2025)
              </p>
              <h3 className="mb-2 mt-6 font-mono text-xs uppercase tracking-wider text-muted">
                Languages
              </h3>
              <p className="text-sm text-ink-soft">Sinhala (Native) · English (Intermediate)</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}