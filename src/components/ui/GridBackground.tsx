import { cn } from "../../../utils/cn";
import React from "react";

type GridBackgroundProps = {
  className?: string;
  gridSize?: string;
  lightGridColor?: string;
  darkGridColor?: string;
  lightBgColor?: string;
  darkBgColor?: string;
  maskOpacity?: string;
  lineThickness?: string;
};

export function GridBackground({
  className,
  gridSize = "20px",
  lightGridColor = "rgba(228, 228, 231, 0.7)",
  darkGridColor = "rgba(38, 38, 38, 0.5)",
  lightBgColor = "bg-white",
  darkBgColor = "dark:bg-black",
  maskOpacity = "20%",
  lineThickness = "1px",
}: GridBackgroundProps) {
  // Determine if we're using transparent backgrounds
  const isLightBgTransparent = lightBgColor === "bg-transparent";
  const isDarkBgTransparent = darkBgColor === "dark:bg-transparent";
  
  return (
    <div className={cn("relative w-full", className)}>
      {/* Enhanced Grid pattern with dots at intersections for better visibility */}
      <div
        className={cn(
          "absolute inset-0",
          `[background-size:${gridSize}_${gridSize}]`,
          `[background-image:linear-gradient(to_right,${lightGridColor}_${lineThickness},transparent_${lineThickness}),linear-gradient(to_bottom,${lightGridColor}_${lineThickness},transparent_${lineThickness})]`,
          `dark:[background-image:linear-gradient(to_right,${darkGridColor}_${lineThickness},transparent_${lineThickness}),linear-gradient(to_bottom,${darkGridColor}_${lineThickness},transparent_${lineThickness})]`,
        )}
      />
      
      {/* Dots at grid intersections for enhanced visibility */}
      <div 
        className={cn(
          "absolute inset-0 z-[1]",
          `[background-size:${gridSize}_${gridSize}]`,
          `[background-position:0_0]`,
          `[background-image:radial-gradient(${lightGridColor}_3px,transparent_3px)]`,
          `dark:[background-image:radial-gradient(${darkGridColor}_3px,transparent_3px)]`,
        )}
      />
      
      {/* Radial gradient mask */}
      {/* Only add the mask if backgrounds aren't transparent */}
      {(!isLightBgTransparent || !isDarkBgTransparent) && (
        <div 
          className={cn(
            "pointer-events-none absolute inset-0 flex items-center justify-center",
            lightBgColor,
            darkBgColor,
            `[mask-image:radial-gradient(ellipse_at_center,transparent_${maskOpacity},black)]`
          )}
        />
      )}
    </div>
  );
}

// Keep the original demo component for reference
export function GridSmallBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p>
    </div>
  );
}
