"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import ZigzagPath from "./Zigzag";
import Image from "next/image";
import ServiceComponent from "./ServiceComponent";
import { useMediaQuery } from "react-responsive";

export default function Steps() {
  const containerRef = useRef(null);
  const SeccontainerRef = useRef(null);
  const pathRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0", "1 1"],
  });

  const [pathLength, setPathLength] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      setPathLength(path.getTotalLength());
    }
  }, []);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const y = useTransform(scrollYProgress, [0, 1], [0, pathLength]);
  const x = useTransform(scrollYProgress, [0, 0.8, 1], [1000, -1000, -1400]);

  useEffect(() => {
    y.on("change", (latestY) => {
      if (pathRef.current) {
        const path = pathRef.current;
        const point = path.getPointAtLength(latestY);
        console.log("Scroll Y Progress:", scrollYProgress.get());
        console.log("Latest Y:", latestY);
        console.log("Ball Position:", { x: point.x, y: point.y });
        setBallPosition({ x: point.x, y: point.y });
      }
    });
  }, [y]);

  return (
    <div className="h-[3400px] lg:h-[6000px] py-24 lg:py-0 relative justify-center items-center flex  bg-neutral-950 overflow-clip">
      <div className="absolute h-full top-10 lg:top-0 z-0">
        <motion.div
          className="lg:sticky lg:bottom-0 flex justify-center  lg:h-[4500px] pt-4"
          ref={containerRef}
        >
          <div className="h-full absolute top-0 hidden lg:block">
            <div className="sticky top-0 h-[100vh] w-[100vw] -z-20">
              <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 -z-10 opacity-20 blur-3xl"></div>
              <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 -z-10 opacity-20 blur-3xl"></div>
            </div>
          </div>
          <div className="lg:sticky lg:top-0 lg:h-[100vh] w-[500px] inset-x-auto ">
            <svg
              className="absolute top-0 lg:block hidden"
              width="530"
              height="900"
              viewBox="0 0 530 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="zigzag"
                ref={pathRef}
                d="M1 0.5V423C1 441.667 15.5 479 73.5 479H472.5C491.333 480.5 529 492.2 529 527V899.5"
                stroke="#7528CF"
                strokeWidth={1.2}
                stroke-opacity="0.7"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-dasharray="20 23"
                className=""
              />
            </svg>

            <div className=" absolute top-0 lg:block hidden">
              <motion.div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#a855f7",

                  position: "absolute",
                  top: ballPosition.y,
                  left: ballPosition.x,
                  transform: "translate(-50%, -50%)",
                  zIndex: -10,
                }}
                className="blur-sm"
              />
            </div>
            <div className="lg:absolute lg:top-[300px] lg:left-10 flex w-[350px] mx-auto md:w-[480px] text-center backdrop-blur-xl text-3xl px-4 lg:text-[42px] lg:leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              <div>
                Innovative Marketing Solutions To Elevate Your Online Presence
              </div>
            </div>
            <motion.div
              style={{ x: isBigScreen ? x : 0 }}
              className="lg:absolute lg:top-96  flex flex-col lg:flex-row gap-x-5 overflow-hidden w-[320px] md:w-auto mx-auto py-10"
            >
              <Step heading={"How We Do?"} />
              <Step heading={"How We Do?"} />
              <Step heading={"How We Do?"} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <ServiceComponent />
    </div>
  );
}

const Step = ({ heading, image, text }) => {
  return (
    <div className="relative rounded-3xl backdrop-blur-md h-[150px] w-[320px] md:w-[500px] shadow-xl my-5">
      <div className="backdrop-blur-xl px-5 bg-gray-400/10 h-[150px] w-[320px] md:w-[500px] rounded-3xl  flex flex-col gap-y-5 justify-center mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 w-fit font-bold">
            {heading}
          </p>
          <Image
            src={"/whatwedo.png"}
            height={30}
            width={30}
            alt="img"
            className="object-contain"
          />
        </div>
        <p className="text-neutral-100">
          here text goes for the heading of the card
        </p>
      </div>
    </div>
  );
};
