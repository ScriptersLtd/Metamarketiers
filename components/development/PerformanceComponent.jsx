"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../Footer";
const PerformanceComponent = () => {
  return (
    <motion.div className="flex flex-col w-screen relative bg-neutral-950 z-0">
      <div className="relative h-fit z-20 bg-neutral-950  overflow-clip">
        <div className="absolute top-0 right-[300px] h-[750px] w-[750px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl z-10"></div>
        <div className="absolute top-0 left-[200px] h-[700px] w-[700px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl z-10"></div>
        <div className="flex flex-col gap-y-10 pt-12 xl:pt-0 xl:flex-row gap-x-4 justify-center items-center w-screen pb-24 ">
          <PerformanceCard
            name={"Laser Focused Precision"}
            desc={
              "Get razor-sharp insights and a crystal-clear focus on your brand’s first yet lasting impression. Just like a magnifying glass, we focus on the specifics; enhancing your site’s visibility, refining every click, and optimizing each interaction. It’s about catching every opportunity for a big impact with our expert web development solutions, so every visitor sees you at your best—no details missed!"
            }
            turnedheading={"See Beyond the Ordinary!"}
            turneddesc={
              "Get razor-sharp insights and a crystal-clear focus on your brand’s first yet lasting impression. Just like a magnifying glass, we focus on the specifics; enhancing your site’s visibility, refining every click, and optimizing each interaction. It’s about catching every opportunity for a big impact with our expert web development solutions, so every visitor sees you at your best—no details missed!"
            }
            image={"/development/benefit-image-1.png"}
            cta={"Zoom in!"}
          />

          <PerformanceCard
            name={"Bright Ideas, Brighter Sites"}
            desc={
              "Good ideas deserve great platforms. We light the way with user-centric designs that capture creativity and innovation, blending bright ideas into stunning web experiences. From unique visuals to intuitive layouts, we bring your concepts to life with a spark that sets you apart. Because it's not just a website; it's a journey your audience will want to take again and again!"
            }
            turnedheading={"Switch On the Innovation!"}
            turneddesc={
              "Let your brand’s brilliance shine with clever, intuitive designs that go beyond aesthetics. Every page and every click is a golden chance to tell your story in a way that’s compelling, clear, and creatively crafted—reflecting your business vibe and values. Trust our dependable web development company to fuse form with function, turning every interaction into an inspired connection. Ready for your site to feel like home to your users?"
            }
            image={"/development/benefit-image-2.png"}
            cta={"Stand Out!"}
          />

          <PerformanceCard
            name={"High Voltage Performance"}
            desc={
              "Unmatched speed is no longer a luxury—it's a necessity! As a leading web development company in USA, our lightning-fast websites ensure zero lag, keeping your audience engaged and happy. We prioritize speed, optimizing every element to create a smooth, fast, and unforgettable experience that electrifies your visitors, making them come back for more."
            }
            turnedheading={"Power Up Your Digital Presence!"}
            turneddesc={
              "Speed isn't just about numbers; it's about customer satisfaction. Your users deserve a speed-driven experience that doesn't miss a beat. Let us accelerate your web presence with performance that feels effortless, crisp and full of spark—because a slow site is yesterday’s news!"
            }
            image={"/development/benefit-image-3.png"}
            cta={"Charge Up!"}
          />
        </div>
      </div>
      <Footer
        line1={
          "Combining Beauty and Brains in Web Development to Make Your Online Presence Unforgettable and Profitable!"
        }
        heading={"Your Vision, Our Code—Websites That Mean Business"}
        button={"Uncover The Magic!"}
      />
    </motion.div>
  );
};

const PerformanceCard = ({
  name,
  desc,
  turnedheading,
  turneddesc,
  image,
  cta,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-[330px] h-[500px] xl:w-[400px] xl:h-[600px] bg-neutral-200/10 rounded-3xl backdrop-blur-sm z-20 relative overflow-clip p-7"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        className=" absolute inset-0 backface-hidden p-5"
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <p className="text-neutral-100 text-3xl font-bold scale-x-[-1]">
          {turnedheading}
        </p>
        <p className="text-neutral-100 mt-4 scale-x-[-1] ">{turneddesc}</p>
        <div className="absolute -top-80 bg-purple-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
        <div className="absolute -bottom-80 bg-purple-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
        <div className="text-neutral-100 bg-gradient-to-tr from-purple-600 to-blue-500  p-3 rounded-xl font-bold scale-x-[-1] absolute bottom-6  ">
          {cta}
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 backface-hidden  flex flex-col "
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute -top-80 bg-cyan-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
        <div className="absolute -bottom-80 bg-cyan-500/60 rounded-full h-[400px] w-[250px] xl:w-[400px] blur-3xl -z-10"></div>
        <p className=" z-30 text-neutral-100 font-bold text-3xl mb-3 backface-hidden pt-5 px-5">
          {name}
        </p>
        <p className="  text-neutral-100 text-sm pt-4 px-4">{desc}</p>
        <Image src={image} alt="performance benefit" width={350} height={350} />
      </motion.div>

      <motion.div
        animate={{ rotate: isFlipped ? 45 : 0 }}
        transition={{}}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="text-center justify-center items-center flex text-4xl text-white absolute bottom-5 right-5 h-[60px] w-[60px] bg-gradient-radial to-purple-500/60 from-blue-500/50 backdrop-blur-sm rounded-full cursor-pointer"
      >
        +
      </motion.div>
    </motion.div>
  );
};
export default PerformanceComponent;
