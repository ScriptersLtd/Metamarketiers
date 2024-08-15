"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer";
const PerformanceComponent = () => {
  return (
    <motion.div className="flex flex-col w-screen overflow-clip relative bg-neutral-950">
      <div className="relative h-fit z-20 bg-neutral-950">
        <div className="absolute top-44 right-[300px] h-[750px] w-[750px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl z-10"></div>
        <div className="absolute top-52 left-[200px] h-[700px] w-[700px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl z-10"></div>
        <div className="flex flex-col xl:flex-row gap-x-4 justify-center items-center w-screen pb-36 gap-y-4">
          <PerformanceCard image={"/development/benefit-image-1.png"} />
          <PerformanceCard image={"/development/benefit-image-2.png"} />
          <PerformanceCard image={"/development/benefit-image-3.png"} />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

const PerformanceCard = ({image}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-[330px] h-[500px] xl:w-[400px] xl:h-[600px] bg-neutral-200/10 rounded-3xl backdrop-blur-sm z-20 relative overflow-clip p-7"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className=" absolute inset-0 backface-hidden"
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
            <div className="absolute -top-80 bg-purple-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
            <div className="absolute -bottom-80 bg-purple-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
      </motion.div>

      <motion.div
        className="absolute inset-0 backface-hidden  flex flex-col "
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
            <div className="absolute -top-80 bg-cyan-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
            <div className="absolute -bottom-80 bg-cyan-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
        <p className=" z-30 text-neutral-100 font-bold text-3xl mb-3 backface-hidden pt-5 px-5">
          Performance ONE
        </p>
        <p className="  text-neutral-100 pt-4 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          maxime tenetur modi architecto ut totam harum eligendi sit quam ipsa
          tempore fugiat doloribus provident maiores nihil, blanditiis explicabo
          possimus. Molestias!
        </p>
        <Image src={image} alt="performance benefit" width={350} height={350} />
      </motion.div>
  
      <motion.div
        animate={{ rotate: isFlipped ? 45 : 0 }}
        transition={{}}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="text-center justify-center items-center flex text-4xl text-white absolute bottom-5 right-5 h-[60px] w-[60px] bg-gradient-radial to-purple-500/60 from-blue-500/50 backdrop-blur-sm rounded-full cursor-pointer"
      >
        +
      </motion.div>
    </motion.div>
  );
};
export default PerformanceComponent;
