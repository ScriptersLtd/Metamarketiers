"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Script from "next/script";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const [services, setServices] = useState([
    { name: "Insights That Ignite", tagline:"Unlock Strategies Through Smart Analysis",desc:"We dig deep into data to understand your audience and market trends. Our web development agency uses this research as the foundation of every strategy, ensuring your campaigns are data-driven, targeted, and set up for consistent success. It’s not just about numbers—it’s about what they mean for your business!", isActive: false },
    { name: "Optimization Edge", tagline:"Get Found. Get Noticed. Get Results",desc:"Our SEO magic turns your website into a traffic magnet. From optimizing keywords to enhancing user experience, we ensure your site ranks high and stays ahead of the competition. It’s all about making sure your brand gets the visibility it deserves!", isActive: false },
    { name: "Designs That Dazzles", tagline:"Web Experiences That Turn Heads and Convert!",desc:"Your website is your digital storefront—make it count! Our creative team develops sleek, functional, user-friendly and custom website designs that bring your vision to life. We blend aesthetics with functionality to create a seamless user experience that converts your visitors into loyal customers!", isActive: false },
    { name: "Branding with Flair", tagline:"Crafting Your Unique Identity That Stands Out!",desc:"We help you craft a brand identity that resonates. From logo design online to defining the tone of voice, we create cohesive branding that sets you apart and speaks to your audience. Let’s turn your business into a brand that people remember and trust!", isActive: false },
    { name: "Support that Never Sleeps", tagline:"We’re Here 24/7, Whenever You Need Us!",desc:"Our commitment to you doesn’t end at launch. With ongoing support, updates, and optimization, we ensure your marketing efforts continue to thrive. Need tweaks, new features, or troubleshooting? Our marketing agency USA is just a call away, ready to keep your brand shining!", isActive: false },

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
          AIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLSAIOSOLS
        </motion.p>
      </div>
      {services.map((service, index) => (
        <Service
          key={index}
          name={service.name}
          tagline={service.tagline}
          desc={service.desc}
          isActive={service.isActive}
          onEnter={() => handleViewportEnter(index)}
          onLeave={() => handleViewportLeave(index)}
        />
      ))}
    </motion.div>
  );
};

const Service = ({ name,tagline, desc,isActive, onEnter, onLeave }) => {
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
          {name}
        </h3>
        <p className="pb-2 text-neutral-400 text-sm lg:text-xl">
          {tagline}
        </p>
        <p className="text-neutral-100 text-base lg:text-lg">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Services;
