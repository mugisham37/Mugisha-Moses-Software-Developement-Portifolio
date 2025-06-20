"use client";

import { cn } from "../../../utils/cn";
import React, { useEffect, useState, useRef } from "react";

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * InfiniteMovingCards component displays a continuous scrolling carousel of cards
 * Optimized with React.memo to prevent unnecessary re-renders
 */
const InfiniteMovingCardsComponent: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // Initialize animation when component mounts
    addAnimation();
    
    // Cleanup function to prevent memory leaks
    return () => {
      if (containerRef.current) {
        containerRef.current.style.removeProperty("--animation-duration");
        containerRef.current.style.removeProperty("--animation-direction");
      }
    };
  }, []);

  /**
   * Sets up the animation by cloning items and configuring animation properties
   */
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone items to create continuous scrolling effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Configure animation direction and speed
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  /**
   * Sets the animation direction based on the direction prop
   */
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  /**
   * Sets the animation speed based on the speed prop
   */
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      aria-label="Testimonials carousel"
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw] transition-all duration-300 hover:shadow-lg hover:border-purple/50"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
            aria-label={`Testimonial from ${item.name}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <p className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal text-balanced">
                {item.quote}
              </p>
              <footer className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img src="/profile.svg" alt="Profile avatar" width={40} height={40} />
                </div>
                <div className="flex flex-col gap-1">
                  <cite className="text-xl font-bold leading-[1.6] text-white not-italic font-outfit">
                    {item.name}
                  </cite>
                  <span className="text-sm leading-[1.6] text-white-200 font-normal font-space-mono letter-wide">
                    {item.title}
                  </span>
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export memoized component with display name
export const InfiniteMovingCards = React.memo(InfiniteMovingCardsComponent);
InfiniteMovingCards.displayName = "InfiniteMovingCards";
