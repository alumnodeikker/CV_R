import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { educationPrograms } from "@/data/education";

export function Timeline() {
  const [program] = educationPrograms;

  return (
    <Section id="education" className="overflow-hidden bg-black py-24 sm:py-32 lg:py-40">
      <Container className="max-w-7xl">
        <AnimatedSection className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[min(48rem,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.24),rgba(6,182,212,0.08)_42%,transparent_70%)] blur-3xl" />

          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-zinc-500">
              Formación
            </p>
            <h2 className="mt-7 text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {program.title}
              </span>
              <span className="block text-white">para construir producto</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-pretty text-xl font-medium leading-8 text-zinc-500 sm:text-2xl sm:leading-10">
              {program.subtitle}
            </p>
          </div>

          <article className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(24,24,27,0.94),rgba(9,9,11,0.98))] p-6 shadow-[0_40px_140px_rgba(0,0,0,0.65)] sm:p-10 lg:mt-24 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(37,99,235,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.045),transparent_40%)]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Especialización aplicada
                </p>
                <h3 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
                  De la idea al despliegue con criterio técnico
                </h3>
                <div className="mt-8 space-y-6 text-lg font-medium leading-8 text-zinc-500">
                  {program.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                  Capacidades profesionales
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {program.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="group flex min-h-16 items-start gap-3 rounded-2xl border border-white/8 bg-black/30 p-4 transition duration-300 hover:border-cyan-200/30 hover:bg-white/[0.06]"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-200 to-blue-500 shadow-[0_0_18px_rgba(6,182,212,0.55)]" />
                      <span className="text-sm font-medium leading-6 text-zinc-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-12 border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Tecnologías y áreas de conocimiento
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {program.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-zinc-200 transition duration-300 hover:border-cyan-200/30 hover:bg-cyan-200/10 hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
