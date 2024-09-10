"use client";

import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { useState, useEffect } from "react";

export default function Template({ children }) {
  const transition = { duration: 2, yoyo: Infinity, easeInOut };

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
  id="Layer_1"
  width="300"
  height="300"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
>
  <defs>
    <linearGradient
      id="linear-gradient"
      x1="10.23"
      y1="100.08"
      x2="189.77"
      y2="100.08"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#2483df" />
      <stop offset="1" stopColor="#4b42c9" />
    </linearGradient>
  </defs>
  <motion.path
    d="m133.45,67.91c-2.45-1.31-4.97-2.51-7.58-3.54-2.62-1.01-5.3-1.87-8.03-2.57-5.46-1.37-11.09-2.15-16.77-2.18l-2.13.02-2.5.1c-1.61.07-3.14.15-4.63.27-2.98.24-5.85.58-8.62,1.14-2.77.55-5.48,1.23-8.03,2.17-1.32.41-2.52.99-3.79,1.48-.61.27-1.2.59-1.81.87-.6.29-1.22.56-1.79.92-1.15.66-2.34,1.29-3.42,2.07-.55.38-1.12.72-1.66,1.12-.52.42-1.04.83-1.55,1.27-1.06.82-1.9,1.88-2.88,2.8-.96.92-1.86,2-2.74,3.07-3.54,4.35-6.51,9.24-8.48,14.21l-.72,1.87-.59,1.88-.3.94-.22.94-.45,1.88c-.42,2.52-.79,5.03-.71,7.53v1.88s.21,1.87.21,1.87c.05,1.25.35,2.49.57,3.74.08.63.29,1.25.45,1.87l.5,1.88.66,1.86c.21.62.41,1.25.71,1.85,2.05,4.88,4.94,9.55,8.47,13.39,3.55,3.79,7.64,6.9,11.83,8.57,1.05.34,2.08.85,3.12,1.01.52.11,1.03.29,1.55.37.52.05,1.03.11,1.54.18.25.03.53.1.74.1.2-.01.4-.02.59-.01s.39,0,.59.02c.2,0,.43-.05.64-.06.84-.02,1.81-.22,2.8-.41,2-.45,4.32-1.32,6.74-2.41,2.43-1.1,4.96-2.46,7.53-4.11,2.56-1.64,5.13-3.5,7.8-5.44l2.02-1.48,2.09-1.5,2.17-1.52c.76-.53,1.62-1.07,2.42-1.61l.62-.4.84-.51,1.7-.99c1.12-.67,2.34-1.17,3.53-1.7,1.18-.54,2.43-.93,3.68-1.31,1.23-.4,2.5-.67,3.76-.9,5.06-.93,10.19-.83,14.99.23,4.8,1.06,9.28,3.06,13.09,5.8,3.82,2.73,6.94,6.2,9.17,9.98,1.25,2.06,1.7,3.42,2.47,5.04.73,1.56,1.48,3.15,2.28,4.72.8,1.57,1.64,3.13,2.5,4.72l2.68,4.77h0c.15.27.06.61-.21.76-.15.09-.34.09-.49.03-1.72-.72-3.41-1.52-5.06-2.41-1.66-.87-3.28-1.82-4.86-2.84-1.59-1.01-3.17-2.07-4.69-3.21-1.5-1.06-3.12-2.56-4.24-3.11-4.84-2.99-10.1-3.66-14.5-2.75-2.2.45-4.2,1.28-5.87,2.38-.42.28-.84.51-1.21.85-.38.31-.78.55-1.11.91-.34.34-.72.57-1.02.96-.16.17-.32.33-.49.49l-.67.64-1.75,1.63c-.65.59-1.29,1.18-1.96,1.76l-2.05,1.77-2.15,1.76c-2.91,2.35-6.02,4.65-9.31,6.91-3.28,2.27-6.84,4.46-10.74,6.44-3.92,1.95-8.17,3.73-13.05,4.8-2.45.51-4.96.96-7.63,1.09-.66.04-1.31.11-1.99.1l-2.05-.06-2.04-.1c-.67-.05-1.25-.16-1.87-.24-1.23-.18-2.46-.37-3.68-.58-1.21-.23-2.38-.59-3.57-.9-2.41-.57-4.61-1.5-6.86-2.36-1.13-.42-2.15-1.01-3.22-1.51-1.04-.55-2.15-1.02-3.12-1.65-1.96-1.23-4.01-2.38-5.79-3.79-.91-.68-1.84-1.35-2.73-2.06l-2.54-2.22-1.26-1.12c-.41-.38-.79-.79-1.18-1.18l-2.32-2.39c-5.99-6.53-10.62-14-14.01-22.09-3.42-8.04-5.29-17.06-5.33-26.14-.08-4.54.49-9.04,1.29-13.44l.76-3.25.4-1.62.49-1.58c.33-1.05.65-2.11,1-3.15l1.17-3.06c3.24-8.11,7.71-15.36,13.04-21.93,1.35-1.64,2.72-3.26,4.27-4.8,1.54-1.54,3.05-3.11,4.75-4.49.83-.71,1.64-1.44,2.45-2.17.83-.72,1.7-1.37,2.55-2.06,1.69-1.4,3.51-2.61,5.32-3.84.9-.64,1.84-1.17,2.78-1.73.94-.55,1.87-1.12,2.83-1.64,1.93-.97,3.85-2.03,5.83-2.85,3.93-1.8,7.98-3.17,12.02-4.37,4.05-1.2,8.12-2.06,12.12-2.74,2-.34,3.97-.62,5.86-.87l2.75-.35,3.13-.31c8.37-.79,16.88-.53,25.24.7,4.18.63,8.33,1.5,12.42,2.61,4.1,1.08,8.15,2.43,12.12,4l.33.13c9.78,3.86,14.59,14.91,10.73,24.7-3.86,9.78-14.91,14.59-24.7,10.73-.66-.26-1.4-.61-2.02-.94Z"
    fill="url(#linear-gradient)"
    initial={{ fillOpacity: 0, strokeOpacity: 1, pathLength: 0 }}
    animate={{ fillOpacity: 1, strokeOpacity: 1, pathLength: 1 }}
    transition={{
      fillOpacity: { duration: 0.5, delay: 2 },
      strokeOpacity: { duration: 0.5, delay: 2.5 },
      pathLength: { duration: 2, ease: "easeInOut" }
    }}
    stroke="url(#linear-gradient)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
