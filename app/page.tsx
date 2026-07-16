import { About } from "@/components/About/About";
import { AnimatedBackground } from "@/components/Background/AnimatedBackground";
import { Contact } from "@/components/Contact/Contact";
import { Competencies } from "@/components/Competencies/Competencies";
import { Experience } from "@/components/Experience/Experience";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import { Timeline } from "@/components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
        <Competencies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
