import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Technology } from "@/types/site";

type IconCardProps = {
  item: Technology;
};

export function IconCard({ item }: IconCardProps) {
  const Icon = item.icon;

  return (
    <Card className="group h-full transition-colors duration-300 hover:border-white/15 hover:bg-surface">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-10 items-center justify-center rounded-md border border-border bg-white/[.04] text-secondary transition-transform duration-300 group-hover:-translate-y-0.5">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <span className="text-sm text-muted-foreground">{item.level}%</span>
        </div>
        <h3 className="text-lg font-medium text-foreground">{item.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
        <div
          className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[.06]"
          aria-label={`Nivel de ${item.name}: ${item.level}%`}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
            style={{ width: `${item.level}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
