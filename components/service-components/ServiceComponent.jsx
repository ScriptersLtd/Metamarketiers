"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Footer from "../Footer";

const ServiceComponent = () => {
  const serviceRef = useRef();
  const { scrollYProgress } = useScroll({
    target: serviceRef,
    offset: ["0 0", "1 1"],
  });
  const shapeOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 0.7, 0.7, 0]
  );
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <motion.div ref={serviceRef} className="w-full absolute bottom-0 z-20 ">
      <div className=" top-0 z-10 relative w-screen bg-gradient-to-b bg-neutral-950">
        <div className="h-full w-screen absolute z-0">
          <div className="sticky top-52 flex justify-center items-center">
            <div className=" h-[350px] w-[650px]  rounded-[220px] mix-blend-normal bg-purple-600 opacity-15 blur-3xl z-0"></div>
            <div className=" h-[400px] w-[600px] rounded-[220px] bg-blue-600 mix-blend-normal opacity-15 blur-3xl z-0"></div>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <motion.div
            className="sticky h-[100vh] top-0 z-0"
            style={{
              opacity: shapeOpacity,
              y: shapeY,
            }}
          >
            <motion.img
              src={"/service-shape-1.png"}
              alt="instalogo"
              height={200}
              width={200}
              className="object-contain absolute top-[250px] right-[200px] z-0"
            />
            <motion.img
              src={"/service-shape-2.png"}
              alt="fblogo"
              height={100}
              width={100}
              className="object-contain absolute top-[600px] left-[600px] z-0"
            />
            <motion.img
              src={"/service-shape-3.png"}
              alt="youtubelogo"
              height={150}
              width={150}
              className="object-contain absolute top-[700px] left-[1000px] z-0"
            />
            <motion.img
              src={"/service-shape-4.png"}
              alt="settinglogo"
              height={100}
              width={100}
              className="object-contain absolute top-[300px] left-[300px] z-0"
            />
            <motion.img
              src={"/service-shape-5.png"}
              alt="linkedinlogo"
              height={150}
              width={150}
              className="object-contain top-[800px] left-0 z-0 hidden lg:absolute"
            />
            <motion.img
              src={"/service-shape-6.png"}
              alt="starshape"
              height={100}
              width={100}
              className="object-contain absolute top-[500px] right-[400px] z-0"
            />
            <motion.img
              src={"/dc3d.png"}
              alt="discordlogo"
              height={140}
              width={140}
              className="object-contain absolute top-[0px] right-[800px] z-0"
            />
            <motion.img
              src={"/thread3d.png"}
              alt="threadlogo"
              height={140}
              width={140}
              className="object-contain absolute top-[60px] left-[100px] z-0"
            />
          </motion.div>
        </div>
        <motion.div className="flex flex-col justify-center items-center lg:h-[300px] px-3">
          <h className=" text-4xl lg:text-6xl text-center lg:text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-700 h-[150px] lg:h-[70px] to-blue-500 w-fit z-10">
            Digital Marketing Services for Market Domination
          </h>
          <p className="text-white z-10 text-center  lg:text-left">
            Your Brand’s New Best Friend in the Digital World, Guiding You from
            Zero to Hero.
          </p>
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-y-10 py-24 z-10">
          <Services
            img={"/marketing-service-1.png"}
            heading={<>Social Media Marketing</>}
            desc1={
              <>
                Are you tired of shouting into the social media void, hoping
                someone will finally hear you? Let’s face it; it’s a jungle out
                there. With algorithms changing faster than you can say
                “trending,” it’s no wonder that reaching your audience feels
                like a never-ending battle. But that’s where our life-saving
                social media marketing services come in. Our talented team
                doesn’t just post pretty pictures; we craft strategic campaigns
                designed to boost engagement, increase brand awareness, and
                drive exceptional results. Whether it’s Instagram, Facebook,
                LinkedIn, or TikTok, our tailored approach ensures your brand
                voice is consistent and compelling across every channel.
              </>
            }
            desc2={
              <>
                From crafting scroll-stopping posts to running ad campaigns that
                actually convert, you’ll build connections that turn casual
                scrollers into loyal followers. Ready to turn your social media
                presence into a powerful marketing tool? Our precision-driven
                digital and social media marketing will help you stay ahead of
                the trends and ensure your brand never gets lost in the noise.
                Let’s connect, engage, and grow together—because your success on
                social media starts here!
              </>
            }
          />
          <Services
            img={"/marketing-service-3.png"}
            heading={<>Content Marketing Services</>}
            desc1={
              <>
                Ever feel like your content is just… there? Not anymore. In the
                world of digital marketing, content is king, but not just any
                content—it has to be strategic, engaging, and tailored to your
                audience’s needs. That’s why our content marketing experts focus
                on creating a mix of blogs, articles, and guides that not only
                captivate but convert. By integrating relevant topics,
                storytelling, and SEO best practices, we help your brand speak
                directly to your audience, building trust and authority that
                keeps them coming back for more.
              </>
            }
            desc2={
              <>
                Our team knows how to blend creativity with content marketing
                strategy, ensuring every word works to drive traffic, boost your
                online presence, and turn readers into raving fans. Whether it’s
                educational content, thought leadership pieces, or value-packed
                newsletters, we’ve got the magic touch to make your message
                stick. Ready to elevate your content game? Let’s transform your
                ideas into impactful narratives that resonate, engage, and
                generate results!
              </>
            }
          />
          <Services
            img={"/marketing-service-2.png"}
            heading={<>SEO Services</>}
            desc1={
              <>
                Ever wonder why your competitors always seem to show up first on
                Google? It’s not magic—it’s SEO done right. Our leading SEO
                agency goes beyond just sprinkling keywords; we delve into
                technical SEO, on-page optimization, and link-building
                strategies to ensure your website not only ranks higher but
                performs better. We conduct thorough keyword research,
                competitor analysis, and content optimization to align with
                search engine algorithms, helping you capture more organic
                traffic and outperform your rivals.
              </>
            }
            desc2={
              <>
                With our expertise, your website won’t just climb the
                rankings—it’ll dominate the search results. From meta
                descriptions that catch the eye to backlinks that build
                credibility, top-in-class SEO experts will ensure every aspect
                of your online presence is optimized to attract and convert. So,
                if you’re ready to turn your website into a lead-generating
                machine, let’s boost your visibility, improve user experience,
                and get you noticed on the digital landscape where it matters
                most and fast!
              </>
            }
          />
        </div>
      </div>
      <Footer line1={"Time to Make Your Business the Talk of the Timeline, Trending for All the Right Reasons with Digital and Social Media Marketing that Roars!"} heading={"Feeling Invisible Online? Let’s Fix That Now and Get Your Brand the Spotlight It Deserves!"} button={"START YOUR JOURNEY"} />
    </motion.div>
  );
};

const Services = ({ heading, desc1, desc2, img }) => {
  const serviceCardRef = useRef(null);
  const isInView = useInView(serviceCardRef, { once: true });
  return (
    <div
      className="flex justify-between items-center z-10  px-3 lg:px-12 w-full max-w-[1500px]"
      ref={serviceCardRef}
    >
      <Image
        src={img}
        width={400}
        height={400}
        alt="service"
        className="z-20 hidden lg:block"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
        }}
      />

      <div
        className="z-20 bg-purple-800/20 w-[800px] backdrop-blur-lg  lg:h-[400px] rounded-3xl border-white/20 border-[0.5px]"
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <div className="flex flex-col justify-start items-start p-3 lg:p-7">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 pb-5">
            {heading}
          </h3>
          <p className="text-neutral-100 pb-4 font-extralight text-sm">
            {desc1}
          </p>
          <p className="text-neutral-100 pb-4 font-extralight text-sm">
            {desc2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
