"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Footer from "../Footer"

const ServicesBox = () => {
  return (
    <div className="relative h-[2200px] sm:h-[2600px] lg:h-[1640px] xl:h-[1640px] overflow-hidden">
    <div className=" bg-neutral-950 h-[1600px] sm:h-[2000px] lg:h-[1000px] relative flex justify-center items-center py-20 z-10">
         <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 z-20 opacity-20 blur-3xl"></div>
      <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 z-20 opacity-20 blur-3xl"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
    <UpperServiceCard />
    <UpperServiceCard />
    <LowerServiceCard />
    <LowerServiceCard />
</div>
    </div>
<Footer />
    </div>
  )
}

const UpperServiceCard = () => {
  const UpperserviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: UpperserviceRef,
    offset: ["0 1", "1 0"],
  });
  const y1 = useTransform(scrollYProgress, [0.2, 0.7], [0, 650]);
  const y2 = useTransform(scrollYProgress, [0.2,0.5, 0.8], [-100,-100, -385]);

    return (

        <div ref={UpperserviceRef} className="flex flex-col gap-y-5 justify-center items-start h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] bg-neutral-800/25 z-10 rounded-xl relative p-3 overflow-hidden">
<motion.div style={{y:y1}} className="hidden xl:block h-[250px] w-[250px] rounded-full absolute -top-32 right-5 -z-10 backdrop-blur-xl bg-neutral-300/20"></motion.div>
<motion.div style={{y:y2, rotate:"45deg"}} className="h-[250px] w-[250px]  absolute -bottom-72 left-5 rotate-45 -z-10 bg-neutral-300/20"></motion.div>
<span className="text-neutral-200 text-4xl">Hello</span>
<p className="text-neutral-200 max-w-96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, aspernatur facere esse at magnam repudiandae minima mollitia ducimus, assumenda dolorem quidem veniam dolores ?</p>
        
    </div>
    )
}
const LowerServiceCard = () => {
  const LowerserviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: LowerserviceRef,
    offset: ["0 1", "1 0"],
  });
  const y1 = useTransform(scrollYProgress, [0,0.2, 0.35,0.6], [0,230, 400,600]);
  const y2 = useTransform(scrollYProgress, [0.1,0.2,0.5, 0.8], [-180,-300,-555, -550]);

    return (

        <div ref={LowerserviceRef} className="flex flex-col gap-y-5 justify-center items-start h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] bg-neutral-800/25 z-10 rounded-xl relative p-3 overflow-hidden">
<motion.div style={{y:y1}} className=" h-[250px] w-[250px] rounded-full absolute -top-96 right-5 -z-10 backdrop-blur-xl bg-neutral-300/20"></motion.div>

<motion.div style={{y:y2, rotate:"45deg"}} className="hidden xl:block h-[250px] w-[250px] absolute bottom-32 left-5 rotate-45 -z-10 bg-neutral-300/20"></motion.div>
<span className="text-neutral-200 text-4xl">Hello</span>
<p className="text-neutral-200 max-w-96">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, aspernatur facere esse at magnam repudiandae minima mollitia ducimus, assumenda dolorem quidem veniam dolores ?</p>
        
    </div>
    )
}
export default ServicesBox