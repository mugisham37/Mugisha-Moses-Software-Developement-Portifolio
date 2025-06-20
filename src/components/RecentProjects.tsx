"use client";

import { useState, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import { projects } from "@/data/index";
import { PinContainer } from "./ui/Pin";
import { Spotlight } from "./ui/Spotlight";

/**
 * RecentProjects Component
 * 
 * Displays a grid of recent projects with interactive 3D card effects.
 * Each project card features an image, title, description, tech stack icons,
 * and a link to the live site.
 */
const RecentProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Track which project card is currently being hovered
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-20 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 h-[100vh]"
          fill="purple"
          fillOpacity="0.25"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="heading text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </motion.h1>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((item, index) => (
            <motion.div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[90vw] md:w-[45vw] lg:w-[30vw]"
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(item.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <PinContainer
                title={item.link}
                href={`https://${item.link}`}
              >
                <div className="relative flex items-center justify-center sm:w-96 w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image 
                      src="/bg.png" 
                      alt="Background pattern" 
                      fill
                      className="object-cover opacity-60"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2} // Prioritize loading first two images
                    />
                  </div>
                  <div className="z-10 absolute bottom-0 transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={item.img}
                      alt={`${item.title} preview`}
                      width={300}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>

                <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-2">
                  {item.title}
                </h2>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mb-4"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                        aria-label={`Technology icon ${index + 1}`}
                      >
                        <Image 
                          src={icon} 
                          alt={`Tech icon ${index + 1}`} 
                          width={24} 
                          height={24}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <motion.div 
                    className="flex justify-center items-center group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:underline">
                      Check Live Site
                    </p>
                    <motion.div
                      animate={hoveredProject === item.id ? 
                        { x: [0, 5, 0], transition: { repeat: Infinity, duration: 1.5 } } : 
                        { x: 0 }
                      }
                    >
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </motion.div>
                  </motion.div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
