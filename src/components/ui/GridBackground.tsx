import { cn } from "../../../utils/cn";
import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gridSize?: string;
  lightGridColor?: string;
  darkGridColor?: string;
  lightBgColor?: string;
  darkBgColor?: string;
  maskOpacity?: string;
}

export function GridBackground({
  children,
  className,
  gridSize = "20px",
  lightGridColor = "rgba(0, 0, 0, 0.3)",  // Further increased opacity for better visibility
  darkGridColor = "rgba(255, 255, 255, 0.2)",  // Further increased opacity for better visibility
  lightBgColor = "bg-white",
  darkBgColor = "dark:bg-black",
  maskOpacity = "20%",  // Further adjusted default mask opacity
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full", lightBgColor, darkBgColor, className)}>
      <div
        className={cn(
          "absolute inset-0",
          `[background-size:${gridSize}_${gridSize}]`,
          `[background-image:linear-gradient(to_right,${lightGridColor}_1px,transparent_1px),linear-gradient(to_bottom,${lightGridColor}_1px,transparent_1px)]`,
          `dark:[background-image:linear-gradient(to_right,${darkGridColor}_1px,transparent_1px),linear-gradient(to_bottom,${darkGridColor}_1px,transparent_1px)]`
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        lightBgColor,
        darkBgColor,
        `[mask-image:radial-gradient(ellipse_at_center,transparent_${maskOpacity},black)]`
      )}></div>
      {children}
    </div>
  );
}

// Keep the original component for backward compatibility
export function GridSmallBackgroundDemo() {
  return (
    <GridBackground className="flex h-[50rem] items-center justify-center">
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </GridBackground>
  );
}
