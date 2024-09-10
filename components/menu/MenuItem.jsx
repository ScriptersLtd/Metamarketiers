"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    delay: 2.5

  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const socialVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    
    transition: {
      y: { stiffness: 1000 },
    },
    delay: 0.3

  },
};


export const MenuItem = ({ text,href,setisOpen }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className=" flex items-center cursor-pointer flex-col h-[19%] sm:h-[25%] menu-item overflow-hidden group w-fit  my-3"
    >
      <Link onClick={() => setisOpen(false)} href={href}  className=" text-center text-[15vw] sm:text-[10vw] xl:text-[8vw] 2xl:text-[7vw] font-bold text-white group-hover:-translate-y-[100%] transition-all duration-300 h-fit w-fit">
        {text}
      </Link>
      <Link onClick={() => setisOpen(false)} href={href} className="text-center text-[15vw] sm:text-[10vw] xl:text-[8vw] 2xl:text-[7vw] font-bold text-white group-hover:-translate-y-[100%] transition-all duration-300 h-fit w-fit">
        {text}
      </Link>
    </motion.li>
  );
};

export const SocialMenuItem = ({ text,href }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
    <motion.li
      className="flex flex-col menu-item h-[20%] overflow-hidden group mb-2 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      variants={socialVariants}
    >

      <span className="text-[30px] font-bold text-neutral-200 group-hover:-translate-y-[100%] transition-all duration-300 h-fit w-fit flex items-center gap-x-3">
        {text}
        <ExternalLink />
      </span>
      <span className="text-[30px] font-bold text-neutral-200 group-hover:-translate-y-[100%] transition-all duration-300 h-fit w-fit flex items-center gap-x-3">
        {text}
        <ExternalLink />
      </span>
    </motion.li>
    </Link>
  );
};
