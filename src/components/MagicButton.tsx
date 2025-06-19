import React from "react";
import { cn } from "../../utils/cn";

/**
 * MagicButton Component
 * 
 * A customizable button with an animated border effect.
 * Inspired by: https://ui.aceternity.com/components/tailwindcss-buttons
 */
interface MagicButtonProps {
  /** Button text content */
  title: string;
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Position of the icon relative to the text ("left" | "right") */
  position?: "left" | "right";
  /** Click handler function */
  handleClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Animation speed in seconds */
  animationSpeed?: number;
  /** Whether to disable the border animation */
  disableAnimation?: boolean;
}

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  className,
  isLoading = false,
  disabled = false,
  animationSpeed = 2,
  disableAnimation = false,
}: MagicButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      onClick={!disabled && !isLoading ? handleClick : undefined}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
    >
      <span 
        className={cn(
          "absolute inset-[-1000%]",
          !disableAnimation && `animate-[spin_${animationSpeed}s_linear_infinite]`,
          "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
          disabled && "opacity-50"
        )} 
      />

      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg",
          "bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          "transition-all duration-200 font-space-mono letter-wide",
          "hover:bg-slate-900 active:bg-slate-800",
          (disabled || isLoading) && "cursor-not-allowed",
          className
        )}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : (
          <>
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
