"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "../../../utils/cn";

/**
 * NavItem interface defines the structure for navigation items
 */
interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

/**
 * FloatingNavProps interface defines the component props
 */
interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

/**
 * FloatingNav Component
 * 
 * A responsive, animated navigation bar that shows/hides based on scroll direction.
 * Features smooth animations, accessibility support, and responsive design.
 * 
 * @param {FloatingNavProps} props - Component props
 * @returns {JSX.Element} The FloatingNav component
 */
export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  // Debounced scroll handler for better performance
  const handleScroll = useCallback(() => {
    const currentScrollY = scrollYProgress.get();
    
    if (typeof currentScrollY === "number") {
      // Show nav when at the top of the page
      if (currentScrollY < 0.05) {
        setVisible(true);
        return;
      }
      
      // Determine scroll direction and update visibility
      const direction = currentScrollY - lastScrollY.current;
      
      if (direction < 0) {
        // Scrolling up - show nav
        setVisible(true);
      } else if (direction > 0) {
        // Scrolling down - hide nav
        setVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    }
  }, [scrollYProgress]);

  // Register scroll event handler
  useMotionValueEvent(scrollYProgress, "change", handleScroll);

  // Ensure nav is visible when component mounts
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
        aria-label="Main navigation"
        role="navigation"
      >
          {navItems.map((navItem, idx) => (
            <Link
              key={`nav-item-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
              )}
              aria-label={navItem.name}
            >
              {navItem.icon && (
                <span className="block sm:inline-block" aria-hidden="true">
                  {navItem.icon}
                </span>
              )}
              <span className="text-sm cursor-pointer font-medium uppercase font-space-mono letter-widest">
                {navItem.name}
              </span>
            </Link>
          ))}
          
          {/* Mobile menu button - only shows on very small screens */}
          <div className="sm:hidden">
            <button
              className="text-neutral-50 hover:text-neutral-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent rounded-md p-1"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
              onClick={() => {
                // Mobile menu functionality can be implemented here
                // This is a placeholder for future implementation
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default FloatingNav;
