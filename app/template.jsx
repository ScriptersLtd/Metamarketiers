"use client";

import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { useState, useEffect } from "react";

export default function Template({ children }) {
const transition = { duration: 2, yoyo: Infinity,  easeInOut };

  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showContentDiv, setShowContentDiv] = useState(false);

  useEffect(() => {
    if (showFirstDiv) {
      const timer = setTimeout(() => {
        setShowFirstDiv(false);
        setShowContentDiv(true);
      }, 2500); // Adjust the duration to match the animation duration
      return () => clearTimeout(timer);
    }
  }, [showFirstDiv]);

  return (
    <div>
      {showContentDiv && children}
      <AnimatePresence mode="wait">
        {showFirstDiv && (
          <motion.div
            key="firstDiv"
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
              top: 0,
              transformOrigin: "top",
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onAnimationComplete={() => setShowContentDiv(true)}
            className="relative flex justify-center items-center bg-neutral-950"
          >
            <motion.div
              initial={{ x: 900 }}
              animate={{ x: 0 }}
              exit={{ x: 900 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.3 }}
              key="backdiv"
              className="h-[600px] w-[600px] rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 absolute top-52 left-96 -z-0 opacity-25  blur-3xl"
            ></motion.div>
            <motion.div
              initial={{ x: -900 }}
              animate={{ x: 0 }}
              exit={{ x: -900 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1.3 }}
              key="secbackdiv"
              className="h-[600px] w-[600px] rounded-3xl bg-gradient-to-r from-purple-400 to-rose-400 absolute top-80 right-96 -z-0 opacity-25  blur-3xl"
            ></motion.div>
            <motion.div
              // initial={{ scale: 0.3 }}
              // animate={{ scale: 1 }}
              // exit={{ scale: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              key="transImage"
            >

              <svg
                width="249"
                height="149"
                viewBox="0 0 249 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M168.12 118.117C168.12 118.117 187.269 116.746 200.959 137.629C203.747 141.881 209.082 143.693 213.882 142.007C224.527 138.278 240.99 129.663 242.842 111.743C243.531 105.079 241.936 98.3816 238.575 92.5894L201.1 28.0321C201.1 28.0321 174.855 -13.3853 141.778 17.3532C136.764 22.0122 132.584 27.4897 129.252 33.4659L97.5138 90.41C93.5228 97.5728 91.7043 105.791 92.5966 113.942C93.6877 123.909 98.8619 135.479 115.403 141.286C119.04 142.564 122.89 143.175 126.741 142.957C127.361 142.923 127.982 142.865 128.574 142.777C150.138 139.649 155.933 126.006 156.753 114.281C157.349 105.757 155.308 97.258 151.147 89.7949L119.753 33.4659C116.421 27.4897 112.241 22.0122 107.227 17.3532C74.145 -13.3853 47.9054 28.0321 47.9054 28.0321L10.4252 92.5894C7.05979 98.3816 5.46922 105.084 6.15782 111.743C8.01025 129.663 24.4736 138.278 35.1178 142.007C39.9186 143.693 45.2529 141.881 48.0412 137.629C61.7308 116.746 80.8807 118.117 80.8807 118.117"
                  stroke="url(#paint0_linear_2347_2284)"
                  strokeWidth="12"
                  strokeMiterlimit="10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}

                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2347_2284"
                    x1="21.341"
                    y1="74.5056"
                    x2="227.659"
                    y2="74.5056"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7528CF" />
                    <stop offset="1" stopColor="#1CA3EB" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
