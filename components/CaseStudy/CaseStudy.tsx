import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/site";

type CaseStudyProps = {
  project: Project;
  index: number;
};

export function CaseStudy({ project, index }: CaseStudyProps) {
  const hasGithub = project.github !== "TODO";

  return (
    <article className="grid min-h-[78vh] items-center gap-10 border-t border-border py-16 lg:grid-cols-[1.25fr_0.75fr]">
      <MacBookPreview project={project} />

      <div className="max-w-xl lg:pl-8">
        <Badge>PROYECTO 0{index + 1}</Badge>
        <h3 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl">
          {project.title}
        </h3>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.subtitle}</p>

        <div className="mt-10 grid gap-6">
          <StudyBlock title="Problema" value={project.problem} />
          <StudyBlock title="Solución" value={project.solution} />
          <StudyBlock title="Resultado" value={project.result} />
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-foreground">Tecnologías</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-white/[.04] px-3 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={project.url} target="_blank" rel="noreferrer">
              Demo
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="secondary" asChild={hasGithub} disabled={!hasGithub}>
            {hasGithub ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
                <Github className="size-4" aria-hidden="true" />
              </a>
            ) : (
              <span>
                GitHub
                <Github className="size-4" aria-hidden="true" />
              </span>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}

function StudyBlock({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{value}</p>
    </div>
  );
}

function MacBookPreview({ project }: { project: Project }) {
  return (
    <div className="relative -mx-5 sm:mx-0">
      <div className="relative mx-auto w-full max-w-[58rem]">
        <div className="relative rounded-[2rem] border border-white/10 bg-[#0b0b0c] p-3 shadow-[0_40px_120px_rgba(0,0,0,.55)]">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-black">
            <Image
              src={project.preview.image}
              alt={project.preview.imageAlt}
              width={2048}
              height={1118}
              className="aspect-[16/9] h-full w-full object-cover"
              sizes="(min-width: 1024px) 58rem, 100vw"
            />
          </div>
          <div className="absolute left-1/2 top-3 h-2 w-24 -translate-x-1/2 rounded-b-full bg-black/80" />
        </div>
        <div className="mx-auto h-5 w-[82%] rounded-b-[2rem] bg-gradient-to-b from-zinc-700 to-zinc-950 shadow-soft" />
        <p className="mt-4 text-center text-xs text-muted-foreground">{project.title}</p>
      </div>
    </div>
  );
}
