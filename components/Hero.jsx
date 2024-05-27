"use client";
import { LayoutGroup, motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
const Hero = () => {
  const [onLogoAnimationgComplete, setOnLogoAnimationComplete] =
    useState(false);
  useEffect(() => {
    setTimeout(() => setOnLogoAnimationComplete(true), 2000);
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
        <div className="flex justify-center items-center h-[100vh] flex-col relative ">
          {onLogoAnimationgComplete && (
            <>
              <motion.img
                src={"/ball-1.png"}
                width={50}
                height={50}
                alt=""
                className=" absolute z-20 top-72 left-48"
                initial={{ y: -50, opacity: 0, x: -50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
              />
              <motion.img
                src={"/ball-2.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-20 left-52 top-44"
                initial={{ y: -50, opacity: 0, x: -50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
              <motion.img
                src={"/ball-1.png"}
                width={50}
                height={50}
                alt=""
                className=" absolute z-20 right-48"
                initial={{ y: 10, opacity: 0, x: 50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
              <motion.img
                src={"/ball-2.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-20 right-52 bottom-52"
                initial={{ y: 10, opacity: 0, x: 50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.2 }}
              />

              <motion.img
                src={"/ball-3.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-20 left-80 bottom-20"
                initial={{ y: 10, opacity: 0, x: -50 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />
              <motion.img
                src={"/shape-logo.png"}
                width={200}
                height={140}
                alt=""
                className=" absolute z-20 top-20 right-56"
                initial={{ y: -20, opacity: 0, x: 20, rotate:75 }}
                animate={{ y: 0, opacity: 1, x: 0,  rotate:45 }}
                transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
              />

              <motion.img
                src={"/shape-logo.png"}
                width={100}
                height={100}
                alt=""
                className=" absolute z-20 bottom-52 left-64 opacity-80"
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
              animate={{ opacity: 1, scale: 1.5, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.3,
                ease: [0, 0.01, 0, 1],
              }}
              //   onAnimationComplete={() => setOnLogoAnimationComplete(true)}
              alt="logo"
              className="z-20 w-[500px] h-[110px]  absolute inset-auto"
              layoutId="logo"
            />
          )}
          <motion.div className="flex flex-col justify-center items-center max-w-[1200px] relative  z-10">
            <div className="w-[500px] h-[110px]">
              {onLogoAnimationgComplete && (
                <motion.img
                  src={"/logo.png"}
                  width={500}
                  height={300}
                  alt="logo"
                  className="z-20 w-[500px] h-[110px]  "
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
                className="mt-10"
              >
                <motion.h1 className=" font-semibold text-center text-neutral-800 text-5xl pb-6 leading-tight flex flex-col">
                  <motion.span initial={{ opacity: 0, y: 80 }} >isaidfu isadufn ybguywbd uaywbda ausyduysa</motion.span>
                  <motion.span initial={{ opacity: 0, y: 80 }}> uyas dyusa ysasy usi fu</motion.span>
                </motion.h1>
                <p className="z-10 text-center text-lg flex flex-col">
                  <motion.span initial={{ opacity: 0, y: 80 }}>
                    n aisnfi nsfidu nsidf naisoune iofunsiefnai fneinse
                    fpiansepfi nsepiunsf fuj asdf fwq iubpiu ompoi
                  </motion.span>
                  <motion.span initial={{ opacity: 0, y: 80 }}>
                    {" "}
                    pisaeuf paishefpiusafpi abnse pibsaefi ae iuhs piuas pius
                    fpisefiuh{" "}
                  </motion.span >
                  <motion.span initial={{ opacity: 0, y: 80 }}>
                    isahdfi safo ibsafe ioabef iobwaef iwafei bwa fiaef awfi
                    biweofb iwaofb w
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
