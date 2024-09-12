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
      className="absolute top-0 h-[70vh] md:h-[80vh] lg:h-[100vh] pl-4"
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
      {socials.map((social) => (
        <SocialMenuItem key={social.name} text={social.name} href={social.url} />
      ))}
    </motion.ul>
  );
};

const socials = [
  { name: "INSTAGRAM", url: "https://www.instagram.com/aiosolsofficial" },
  { name: "FACEBOOK", url: "https://www.facebook.com/aiosols" },
  { name: "X", url: "https://x.com/aiosols" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/company/aiosols/" }
];
const itemIds = [{name:"HOME", href:"/"}, {name:"SERVICES", href:"/services"}, {name:"BLOGS", href:"#"}, {name:"ABOUT US", href:"/aboutus"}, {name:"CONTACT",href:"/contact"}];
