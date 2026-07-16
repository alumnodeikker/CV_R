import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function GlassPanel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface/55 shadow-soft backdrop-blur-2xl",
        className
      )}
      {...props}
    />
  );
}
