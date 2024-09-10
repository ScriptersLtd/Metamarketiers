"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Footer from "../Footer";
import Link from "next/link";
// import SerivceFooter from "../ServiceFooter";

const ServicesBox = () => {
  return (
    <div className="relative h-[2200px] sm:h-[2600px] lg:h-[1640px] xl:h-[1640px] overflow-hidden">
      <div className=" bg-neutral-950 h-[1600px] sm:h-[2000px] lg:h-[1000px] relative flex justify-center items-center py-20 z-10">
        <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600  opacity-20 blur-3xl"></div>
        <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600  opacity-20 blur-3xl "></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
          <UpperServiceCard
            title={<>Branding</>}
            desc={
              <>
                We help you carve out a unique identity that tells your story
                and resonates with your audience. Our logo and branding services
                process combines deep research, strategic thinking, and creative
                flair to build a brand that stands out in a crowded market.
              </>
            }
            link={"/branding"}

          />
          <UpperServiceCard
            title={<>Web Development</>}
            desc={
              <>
                Your website is the backbone of your online presence. Our custom
                web development services bring a talented team to craft robust,
                high-performing sites that are tailored to your business needs.
                We focus on functionality, speed, and scalability, using the
                latest technologies to ensure your site runs smoothly.
              </>
            }
            link={"/web-development"}
          />
          <LowerServiceCard
            title={<>Web Design</>}
            desc={
              <>
                Great design goes beyond aesthetics—it’s about creating an
                intuitive and engaging experience for your visitors. Our web
                design services USA focuses on blending creativity with
                functionality, crafting visually stunning websites that not only
                look good but work flawlessly. for more.
              </>
            }
            link={"/web-design"}

          />
          <LowerServiceCard
            title={<>Digital Marketing</>}
            desc={
              <>
                Reach your audience where they are with our tailored digital
                marketing solutions. We combine SEO, content marketing, social
                media, and paid advertising to amplify your brand’s presence
                online. Our data-driven approach means every campaign is
                designed to maximize ROI, turning clicks into customers.
              </>
            }
            link={"/digital-marketing-services"}
            
          />
        </div>
      </div>
      <Footer line1={"From powerful optimization to eye-catching web design, we provide everything you need to make your brand shine and succeed online!"} heading={"Why Wait When You Can Drive Real Results with a Full Suite of Our Digital Services?"} button={"Let's do great things together"} />
    </div>
  );
};

const UpperServiceCard = ({ title, desc, link }) => {
  const UpperserviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: UpperserviceRef,
    offset: ["0 1", "1 0"],
  });
  const y1 = useTransform(scrollYProgress, [0.2, 0.7], [0, 650]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-100, -100, -385]);

  return (
    <Link 
    href={link}
      ref={UpperserviceRef}
      className="flex flex-col gap-y-5 justify-center items-start h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] bg-neutral-800/25 z-10 rounded-xl relative p-3 overflow-hidden hover:bg-neutral-800/50 transition-all duration-200 "
    >
      <motion.div
        style={{ y: y1 }}
        className="hidden xl:block h-[250px] w-[250px] rounded-full absolute -top-32 right-5 -z-10 backdrop-blur-xl bg-neutral-300/20"
      ></motion.div>
      <motion.div
        style={{ y: y2, rotate: "45deg" }}
        className="h-[250px] w-[250px]  absolute -bottom-72 left-5 rotate-45 -z-10 bg-neutral-300/20"
      ></motion.div>
      <span className="text-neutral-200  text-3xl sm:text-4xl z-10">{title}</span>
      <p className="text-neutral-200 max-w-96 text-sm sm:text-md z-10">{desc}</p>
    </Link>
  );
};
const LowerServiceCard = ({ title, desc, link }) => {
  const LowerserviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: LowerserviceRef,
    offset: ["0 1", "1 0"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.6],
    [0, 230, 400, 600]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.5, 0.8],
    [-180, -300, -555, -550]
  );

  return (
    <Link
      ref={LowerserviceRef}
      className="flex flex-col gap-y-5 justify-center items-start h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] bg-neutral-800/25 z-10 rounded-xl relative p-3 overflow-hidden hover:bg-neutral-800/50 transition-all duration-200"
      href={link}
    >
      <motion.div
        style={{ y: y1 }}
        className=" h-[250px] w-[250px] rounded-full absolute -top-96 right-5 -z-10 backdrop-blur-xl bg-neutral-300/20"
      ></motion.div>

      <motion.div
        style={{ y: y2, rotate: "45deg" }}
        className="hidden xl:block h-[250px] w-[250px] absolute bottom-32 left-5 rotate-45 -z-10 bg-neutral-300/20"
      ></motion.div>
      <span className="text-neutral-200 text-3xl sm:text-4xl">{title}</span>
      <p className="text-neutral-200 max-w-96 text-sm md:text-md">{desc}</p>
    </Link>
  );
};
export default ServicesBox;
