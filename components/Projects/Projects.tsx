import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Section } from "@/components/Section/Section";
import { projectPlaceholders } from "@/constants/site";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Heading>Proyectos</Heading>
              <Paragraph className="mt-5">
                Area lista para crecer hacia casos de estudio, galerias con next/image y metricas de
                impacto.
              </Paragraph>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {projectPlaceholders.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
