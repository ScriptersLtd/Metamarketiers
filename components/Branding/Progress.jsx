"use client";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Footer from "../Footer";
import { useMediaQuery } from "react-responsive";

const Progress = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLaptop = useMediaQuery({ query: "(max-height: 768px)" });

  const [isHovered, setIsHovered] = useState(false);
  const ImageRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ImageRef,
    offset: ["0 0", "1 0"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <div className="relative h-[1600px] lg:h-[2500px] xl:h-[3000px] ">
      <div
        ref={ImageRef}
        className="bg-neutral-950 relative h-[1600px] lg:h-[2500px] xl:h-[3000px] z-10 pb-5"
      >
        <div className="lg:sticky top-0 pt-5 flex flex-col lg:flex-row justify-center lg:items-start items-center gap-10 lg:gap-2 xl:gap-10 lg:px-4">
          <div
            className={`h-[620px]  w-[320px] sm:h-[570px] sm:w-[550px] md:w-[600px] lg:h-[700px] xl:w-[350px] xl:h-[${
              isLaptop ? "600px" : "740px"
            }] flex flex-col justify-start lg:justify-center xl:justify-between bg-neutral-900 rounded-xl`}
          >
            <div className="flex flex-col justify-center items-center p-5">
              <div className="flex flex-col max-w-[400px] gap-y-10 lg:gap-y-5">
                <h2 className="text-[20px] xl:text-[25px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
                  Driving Results, One Client at a Time
                </h2>
                <p className="text-[20px] text-neutral-300">
                  From startups to industry leaders, we drive impactful results,
                  turning goals into achievements and celebrating every
                  milestone along the way
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pb-10 gap-y-5">
              <div className="flex justify-center items-center h-[80px] w-[300px] bg-neutral-950 rounded-xl">
                <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
                  98% Satisfaction
                </p>
              </div>
              <div className="flex justify-center items-center h-[80px] w-[300px] bg-neutral-950 rounded-xl">
                <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
                  95% Client Retention
                </p>
              </div>
              <div className="flex justify-center items-center h-[80px] w-[300px] bg-neutral-950 rounded-xl">
                <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
                  97% Goal Achievement
                </p>
              </div>
            </div>
          </div>
          <div
            className={`h-[850px] w-[320px] sm:w-[550px] sm:h-[700px] md:w-[600px] md:h-[630px]  lg:w-[1000px] lg:h-[700px] xl:h-[${
              isLaptop ? "600px" : "740px"
            }] bg-neutral-900 rounded-xl`}
          >
            <div
              className={`flex justify-start xl:${
                isLaptop ? "justify-between mr-4" : "justify-center"
              } ml-16 xl:ml-0 gap-28 items-start pt-10`}
            >
              <motion.img
                style={{ y: isBigScreen ? y1 : y2, rotate: rotate }}
                src={"/rollingtype.png"}
                alt="rolling"
                width={120}
                height={120}
                className=""
              />
              <Image
                src={"/hands.png"}
                alt="hands"
                width={650}
                height={300}
                className={`object-contain hidden xl:block rounded-xl xl:h-[${
                  isLaptop ? "150px" : "auto"
                }] xl:w-[${isLaptop ? "400px" : "auto"}]`}
              />
            </div>

            <div className="flex flex-col justify-center  items-start pt-[25px]  lg:pr-0">
              <p className=" px-4 text-[25px] lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
                How We Fuel Your Growth?
              </p>
            </div>
            <div className=" flex flex-col items-start lg:pl-0 ">
              <p className="text-neutral-400 max-w-[850px] text-lg px-4">
                Every brand has a story, and we're here to make sure yours
                stands out. From our custom logo design service to innovative
                tactics, we craft solutions that push boundaries and drive
                success. Whether it's skyrocketing your digital footprint,
                refining your brand identity, or converting clicks into
                customers, we’re not just your service provider—we’re your
                growth partner. Let’s connect, collaborate, and create something
                exceptional. Ready to elevate your brand? Let’s get started!
              </p>
            </div>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="mt-10 xl:mt-5 lg:ml-20 xl:ml-4 ml-10 group relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center w-[60px] h-[60px] bg-purple-700">
                <ArrowRight
                  height={40}
                  width={40}
                  stroke="#fff"
                  strokeWidth={1}
                />
              </div>
              <motion.div
                animate={{ x: isHovered ? 63 : 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                className="absolute top-0 left-0 flex justify-center items-center w-[200px] h-[60px] bg-purple-700"
              >
                <p className="text-neutral-100 text-lg">Chat With Us</p>
                <ArrowRight
                  height={30}
                  width={30}
                  stroke="#fff"
                  strokeWidth={1}
                  className="group-hover:hidden "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer line1={"Through best-in-class branding agency services, we fuse creativity with strategy, crafting visually striking and strategically sound brands that don’t just fit in—they dominate!"} heading={"Ditch the Generic—Let’s Create a Brand That’s as Unique and Fearless as You Are!"} button={"Talk to us!"} />
    </div>
  );
};

export default Progress;
