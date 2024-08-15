"use client"
import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { SocialNavigation } from "./Navigation";
import { useEffect } from "react";
import { useState } from "react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) calc(100% - 40px))`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) calc(100% - 40px))",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
    } else {
      const timer = setTimeout(() => setDisplay(false), 1000); // adjust the delay time as needed
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`fixed ${display ? "h-screen w-screen" : " " } z-50 select-none`}

    >
      <motion.div className={`fixed top-0 right-0 bottom-0 w-full h-[100vh] bg-gradient-radial to-[90%] to-purple-900 from-blue-900`} variants={sidebar} 
      />
      <Navigation isOpen={isOpen} setisOpen={toggleOpen} />
      <SocialNavigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
