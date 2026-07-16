import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Heading } from "@/components/Heading/Heading";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import { timelinePlaceholders } from "@/constants/site";

export function Timeline() {
  return (
    <Section id="timeline">
      <Container>
        <AnimatedSection>
          <Heading>Formacion</Heading>
          <Paragraph className="mt-5">
            Timeline preparado para evolucionar hacia experiencia, educacion, certificaciones o
            hitos relevantes.
          </Paragraph>
          <div className="mt-12 space-y-6 border-l border-border pl-6">
            {timelinePlaceholders.map((item) => (
              <article key={item.title} className="relative">
                <div className="absolute -left-[1.95rem] top-1.5 size-3 rounded-full border border-primary bg-background" />
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
