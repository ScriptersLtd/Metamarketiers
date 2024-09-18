"use client";
import { LayoutGroup, motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
const Hero = () => {
  const [onLogoAnimationgComplete, setOnLogoAnimationComplete] =
    useState(false);
  useEffect(() => {
    setTimeout(() => setOnLogoAnimationComplete(true),100);
  }, []);
  function useStaggerAnimation(onLogoAnimationComplete) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      if (onLogoAnimationComplete) {
        animate(
          "span",
          { opacity: 1, y: 0 },
          {
            duration: 0.75,
            delay: stagger(0.05, { startDelay: 1.5 }),
            type:"spring"    
          }
        );
      }
    }, [onLogoAnimationComplete]);

    return scope;
  }
  const scope = useStaggerAnimation(onLogoAnimationgComplete);
  return (
    <>
      <LayoutGroup className="">
        <div className="flex justify-center items-center px-10 lg:px-5 h-[101vh] bg-neutral-950 flex-col relative w-screen overflow-clip">
        <div className="absolute flex justify-center items-center h-screen w-screen ">
    <div className="top-52 right-[500px] h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl"></div>
    <div className="top-52 left-[300px] h-[600px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl"></div>
    </div>
          {onLogoAnimationgComplete && (
            <>
              <motion.img
                src={"/ball-1.png"}
                width={50}
                height={50}
                className=" absolute z-10 top-10 left-10 2xl:top-72 2xl:left-48"
                initial={{ y: -50, opacity: 0, x: -50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
              />
              <motion.img
                src={"/ball-2.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-10 left-14 top-20 2xl:left-52 2xl:top-44"
                initial={{ y: -50, opacity: 0, x: -50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
              <motion.img
                src={"/ball-1.png"}
                width={50}
                height={50}
                alt=""
                className=" absolute z-10 bottom-0 right-10 2xl:right-48 2xl:bottom-36"
                initial={{ y: 10, opacity: 0, x: 50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
              <motion.img
                src={"/ball-2.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-10 right-0 bottom-12 2xl:right-52 2xl:bottom-52"
                initial={{ y: 10, opacity: 0, x: 50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.2 }}
              />

              <motion.img
                src={"/ball-3.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-10 left-5 2xl:left-80 bottom-20"
                initial={{ y: 10, opacity: 0, x: -50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
              <motion.img
                src={"/shape-logo.png"}
                width={200}
                height={140}
                alt=""
                className=" absolute z-10 top-20 right-6 2xl:right-56 w-[100px] 2xl:w-[200px]"
                initial={{ y: -20, opacity: 0, x: 20, rotate:75 }}
                animate={{ y: 0, opacity: 1, x: 0,  rotate:45 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />

              <motion.img
                src={"/shape-logo.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-10 bottom-52 left-64 opacity-80 hidden 2xl:block"
                initial={{ y: 20, opacity: 0, x: -20, rotate:-90 }}
                animate={{ y: 0, opacity: 1, x: 0,  rotate:-120 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
            </>
          )}
          {!onLogoAnimationgComplete && (
            <motion.img
              src={"/logo.png"}
              width={500}
              height={300}
              initial={{ opacity: 0, scale: 1, y: 200 }}
              animate={{ opacity: 1, scale: 1.22, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.3,
                ease: [0, 0.01, 0, 1],
              }}
              //   onAnimationComplete={() => setOnLogoAnimationComplete(true)}
              alt="logo"
              className="z-30 w-[350px] md:w-[500px]   absolute inset-auto"
              layoutId="logo"
            />
          )}
          <motion.div className="flex flex-col justify-center items-center max-w-[1200px] relative z-10">
            <div className=" w-[250px] md:w-[300px] z-30">
              {onLogoAnimationgComplete && (
                <motion.img
                  src={"/logo.png"}
                  width={500}
                  height={300}
                  alt="logo"
                  className="z-30 w-[250px] md:w-[300px]  "
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                    ease: [0, 0.01, 0, 1],
                  }}
                  layoutId="logo"
                />
              )}
            </div>
            {onLogoAnimationgComplete && (
              <motion.div
                ref={scope}
                className="mt-10 flex flex-col justify-center items-center px-3 z-50"
              >
                <motion.h1 className=" font-semibold text-center text-neutral-100  text-3xl xl:text-4xl 2xl:text-5xl pb-6 leading-tight flex flex-col max-w-4xl z-50">
                  <motion.span initial={{ opacity: 0, y: 80 }} >Magnify Your Impact with Magnetic Web Design & Development Agency</motion.span>
                </motion.h1>
                <p className=" text-center text-neutral-200 text-base md:text-lg flex flex-col z-50 ">
                  <motion.span initial={{ opacity: 0, y: 80 }}>
                  “From picking the perfect name to your grand digital debut, maximize your digital dreams into dynamic realities, where creativity sparks connections and innovation ignites possibilities.”
                  </motion.span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </LayoutGroup>
    </>
  );
};

export default Hero;
