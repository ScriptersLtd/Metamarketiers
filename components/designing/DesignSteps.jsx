"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const DesignSteps = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-4 bg-neutral-950 py-44 justify-center items-center overflow-clip">
      <div className="absolute flex justify-center items-center h-screen w-screen ">
        <div className="top-52 right-[500px] h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl"></div>
        <div className="top-52 left-[300px] h-[600px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl"></div>
      </div>
      <DesignStep
        y1={-200}
        y2={0}
        title={"Research"}
        img={"/designstepimg1.png"}
        desc={
          <>
            <p className="text-2xl">Lorem, ipsum.</p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              sequi consectetur fugit magni corporis possimus debitis soluta
              porro ut tempora.
            </p>
            <br />
            <p className="text-2xl">Lorem, ipsum.</p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              sequi consectetur fugit magni corporis possimus debitis soluta
              porro ut tempora.
            </p>
          </>
        }
      />
      <DesignStep
        y1={0}
        y2={0}
        title={"Research"}
        img={"/designstepimg2.png"}

        desc={
          <>
            <p className="text-2xl">Lorem, ipsum.</p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              sequi consectetur fugit magni corporis possimus debitis soluta
              porro ut tempora.
            </p>
            <br />
            <p className="text-2xl">Lorem, ipsum.</p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              sequi consectetur fugit magni corporis possimus debitis soluta
              porro ut tempora.
            </p>
          </>
        }
      />
      <DesignStep
        y1={200}
        y2={0}
        title={"Research"}
        img={"/designstepimg3.png"}

        desc={
          <>
            <p className="text-2xl">Lorem, ipsum.</p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              sequi consectetur fugit magni corporis possimus debitis soluta
              porro ut tempora.
            </p>
            <br />
            <p className="text-2xl">Lorem, ipsum.</p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              sequi consectetur fugit magni corporis possimus debitis soluta
              porro ut tempora.
            </p>
          </>
        }
      />
    </div>
  );
};

const DesignStep = ({ y1, y2, title, desc,img }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [y1, y2]);
  return (
    <motion.div>
      <motion.div
        style={{ y: y }}
        className="h-[600px] w-[300px] md:w-[240px] lg:w-[300px] xl:w-[400px] border-l border-neutral-800"
        ref={ref}
      >
        <div className="flex flex-col px-5">
          <div className="flex gap-x-3">
          <p className="text-4xl text-transparent w-fit bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ">
            {title}
          </p>
          <Image src={img} alt="design image" width={50} height={50}  />
          </div>
          <div className=" text-neutral-200 font-light mt-4">{desc}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DesignSteps;
