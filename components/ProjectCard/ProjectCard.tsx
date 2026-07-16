import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Project } from "@/types/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <Card className="group h-full overflow-hidden transition-colors duration-300 hover:border-white/15 hover:bg-surface">
      <CardHeader>
        <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
      </CardHeader>
      <CardContent className="flex items-end justify-between gap-6">
        <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </CardContent>
    </Card>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a href={project.href} aria-label={`Abrir ${project.title}`} className="block h-full">
      {content}
    </a>
  );
}
