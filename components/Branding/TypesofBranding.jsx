"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const TypesofBranding = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1280px)" });
  const MainRef = useRef();

  const { scrollYProgress } = useScroll({
    target: MainRef,
    offset: ["0 1", "1 0"],
  });
  const x1 = useTransform(scrollYProgress, [0,0.3, 0.9], [200,0, -2000]);
  return (
    <div
      ref={MainRef}
      className="h-[1500px] xl:h-[3000px] xl:flex xl:flex-col gap-y-10 xl:justify-center xl:items-center py-10 bg-neutral-950  relative overflow-clip"
    >
      <div className="absolute h-full w-full top-32">
      <div className="sticky top-20 left-[25%] h-[550px] w-[850px] rounded-[120px] bg-gradient-to-r from-purple-600 to-blue-600 -z-0 opacity-20 blur-3xl"></div>
      {/* <div className="sticky bottom-0 right-[0%] h-[530px] w-[700px] rounded-[120px] bg-blue-600 -z-0 opacity-20 blur-3xl"></div> */}
      </div>
      <div className="absolute h-[700px]  top-12 left-4">
        <h2 className="sticky left-5 top-0 text-[35px] lg:text-[60px] xl:text-[100px] font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit">
          Types of Branding
        </h2>
      </div>

      <div className="absolute h-[1300px] xl:h-[2500px] top-32 xl:top-72 left-0">
        <motion.div

          style={{ x: x1 }}
          className="sticky top-32 flex w-[2000px]  justify-center items-center gap-5
        xl:gap-10 z-10"
        >
          <TypeCard isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype1.jpg"} />
          <TypeCard isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype2.jpg"} />
          <TypeCard isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype3.jpg"} />
          <TypeCard isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype4.jpg"} />
         
        </motion.div>
      </div>
    </div>
  );
};

const TypeCard = ({isBigScreen, isSmallScreen,imgsrc}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => isSmallScreen ? setIsClicked(!isClicked) : ""}

      className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] flex flex-col justify-normal   items-end relative rounded-xl  overflow-clip backdrop-blur-lg bg-neutral-400/20"
    >
      <motion.img
        animate={{ height: isBigScreen ? isHovered ? 350 : 500 : isSmallScreen ?  isClicked ? 250 : 500 : 500  }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={imgsrc}
        className="h-[500px]  w-[500px]  rounded-sm object-cover z-10"
        alt="branding type"
      />
      <div className="absolute bottom-[25%] left-5 lg:bottom-5 text-neutral-200 z-0">
        <p className="text-xl">Branding Type</p>
        <p className="hidden lg:block text-xs sm:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          tempore adipisci voluptatem possimus autem magni velit{" "}
        </p>
      </div>
    </div>
  );
};
export default TypesofBranding;
