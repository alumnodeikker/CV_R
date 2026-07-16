import { ArrowRight } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { GlassPanel } from "@/components/GlassPanel/GlassPanel";
import { Heading } from "@/components/Heading/Heading";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/ui/button";
import { contactLinks, profile } from "@/data/profile";

export function Contact() {
  const whatsappHref = `https://wa.me/34${profile.phone}`;

  const getDisplayValue = (href: string) => {
    if (href === profile.linkedin) {
      return "Reynaldo Figuera";
    }

    if (href.startsWith("tel:")) {
      return href.replace("tel:", "");
    }

    if (href.startsWith("mailto:")) {
      return href.replace("mailto:", "");
    }

    return href.replace("https://www.", "").replace("https://", "").replace(/\/$/, "");
  };

  return (
    <Section id="contact">
      <Container>
        <AnimatedSection>
          <GlassPanel className="rounded-[2rem] p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <Heading className="text-5xl sm:text-6xl lg:text-7xl">Contacto</Heading>
                <Paragraph className="mt-5">{profile.fullName}</Paragraph>
                <div className="mt-8">
                  <Button asChild>
                    <a href={whatsappHref} target="_blank" rel="noreferrer">
                      Contactar
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="grid gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  const isTodo = link.href === "TODO";

                  return (
                    <div
                      key={link.label}
                      className="flex items-center justify-between gap-4 rounded-md border border-border bg-white/[.04] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="size-4 text-secondary" aria-hidden="true" />
                        <span className="text-sm text-muted-foreground">{link.label}</span>
                      </div>
                      {isTodo ? (
                        <span className="text-sm text-foreground">TODO</span>
                      ) : (
                        <a
                          className="text-sm text-foreground hover:text-secondary"
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                          {getDisplayValue(link.href)}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </GlassPanel>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
