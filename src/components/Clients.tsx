"use client";

import React from "react";
import { companies, testimonials } from "../data/index";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

/**
 * Clients component displays testimonials from satisfied clients and company logos
 * Uses InfiniteMovingCards for an animated testimonial carousel
 */
const Clients: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading animate-fade-in">
        Kind words from
        <span className="text-purple font-instrument"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Testimonials carousel */}
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
          aria-labelledby="testimonials-heading"
        >
          <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Company logos */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-16"
          aria-label="Companies we have worked with"
        >
          <h2 className="sr-only">Companies we have worked with</h2>
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="flex md:max-w-60 max-w-32 gap-2 items-center transition-transform hover:scale-105"
              title={company.name}
            >
              <img
                src={company.img}
                alt={`${company.name} logo icon`}
                className="md:w-10 w-5 h-auto"
                width={40}
                height={40}
              />
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                height={40}
                className="md:w-24 w-20 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
