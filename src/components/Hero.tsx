import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GridBackground } from "./ui/GridBackground";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  Enhanced Grid Background - Positioned first for proper layering
       */}
      <GridBackground 
        className="h-screen w-full absolute top-0 left-0 z-0"
        gridSize="18px"
        lightGridColor="rgba(0, 0, 0, 0.35)"  /* Further increased opacity for better visibility */
        darkGridColor="rgba(255, 255, 255, 0.25)"  /* Further increased opacity for better visibility */
        lightBgColor="bg-white"
        darkBgColor="dark:bg-black-100"
        maskOpacity="15%"  /* Further reduced mask opacity to show more grid */
      />

      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       *  Positioned after grid for proper layering
       */}
      <div className="z-[1] relative">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
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
