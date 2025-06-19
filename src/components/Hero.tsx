import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       * Spotlight Layer - Positioned with lowest z-index
       * Multiple spotlights with different colors and positions create dynamic lighting effect
       */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
          fillOpacity="0.4"
          blurAmount={140}
        />
        
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
          fillOpacity="0.35"
          blurAmount={120}
        />
        
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw]" 
          fill="blue"
          fillOpacity="0.3" 
          blurAmount={100}
        />
      </div>

      {/**
       * Grid Background Layer - Using Tailwind grid utilities with radial mask
       * The grid is visible in the center and fades out toward the edges
       * Positioned with middle z-index (above spotlights, below content)
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.25] bg-grid-small-black-100/[0.5]
        absolute top-0 left-0 z-[1] flex items-center justify-center pointer-events-none"
      >
        {/* Radial gradient mask - transparent in center, black toward edges */}
        <div
          className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"
        />
      </div>

      {/**
       * Content Layer
       * Positioned with highest z-index to ensure it's above both grid and spotlight layers
       * Centered content with responsive sizing
       */}
      <div className="flex justify-center relative my-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase font-space-mono letter-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  Using Instrument Serif for the headline - creates visual impact and authority
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="font-instrument text-balanced text-center text-[40px] md:text-5xl lg:text-6xl letter-tight leading-tight mt-2 mb-4"
          />

          <p className="font-outfit text-center letter-wide mb-6 text-sm md:text-lg lg:text-2xl leading-relaxed">
            Hi! I&apos;m Moses, a Next.js Developer based in Croatia.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
