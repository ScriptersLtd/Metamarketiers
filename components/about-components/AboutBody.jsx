"use client";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Footer from "../Footer";
import { useState } from "react";

const AboutBody = () => {
  function useTaglineAnimation() {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
      isInView &&
        animate(
          ".skill",
          { opacity: 1, y: 0 },
          {
            duration: 0.55,
            delay: stagger(0.08, {startDelay: 0.2}),

          }
        );
    }, [isInView]);

    return scope;
  }
  const scope = useTaglineAnimation();
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="bg-neutral-950 w-full h-[3100px] md:h-[3500px]  flex justify-center relative">
        <motion.div className="p-4 xl:p-20 w-[100vw] backdrop-blur-xl bg-neutral-600/10 rounded-[100px] z-10 flex flex-col mx-auto absolute -mt-52 mb-[100px]">
          <div className="pb-[250px] md:pb-[500px] mt-20">
            <h2 className="text-5xl md:text-7xl text-transparent text-center md:text-left  bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 w-fit font-bold pb-4">
              Few Things About Us
            </h2>
            <p className="text-xl md:text-4xl text-neutral-100 mt-10 md:tracking-wide md:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              officiis debitis nostrum eveniet architecto quod illo corrupti
              velit sapiente alias, in quos, pariatur neque id molestias magni.
              Quae ad distinctio fugiat similique quia vero quisquam deleniti
              dolorem, cupiditate, molestiae consequatur quam delectus aliquid
              atque repudiandae eum sed. Earum, eligendi illum!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center md:px-4 text-neutral-100 relative pb-[250px] md:pb-[500px]">
            <div className="text-3xl md:absolute md:-left-24 md:-rotate-90">
              OUR EXPERIENCE
            </div>
            <div className="text-[20vw] font-bold  md:ml-44">12+</div>
            <div className="text-xl  md:text-[2vw] font-light flex items-center leading-relaxed md:ml-4 xl:ml-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              sint tenetur sequi. Laboriosam exercitationem necessitatibus
              voluptas provident molestias officia, eligendi, dignissimos
              impedit veniam ex
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start items-center px-4 pb-20 text-neutral-100 relative">
            <div className="text-3xl md:absolute md:-left-32 md:-rotate-90 text-center mb-4">
              OUR MASTERED SKILLS
            </div>
            <motion.div
              className="flex flex-col ml-auto text-2xl xl:text-7xl font-light gap-y-2 md:gap-y-9 whitespace-nowrap"
              ref={scope}
            >
              <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>
                Search Engine Optimization
              </motion.div>
              <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>
                Social Media Marketing
              </motion.div>
              <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>
                Branding
              </motion.div>
              <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>
                Website Designing
              </motion.div>
              <motion.div className="skill" initial={{ opacity: 0, y: 50 }}>
                Website Development
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute h-screen w-screen flex justify-center items-center bottom-0">
          <motion.div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave = {()=> setIsHover(false)}            
            className="text-3xl md:text-6xl text-neutral-100 font-bold z-10 flex gap-x-3"
          >
            Start A Project? <motion.div animate={isHover ? {rotateX:360} : {rotateX:0}} transition={{ duration: 1, ease:"easeInOut" }}>Lets Talk</motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutBody;
