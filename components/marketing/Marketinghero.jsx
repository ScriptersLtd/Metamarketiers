"use client";
import { motion } from "framer-motion";
const MarketingHero = () => {
  return (
    <div className="flex justify-start items-center h-[60rem] flex-col overflow-hidden w-[100vw] relative bg-neutral-950 ">
      <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 z-20 opacity-20 blur-3xl"></div>
      <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 z-20 opacity-20 blur-3xl"></div>

      <motion.h1
        className=" font-semibold text-center text-neutral-200  text-3xl xl:text-4xl 2xl:text-5xl pb-6 leading-tight flex flex-col max-w-4xl z-10 mt-24 lg:mt-56 px-3"
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
        src="/insta3d.png"
        alt="service-shape"
        className="hidden lg:block w-[200px] h-[300px] object-contain absolute top-10 2xl:top-44 left-10 2xl:left-52"
        initial={{ y: -50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
      />
      <motion.img
        src="/fb3d.png"
        alt="service-shape"
        className="hidden xl:block w-[200px] h-[300px] object-contain absolute bottom-72 2xl:bottom-44 left-72"
        initial={{ y: 50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
      />
      <motion.img
        src="/yt3d.png"
        alt="service-shape"
        className="hidden lg:block w-[200px] h-[300px] object-contain absolute top-2 2xl:top-44 right-44"
        initial={{ y: -50, opacity: 0, x: 50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.2 }}
      />
      <motion.img
        src="/linkedin3d.png"
        alt="service-shape"
        className="hidden lg:block w-[200px] h-[300px] object-contain absolute bottom-44 2xl:bottom-20 left-0"
        initial={{ y: 50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.1 }}
      />
      <motion.img
        src="/star3d.png"
        alt="service-shape"
        className="hidden xl:block w-[200px] h-[300px] object-contain absolute bottom-72 2xl:bottom-44 right-96"
        initial={{ y: 50, opacity: 0, x: 80 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.9 }}
      />
      <motion.img
        src="/thread3d.png"
        alt="service-shape"
        className="hidden lg:block w-[200px] h-[300px] object-contain  absolute bottom-44 2xl:bottom-20 right-20"
        initial={{ y: 50, opacity: 0, x: 50 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.7 }}
      />
      <motion.img
        src="/service-hero.png"
        alt="service-shape"
        className="absolute inset-x-auto -bottom-0"
        initial={{ y: 250, opacity: 0, x: 0 }}
        animate={{ y: 0, opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
      />
    </div>
  );
};

export default MarketingHero;
