"use client";

import { motion, type Variants } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { fadeUp, transition, viewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  variants?: Variants;
};

export function AnimatedSection({ className, variants = fadeUp, ...props }: AnimatedSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={transition}
      {...props}
    />
  );
}
