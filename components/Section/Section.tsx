import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen scroll-mt-16 items-center overflow-hidden py-24 sm:py-28",
        className
      )}
      {...props}
    />
  );
}
