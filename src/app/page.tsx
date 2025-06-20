"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  // Smooth scroll to sections when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Update URL without page reload
            history.pushState(null, '', targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10">
        <Hero />
      </section>
      
      {/* Grid Section - About & Skills */}
      <Grid />
      
      {/* Recent Projects Section */}
      <RecentProjects />
    </main>
  );
}
