import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { IconCard } from "@/components/IconCard/IconCard";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import { skills } from "@/constants/site";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <AnimatedSection>
          <Heading>Tecnologias</Heading>
          <Paragraph className="mt-5">
            Sistema extensible para agrupar stack, herramientas, principios de arquitectura y areas
            de especialidad.
          </Paragraph>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <IconCard key={skill.title} item={skill} />
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
