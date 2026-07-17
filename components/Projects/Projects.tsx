import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { CaseStudy } from "@/components/CaseStudy/CaseStudy";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" className="bg-black">
      <Container>
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-5xl text-center">
            <h2 className="text-balance text-[clamp(3rem,13vw,3.75rem)] font-semibold leading-[0.92] tracking-normal sm:text-8xl lg:text-[8.5rem]">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
                Proyectos
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Desarrollados
              </span>
            </h2>
            <p className="mx-auto mt-12 max-w-4xl text-pretty text-2xl font-semibold leading-10 text-zinc-500">
              Los siguientes proyectos forman parte de mi experiencia práctica y reflejan mi forma
              de abordar cada desafío: analizar las necesidades, diseñar la mejor solución y
              desarrollar productos digitales con especial atención a la experiencia del usuario, la
              organización del código y la calidad del resultado final.
            </p>
          </div>
          <div className="mt-14 space-y-8">
            {projects.map((project, index) => (
              <CaseStudy key={project.title} project={project} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
