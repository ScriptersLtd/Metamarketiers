"use client";
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Footer from "../Footer";

const DesignTypes = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 0", "1 1"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x1 = useTransform(scrollYProgress, [0, 0.8], [0, 50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.7], [0.5, 1.2]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const imgy2 = useTransform(scrollYProgress, [0, 1], [-100, -550]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imgy3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const divy = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const divy2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotatediv = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const [pathLength, setPathLength] = useState(0);
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [ballPosition2, setBallPosition2] = useState({ x: 0, y: 0 });
  const [inView, setInView] = useState("none");

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      setPathLength(path.getTotalLength());
    }
  }, []);
  const y = useTransform(scrollYProgress, [0, 1], [0, pathLength]);
  useEffect(() => {
    y.on("change", (latestY) => {
      if (pathRef.current) {
        const path = pathRef.current;
        const point = path.getPointAtLength(latestY);
        setBallPosition({ x: point.x, y: point.y });
      }
    });
  }, [y]);
  useEffect(() => {
    if (pathRef2.current) {
      const path = pathRef2.current;
      setPathLength(path.getTotalLength());
    }
  }, []);
  const y2 = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);
  useEffect(() => {
    y2.on("change", (latestY) => {
      if (pathRef2.current) {
        const path = pathRef2.current;
        const point = path.getPointAtLength(latestY);
        setBallPosition2({ x: point.x, y: point.y });
      }
    });
  }, [y]);
  console.log(inView);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-[2000px]  xl:h-[5100px] relative pt-10 bg-neutral-950">
      <div
        ref={containerRef}
        className="h-[3500px]  xl:h-[5000px] bg-neutral-950 relative flex justify-center overflow-clip z-10"
      >
        <div className="hidden lg:block absolute h-full w-full left-0 top-[400px] -z-10">
          <div className="sticky  w-full  top-[300px] left-0">
            <motion.img
              style={{ x: x1, y: y1, scale: scale1, rotate: rotate1 }}
              src={"/designstepimg3.png"}
              alt="design image"
              height={100}
              width={100}
              className="absolute top-[100px] left-[130px]"
            />
            <motion.img
              style={{ y: imgy2, x: x2 }}
              src={"/designstepimg2.png"}
              alt="design image"
              height={100}
              width={100}
              className="absolute top-[200px] right-[220px]"
            />
            <motion.img
              style={{ y: imgy3, x: x3, scale: scale1 }}
              src={"/designstepimg1.png"}
              alt="design image"
              height={100}
              width={100}
              className="absolute top-[430px] right-32"
            />
            <motion.div
              style={{ y: divy }}
              className="absolute top-[250px] h-[300px] -left-28 w-[400px] rounded-t-full blur-3xl bg-gradient-to-tl from-blue-700 to-purple-600"
            ></motion.div>
            <motion.div
              style={{ y: divy2, rotate: rotatediv }}
              className="absolute -top-[100px] -z-20 -right-20 h-[300px] w-[400px] rounded-bl-full blur-3xl bg-gradient-to-br from-blue-700 to-purple-600"
            ></motion.div>
          </div>
        </div>
        {/* LEFT SIDE OF THE COMPONENT */}
        <div className="hidden xl:block h-full absolute left-10 top-0 -z-10">
          <div className="sticky top-[50px] w-fit  pt-[50px] z-10">
            <p className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r font-bold from-purple-700 to-sky-500 w-fit">
              Case Studies
            </p>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative"
            >
              <div className="absolute top-0 left-0 flex justify-center items-center w-[60px] h-[50px] bg-purple-700">
                <LockKeyhole
                  height={30}
                  width={30}
                  stroke="#fff"
                  strokeWidth={2}
                />
              </div>
              <motion.div
                animate={{ x: isHovered ? 63 : 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
                className="absolute gap-x-3 top-0 left-0 flex justify-center items-center w-[200px] h-[50px] bg-purple-700"
              >
                <p className="text-neutral-100 text-lg">Lock your project</p>
                <LockKeyholeOpen
                  height={30}
                  width={30}
                  stroke="#fff"
                  strokeWidth={2}
                  className="group-hover:hidden "
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className=" h-full absolute right-0 top-10 lg:top-0">
          <div className="sticky top-[50px] w-[190px] sm:w-[250px] xl:w-[380px] text-neutral-200 pt-[40px] z-10">
            <AnimatePresence mode="wait">
              {inView === "card1" && (
                <motion.div
                  key="card1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-950/25 2xl:bg-transparent 2xl:backdrop-blur-none backdrop-blur-xl p-2 rounded-l-lg flex flex-col gap-y-5"
                >
                  <p className="text-left text-sm md:text-md ">
                    Designing the Future of Connectivity At SYNC, our
                    result-driven web design services go beyond just creating a
                    site; we built a digital playground where connectivity
                    thrives! Picture a vibrant, sleek platform that makes every
                    interaction as smooth as a high-five. We’ve blended
                    intuitive functionality with cutting-edge aesthetics,
                    turning every click into a seamless and exciting experience!
                  </p>
                </motion.div>
              )}
              {inView === "card2" && (
                <motion.div
                  key="card2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-950/25 2xl:bg-transparent 2xl:backdrop-blur-none backdrop-blur-xl p-2 rounded-l-lg flex flex-col gap-y-5"
                >
                  <p className="text-left text-sm md:text-lg ">
                    Revolutionizing Cryptocurrency with Sleek, Smart Design For
                    Bitcoin, we developed a custom web app as dynamic as the
                    crypto world itself. Our design seamlessly integrates
                    complex data with a clean, accessible layout, taking you on
                    a thrilling ride through cryptocurrency with eye-catching
                    visuals and easy navigation!
                  </p>
                </motion.div>
              )}
              {inView === "card3" && (
                <motion.div
                  key="card3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-950/25 2xl:bg-transparent 2xl:backdrop-blur-none backdrop-blur-xl p-2 rounded-l-lg flex flex-col gap-y-5"
                >
                  <p className="text-left text-sm md:text-lg ">
                    Streamlining Success with Stylish Efficiency With Workwave,
                    our focus was on creating an efficient and dynamic interface
                    that optimizes workflow management. We delivered a
                    responsive web design that enhances usability and
                    performance, aligning perfectly with their mission to
                    improve operational efficiency through innovative tech
                    solutions. Think of it as your digital assistant dressed to
                    impress—functionality meets fabulousness for peak
                    productivity!
                  </p>
                </motion.div>
              )}
              {inView === "card4" && (
                <motion.div
                  key="card4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-neutral-950/25 2xl:bg-transparent 2xl:backdrop-blur-none backdrop-blur-xl p-2 rounded-l-lg flex flex-col gap-y-5"
                >
                  <p className="text-left text-sm md:text-lg ">
                    Bringing Genetic Research to Life with Brilliant Design For
                    Genomics! Best-in-class web design creators mixed
                    sophisticated graphics with simple, engaging features to
                    make research not only accessible but also engaging. An
                    innovative interface where complex science becomes
                    interactive and intriguing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute  top-0 flex flex-col gap-y-20 xl:gap-y-[550px] mx-auto w-[290px] sm:w-[400px] md:w-[600px]   h-full">
          <div className="absolute opacity-25 md:opacity-80 top-3 -left-[34px] w-[1px] h-full">
            <div className="sticky top-0  ">
              <svg
                className="absolute top-0"
                width="1"
                height="867"
                viewBox="0 0 1 867"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="zigzag"
                  ref={pathRef}
                  d="M0.5 0.5V867"
                  stroke="url(#paint0_linear_2787_149)"
                  stroke-dasharray="21 21"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2787_149"
                    x1="1"
                    y1="0.5"
                    x2="1"
                    y2="867"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7528CF" />
                    <stop offset="1" stop-color="#1CA3EB" />
                  </linearGradient>
                </defs>
              </svg>
              <div className=" absolute top-0">
                <motion.div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#a855f7",

                    position: "absolute",
                    top: ballPosition.y,
                    left: ballPosition.x,
                    transform: "translate(-50%, -50%)",
                    zIndex: -10,
                  }}
                  className="blur-sm"
                />
              </div>
            </div>
          </div>
          <div className="absolute opacity-25 md:opacity-80 top-0 -right-[34px] w-[1px] h-full">
            <div className="sticky top-0  ">
              <svg
                className="absolute top-0"
                width="1"
                height="867"
                viewBox="0 0 1 867"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="zigzag"
                  ref={pathRef2}
                  d="M0.5 0.5V867"
                  stroke="url(#paint0_linear_2787_149)"
                  stroke-dasharray="21 21"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2787_149"
                    x1="1"
                    y1="0.5"
                    x2="1"
                    y2="867"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7528CF" />
                    <stop offset="1" stop-color="#1CA3EB" />
                  </linearGradient>
                </defs>
              </svg>
              <div className=" absolute top-0">
                <motion.div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#a855f7",

                    position: "absolute",
                    top: ballPosition2.y,
                    left: ballPosition2.x,
                    transform: "translate(-50%, -50%)",
                    zIndex: -10,
                  }}
                  className="blur-sm"
                />
              </div>
            </div>
          </div>
          <PortfolioCard
            title={"SYNC"}
            cardnumber={"card1"}
            name={"SYNC"}
            tag1={"Webapp"}
            tag2={"Webdesign"}
            setInView={setInView}
            imgsrc={"/designimg1.png"}
          />
          <PortfolioCard
            title={"BITMAX"}
            cardnumber={"card2"}
            name={"BITMAX"}
            tag1={"SAAS"}
            tag2={"Full Stack"}
            setInView={setInView}
            imgsrc={"/designimg2.png"}
          />
          <PortfolioCard
            title={"WORKWAVE"}
            cardnumber={"card3"}
            name={"WORKWAVE"}
            tag1={"Mobileapp"}
            tag2={"Appdesign"}
            setInView={setInView}
            imgsrc={"/designimg3.png"}
          />
          <PortfolioCard
            title={"GENOMIC"}
            cardnumber={"card4"}
            name={"GENOMIC"}
            tag1={"3D"}
            tag2={"Webdesign"}
            setInView={setInView}
            imgsrc={"/designimg4.png"}
          />
        </div>
      </div>
      <Footer line1={"Don’t just dream about the perfect site—build it! From bold designs to exceptional functionality, get started with our top-tier web design services USA and watch your vision take shape!"} heading={"Why Blend in When You Can Stand Out? Let’s Boost Your Brand Today!"} button={"Let's do great things together"} />
    </div>
  );
};

const PortfolioCard = ({
  title,
  cardnumber,
  name,
  tag1,
  tag2,
  imgsrc,
  setInView,
}) => {
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-y-2 xl:gap-y-10 justify-center items-center">
        <p className="text-[30px] md:text-[45px] xl:text-[60px]  text-transparent bg-clip-text bg-gradient-to-r font-bold from-purple-700 to-sky-500 w-fit">
          {title}
        </p>

        <motion.img
          onViewportEnter={() => setInView(cardnumber)}
          src={imgsrc}
          width={500}
          height={600}
          alt="placeholder image"
          className="h-[450px] sm:h-[500px] md:h-[550px] object-cover w-auto rounded-xl"
        />
        <div className="flex flex-col gap-y-4">
          <p className="font-bold text-neutral-200 text-center text-2xl lg:text-4xl">
            {name}
          </p>
          <div className="flex gap-5 justify-center items-center">
            <div className=" text-xs lg:text-sm p-2 rounded-full border border-neutral-300 text-neutral-300">
              {tag1}
            </div>
            <div className=" text-xs lg:text-sm p-2 rounded-full border border-neutral-300 text-neutral-300">
              {tag2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTypes;
