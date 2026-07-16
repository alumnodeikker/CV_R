import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Badge } from "@/components/ui/badge";
import { professionalExperience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" className="bg-black">
      <Container>
        <AnimatedSection className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-2xl font-semibold text-foreground">Trayectoria</p>
            <h2 className="mt-8 text-balance text-6xl font-semibold leading-[0.92] tracking-normal sm:text-8xl lg:text-[8.5rem]">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Experiencia
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Profesional
              </span>
            </h2>

            <div className="mx-auto mt-12 max-w-4xl space-y-6 text-pretty text-2xl font-semibold leading-10 text-zinc-500">
              {professionalExperience.summary.map((paragraph, index) => (
                <p key={paragraph}>
                  {index === 0 ? (
                    <>
                      <span className="text-white">Más de 20 años de experiencia</span>
                      {paragraph.replace("Más de 20 años de experiencia", "")}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-6">
            {professionalExperience.roles.map((role, index) => (
              <article
                key={role.title}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-7 shadow-soft sm:p-10"
              >
                <div
                  className={
                    index === 0
                      ? "absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(6,182,212,.16),transparent_28rem),radial-gradient(circle_at_90%_20%,rgba(37,99,235,.18),transparent_24rem)]"
                      : "absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,.16),transparent_26rem),radial-gradient(circle_at_88%_0%,rgba(249,115,22,.12),transparent_22rem)]"
                  }
                />
                <div className="relative grid gap-10 lg:grid-cols-[0.72fr_1fr]">
                  <div>
                    <Badge>{role.period}</Badge>
                    <h3 className="mt-6 text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
                      <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
                        {role.title}
                      </span>
                    </h3>
                    {role.location ? (
                      <p className="mt-4 text-lg font-medium text-zinc-400">{role.location}</p>
                    ) : null}
                    <p className="mt-6 text-lg leading-8 text-zinc-400">{role.description}</p>
                  </div>

                  <div className="grid gap-6">
                    {role.responsibilities ? (
                      <ExperienceList
                        title="Principales responsabilidades"
                        items={role.responsibilities}
                      />
                    ) : null}
                    {role.highlights ? (
                      <ExperienceList title="Proyectos destacados" items={role.highlights} />
                    ) : null}
                    {role.focus ? (
                      <ExperienceList title="Enfoque actual" items={role.focus} />
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}

function ExperienceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl">
      <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-400">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
