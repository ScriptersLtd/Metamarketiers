"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
const DevelopmentComponent = () => {
  const mainRef = useRef();
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["0 1", "1 1"],
  });
  const x1 = useTransform(scrollYProgress, [0.2, 0.9], ["60%", "-100%"]);
  const smallX1 =useTransform(scrollYProgress, [0,0.9],["40%", "-100%"])
  const x2 = useTransform(scrollYProgress, [0.7, 1], [1600, 0]);
  const smallX2 = useTransform(scrollYProgress, [0.5, 0.9], [800, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.9,1],[0,1])
  const smallOpacity2 = useTransform(scrollYProgress, [0.8,0.9],[0,1])
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div
      className="h-[200rem] relative bg-neutral-950 w-screen overflow-clip"
      ref={mainRef}
    >
      <div className="absolute h-full">
        <motion.p
          className="sticky top-0 flex justify-start items-center h-screen ml-6 xl:ml-24 text-3xl xl:text-[50px] text-neutral-200"
          style={{ opacity: textOpacity }}
        >
          Product Like These ...
        </motion.p>
      </div>
      <div className="absolute h-[180rem] w-[3600px] ">
        <motion.div
          className="flex sticky top-0 justify-center items-center gap-x-24 h-screen w-full"
          style={{ x: isSmallScreen? smallX1 :x1 }}
        >
          <DevelopementCard1 scroll={scrollYProgress}  />
          <DevelopementCard2 name={"Web Design & Development"} desc={"Responsive Web Designs that Don’t Just Work—That Talk, Sell, and Impress! Score websites that are your brand’s digital handshake, blending striking visuals with seamless and intuitive performance."} scroll={scrollYProgress} background={"url(/development/bg-card-2.png)"} images={cardImages2} scrollY={[0.2 ,1]} />
          <DevelopementCard2 name={"Web App Development"} desc={"Web App Development That Marry Style with Strategy for Maximum Impact! Get apps that are more than just tools—they’re tailored solutions engineered to streamline processes, boost efficiency, empower and accelerate your growth."} scroll={scrollYProgress} background={"url(/development/bg-card-3.png)"} images={cardImages3} scrollY={[0.5 ,1]} />
        </motion.div>
      </div>
      <motion.div
        style={{ x: isSmallScreen? smallX2 :x2, opacity: isSmallScreen?smallOpacity2:opacity2 }}
        className="absolute w-screen flex flex-col  items-center z-10  h-[140rem] bottom-0"
      >
        <div className="sticky top-0 flex flex-col justify-center items-center h-screen max-w-4xl px-3">
            <div className="w-fit bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl p-2 text-center mb-6">
              META MARTKETIERS BENEFITS
            </div>
            <h2 className="text-2xl xl:text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-center">
            Majestic Web Development Services That Gets You Noticed Online
            </h2>
            <p className="text-white text-center mt-3 text-sm xl:text-base">
            We Don’t Just Market, We Create Digital Magic That Takes Your Brand to the Next Level—Scroll Less, Sell More!
            </p>
          </div>
      </motion.div>
    </div>
  );    
};

const DevelopementCard1 = ({ scroll }) => {
  const y1 = useTransform(scroll, [0, 1], [500, -500]);
  const y2 = useTransform(scroll, [0, 1], [-500, 500]);

  return (
    <div style={{backgroundImage: "url(/development/bg-card-1.png)"}} className="h-[300px] xl:h-[500px] w-[700px] xl:w-[1000px] bg-blue-700 overflow-clip rounded-2xl flex ">
      
      <div className="flex flex-col justify-end items-start px-5 pb-5 xl:pb-16">
        <h3 className="text-neutral-200 font-bold text-2xl xl:text-4xl">
        Mobile App Development
        </h3>
        <p className="text-neutral-200 text-sm max-w-[520px] xl:text-base">
          Innovating Your Ideas into Sleek Mobile Experiences! From concept to launch, we craft mobile applications that are more than just functional—they’re an experience; bringing your vision to life, making every swipe and tap a delight!
        </p>
      </div>
      <div className="flex justify-center items-center ml-auto px-10 space-x-4">
        <motion.div className="flex flex-col gap-5" style={{ y: y1 }}>
          <Image src={"/development/card-product-1.png"} height={400} width={200} alt="" className="rounded-3xl" />
          <Image src={"/development/card-product-2.png"} height={400} width={200} alt="" className="rounded-3xl"/>
          <Image src={"/development/card-product-3.png"} height={400} width={200} alt="" className="rounded-3xl"/>
        </motion.div>
        <motion.div className="flex flex-col gap-5" style={{ y: y2 }}>
        <Image src={"/development/card-product-4.png"} height={400} width={200} alt="" className="rounded-3xl" />
          <Image src={"/development/card-product-5.png"} height={400} width={200} alt="" className="rounded-3xl"/>
          <Image src={"/development/card-product-6.png"} height={400} width={200} alt="" className="rounded-3xl"/>
        </motion.div>
      </div>
    </div>
  );
};
const DevelopementCard2 = ({ name,desc,scroll, background, images, scrollY }) => {
  const y1 = useTransform(scroll, scrollY, [800, -600]);
  return (
    <div style={{backgroundImage: background}} className="h-[300px] xl:h-[500px] w-[700px] xl:w-[1000px] bg-purple-700 rounded-2xl flex overflow-clip">
       <div className="flex flex-col justify-end items-start px-5 pb-5 xl:pb-16">
        <h3 className="text-neutral-200 font-bold text-2xl xl:text-4xl">
          {name}
        </h3>
        <p className="text-neutral-200 text-sm max-w-[520px] xl:text-base">
          {desc}
        </p>
      </div>
      <div className="flex justify-center items-center ml-auto px-10 gap-x-2">
        <motion.div className="flex flex-col gap-5" style={{ y: y1 }}>
          {images.map((image)=> {
            return(
              <Image priority src={image} key={image} width={560} height={350} className="rounded-3xl" alt="image"/>
            )
          })

          }
        </motion.div>
      </div>
    </div>
  );
};

const cardImages2 = ["/development/card-product2-1.jpg","/development/card-product2-2.png","/development/card-product2-3.jpg","/development/card-product2-4.png",]
const cardImages3 = ["/development/card-product3-1.png","/development/card-product3-2.png","/development/card-product3-3.png","/development/card-product3-4.png",]

export default DevelopmentComponent;
