import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/AnimatedSection/AnimatedSection";
import { Container } from "@/components/Container/Container";
import { GlassPanel } from "@/components/GlassPanel/GlassPanel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blurReveal } from "@/lib/animations";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <Container>
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1fr_24rem]">
          <AnimatedSection variants={blurReveal} className="max-w-4xl">
            <Badge>Portfolio architecture</Badge>
            <h1 className="mt-8 max-w-4xl text-balance text-6xl font-semibold tracking-normal sm:text-7xl lg:text-8xl">
              Titulo principal preparado para la marca personal.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
              Subtitulo temporal reservado para definir posicionamiento, propuesta de valor y tono
              profesional.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#projects">
                  Ver estructura
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact">Contacto</a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="hidden lg:block" aria-hidden="true">
            <GlassPanel className="relative aspect-[4/5] overflow-hidden p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,.18),transparent_18rem)]" />
              <div className="relative grid h-full grid-rows-[1fr_auto] rounded-md border border-border bg-background/70 p-5">
                <div className="space-y-3">
                  <div className="h-2 w-20 rounded-full bg-primary" />
                  <div className="h-2 w-32 rounded-full bg-white/20" />
                  <div className="h-2 w-24 rounded-full bg-white/10" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-md bg-white/[.06]" />
                  <div className="flex h-16 items-center justify-center rounded-md bg-secondary/20">
                    <Image src="/icon.svg" alt="" width={28} height={28} priority />
                  </div>
                  <div className="h-16 rounded-md bg-primary/25" />
                </div>
              </div>
            </GlassPanel>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
