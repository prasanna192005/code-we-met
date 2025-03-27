import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={cn("relative inline-flex text-transparent bg-clip-text", className)}
      {...props}
    >
      {children}
      <span className="absolute inset-0 pointer-events-none mix-blend-overlay">
      <span className="absolute -top-1/2 h-[30vw] w-[30vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-1_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-1))] blur-[0.75rem] opacity-80" />
        <span className="absolute right-0 top-0 h-[30vw] w-[30vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-2_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-2))] blur-[0.75rem] opacity-80" />
        <span className="absolute bottom-0 left-0 h-[30vw] w-[30vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-3_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-3))] blur-[0.75rem] opacity-80" />
        <span className="absolute -bottom-1/2 right-0 h-[30vw] w-[30vw] animate-[aurora-border_6s_ease-in-out_infinite,aurora-4_12s_ease-in-out_infinite_alternate] bg-[hsl(var(--color-4))] blur-[0.75rem] opacity-80" />
      </span>
    </MotionComponent>
  );
}