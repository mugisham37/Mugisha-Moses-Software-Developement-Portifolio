"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { workExperience } from "../data/index";
import { Button } from "./ui/MovingBoards";

const Experience: React.FC = () => {
  // Pre-calculate random durations for each card to avoid re-renders
  const cardDurations = useMemo(() => {
    return workExperience.map(() => {
      // Generate a random duration between 10-20 seconds (10000-20000ms)
      // This ensures animations are smooth but varied
      return Math.floor(Math.random() * 10000) + 10000;
    });
  }, []);

  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            duration={cardDurations[index]}
            borderRadius="1.75rem"
            as="div"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "calc(1.75rem * 0.96)",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            aria-label={`Experience: ${card.title}`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="relative lg:w-32 md:w-20 w-16 h-16 md:h-20 lg:h-32">
                <Image
                  src={card.thumbnail}
                  alt={`${card.title} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 128px"
                  priority={index < 2} // Load the first two images with priority
                />
              </div>
              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
