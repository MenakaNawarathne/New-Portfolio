import Link from "next/link";
import Reveal from "./Reveal";
import { getProject } from "./projects-data";

export default function FeaturedProject() {
  const project = getProject("online-bookstore-management-system");

  return (
    <Reveal>
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-sm border border-line bg-ink text-paper transition-colors hover:border-trace-bright"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/15 px-6 py-4 sm:px-8">
          <p className="font-mono text-xs text-copper-bright">
            / featured project
          </p>
          <p className="font-mono text-xs text-paper/50">{project.tag}</p>
        </div>

        <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-sm text-balance text-sm leading-relaxed text-paper/70">
              {project.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-trace-bright transition-transform group-hover:translate-x-1">
              View case study →
            </span>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-paper/50">
                Technologies
              </p>
              <ul className="space-y-2">
                {project.techStack.map((t) => (
                  <li key={t} className="font-mono text-[13px] text-paper/80">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-paper/50">
                Features
              </p>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-paper/80"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-trace-bright" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
