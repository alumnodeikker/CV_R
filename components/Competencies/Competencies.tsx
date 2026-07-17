import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Badge } from "@/components/ui/badge";
import { competencies } from "@/data/profile";

export function Competencies() {
  return (
    <section
      id="competencies"
      className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden py-24 text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[#08111f]">
        <div className="absolute -left-[18%] top-[28%] h-[42rem] w-[78rem] rotate-[-12deg] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,.85),rgba(37,99,235,.62)_36%,rgba(255,255,255,.18)_58%,transparent_72%)] blur-2xl" />
        <div className="absolute right-[-18%] top-[-12%] h-[54rem] w-[68rem] rotate-[24deg] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,.95),rgba(6,182,212,.42)_42%,rgba(255,255,255,.2)_61%,transparent_76%)] blur-xl" />
        <div className="absolute bottom-[-24%] right-[-8%] h-[36rem] w-[52rem] rotate-[-22deg] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.34),rgba(6,182,212,.35)_30%,rgba(37,99,235,.24)_56%,transparent_74%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.02)_38%,rgba(0,0,0,.28))]" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      <Container className="relative">
        <AnimatedSection>
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="border-white/20 bg-white/15 text-white">
              Capacidades profesionales
            </Badge>
            <h2 className="mt-8 text-balance text-[clamp(3rem,13vw,6rem)] font-semibold leading-[0.95] tracking-normal sm:text-8xl lg:text-[8.5rem]">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_12px_60px_rgba(255,255,255,.22)]">
                Competencias
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-pretty text-xl font-medium leading-9 text-white/82 sm:text-2xl sm:leading-10">
              Una forma de trabajar basada en claridad, criterio técnico, aprendizaje continuo y
              cuidado por los detalles que hacen que una aplicación se sienta profesional.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map((competency, index) => (
              <article
                key={competency.title}
                className="rounded-[1.5rem] border border-white/18 bg-white/[.13] p-5 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[.18]"
                style={{ transform: `translateY(${index % 2 === 0 ? 0 : 18}px)` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/85">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{competency.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{competency.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
