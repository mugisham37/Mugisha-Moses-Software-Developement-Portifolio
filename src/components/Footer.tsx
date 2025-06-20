import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

/**
 * Footer Component
 * 
 * Displays the website footer with contact information, a call-to-action button,
 * copyright information, and social media links.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const ownerName = "Mugisha Moses"; // Using the name from metadata

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="Decorative grid background"
          className="w-full h-full opacity-50"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h2 className="heading lg:max-w-[45vw] animate-fade-in font-instrument">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl font-outfit">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a 
          href="mailto:contact@mugishamoses.dev" 
          className="transition-transform hover:scale-105 duration-300"
          aria-label="Send email to contact@mugishamoses.dev"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            className="font-space-mono"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light font-outfit">
          Copyright © {currentYear} {ownerName}
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href="#" // Replace with actual social media links
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:bg-opacity-100 hover:scale-110"
              aria-label={`Social media link ${info.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={info.img} 
                alt={`Social media icon ${info.id}`} 
                width={20} 
                height={20} 
                className="transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
