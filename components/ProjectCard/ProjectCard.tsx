import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Project } from "@/types/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
      <Card className="group h-full transition-colors duration-300 hover:border-white/15">
        <CardHeader>
          <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
        </CardHeader>
        <CardContent className="flex items-end justify-between gap-6">
          <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        </CardContent>
      </Card>
    </a>
  );
}
