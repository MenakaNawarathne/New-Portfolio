import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORIES = [
  { title: "Programming", items: ["Java", "C#", "PHP", "SQL", "HTML5",
     "CSS3"] },

  { title: "Frameworks & Technologies", items: [".NET", "ASP.NET Core", "Blazor",
     "React", "Firebase", "Java Swing", "JDBC"] },

  { title: "Databases", items: ["MySQL", "SQL Server", 
    "Firebase Realtime Database"] },

  { title: "Tools", items: ["Visual Studio", "VS Code", "NetBeans", "MySQL Workbench",
     "SSMS", "Git", "GitHub", "XAMPP"] },

  { title: "Design Tools", items: ["Adobe Illustrator", "Adobe Photoshop", 
    "Adobe InDesign", "CorelDRAW"] },
    
  { title: "Software Engineering", items: ["OOP", "CRUD", "Database Design",
     "API Development", "Git Version Control"] },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" className="border-b border-line bg-paper-dim py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading eyebrow="/skills" title="Technical Skills" />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 60}>
              <div className="h-full bg-paper p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-copper">
                  {cat.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm bg-paper-dim px-2.5 py-1 text-[12.5px] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
