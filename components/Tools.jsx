"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const Tools = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });
  const isInView = useInView(ref, { once: false });

  const y1 = useTransform(scrollYProgress, [0, 0.09], [500, 0]);

  const opacity = useTransform(scrollYProgress, [0, 0.1,0.5,0.8,1], [0, 0.5,1,0.1,0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x5 = useTransform(scrollYProgress, [0, 1], [0, -300]);
 
 
  return (
    <div
      className=" flex flex-col items-center bg-neutral-950 relative overflow-clip"
      ref={ref}
    >
      <div className="absolute h-full w-screen top-[200px]">
        <div className="absolute top-0 h-full -right-[100px]">
        <div className="h-[100vh] w-[150px] rounded-full bg-purple-600 sticky top-[0px] -rotate-45 blur-3xl "></div>
        </div>
        <div className="absolute top-0 h-full -left-[100px]">
        <div className="h-[100vh] w-[150px] rounded-full bg-blue-600 sticky top-[0px] -rotate-45 blur-3xl "></div>
        </div>
        
     
      </div>
      <motion.div style={{opacity:opacity}} className="absolute h-full w-screen top-[200px]">
      <div className="absolute top-0 h-full right-[100px]">
      <motion.img style={{y:y4,x:x2, rotate:"12deg"}}  src={"/analytics.png"} alt="tools logo" height={100} width={100} className="sticky object-contain rotate-12 top-[700px]" />
      </div>
      <div className="absolute top-0 h-full right-[300px]">
      <motion.img style={{y:y3,x:x3, rotate:"-20deg"}} src={"/javascript.png"} alt="tools logo" height={150} width={150} className="sticky object-contain -rotate-[20deg] top-[200px]" />
      </div>
      <div className="absolute top-0 h-full left-[250px]">
      <motion.img style={{y:y5,x:x4, rotate:"-12deg"}} src={"/wordpress.png"} alt="tools logo" height={150} width={150} className="sticky object-contain -rotate-12 top-44 " />
      </div>
      <div className="absolute top-44 h-full left-[440px]">
      <motion.img style={{y:y2, x:x5 ,rotate:"-30deg"}} src={"/figma.png"} alt="tools logo" height={100} width={100} className="sticky object-contain top-[600px]  " />
      </div>
      {/* 
       */}
      </motion.div>
    
      <div className="sticky h-screen top-0">
        <motion.h2
          style={{
            scale: isInView ? 1 : 1.7,
            y: y1,
               
            transition: "transform 1s", 
          }}
          className="text-[40px] lg:text-[90px]  h-fit  font-bold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit z-10 "
        >
          Tools We Use
        </motion.h2>
      </div>
      <div className="flex pt-[1000px]  justify-center items-center">
      <ul className=" cards">
        <Card
          id={"card1"}
          image={"/figma.png"}
          height={120}
          width={170}
          heading={"Introduction"}
          desc={
            <>
              The introduction sets the stage for your dissertation, effectively
              presenting the research question, outlining objectives, and
              elucidating the study&#39;s purpose. Crafted 
            </>
          }
        />
        <Card
          id={"card2"}
          image={"/analytics.png"}
          height={120}
          width={170}
          heading={"Literature Review"}
          desc={
            <>
              Our dissertation literature review help UK experts explore the existing scholarly works relevant to your topic, critically
              evaluating and synthesising the available literature. This chapter
             
            </>
          }
        />
        <Card
          id={"card3"}
          heading={"Methodology"}
          image={"/nextjs.png"}
          height={120}
          width={170}
          desc={
            <>
              The methodology chapter frames the research model, data mining
              strategies, and analytical outlook employed in your paper. Our
              dissertation writing help professionals ensure transparency and
              coherence in
            </>
          }
        />
        <Card
          id={"card4"}
          heading={"Findings/Results"}
          image={"/adsense.png"}
          height={120}
          width={170}
          desc={
            <>
              The findings/results chapter presents a coherent and clear
              overview of the data collected, revealing the outcomes of your
              research. Our dissertation help UK experts 
            </>
          }
        />
        <Card
          id={"card5"}
          image={"/shopify.png"}
          height={120}
          width={170}
          heading={"Discussion"}
          desc={
            <>
              The discussion chapter interprets the findings in the context of
              your research question, linking them back to the literature and
   
            </>
          }
        />
        <Card
          id={"card6"}
          image={"/wordpress.png"}
          height={120}
          width={170}
          heading={"Additional Chapters"}
          desc={
            <>
              Beyond the core chapters, we, as genuine dissertation assistance
              providers, also address essential subsidiary elements. The
              abstract briefly summarises your entire 
            </>
          }
        />
        <Card
          id={"card7"}
          image={"/javascript.png"}
          height={120}
          width={170}
          heading={"Conclusion"}
          desc={
            <>
              The conclusion chapter consolidates the main findings and restates
              the scope of your study. Additionally, it offers a precise
              recapitulation of your dissertation&#39;s 
            </>
          }
        />
      </ul>
    </div>
   
    </div>
  );
};


const Card = ({ id, heading, desc,image,height, width }) => {
  return (
    <li className="card  w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] " id={id}>
      <div className="card-body h-[260px] md:h-[200px] p-4 backdrop-blur-xl  bg-neutral-900/50 border-[0.5px] border-neutral-500 w-full">
        <h3 className="font-bold text-xl lg:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
          {heading}
        </h3>
        <div className="flex flex-col md:flex-row gap-y-3 justify-center gap-x-6 items-center">
        <p className="mt-1 lg:mt-4 opacity-75 text-xs text-neutral-100 md:text-base max-w-xl">{desc}</p>
        <Image src={image} alt="Tool image" height={height} width={width} className="object-contain w-[170px] h-[120px] lg:w-[180px] lg:h-[130px]  "  />
        </div>
      </div>
    </li>
  );
};

export default Tools;
