"use client"
import { motion } from "framer-motion";
const DesignHero = () => {
  return (
    <div className="flex justify-start items-center h-[60rem] flex-col overflow-hidden w-[100vw] relative bg-neutral-950 ">
       <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 z-20 opacity-20 blur-3xl"></div>
      <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 z-20 opacity-20 blur-3xl"></div>
      <motion.h1
        className="uppercase font-semibold text-center text-neutral-200  text-3xl xl:text-4xl 2xl:text-5xl pb-6 leading-tight flex flex-col max-w-4xl z-10 mt-56 px-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.2 }}
      >
       Turning Clicks into Customers with Web Design Agency That Make Your Brand Unforgettable
      </motion.h1>
      <motion.p
        className="text-center text-neutral-100 max-w-4xl z-10 px-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.3 }}
      >
        “From Concept to Creation, We Build a Digital Experience That’s As Dynamic and Engaging as Your Business.”

      </motion.p>
      <motion.img
        src="/design-img-2.png"
        alt="service-shape"
        className="  absolute top-10 2xl:top-44 left-0 sm:left-10 xl:left-44 2xl:left-72"
        width={130}
        height={130}
        initial={{ y: -50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0, rotate: -25 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
      />
      <motion.img
        src="/design-img-1.png"
        alt="service-shape"
        className="hidden xl:block absolute bottom-72 2xl:bottom-44 left-72"
        width={150}
        height={150}
        initial={{ y: 50, opacity: 0, x: -50 }}
        animate={{ y: 0, opacity: 1, x: 0, rotate: 35  }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.8 }}
      />
      <motion.img
        src="/design-img-3.png"
        alt="service-shape"
        className=" absolute top-2 2xl:top-14 "
        width={150}
        height={150}
        initial={{ y: 50, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.2 }}
      />
      <motion.img
        src="/design-img-4.png"
        alt="service-shape"
        className="hidden lg:block absolute lg:top-10 lg:right-10 2xl:top-44  2xl:right-44"
        width={150}
        height={150}
        initial={{  opacity: 0, x: 50,  }}
        animate={{  opacity: 1, x: 0, rotate: 25 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.1 }}
      />
      <motion.img
        src="/design-img-5.png"
        alt="service-shape"
        className=" absolute bottom-72 2xl:bottom-44 "
        width={150}
        height={150}
        initial={{ y: 50, opacity: 0, x: 80 }}
        animate={{ y: 0, opacity: 1, x: 0, rotate: -25 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.9 }}
      />
      <motion.img
        src="/design-img-1.png"
        alt="service-shape"
        className=" absolute bottom-44 xl:right-24 2xl:bottom-32 2xl:right-44"
        width={150}
        height={150}
        initial={{ y: 50, opacity: 0, x: 50 }}
        animate={{ y: 0, opacity: 1, x: 0, rotate: -35 }}
        transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.7 }}
      />
     
    </div>
  )
}

export default DesignHero