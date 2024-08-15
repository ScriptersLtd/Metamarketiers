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

const AboutBall = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });
//   const ballY = useTransform(
//     scrollYProgress,
//     [0, 0.3, 0.6, 0.8, 0.9],
//     [0, -100, -160, -100, 600]
//   );
  
  const ballSize = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ["100%", "100%", "20%"]
  );
  const ballTop = useTransform(scrollYProgress, [0, 0.8, 1], [0, -600, 1200]);
  return (
    <div
      className="mx-auto h-[4600px] absolute top-[60vh] w-screen flex justify-center z-10"
      ref={ref}
    >
      <motion.img
        src={"/aboutball.png"}
        width={300}
        height={2000}
        alt="about us"
        className="sticky   object-contain h-fit w-screen"
        style={{ width: ballSize, top: ballTop }}
      />
    </div>
  );
};

export default AboutBall;
