import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading eyebrow="/about" title="About Me" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="space-y-6 text-balance text-[17px] leading-relaxed text-ink-soft">
             <p>
  I&rsquo;m a Software Engineering undergraduate at ICBT Kandy Campus
  (Cardiff Metropolitan University), based in Kandy, Sri Lanka.
</p>
<p>
  I enjoy building{" "}
  <strong className="font-medium text-ink">
    desktop and web applications
  </strong>{" "}
  — from database design and CRUD functionality to responsive interfaces
  and REST APIs — using Java, C#, PHP, and React.
</p>
<p>
  I&rsquo;ve worked on individual and team projects, including
  collaborative Git-based development, and I care about clean OOP design
  and well-documented code.
</p>
<p>
  Outside of coding, I have a background in{" "}
  <strong className="font-medium text-ink">graphic design</strong>{" "}
  (Illustrator, Photoshop, InDesign, CorelDRAW) and help organize
  technology events with the IT Society at ICBT Kandy.
</p>
              
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="space-y-4 rounded-sm border border-line bg-paper-dim p-6 font-mono text-[13px] text-ink-soft">
              <p className="text-ink">// focus areas</p>
              <ul className="space-y-2">
                <li>→ Software development</li>
                <li>→ Database design </li>
                <li>→ Web &; API development</li>
                <li>→ Git collaboration</li>
                <li>→ Graphic design</li>
              </ul>
            </div>
            {/* Social links */}
            <div className="space-y-8 border-t border-line pt-8">
              <a
                href="https://www.linkedin.com/in/menaka-nawarathne-0aa70b324/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-copper"
              >
                <FaLinkedin className="text-base" size={34} />

                <div className="flex flex-col">
                  <span className="text-[11px] text-ink">
                    LinkedIn
                  </span>

                  <span className="text-[12px] text-ink-soft transition-colors group-hover:text-copper">
                    @menaka-nawarathne-0aa70b324
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/MenakaNawarathne"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-copper"
              >
                <FaGithub className="text-base" size={34}  />

                <div className="flex flex-col">
                  <span className="text-[11px] text-ink">
                    GitHub
                  </span>

                  <span className="text-[12px] text-ink-soft transition-colors group-hover:text-copper">
                    @MenakaNawarathne
                  </span>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
