import Link from "next/link";
import Reveal from "./Reveal";
import { CiLock } from "react-icons/ci";
import { PROJECTS } from "./projects-data";

const GRID_PROJECTS = PROJECTS.filter(
  (p) => p.slug !== "online-bookstore-management-system"
);

export default function SelectedWork() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {GRID_PROJECTS.map((p, i) => (
        <Reveal key={p.slug} delay={i * 80}>
          <Link
            href={`/projects/${p.slug}`}
            className={`group flex h-full flex-col rounded-sm border border-line bg-paper p-6 transition-colors sm:p-7 ${
              p.locked ? "hover:border-line" : "hover:border-trace"
            }`}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="font-mono text-xs text-copper">{`// ${p.tag}`}</p>
              {p.locked ? (
                <span className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-paper-dim px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  <CiLock className="h-3 w-3" />
                  Private
                </span>
              ) : null}
            </div>

            <h3 className="font-display text-xl font-semibold text-ink">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {p.summary}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <p className="font-mono text-xs text-muted">{p.role}</p>
              {p.locked ? (
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                  <CiLock className="h-3 w-3" />
                  NDA — details on request
                </span>
              ) : (
                <span className="font-mono text-xs text-trace transition-transform group-hover:translate-x-1">
                  View case study →
                </span>
              )}
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
