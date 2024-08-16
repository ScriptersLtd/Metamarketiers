import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <>
      <div className="relative h-full ">
        <Hero />
        <Services />
        <Tools />
        <Portfolio />
        <Clients />
        <Reviews />
      </div>
    </>
  );
}
