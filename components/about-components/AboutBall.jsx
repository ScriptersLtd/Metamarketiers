"use client";
import {
  useScroll,
  useTransform,
  motion,
  useAnimate,
  stagger,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const AboutBall = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });

  const ballSize = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["300%", "300%", "15%"]
  );
  const ballTop = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["0%", "-100%", "0%"]
  );
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const smallBallTop = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["0%", "-40%", "0%"]
  );
  return (
    <div
      className="ball mx-auto h-[3700px] md:h-[4000px] absolute w-screen top-[100px] md:top-[500px] z-10 bg-neutral-950 "
      ref={ref}
    >
      <motion.div
        className="sticky h-screen w-screen z-10 overflow-x-clip flex  justify-center items-center"
        style={{top:isSmallScreen?smallBallTop:ballTop}}
      >
        <motion.img
          src={"/aboutball.png"}
          width={300}
          height={2000}
          alt="about us"
          className="object-contain z-10 w-fit h-fit mx-auto my-auto"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{width:ballSize}}
        />
      </motion.div>
    </div>
  );
};

export default AboutBall;
