"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ParallaxComponent = () => {
  const ImageRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ImageRef,
    offset: ["0 0", "1 0"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -1500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [1000, -2500]);
  const col3 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5],
    ["", "", "", "#fff"]
  );
  const col2 = useTransform(scrollYProgress, [0, 0.2, 0.5], ["", "", "#fff"]);
  const col = useTransform(scrollYProgress, [0, 0.5, 0.55], ["", "", "#fff"]);
  const col4 = useTransform(scrollYProgress, [0, 0.6, 0.75], ["", "", "#fff"]);

  return (
    <div
      ref={ImageRef}
      className="bg-neutral-950 relative h-[2000px] overflow-clip"
    >
      <div className="sticky top-0  z-10">
        <div className="absolute top-52 left-[50%] h-[350px] w-[550px] rounded-[120px] bg-purple-600 -z-10 opacity-20 blur-3xl"></div>
        <div className="absolute top-96 right-[40%] h-[400px] w-[600px] rounded-[120px] bg-blue-600 -z-10 opacity-20 blur-3xl"></div>
        <div className=" flex h-screen justify-between items-center left-20 lg:ml-5 px-10">
          <p className="max-w-[500px] text-neutral-500  text-2xl leading-10">
            Our portfolio isn’t just a gallery; it’s a journey through our best
            work in <motion.span style={{ color: col2 }}>logo</motion.span>,{" "}
            <motion.span style={{ color: col3 }}>branding</motion.span>, and{" "}
            <motion.span style={{ color: col }}>design</motion.span>. Each
            project is a story of creativity and strategy combined, reflecting
            how we turn visions into reality. From sleek interfaces to impactful visuals, watch how our expertise brings <motion.span style={{ color: col4 }}>brands to life</motion.span>. Trust us with your work and witness the craft, passion, and innovation that make every project stand out.
          </p>
        </div>
        <div className="absolute top-20 right-[5%] sm:right-[10%] md:right-[5%] xl:right-20 flex gap-5 opacity-10 sm:opacity-15 xl:opacity-95    -z-10">
          <motion.div
            style={{ y: y1 }}
            className="flex h-full flex-col gap-y-10"
          >
            <Image
              src={"/parallax6.jpg"}
              alt="parallaximg"
              className="h-[450px] object-cover w-[330px]"
              height={450}
              width={450}
            />

            <Image
              src={"/parallax2.jpg"}
              alt="parallaximg"
              className="h-[450px] mt-44 object-cover w-[330px]"
              height={450}
              width={450}
            />

            <Image
              src={"/parallax3.jpg"}
              alt="parallaximg"
              className="h-[450px] mt-20 object-cover w-[330px]"
              height={450}
              width={450}
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="hidden  lg:flex h-full flex-col gap-y-10"
          >
            <Image
              src={"/parallax4.jpg"}
              alt="parallaximg"
              className="h-[450px] mt-44 object-cover w-[330px]"
              height={450}
              width={450}
            />

            <Image
              src={"/parallax5.jpg"}
              alt="parallaximg"
              className="h-[450px] mt-32 object-cover w-[330px]"
              height={450}
              width={450}
            />

            <Image
              src={"/parallax1.jpg"}
              alt="parallaximg"
              className="h-[450px] mt-44 object-cover w-[330px]"
              height={450}
              width={450}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxComponent;

{
  /* <Image src={"/analytics.png"} alt="parallaximg" className="" height={200} width={200} /> */
}
