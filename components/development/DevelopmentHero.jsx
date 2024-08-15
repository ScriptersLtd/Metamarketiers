"use client";
import { motion } from "framer-motion";
const DevelopmentHero = () => {
  return (
    <div className="flex justify-start items-center h-[60rem] flex-col overflow-hidden w-[100vw] relative bg-neutral-950 ">
       <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 z-20 opacity-20 blur-3xl"></div>
      <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 z-20 opacity-20 blur-3xl"></div>

      <motion.h1
        className=" font-semibold text-center text-neutral-200  text-3xl xl:text-4xl 2xl:text-5xl pb-6 leading-tight flex flex-col max-w-4xl z-10 mt-56 px-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.2 }}
      >
        isaidfu isadufn ybguywbd uaywbda ausyduysa uyas dyusa ysasy usi fu
      </motion.h1>
      <motion.p
        className="text-center text-neutral-100 max-w-4xl z-10 px-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.3 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
        officia quaerat doloribus? Deserunt nesciunt ex placeat, sapiente, quas
        omnis ipsum neque consequuntur inventore voluptate vero animi iure iste
        quia possimus cumque tempore, asperiores sit fuga necessitatibus
        suscipit doloribus aliquid nulla!
      </motion.p>
      <motion.img
        src="/development/development-hero-1.png"
        alt="service-shape"
        className="absolute top-10 2xl:top-44 left-4 md:left-44 2xl:left-72 rotate-12"
        width={140}
        height={140}
        initial={{ y: -50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
      />
      <motion.img
        src="/development/development-hero-2.png"
        alt="service-shape"
        className="hidden xl:block absolute bottom-72 2xl:bottom-44 left-72"
        width={140}
        height={140}
        initial={{ y: 50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
      />
      <motion.img
        src="/development/development-hero-3.png"
        alt="service-shape"
        className="hidden lg:block absolute top-2 2xl:top-44 right-44"
        width={140}
        height={140}
        initial={{ y: -50, opacity: 0, x: 50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.2 }}
      />
      <motion.img
        src="/development/development-hero-4.png"
        alt="service-shape"
        className="hidden lg:block absolute top-96 left-20"
        width={240}
        height={140}
        initial={{ y: 50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.1 }}
      />
      <motion.img
        src="/development/development-hero-5.png"
        alt="service-shape"
        className="hidden xl:block absolute bottom-72 2xl:bottom-44 right-72"
        width={170}
        height={170}
        initial={{ y: 50, opacity: 0, x: 80 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.9 }}
      />
      <motion.img
        src="/development/development-hero-6.png"
        alt="service-shape"
        className="hidden lg:block  absolute top-96 right-20"
        width={180}
        height={180}
        initial={{ y: 50, opacity: 0, x: 50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.7 }}
      />
      <motion.img
        src="/development/development-hero-9.png"
        alt="service-shape"
        className="absolute inset-x-auto -bottom-0"
        width={500}
        height={500}
        initial={{ y: 250, opacity: 0, x: 0 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
      />
      
    </div>
  );
};

export default DevelopmentHero;
