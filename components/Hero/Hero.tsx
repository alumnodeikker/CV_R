import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { blurReveal } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-16"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-[-16rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-[-18rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,.08),transparent_28rem)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 hidden items-end justify-center overflow-hidden lg:flex">
        <div className="absolute bottom-[-8rem] h-[34rem] w-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,.22),rgba(6,182,212,.12)_36%,transparent_70%)] blur-3xl" />
        <Image
          src={profile.portrait.src}
          alt=""
          width={1086}
          height={1448}
          priority
          className="relative h-[88vh] max-h-[58rem] w-auto max-w-none object-contain opacity-80 drop-shadow-[0_58px_120px_rgba(0,0,0,.86)] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_48%,rgba(0,0,0,.72)_62%,transparent_82%)]"
          sizes="(min-width: 1024px) 44rem, 96vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_22%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.72)_74%,#000_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/82 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[42vw] bg-gradient-to-r from-black via-black/78 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[38vw] bg-gradient-to-l from-black via-black/72 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/45" />
      </div>

      <Container className="relative">
        <AnimatedSection
          variants={blurReveal}
          className="relative z-20 hidden min-h-[calc(100vh-4rem)] items-center gap-8 py-10 lg:grid lg:grid-cols-[1fr_0.82fr]"
        >
          <div className="relative z-30 max-w-xl self-end pb-8 lg:self-center lg:pb-0">
            <Badge>{profile.role}</Badge>
            <p className="mt-8 text-5xl font-semibold leading-none text-foreground sm:text-6xl">
              Hola
            </p>
            <p className="mt-3 text-5xl font-semibold leading-none text-muted-foreground sm:text-6xl">
              Soy
            </p>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
                {profile.fullName}
              </span>
            </h1>
          </div>

          <div className="relative z-30 max-w-sm space-y-8 justify-self-end pt-[42vh] lg:pt-0 lg:text-right">
            <div>
              <p className="text-xl font-semibold text-foreground sm:text-2xl">
                {profile.secondaryRole}
              </p>
              <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground">
                {profile.headline.join(" ")}
              </p>
            </div>

            <div className="grid gap-3">
              <HeroMetric label="Especialización" value="Creador de Experiencias Digitales" />
              <HeroMetric label="Foco" value="Frontend + Full Stack" />
              <HeroMetric label="Base" value="UX, rendimiento y accesibilidad" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild>
                <a href="#projects">
                  Ver proyectos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact" aria-label="Ir a contacto">
                  <Mail className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <TabletHero />
        <MobileHero />
      </Container>
    </section>
  );
}

function TabletHero() {
  return (
    <AnimatedSection
      variants={blurReveal}
      className="relative z-20 hidden min-h-[calc(100svh-4rem)] overflow-hidden py-10 md:block lg:hidden"
    >
      <div className="pointer-events-none absolute inset-0 -mx-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_16%,rgba(34,50,74,.9),rgba(4,8,13,.92)_36%,#000_78%)]" />
        <div className="absolute inset-x-[-16%] top-0 h-80 rounded-full bg-primary/20 blur-3xl" />
        <Image
          src={profile.portrait.src}
          alt=""
          width={1086}
          height={1448}
          priority
          className="absolute left-1/2 top-20 h-[64svh] max-h-[46rem] w-auto max-w-none -translate-x-1/2 object-contain opacity-86 [filter:brightness(1.05)_contrast(1.02)] [mask-image:radial-gradient(ellipse_at_center,black_0%,black_52%,rgba(0,0,0,.72)_68%,transparent_88%)]"
          sizes="80vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_12%,rgba(0,0,0,.18)_42%,rgba(0,0,0,.82)_86%,#000_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[52svh] bg-gradient-to-t from-black via-black/94 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black via-black/64 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[35%] bg-gradient-to-l from-black/72 to-transparent" />
      </div>

      <div className="relative z-30 grid min-h-[calc(100svh-8rem)] grid-cols-[0.95fr_0.82fr] items-end gap-8">
        <div className="pb-8">
          <Badge>{profile.role}</Badge>
          <p className="mt-8 text-6xl font-semibold leading-none text-foreground">Hola</p>
          <p className="mt-3 text-6xl font-semibold leading-none text-muted-foreground">Soy</p>
          <h1 className="mt-6 max-w-[27rem] text-balance text-6xl font-semibold leading-[0.92] tracking-normal">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
              {profile.fullName}
            </span>
          </h1>
        </div>

        <div className="space-y-5 pb-8">
          <div>
            <p className="text-3xl font-semibold text-foreground">{profile.secondaryRole}</p>
            <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
              {profile.headline.join(" ")}
            </p>
          </div>
          <div className="grid gap-4">
            <HeroMetric label="Especialización" value="Creador de Experiencias Digitales" />
            <HeroMetric label="Foco" value="Frontend + Full Stack" />
            <HeroMetric label="Base" value="UX, rendimiento y accesibilidad" />
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <a href="#projects">
                Ver proyectos
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#contact" aria-label="Ir a contacto">
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function MobileHero() {
  return (
    <AnimatedSection
      variants={blurReveal}
      className="relative z-20 flex min-h-[calc(100svh-4rem)] flex-col justify-start overflow-hidden pb-8 pt-8 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0 -mx-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_18%,rgba(38,52,72,.92),rgba(8,12,18,.86)_34%,rgba(0,0,0,.98)_72%)]" />
        <div className="absolute inset-x-[-20%] top-4 h-72 rounded-full bg-primary/20 blur-3xl" />
        <Image
          src={profile.portrait.src}
          alt=""
          width={1086}
          height={1448}
          priority
          className="absolute right-[-6.5rem] top-16 h-[58svh] max-h-[32rem] w-auto max-w-none scale-x-[-1] object-contain opacity-95 [filter:brightness(1.12)_contrast(1.04)] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,.12)_13%,black_28%,black_82%,transparent_100%)]"
          sizes="100vw"
        />
        <div className="absolute bottom-[8rem] right-[17.5rem] h-[58svh] w-28 bg-gradient-to-r from-black via-black/72 to-transparent blur-xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_30%,transparent_0%,transparent_28%,rgba(0,0,0,.24)_54%,rgba(0,0,0,.78)_88%,#000_100%)]" />
        <div className="absolute inset-x-0 top-[6.5rem] h-28 bg-gradient-to-b from-black/80 via-black/46 to-transparent blur-lg" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-black via-black/72 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/42 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[45svh] bg-gradient-to-t from-black via-black/92 to-transparent" />
      </div>

      <div className="relative z-30">
        <Badge>{profile.role}</Badge>
        <p className="mt-6 text-[2.35rem] font-semibold leading-none text-foreground">Hola</p>
        <p className="mt-2 text-[2.35rem] font-semibold leading-none text-muted-foreground">Soy</p>
        <h1 className="mt-5 max-w-[19rem] text-balance text-[2.85rem] font-semibold leading-[0.92] tracking-normal">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
            {profile.fullName}
          </span>
        </h1>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
          <p className="text-xl font-semibold text-foreground">{profile.secondaryRole}</p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {profile.headline.join(" ")}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <HeroMetric label="Especialización" value="Creador de Experiencias Digitales" />
          <HeroMetric label="Foco" value="Full Stack" />
        </div>

        <div className="mt-6 flex gap-3">
          <Button className="flex-1" asChild>
            <a href="#projects">
              Proyectos
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="secondary" asChild aria-label="Ir a contacto">
            <a href="#contact">
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.045] px-5 py-4 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className="mt-2 whitespace-pre-line text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
