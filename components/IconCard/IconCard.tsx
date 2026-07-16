import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Skill } from "@/types/site";

type IconCardProps = {
  item: Skill;
};

export function IconCard({ item }: IconCardProps) {
  const Icon = item.icon;

  return (
    <Card className="h-full transition-colors duration-300 hover:border-white/15">
      <CardHeader>
        <div className="flex size-10 items-center justify-center rounded-md border border-border bg-white/[.04] text-secondary">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
      </CardContent>
    </Card>
  );
}
