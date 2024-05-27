import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <Services />
        <div className="h-[100vh] w-full"></div>
      </div>
    
    </>
  );
}
