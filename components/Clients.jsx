"use client";
import {
  LayoutGroup,
  motion,
  stagger,
  useAnimate,
  useInView,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  function useStaggerAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(
        ".logo-image",
        { opacity: 1 },
        {
          duration: 0.75,
          delay: stagger(0.1, { startDelay: 0.3 }),
        }
      );
    }, []);
    return scope;
  }
  const scope = useStaggerAnimation();
  return (
    <div
      className=" bg-neutral-950 w-screen relative overflow-clip pb-64"
      ref={ref}
    >
      <div className="absolute flex justify-center h-full w-screen ">
        <div className="absolute top-52 right-[10vw] h-[50vh] w-[60vw]  rounded-[220px]  bg-purple-600 opacity-15 blur-3xl"></div>
        <div className="absolute top-52 left-[10vw] h-[50vh] w-[60vw] rounded-[220px] bg-blue-600  opacity-15 blur-3xl"></div>
      </div>
      <div className="flex h-screen w-screen justify-start items-start ">
        <div className="flex justify-center items-center ml-6 mt-10">
        <motion.h2 className="bg-clip-text text-transparent  font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-[40px] lg:text-[90px] whitespace-nowrap">
          Our Clients
        </motion.h2>
        <motion.img
          layoutId="client-logo"
          src={"/diamond.png"}
          alt="our clients"
          width={300}
          height={300}
          className="w-[60px] lg:w-[80px] h-[100px] lg:h-[120px] client-glow flex ml-6 "
        />
        </div>
        <motion.div
          className="w-screen grid grid-cols-2 lg:grid-cols-3 absolute top-32 "
          ref={scope}
        >
          {logoList.map((logo, index) => {
            return (
              <motion.div
                key={index}
                className="flex justify-center items-center logo-image"
                initial={{ opacity: 0 }}
              >
                <Image
                  src={logo}
                  width={400}
                  height={400}
                  alt=""
                  className="w-[150px] lg:w-[300px] h-[130px] lg:h-[230px] object-contain "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const logoList = [
  "/client-logo-1.png",
  "/client-logo-2.png",
  "/client-logo-3.png",
  "/client-logo-4.png",
  "/client-logo-5.png",
  "/client-logo-6.png",
  "/client-logo-7.png",
  "/client-logo-8.png",
  "/client-logo-9.png",
];

export default Clients;
