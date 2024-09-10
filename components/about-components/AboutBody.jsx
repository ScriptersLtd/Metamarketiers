"use client";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { useEffect } from "react";

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
            delay: stagger(0.08, { startDelay: 0.2 }),
          }
        );
    }, [isInView]);

    return scope;
  }
  const scope = useTaglineAnimation();
  return (
    <>
      <div className="bg-neutral-950 w-full h-[3100px] md:h-[3500px]  flex justify-center relative">
        <motion.div className="p-4 xl:p-20 w-[100vw] backdrop-blur-xl bg-neutral-600/10 rounded-[100px] z-10 flex flex-col mx-auto absolute -mt-52 mb-[100px]">
          <div className="pb-[250px] md:pb-[400px] mt-20">
            <h2 className="text-5xl md:text-7xl text-transparent text-center md:text-left  bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 w-fit font-bold pb-4">
              We’re a Design, Marketing, and Strategic Development Company!
            </h2>
            <p className="text-xl md:text-2xl text-neutral-100 mt-10 md:tracking-wide md:leading-relaxed max-w-6xl">
              Welcome to Aiosols, where marketing meets innovation and
              creativity thrives! We are not just another marketing agency—we
              are your strategic partners in turning brand visions into
              realities. With a blend of cutting-edge technology, creative
              expertise, and a deep understanding of market trends, we empower
              businesses to stand out in a noisy world.
            </p>
            <p className="text-xl md:text-2xl text-neutral-100 mt-10 md:tracking-wide md:leading-relaxed max-w-6xl">
              From web design and development to digital marketing and branding,
              we’re the magicians behind the scenes setting your brand apart
              from the rest. Our approach is simple yet powerful: we listen, we
              strategize, and we create—ensuring every campaign is tailored to
              your unique goals.
            </p>
            <p className="text-xl md:text-2xl text-neutral-100 mt-10 md:tracking-wide md:leading-relaxed max-w-6xl">
              Your success is our success, and we’re here to fuel your growth,
              one brilliant idea at a time!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-center md:px-4 text-neutral-100 relative pb-[250px] md:pb-[500px]">
            <div className="text-3xl md:absolute md:-left-24 md:-rotate-90">
              OUR EXPERIENCE
            </div>
            <div className="text-[20vw] font-bold  md:ml-44">12+</div>
            <div className="flex flex-col">
            <div className="text-xl  md:text-2xl font-light flex items-center leading-relaxed md:ml-4 xl:ml-20 mb-10">
            Over decade-long years of experience in the dynamic world of marketing, we’ve seen it all and done it all. We’ve helped startups find their voice, guided established brands through rebranding journeys, and navigated the ever-evolving digital landscape with finesse. Our rich history is a testament to our commitment to staying ahead of the curve and delivering results that matter.

            </div>
            <div className="text-xl  md:text-2xl font-light flex items-center leading-relaxed md:ml-4 xl:ml-20">
            Each project we take on is approached with the same enthusiasm and dedication, leveraging our extensive experience to drive measurable success. Whether it’s crafting a compelling brand story or optimizing your online presence, you can trust us to bring the best of our expertise to every challenge! 

            </div>
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
            className="text-3xl md:text-6xl text-neutral-100 font-bold z-10 text-center "
          >
           Ready to Kick Off Your Project? 

            <motion.span
               className="ml-3 underline underline-offset-8 "
            >
              Let’s Chat!
            </motion.span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutBody;
