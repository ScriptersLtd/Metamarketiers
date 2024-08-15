"use client";
import { motion, stagger, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Footer from "../Footer";

const AboutBody = () => {

function useTaglineAnimation() {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope)
    useEffect(() => {
        isInView && (
      animate(
        ".skill",
        { opacity: 1, y: 0 },
        {
          duration: 0.55,
          delay: stagger(0.08),
        }   
      ))
    }, [isInView]);
  
    return scope;
  }
  const scope = useTaglineAnimation();

  return (
    <>
    <div className="bg-neutral-950 w-full h-[4600px] flex justify-center z-20">
      <motion.div className="p-20 w-[100vw] backdrop-blur-xl bg-neutral-600/10 rounded-[100px] z-10 flex flex-col mx-auto absolute -mt-52">
        <div className="pb-[500px] mt-20">
          <h2 className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 w-fit font-bold  pb-4">
            Few Things About Us
          </h2>
          <p className="text-4xl text-neutral-100 mt-10 tracking-wide leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            officiis debitis nostrum eveniet architecto quod illo corrupti velit
            sapiente alias, in quos, pariatur neque id molestias magni. Quae ad
            distinctio fugiat similique quia vero quisquam deleniti dolorem,
            cupiditate, molestiae consequatur quam delectus aliquid atque
            repudiandae eum sed. Earum, eligendi illum!
          </p>
        </div>
        <div className="flex justify-start  items-center px-4 text-neutral-100 relative pb-[500px]">
          <div className=" text-3xl absolute left-0 -rotate-90">
            OUR EXPERIENCE
          </div>
          <div className="text-[20vw] font-bold ml-44">12+</div>
          <div className="text-[2vw] font-light flex items-center leading-relaxed  ml-20">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint
            tenetur sequi. Laboriosam exercitationem necessitatibus voluptas
            provident molestias officia, eligendi, dignissimos impedit veniam ex{" "}
          </div>
        </div>
       
        <div className="flex justify-start  items-center px-4 text-neutral-100 relative ">
        <div className=" text-3xl absolute left-0 -rotate-90">
          OUR MASTERED SKILLS
        </div>
        <motion.div className="flex flex-col ml-auto text-7xl font-light gap-y-9 whitespace-nowrap" ref={scope}>
            <motion.div className="skill"  initial={{ opacity: 0, y: 50 }}>Search Engine Optimization</motion.div>
            <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>Social Media Marketing</motion.div>
            <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>Branding</motion.div>
            <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>Website Designing</motion.div>
            <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>Website Development</motion.div>
        </motion.div>
      </div>
      </motion.div>
    </div>
      {/* <Footer /> */}
    </>
    );
};

export default AboutBody;
