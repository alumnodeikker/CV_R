import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";

export function About() {
  return (
    <Section id="about">
      <Container>
        <AnimatedSection className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Heading>Sobre mi</Heading>
          <Paragraph>
            Seccion preparada para construir un relato profesional conciso, con foco en criterio de
            producto, ingenieria frontend y experiencia de usuario.
          </Paragraph>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
