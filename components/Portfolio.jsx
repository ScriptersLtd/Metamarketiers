"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0", "1 1"],
  });
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const y2 = useTransform(scrollYProgress, [0, 0.2], [0, -150]);
  const scale2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.9],
    [1, 1, 0.4, 0]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.7],
    [1, 1, 0, 0]
  );

  const y3 = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const scale3 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.65, 0.8],
    [1, 1, 0.4, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.7, 0.8],
    [1, 1, 0.8, 0, 0]
  );

  const y4 = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, -50, -100]);
  const opacity4 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 0.9, 1],
    [1, 1, 0.8, 0.2, 0]
  );
  const scale4 = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8, 0.9],
    [1, 1, 0.4, 0]
  );

  return (
    <div ref={containerRef} className="bg-neutral-950 h-[4500px] relative">
      <div className="absolute flex top-64 justify-center h-full w-screen ">
        <div className="sticky top-[100px] right-[500px] h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl"></div>
        <div className="sticky top-[100px] left-[300px] h-[600px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl"></div>
      </div>
      <h2 className="font-bold text-[40px] lg:text-[90px] sticky top-0 pt-14 left-6 text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-sky-500 w-fit h-screen">
        Our Portfolio
      </h2>
      <div className=" w-full  h-[1000px]  flex justify-center items-start">
        <div className="flex mx-auto flex-col gap-y-5">
          <div className="h-full absolute left-0 top-56 w-screen">
            <PortfolioCard tag1={"web"} tag2={"marketing"} tag3={"UI/UX"} heading={"Creating Visual Stories That Click"} desc={"For Jacob Gronberg, we delivered a visually stunning custom web design that blends sleek aesthetics with a user-friendly touch. Every element, from bold visuals to intuitive navigation, mirrors his daring artistic flair. It’s more than a website—it’s a digital art gallery that captures the essence of Jacob’s unique vision."}  scale={scale1} opacity={opacity1} image={"/image_6.png"} />
          </div>
          <div className="h-full absolute left-0 top-[900px] w-screen">
            <PortfolioCard tag1={"web"} tag2={"marketing"} tag3={"UI/UX"}heading={"Fueling Sales with Scroll-Stopping Campaigns"} desc={"Our digital branding services took a 50% off sneaker sale to the next level with attention-grabbing ads and fresh, relatable content. From catchy social media posts to irresistible promotions, we turned a simple discount into a buzz-worthy shopping frenzy that drove traffic and boosted conversions—because who can resist a great deal when it’s marketed just right?"} opacity={opacity2} scale={scale2} image={"/homeimg1.png"} />
          </div>

          <div className="h-full absolute left-0 top-[1500px] w-screen">
            <PortfolioCard tag1={"web"}
tag2={"marketing"} tag3={"UI/UX"}              heading={"Designing Digital Marketplaces That Sell "}
              desc={"We revamped this e-commerce platform with a clean, intuitive design that highlights top products and simplifies shopping. From eye-catching product displays that scream ‘Buy me now!’ to a smooth checkout, we crafted an easy-to-navigate digital shopping experience that feels like personalized shopping—driving engagement and fueling sales with every click!"}
              y={y3}
              scale={scale3}
              opacity={opacity3}
              image={"/homeimg1.png"}
            />
          </div>
          <div className="h-full absolute left-0 top-[2500px] w-screen">
            <PortfolioCard tag1={"web"} tag2={"marketing"} tag3={"UI/UX"}heading={"Branding That Powers Performance"} desc={"For the athlete-focused brand, we didn’t just build a page; we built a vibe! Our logo design company’s approach  infused the page with high-energy visuals and motivational messaging that reflect the brand’s core values. The result? A powerful connection with the audience that goes beyond products—it’s about embracing the athlete mindset!"} y={y4} opacity={opacity4} scale={scale4} image={"/homeimg2.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioCard = ({ tag1,tag2,tag3,classes, y, scale, opacity,desc, heading,image }) => {
  return (
    <div className={`sticky top-52 md:top-72  ${classes}`}>
      <motion.div
        style={{
          y: y,
          scale: scale,
          opacity: opacity,
        }}
        className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1100px] mx-auto backdrop-blur-lg bg-neutral-400/15 h-[470px]  p-5 rounded-xl flex flex-col justify-center gap-y-5"
      >
        <div className=" sm:flex hidden gap-x-4 font-thin">
          <div className="border-[0.5px] text-neutral-100 text-xs border-neutral-400 rounded-full p-1 px-3">
            {tag1}
          </div>
          <div className="border-[0.5px] text-neutral-100 text-xs border-neutral-400 rounded-full p-1 px-3">
            {tag2}
          </div>
          <div className="border-[0.5px] text-neutral-100 text-xs border-neutral-400 rounded-full p-1 px-3">
            {tag3}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-5 justify-between items-start">
          <div className="flex flex-col  gap-y-2 sm:gap-x-5">
            <span className="text-neutral-100 text-xl sm:text-2xl  font-semibold">
              {heading}
            </span>
            <span className="text-white text-xs sm:text-[16px] leading-6 opacity-65 w-[250px] md:w-[300px] lg:w-[450px] ">
              {desc}
            </span>
          </div>
          <Image
            src={image}
            height={200}
            width={500}
            alt="img"
            className=" w-[350px] md:w-[600px] rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
