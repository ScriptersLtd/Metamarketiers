import AboutBall from "@/components/about-components/AboutBall";
import AboutBody from "@/components/about-components/AboutBody";
import AboutHero from "@/components/about-components/AboutHero";
const AboutPage = () => {
  return (
    <div className="bg-neutral-950 h-full">
      <AboutBall />
        <AboutHero />
        <AboutBody />
    </div>
  );
};

export default AboutPage;