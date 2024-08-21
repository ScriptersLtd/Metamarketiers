"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "./Footer";
import Image from "next/image";
const Reviews = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });
  const isInView = useInView(ref, { once: false });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div className="relative h-[310rem]">
     
      <div
        className="h-[270rem] bg-neutral-950 relative z-10 max-w-[100vw] "
        ref={ref}
      >
          <div className="absolute flex top-64 justify-center h-full w-screen ">
    <div className="sticky top-[100px] right-[500px] h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl"></div>
    <div className="sticky top-[100px] left-[300px] h-[600px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl"></div>
    </div>
        <motion.div
          className="text-[31px] sm:text-[50px] md:text-[65px] lg:text-[80px] xl:text-[95px] h-[100vh] sticky top-0 flex justify-center items-center font-semibold text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-700 via-indigo-500 to-sky-600 mx-auto z-10 tracking-tight"
          style={{
            scale: isInView ? 0.8 : 1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          WHAT OUR CLIENTS SAY?
        </motion.div>
        <motion.div
          className="h-full absolute w-[100vw] top-0 -z-0 "
          style={{
            transform: isInView ? "none" : "translateX(0px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <motion.div
            className="sticky h-[100vh] w-[100vw] top-0 opacity-35 lg:opacity-70 xl:opacity-100"
            style={{ y: y1 }}
          >
            <motion.img
              src={`/shape-2.png`}
              className="absolute scale-[0.7] md:scale-100 -left-28 bottom-0 md:-left-32 md:-bottom-32"
              width={500}
              height={500}
            />
            <motion.img
              src={`/shape-4.png`}
              className="absolute scale-[0.7] md:scale-125 top-24 -right-6 md:top-14 md:right-44"
              width={250}
              height={250}
            />
            <motion.img
              src={`/shape-5.png`}
              className="absolute scale-[0.6] md:scale-100 bottom-0 -right-10 md:right-0 md:-bottom-24"
              width={200}
              height={200}
            />
            <motion.img
              src={`/shape-6.png`}
              className="absolute scale-[0.6] md:scale-100 -left-10 top-44  md:left-44 -rotate-12"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
        <motion.div className="z-20 space-y-40 mx-5 sm:mx-10 md:mx-16 lg:mx-44 relative">
          <ReviewCard profimg={"/review1.png"} />
          <ReviewCard right profimg={"/review3.png"} />
          <ReviewCard profimg={"/review4.png"} />
          <ReviewCard right profimg={"/review5.png"} />
          <ReviewCard profimg={"/review2.png"}/>
          <ReviewCard right profimg={"/review6.png"} />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const ReviewCard = ({ right,profimg }) => {
  return (
    <div
      className={`${
        right ? "ml-auto" : ""
      } w-[250px] sm:w-[460px] md:w-[520px] lg:w-[600px] backdrop-blur-lg bg-neutral-700/40 shadow-lg z-20 rounded-md flex flex-col justify-start items-start p-3 sm:p-5 gap-y-3 uppercase`}
    >
      <Image src={"/comma.png"} alt="quotation marks" className="h-[50px] w-[50px] object-contain" width={50} height={40} />
      <p className=" italic font-light sm:ml-4 text-sm sm:text-base text-neutral-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, molestias. Numquam, ipsam. Accusantium mollitia corrupti dolore delectus quasi</p>
      <div className="flex items-center justify-center">
      <Image src={profimg} width={80} height={80} alt="ball" />
      <div className="flex flex-col text-sm ml-2">
      <p className="font-bold text-sm sm:text-base text-neutral-200">client name 1</p>
      <p className="font-light text-sm sm:text-base text-neutral-300">designation</p>
      </div>
      </div>
    </div>
  );
};

export default Reviews;
