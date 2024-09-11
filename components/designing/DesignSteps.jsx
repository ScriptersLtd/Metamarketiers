"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const DesignSteps = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-4 bg-neutral-950 md:py-44 justify-center items-center overflow-clip">
      <div className="absolute flex justify-center items-center h-screen w-screen ">
        <div className="top-52 right-[500px] h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl"></div>
        <div className="top-52 left-[300px] h-[600px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl"></div>
      </div>
      <DesignStep
        y1={-200}
        y2={0}
        title={"Designs That Speak Your Brand’s Language"}
        img={"/designstepimg1.png"}
        desc={
          <>
            <p className="text-sm">
              When it comes to your online presence, cookie-cutter web page
              designs just won’t cut it! We get into the heart of your brand’s
              essence, audience, and goals, creating tailored designs that
              capture attention and drive action. Imagine a website that’s not
              just a pretty face but a strategic powerhouse—optimized for
              engagement, usability, and conversions. We’re all about turning
              your ideas into pixel-perfect realities that make your brand shine
              bright in the digital crowd.
            </p>
            <br />
            <p className="text-xl">Key Features</p>
            <br />
            <ul className="text-sm list-disc pl-4 space-y-3">
              <li>
                <span>Customized Design Solutions:</span> No templates, just
                fresh, original designs crafted uniquely for your brand.
              </li>
              <li>
                <span>Audience-Centric Approach:</span> Every design element
                speaks directly to your audience, keeping them hooked.
              </li>
              <li>
                <span>Conversion-Driven:</span> Beautiful designs meet smart
                strategies to convert casual visitors into loyal customers.
              </li>
            </ul>
          </>
        }
      />
      <DesignStep
        y1={0}
        y2={0}
        title={"Seamless Integration, Limitless Possibilities"}
        img={"/designstepimg2.png"}
        desc={
          <>
            <br />
            <p className="text-sm">
              We know that a stunning design is just the beginning. That’s why
              our custom web design services go beyond the visuals—we ensure
              seamless integration with all the techy bits that keep your site
              running smoothly. From responsive designs that look flawless on
              any device to blazing-fast load times, we handle it all so you can
              focus on what you do best. Think of us as your behind-the-scenes
              tech wizards, crafting websites that aren’t just nice to look at
              but also packed with the latest functionalities.
            </p>
            <br />
            <p className="text-xl">Winning Points</p>
            <br />
            <ul className="text-sm list-disc pl-4 space-y-3">
              <li>
                Responsive Designs: Websites that look stunning on every device,
                ensuring a great user experience.
              </li>
              <li>
                Speed Optimized: No one likes waiting, and neither do you—that’s
                why our designs are optimized for speed and performance.
              </li>
              <li>
                SEO-Ready: Built with best practices in mind to help your site
                rank higher and shine in search results.
              </li>
            </ul>
          </>
        }
      />
      <DesignStep
        y1={200}
        y2={0}
        title={"Design Meets Strategy—Your All-in-One Digital Partner"}
        img={"/designstepimg3.png"}
        desc={
          <>
            <br />
            <p className="text-sm list-disc pl-4 space-y-3">
              Design without strategy is just art. But when design meets
              strategy? That’s where the magic happens. We don’t just create
              websites; we specialize in ecommerce web design, we create online
              experiences that guide your customers on a journey, turning their
              clicks into connections. From intuitive navigation to strategic
              call-to-action placements, every element is crafted with purpose,
              ensuring your site not only looks fantastic but also works hard to
              achieve your goals.
            </p>
            <br />
            <p className="text-2xl">Why Sets Us Apart</p>
            <br />
            <ul className="text-sm  list-disc pl-4 space-y-3">
              <li>
                End-to-End Solutions: From design to development, maintenance,
                and beyond—we’re your full-service digital ally.
              </li>
              <li>
                User-Centric Designs: Every detail is designed with your
                customer’s journey in mind, making it easy for them to find
                exactly what they’re looking for.
              </li>
              <li>
                Long-Term Collaboration: We don’t just build and leave; we’re
                here to support you every step of the way with updates, tweaks,
                and fresh ideas.
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

const DesignStep = ({ y1, y2, title, desc, img }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [y1, y2]);
  return (
    <motion.div>
      <motion.div
        style={{ y: isSmallScreen? 0 : y }}
        className="md:h-[600px] w-[300px] md:w-[240px] lg:w-[300px] xl:w-[400px] border-l border-neutral-800 mb-14"
        ref={ref}
      >
        <div className="flex flex-col px-5">
          <div className="flex gap-x-3">
            <h3 className="text-xl text-transparent w-fit bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ">
              {title}
            </h3>
            <Image src={img} alt="design image" width={50} height={50} className="object-contain" />
          </div>
          <div className=" text-neutral-200 font-light mt-4">{desc}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DesignSteps;
