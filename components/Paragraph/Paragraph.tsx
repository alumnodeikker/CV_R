import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Paragraph({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("max-w-2xl text-pretty leading-8 text-muted-foreground", className)}
      {...props}
    />
  );
}
