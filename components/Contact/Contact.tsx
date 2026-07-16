import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { GlassPanel } from "@/components/GlassPanel/GlassPanel";
import { Heading } from "@/components/Heading/Heading";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <AnimatedSection>
          <GlassPanel className="p-8 sm:p-10 lg:p-12">
            <Heading>Contacto</Heading>
            <Paragraph className="mt-5">
              Bloque listo para conectar formulario, calendario o canales profesionales cuando
              definamos el contenido.
            </Paragraph>
            <Button className="mt-8" asChild>
              <a href="mailto:hello@cruzreinaldo.com">
                Escribir
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </GlassPanel>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
