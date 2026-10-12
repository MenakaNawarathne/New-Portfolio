import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TraceLine from "@/components/TraceLine";
import About from "@/components/About";
import Education from "@/components/Education";
import FeaturedProject from "@/components/FeaturedProject";
import SelectedWork from "@/components/SelectedWork";
import TechnicalSkills from "@/components/TechnicalSkills";
import Approach from "@/components/Approach";
import Differentiators from "@/components/Differentiators";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <TraceLine />

      <main>
        <Hero />
        <About />
        <Education/>

        <section id="projects" className="border-b border-line py-24">
          <div className="mx-auto max-w-content px-6">
            <Reveal>
              <SectionHeading
                eyebrow="/projects"
                title="Selected Work"
                lede="Desktop and web applications built with Java, C#, PHP, and React."
              />
            </Reveal>

            <FeaturedProject />
            <SelectedWork />
          </div>
        </section>

        <TechnicalSkills />

        <section id="approach" className="border-b border-line py-24">
          <div className="mx-auto max-w-content px-6">
            <Reveal>
              <SectionHeading eyebrow="/approach" title="My Approach" />
            </Reveal>

            <Approach />

            <div className="mt-16">
              <Differentiators />
            </div>

            
          </div>
        </section>
      </main>

      <FinalCTA />
      <Footer />
    </>
  );
}
