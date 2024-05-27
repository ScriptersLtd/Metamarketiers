"use client";
import { motion } from "framer-motion";
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
    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, isActive: true } : service
      )
    );
  };

  const handleViewportLeave = (index) => {
    if (isInServices) {
      setIsInServices(false);
    }

    setServices((prevServices) =>
      prevServices.map((service, i) =>
        i === index ? { ...service, isActive: false } : service
      )
    );
  };

  const spotlightSize = 400;
  const titleRef = useRef(null);

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
    <div className="flex flex-col relative">
      {isInServices && (
        <motion.img
          src="/service-image.png"
          className="z-20  top-20 sticky left-44"
          width={700}
          height={700}
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 1.2, ease: [0, 0.01, 0, 1], delay: 0.2 }}
        />
      )}
      <div className="bg-sky-100 rounded-full w-[60%] h-[60%] fixed top-0 left-0 blur-3xl -z-10 max-w-[100vw]" />
      <div className="bg-purple-100 rounded-full w-[60%] h-[80%] fixed bottom-0 right-0 blur-3xl -z-10 max-w-[100vw]" />
      <div className="sticky top-0 left-0 flex items-center justify-center">
        <p
          ref={titleRef}
          className="bg-title bg-clip-text text-transparent bg-neutral-400/80 text-[200px] w-[100vw] font-bold break-words opacity-100 leading-[110%] text-center line-clamp-5"
        >
          METAMARKETIERSMETAMARKETIERSMETAMARKETIERSMETAMARKETIERSMETAMARKETIERS
        </p>
      </div>
      {services.map((service, index) => (
        <Service
          key={index}
          name={service.name}
          isActive={service.isActive}
          onEnter={() => handleViewportEnter(index)}
        />
      ))}
    </div>
  );
};

const Service = ({ name, isActive, onEnter, onLeave }) => {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center relative">
      <motion.div
        className="uppercase inset-y-auto right-96 absolute w-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        onViewportEnter={onEnter}
        transition={{ duration: 0.95 }}
      >
        <h3 className="text-4xl my-auto pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          PROMOTIONS
        </h3>
        <p className="pb-2">GOOGLE ADS - SEO - CORE - ANALYTICS</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          laudantium reprehenderit, quod officiis magnam maxime adipisci rem
          quibusdam delectus eos non voluptatum sunt? Voluptatum repellat in
          adipisci nihil iste accusamus?
        </p>
      </motion.div>
    </div>
  );
};

export default Services;
