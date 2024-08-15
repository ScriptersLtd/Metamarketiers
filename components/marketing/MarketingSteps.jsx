"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
const MarketingSteps = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", " 1 1"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [25, 145]);
  return (
    <div className="bg-neutral-950 relative lg:h-[4000px] overflow-clip py-24" ref={ref}>
      <div className="lg:sticky lg:h-screen lg:w-screen lg:top-0 flex flex-col justify-center items-center">
        <motion.h2
          style={{
            transition: "transform 1s",
          }}
          className="text-4xl text-center lg:text-left 2xl:text-[80px] pt-24 font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 lg:w-fit z-10 lg:absolute lg:top-0 h-full"
        >
          HOW WE ACHIEVE YOUR GOALS
        </motion.h2>

        <div>
          <motion.img
            src="/marketingimg.png"
            className="w-[200px] h-[200px]  hidden lg:block"
            style={{ rotate }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-14">
        <MarketingStep classes={"lg:top-[25%]"} />
        <MarketingStep classes={"lg:top-[50%]"} />
        <MarketingStep classes={"lg:top-[75%]"} />
      </div>
    </div>
  );
};

export default MarketingSteps;

const MarketingStep = ({ classes }) => {
  const marketingRef = useRef();
  const { scrollYProgress } = useScroll({
    target: marketingRef,
    offset: ["0 0", " 1 1"],
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const x1 = useTransform(scrollYProgress, [0.1, 0.75], [0, -700]);
  const x2 = useTransform(scrollYProgress, [0.1, 0.75], [0, 700]);
  const opacity1 = useTransform(scrollYProgress, [0.15, 0.35], [1, 0]);
  return (
    <div className={`lg:absolute  w-screen lg:h-[47%] ${classes}`} ref={marketingRef}>
      <div
        className="flex flex-col lg:flex-row justify-between  mx-3 lg:mx-10 xl:mx-24 2xl:mx-60 lg:sticky lg:h-[700px] lg:top-[43%] px-3 py-5"
        
      >
        <motion.p
          className="text-3xl md:text-4xl w-fit lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-right  lg:w-[350px]"
          style={{x:isBigScreen? x1: 0, opacity: isBigScreen? opacity1 : 1 }}
        >
          RESEARCH
        </motion.p>
        <motion.p
          className="w-[350px] text-neutral-200 text-sm lg:text-md"
          style={{x:isBigScreen? x2: 0, opacity:isBigScreen? opacity1: 1 }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          assumenda excepturi sequi nostrum atque consequatur ea nemo
          dignissimos eveniet sint, mollitia modi unde nesciunt error architecto
          inventore? Ratione, provident doloremque.
        </motion.p>
      </div>
    </div>
  );
};
