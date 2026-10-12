import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-line bg-ink py-28 text-paper">
      <div className="bg-grid-fade pointer-events-none absolute inset-0 bg-grid bg-[length:48px_48px] opacity-[0.06]" />
      <div className="relative mx-auto max-w-content px-6 text-center">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-copper-bright">/contact</p>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Interested in working together or have an opportunity in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance text-paper/70">
            I&rsquo;m eager to work on real-world projects and keep growing as a
             software engineer.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=menakanawarathne2003@gmail.com&su=Hello%20Menaka"
              target="_blank"
              rel="noopener norefferer"
              className="rounded-sm bg-copper px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-copper-bright"
              
            >
              Start a Conversation
            </a>
            <a
              href="/#projects"
              className="rounded-sm border border-paper/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-trace-bright hover:text-trace-bright"
            >
              View My Projects
            </a>
          </div>
          {/* Email shown as plain text */}
          <p className="mt-6 font-mono text-sm text-paper/60">
            menakanawarathne2003@gmail.com
          </p>
        </Reveal>
      </div>
    </section>
  );
}
