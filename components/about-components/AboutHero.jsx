"use client";
import {
  useScroll,
  useTransform,
  motion,
  useAnimate,
  stagger,
} from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";

const title = "ABOUT US";
const spacedTitle = title.replace(/\s/g, "\u00A0");

function useTaglineAnimation() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      { opacity: 1, y: 0 },
      {
        duration: 0.85,
        delay: stagger(0.08, { startDelay: 0.2 }),
      }
    );
  }, []);

  return scope;
}

const AboutHero = () => {
  const scope = useTaglineAnimation();
  return (
    <div className="flex justify-center relative">
      <div className="font-bold text-[15vw] text-neutral-100 h-[700px] md:h-[1000px] pt-32 z-20">
        <h1 className="mb-0" ref={scope}>
          {[...spacedTitle].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              transition={{ ease: "anticipate" }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
