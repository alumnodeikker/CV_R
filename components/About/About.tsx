import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" className="bg-black">
      <Container>
        <AnimatedSection className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <h2 className="text-balance text-5xl font-semibold leading-[0.96] tracking-normal sm:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-blue-500 via-violet-400 via-pink-400 to-orange-500 bg-clip-text text-transparent">
                Sobre mí
              </span>
              <br />
              <span className="text-foreground">
                Una trayectoria que une creatividad y tecnología
              </span>
            </h2>

            <div className="max-w-4xl space-y-7 pt-4 text-xl font-semibold leading-9 text-muted-foreground sm:text-2xl sm:leading-10">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
