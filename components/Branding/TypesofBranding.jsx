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
          <TypeCard type={"Packaging Branding"} desc={"Branding and packaging are the pulse of your product, grabbing attention and ensuring your brand feels alive. Our approach makes your product stand out with power, purpose, and a punch of personality."} isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype1.jpg"} />
          <TypeCard type={"Product Branding"} desc={"Our product branding strategy and logo design turn your brand into a larger-than-life experience. We’ll make your product a powerful declaration of your brand's identity; unforgettable and traffic-stopping, just like a bold billboard."}   isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype2.jpg"} />
          <TypeCard type={"Corporate Branding"} desc={"Corporate branding services unify your brand’s presence, creating scroll-stopping designs that deeply resonate. Let’s build communities and drive engagement, making your brand a show-stopper in the corporate world!"} isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype3.jpg"} />
          <TypeCard type={"Digital Branding"} desc={"Digital branding services make your brand more than pixels on screen—it's a lifestyle. We design logos and identities that move, inspire and captivate, making your online presence irresistible and impressive."} isBigScreen={isBigScreen} isSmallScreen={isSmallScreen} imgsrc={"/brandingtype4.jpg"} />
         
        </motion.div>
      </div>
    </div>
  );
};

const TypeCard = ({type,desc,isBigScreen, isSmallScreen,imgsrc}) => {
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
      <div className="absolute  bottom-5 left-5  text-neutral-200 z-0">
        <p className="text-xl">{type}</p>
        <p className=" text-xs sm:text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
};
export default TypesofBranding;
