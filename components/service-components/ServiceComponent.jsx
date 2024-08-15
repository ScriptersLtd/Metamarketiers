"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Footer from "../Footer";

const ServiceComponent = () => {
  const serviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["0 0", "1 1"],
  });
  const shapeOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 0.7, 0.7, 0]
  );
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <motion.div
      ref={serviceRef}
      className="w-full absolute bottom-0 z-20 "
    >
      <div className=" top-0 z-10 relative w-screen bg-gradient-to-b bg-neutral-950">
        <div className="h-full w-screen absolute z-0">
          <div className="sticky top-52 flex justify-center items-center">
            <div className=" h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl z-0"></div>
            <div className=" h-[400px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl z-0"></div>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <motion.div
            className="sticky h-[100vh] top-0 z-0"
            style={{
              opacity: shapeOpacity,
              y: shapeY,
            }}
          >
            <motion.img
              src={"/service-shape-1.png"}
              alt="instalogo"
              height={200}
              width={200}
              className="object-contain absolute top-[250px] right-[200px] z-0"
            />
            <motion.img
              src={"/service-shape-2.png"}
              alt="fblogo"
              height={100}
              width={100}
              className="object-contain absolute top-[600px] left-[600px] z-0"
            />
            <motion.img
              src={"/service-shape-3.png"}
              alt="youtubelogo"
              height={150}
              width={150}
              className="object-contain absolute top-[700px] left-[1000px] z-0"
            />
            <motion.img
              src={"/service-shape-4.png"}
              alt="settinglogo"
              height={100}
              width={100}
              className="object-contain absolute top-[300px] left-[300px] z-0"
            />
            <motion.img
              src={"/service-shape-5.png"}
              alt="linkedinlogo"
              height={150}
              width={150}
              className="object-contain top-[800px] left-0 z-0 hidden lg:absolute"
            />
            <motion.img
              src={"/service-shape-6.png"}
              alt="starshape"
              height={100}
              width={100}
              className="object-contain absolute top-[500px] right-[400px] z-0"
            />
            <motion.img
              src={"/dc3d.png"}
              alt="discordlogo"
              height={140}
              width={140}
              className="object-contain absolute top-[0px] right-[800px] z-0"
            />
            <motion.img
              src={"/thread3d.png"}
              alt="threadlogo"
              height={140}
              width={140}
              className="object-contain absolute top-[60px] left-[100px] z-0"
            />


          </motion.div>
        </div>
        <motion.div className="flex flex-col justify-center items-center lg:h-[300px] px-3">
          <p className=" text-4xl lg:text-6xl text-center lg:text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-700 h-[90px] lg:h-[70px] to-blue-500 w-fit z-10">
            Digital Marketing Services
          </p>
          <p className="text-white z-10 text-center  lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            repudiandae asperiores itaque, omnis molestias doloribus incidunt
            nisi
          </p>
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-y-10 py-24 z-10">
          <Services
          img={"/marketing-service-1.png"}
            heading={<>Lorem ipsum dolor sit amet consectetur.</>}
            desc1={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsam, consectetur molestiae, similique non minima porro
                inventore doloribus vitae qui laboriosam officia accusamus
                libero sequi neque, ducimus et corporis! Similique fugiat totam
                eius dignissimos alias aliquam quia numquam quis exercitationem?
              </>
            }
            desc2={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea
                esse amet eius. Architecto voluptatem assumenda quibusdam nemo
                libero? Odit aspernatur dolor unde voluptatum eius iste id
                ducimus itaque eum facere animi, eaque accusamus impedit dolorum
                vero debitis excepturi ipsa nihil necessitatibus atque
                consectetur rerum iusto minus. Earum, hic ut.
              </>
            }
          />
          <Services
          img={"/marketing-service-3.png"}

            heading={<>Lorem ipsum dolor sit amet consectetur.</>}
            desc1={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsam, consectetur molestiae, similique non minima porro
                inventore doloribus vitae qui laboriosam officia accusamus
                libero sequi neque, ducimus et corporis! Similique fugiat totam
                eius dignissimos alias aliquam quia numquam quis exercitationem?
              </>
            }
            desc2={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea
                esse amet eius. Architecto voluptatem assumenda quibusdam nemo
                libero? Odit aspernatur dolor unde voluptatum eius iste id
                ducimus itaque eum facere animi, eaque accusamus impedit dolorum
                vero debitis excepturi ipsa nihil necessitatibus atque
                consectetur rerum iusto minus. Earum, hic ut.
              </>
            }
          />
          <Services
          img={"/marketing-service-2.png"}

            heading={<>Lorem ipsum dolor sit amet consectetur.</>}
            desc1={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                ipsam, consectetur molestiae, similique non minima porro
                inventore doloribus vitae qui laboriosam officia accusamus
                libero sequi neque, ducimus et corporis! Similique fugiat totam
                eius dignissimos alias aliquam quia numquam quis exercitationem?
              </>
            }
            desc2={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea
                esse amet eius. Architecto voluptatem assumenda quibusdam nemo
                libero? Odit aspernatur dolor unde voluptatum eius iste id
                ducimus itaque eum facere animi, eaque accusamus impedit dolorum
                vero debitis excepturi ipsa nihil necessitatibus atque
                consectetur rerum iusto minus. Earum, hic ut.
              </>
            }
          />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

const Services = ({ heading, desc1, desc2,img }) => {
  const serviceCardRef = useRef(null);
  const isInView = useInView(serviceCardRef, { once: true });
  return (
    <div
      className="flex justify-between items-center z-10  px-3 lg:px-12 w-full max-w-[1500px]"
      ref={serviceCardRef}
    >
      <Image
        src={img}
        width={400}
        height={400}
        alt="service"
        className="z-20 hidden lg:block"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
        }}
      />

      <div
        className="z-20 bg-purple-800/20 w-[800px] backdrop-blur-lg  lg:h-[400px] rounded-3xl border-white/20 border-[0.5px]"
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <div className="flex flex-col justify-start items-start p-3 lg:p-7">
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 pb-5">
            {heading}
          </p>
          <p className="text-neutral-100 pb-4 font-extralight text-sm md:text-base ">
            {desc1}
          </p>
          <p className="text-neutral-100 pb-4 font-extralight text-sm md:text-base">
            {desc2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
