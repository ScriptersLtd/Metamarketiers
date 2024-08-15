"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const DevelopmentText = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const opacity1 = useTransform(scrollYProgress, [0.15, 0.25], [0.35, 1]);
  const smallOpacity1 = useTransform(scrollYProgress, [0, 0.3], [0.35, 1])
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45], [0.35, 1]);
  const smallOpacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0.35, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65], [0.35, 1]);
  const smallOpacity3 = useTransform(scrollYProgress, [0.6, 0.9], [0.35, 1]);
  return (
    <div className="py-[250px] xl:py-[600px] w-screen px-3 sm:px-5 bg-neutral-950" ref={ref}>
      <motion.p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-neutral-500 text-center max-w-6xl mx-auto">
        WE HELP BIG BUSINESSES{" "}
        <motion.span style={{ opacity: isSmallScreen?smallOpacity1:opacity1, color: "white" }}>
          DISCOVER
        </motion.span>
        ,{" "}
        <motion.span style={{ opacity: isSmallScreen?smallOpacity2:opacity2, color: "white" }}>
          DEVELOP
        </motion.span>
        , AND{" "}
        <motion.span style={{ opacity: smallOpacity1?smallOpacity3:opacity3, color: "white" }}>
          LAUNCH
        </motion.span>{" "}
        INCREDIBLE PRODUCTS
      </motion.p>
    </div>
  );
};

export default DevelopmentText;
