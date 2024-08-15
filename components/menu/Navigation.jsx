"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuItem, SocialMenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 1 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.2,
    },
  },
};

const socialvariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.4,
    },
  },
};

export const Navigation = ({ isOpen,setisOpen }) => {
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    if (isOpen) {
      setDisplay("block");
    } else {
      const timer = setTimeout(() => setDisplay("none"), 500); // adjust the delay time as needed
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <motion.ul
      variants={variants}
      className="absolute top-0  p-8 h-[70vh] lg:h-[100vh]"
      style={{ display }}
    >
      {itemIds.map((i) => (
        <MenuItem setisOpen={setisOpen}  href={i.href}  key={i.href} text={i.name} />
      ))}
    </motion.ul>
  );
};

export const SocialNavigation = ({isOpen}) => {
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    if (isOpen) {
      setDisplay("block");
    } else {
      const timer = setTimeout(() => setDisplay("none"), 600); // adjust the delay time as needed
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <motion.ul
      variants={socialvariants}
      className="absolute bottom-0 right-10 h-[30vh]"
      style={{ display }}
    >
      {socials.map((i) => (
        <SocialMenuItem key={i} text={i} />
      ))}
    </motion.ul>
  );
};

const socials = ["INSTAGRAM", "FACEBOOK", "PINTEREST", "LINKEDIN"];
const itemIds = [{name:"HOME", href:"/"}, {name:"SERVICES", href:"/services"}, {name:"ABOUT US", href:"/aboutus"}, {name:"CONTACT",href:"#"}];
