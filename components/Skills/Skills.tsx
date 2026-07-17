import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Section } from "@/components/Section/Section";
import { Badge } from "@/components/ui/badge";
import { skillCategories, technologies } from "@/data/skills";

const categoryGradients = [
  "from-cyan-300/20 via-blue-500/12 to-transparent",
  "from-violet-400/22 via-fuchsia-500/12 to-transparent",
  "from-emerald-300/18 via-cyan-500/10 to-transparent",
  "from-orange-300/18 via-rose-500/10 to-transparent",
  "from-blue-300/18 via-indigo-500/12 to-transparent",
  "from-teal-300/18 via-sky-500/10 to-transparent"
];

export function Skills() {
  const featuredTechnologies = technologies.slice(0, 9);

  return (
    <Section id="technologies" className="bg-black">
      <Container>
        <AnimatedSection className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-2xl font-semibold text-foreground">Stack profesional</p>
            <h2 className="mt-8 text-balance text-[clamp(3rem,13vw,3.75rem)] font-semibold leading-[0.92] tracking-normal sm:text-8xl lg:text-[8.5rem]">
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Tecnologías
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Base para crear rápido
              </span>
            </h2>

            <p className="mx-auto mt-12 max-w-4xl text-pretty text-2xl font-semibold leading-10 text-zinc-500">
              Competencias técnicas convertidas en capacidades de producto:
              <span className="text-white"> interfaces modernas</span>,
              <span className="text-white"> arquitectura mantenible</span>,
              <span className="text-white"> datos estructurados</span> y
              <span className="text-white"> despliegue profesional</span>.
            </p>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <article
                key={category.title}
                className="relative min-h-[21rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-7 shadow-soft"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[index % categoryGradients.length]}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,.1),transparent_20rem)]" />
                <div className="relative">
                  <Badge className="border-white/15 bg-white/[.06]">{category.title}</Badge>
                  <h3 className="mt-7 text-3xl font-semibold leading-tight tracking-normal">
                    {category.description}
                  </h3>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-xl"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] border border-white/10 bg-white/[.035] p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-9">
              {featuredTechnologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="group rounded-2xl border border-white/10 bg-black/30 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[.06]"
                  >
                    <Icon className="size-5 text-cyan-200" aria-hidden="true" />
                    <p className="mt-4 text-sm font-semibold">{technology.name}</p>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-200 to-blue-500"
                        style={{ width: `${technology.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
