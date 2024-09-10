"use client"
import { motion } from "framer-motion"

const ServicesHero = () => {
  return (
    <div className="flex justify-start items-center h-[60rem] flex-col overflow-hidden w-[100vw] relative bg-neutral-950 ">
    <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 opacity-20 blur-3xl"></div>
   <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 opacity-20 blur-3xl"></div>

   <motion.h1
     className=" font-semibold text-center text-neutral-200  text-3xl xl:text-4xl 2xl:text-5xl pb-6 leading-tight flex flex-col max-w-4xl z-10 mt-36 lg:mt-56 px-3"
     initial={{ y: 100, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.2 }}
   >
     Skyrocket Your Online Presence with Comprehensive Digital Expertise!

   </motion.h1>
   <motion.p
     className="text-center text-neutral-100 max-w-4xl z-10 px-3"
     initial={{ y: 100, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.3 }}
   >
     Ready to dominate the digital space? Trust our leading digital marketing agency to elevate your brand with customized strategies and innovative designs, turning your vision into a compelling digital force!
   </motion.p>
   <motion.img
     src="/servicepageimg2.png"
     alt="service-shape"
     className="hidden lg:block absolute top-10 2xl:top-44 left-10 2xl:left-52"
     initial={{ y: -50, opacity: 0, x: -50 }}
     animate={{ y: 0, opacity: 1, x: 0 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
   />
 
   <motion.img
     src="/serviceimg3.png"
     alt="service-shape"
     className="hidden w-[200px] lg:block absolute top-2 2xl:top-44 right-20"
     initial={{ y: -50, opacity: 0, x: 50 }}
     animate={{ y: 0, opacity: 1, x: 0 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.2 }}
   />
   <motion.img
     src="/serviceimg4.png"
     alt="service-shape"
     className="hidden lg:block absolute bottom-44 2xl:bottom-20 left-20"
     initial={{ y: 50, opacity: 0, x: -50 }}
     animate={{ y: 0, opacity: 1, x: 0 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1.1 }}
   />
   <motion.img
     src="/serviceimg5.png"
     alt="service-shape"
     className="hidden w-[150px] xl:block absolute bottom-72 2xl:bottom-44 right-96"
     initial={{ y: 50, opacity: 0, x: 80 }}
     animate={{ y: 0, opacity: 1, x: 0 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 0.9 }}
   />

   <motion.img
     src="/servicepageimg.png"
     alt="service-shape"
     className="absolute  [h-400px] w-[400px] inset-x-auto -bottom-0"
     initial={{ y: 250, opacity: 0, x: 0 }}
     animate={{ y: 0, opacity: 1, x: 0 }}
     transition={{ duration: 1, ease: [0, 0.01, 0, 1], delay: 1 }}
   />
   
 </div>
  )
}

export default ServicesHero