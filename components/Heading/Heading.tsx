import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Heading({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "max-w-3xl text-balance text-4xl font-semibold tracking-normal sm:text-5xl",
        className
      )}
      {...props}
    />
  );
}
