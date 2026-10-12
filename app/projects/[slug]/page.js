import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import LockIcon from "@/components/LockIcon";
import { PROJECTS, getProject, getAdjacentProject } from "@/components/projects-data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const next = getAdjacentProject(params.slug);

  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Header */}
        <section className="border-b border-line py-16 sm:py-20">
          <div className="mx-auto max-w-content px-6">
            <Reveal>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-copper"
              >
                ← all projects
              </Link>

              <p className="mb-4 mt-8 font-mono text-sm text-copper">
                {`/projects/${project.slug}`}
              </p>

              <h1 className="max-w-3xl text-balance font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-ink">
                {project.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
                <span>{project.role}</span>
                <span aria-hidden="true">·</span>
                <span>{project.tag}</span>
                {project.locked ? (
                  <span className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-paper-dim px-2 py-1 uppercase tracking-wider">
                    <LockIcon className="h-3 w-3" />
                    Private — under NDA
                  </span>
                ) : null}
              </div>

              <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-ink-soft">
                {project.overview}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Challenge / Approach + sidebar, or a restricted notice for NDA work */}
        {project.locked ? (
          <section className="border-b border-line py-20">
            <div className="mx-auto max-w-content px-6">
              <Reveal>
                <div className="mx-auto flex max-w-xl flex-col items-center rounded-sm border border-line bg-paper-dim px-6 py-16 text-center sm:px-12">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-ink-soft">
                    <LockIcon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold text-ink">
                    This case study is private
                  </h2>
                  <p className="mt-3 text-balance text-sm leading-relaxed text-ink-soft">
                    This project was built under a client NDA, so detailed
                    process notes, screenshots, and technical specifics
                    aren&rsquo;t published here. I&rsquo;m glad to walk
                    through the approach and outcomes directly — just reach
                    out.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="mailto:hello@yourdomain.com?subject=Case%20study%20access%20request"
                      className="rounded-sm bg-ink px-6 py-3 font-mono text-xs text-paper transition-colors hover:bg-trace"
                    >
                      Request Access
                    </a>
                    <Link
                      href="/#projects"
                      className="rounded-sm border border-ink px-6 py-3 font-mono text-xs text-ink transition-colors hover:border-copper hover:text-copper"
                    >
                      Back to Projects
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ) : (
          <>
            <section className="border-b border-line py-20">
              <div className="mx-auto max-w-content px-6">
                <div className="grid gap-12 lg:grid-cols-12">
                  <div className="space-y-12 lg:col-span-8">
                    <Reveal>
                      <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                        The Challenge
                      </h2>
                      <p className="max-w-2xl text-balance text-[17px] leading-relaxed text-ink-soft">
                        {project.challenge}
                      </p>
                    </Reveal>

                    <Reveal delay={80}>
                      <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                        The Approach
                      </h2>
                      <p className="max-w-2xl text-balance text-[17px] leading-relaxed text-ink-soft">
                        {project.approach}
                      </p>
                    </Reveal>

                    <Reveal delay={140}>
                      <h2 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                        Key Features
                      </h2>
                      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-trace" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>

                  <div className="lg:col-span-4">
                    <Reveal delay={100}>
                      <div className="space-y-8 rounded-sm border border-line bg-paper-dim p-6">
                        <div>
                          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                            Role
                          </p>
                          <p className="text-sm text-ink-soft">{project.role}</p>
                        </div>

                        <div>
                          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                            Technology
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((t) => (
                              <span
                                key={t}
                                className="rounded-sm border border-line bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                            Process
                          </p>
                          <ol className="space-y-3">
                            {project.process.map((step, i) => (
                              <li
                                key={step}
                                className="flex gap-3 text-[13px] leading-relaxed text-ink-soft"
                              >
                                <span className="font-mono text-trace">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>

            {/* Screenshot placeholders */}
            <section className="border-b border-line bg-paper-dim py-20">
              <div className="mx-auto max-w-content px-6">
                <Reveal>
                  <p className="mb-8 font-mono text-xs uppercase tracking-wider text-muted">
                    Gallery
                  </p>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[1, 2].map((n) => (
                    <Reveal key={n} delay={n * 80}>
                      <div className="flex aspect-[4/3] items-center justify-center rounded-sm border border-dashed border-line bg-paper">
                        <p className="font-mono text-xs text-muted">
                          screenshot
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Next project */}
        <section className="border-b border-line py-16">
          <div className="mx-auto max-w-content px-6">
            <Reveal>
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col justify-between gap-4 rounded-sm border border-line bg-paper p-6 transition-colors hover:border-trace sm:flex-row sm:items-center sm:p-8"
              >
                <div>
                  <p className="font-mono text-xs text-copper">Next case study</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {next.title}
                  </p>
                </div>
                <span className="font-mono text-sm text-trace transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <FinalCTA />
      <Footer />
    </>
  );
}
