"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const [services, setServices] = useState([
    { name: "service 1", isActive: false },
    { name: "service 2", isActive: false },
    { name: "service 3", isActive: false },
    { name: "service 4", isActive: false },
    { name: "service 5", isActive: false },
  ]);
  const [isInServices, setIsInServices] = useState(false);
  const handleViewportEnter = (index) => {
    if (!isInServices) {
      setIsInServices(true);
    }
  };
  const handleViewportLeave = (index) => {
    setIsInServices(false);
    console.log("viewport left");
  };
  const spotlightSize = 400;
  const titleRef = useRef();
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["0 1", "1 0"],
  });
  const opacity1 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 0.7],
    [0, 0.08, 0.08, 0]
  );
  useEffect(() => {
    const handleMouseMove = (event) => {
      const titleElement = titleRef.current;
      if (!titleElement) return;

      const titleRect = titleElement.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const spotlightX = mouseX - spotlightSize / 2 - titleRect.left;
      const spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

      titleElement.style.backgroundPosition = `${spotlightX}px ${spotlightY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col bg-neutral-950 relative select-none w-[100vw]"
      onViewportLeave={() => handleViewportLeave()}
    >
      <div className="absolute h-full z-10 opacity-15  lg:opacity-70 xl:opacity-100">
        <motion.img
          src="/service-image.png"
          className="z-20  top-20 sticky lg:w-[500px] xl:w-[600px] 2xl:w-[700px] saturate-[.8]"
          width={700}
          height={700}
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0, 0.01, 0, 1], delay: 0.2 }}
        />
      </div>

      <motion.div className="absolute h-full w-[100vw]">
        <div className="bg-sky-700/20 rounded-full w-[60%] h-[70vh] sticky top-0 left-0 blur-3xl " />
        <div className="bg-purple-700/15 rounded-full w-[80vw] h-[70vh] sticky top-[40vh] right-0 ml-auto blur-3xl " />
      </motion.div>
      <div className="sticky top-0 left-0 flex items-center justify-center">
        <motion.p
          ref={titleRef}
          className="bg-title bg-clip-text text-transparent bg-neutral-300/50 text-[100px] lg:text-[200px] w-[100vw] font-bold break-words opacity-100 leading-[110%]  lg:text-center h-[100vh] overflow-hidden"
          style={{ opacity: opacity1 }}
        >
          METAMARKETIERSMETAMARKETIERSMETAMARKETIERSMETAMARKETIERSMETAMARKETIERSMETAMARKETIERSMETAMARKETIERS
        </motion.p>
      </div>
      {services.map((service, index) => (
        <Service
          key={index}
          name={service.name}
          isActive={service.isActive}
          onEnter={() => handleViewportEnter(index)}
          onLeave={() => handleViewportLeave(index)}
        />
      ))}
    </motion.div>
  );
};

const Service = ({ name, isActive, onEnter, onLeave }) => {
  const serviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["0 1", "1 0"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 0.7],
    [0, -200, 0, -200]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  return (
    <motion.div
      className="flex w-[100vw] h-[75vh] justify-center items-center relative z-20"
      ref={serviceRef}
    >
      <motion.div
        className="uppercase inset-y-auto lg:right-3 xl:right-12 2xl:right-44 absolute w-[340px] sm:w-[400px] md:w-[500px] lg:w-[600px] inset-x-auto "
        initial={{ opacity: 0 }}
        transition={{ duration: 0.95 }}
        style={{ y: y1, opacity: opacity1 }}
        onViewportEnter={() => onEnter()}
      >
        <h3 className="text-4xl my-auto pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r w-fit from-blue-400 to-purple-500 ">
          PROMOTIONS
        </h3>
        <p className="pb-2 text-neutral-300 text-sm lg:text-xl">
          GOOGLE ADS - SEO - CORE - ANALYTICS
        </p>
        <p className="text-neutral-100 text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          laudantium reprehenderit, quod officiis magnam maxime adipisci rem
          quibusdam delectus eos non voluptatum sunt? Voluptatum repellat in
          adipisci nihil iste accusamus?
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Services;
