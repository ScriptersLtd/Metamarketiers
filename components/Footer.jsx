import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="sticky bottom-0 h-[40rem] w-screen bg-gradient-radial to-purple-950 from-indigo-950 z-0 flex flex-col justify-center items-center">
      <div className="max-w-7xl bg-gradient-to-r from-purple-200 to-sky-200  rounded-lg mx-4 lg:mx-14 flex justify-center items-center p-2 lg:p-4 relative">
        <Image src={"/footer-banner-bg.png"} fill alt="footer background" className="object-cover z-0 opacity-30"/>
        <div className="flex flex-col justify-center items-center lg:items-start p-2 lg:p-14 gap-y-4 z-10 text-center lg:text-start">
          <p className="text-neutral-600">oausndo unasdoun asodun asodun </p>
          <p className="font-bold text-3xl sm:text-4xl ">OAJSO AOSIF AOSID OASIJD OAISDN</p>
          <button className="border border-indigo-950 backdrop-blur-sm p-3 px-3 hover:bg-indigo-950 hover:text-white transition-all">
            CONTACT US
          </button>
        </div>
        <Image
          src={"/footer-ball.png"}
          width={400}
          height={400}
          className="h-[300px] w-[300px] object-cover -mt-40 z-10 hidden lg:block"
          alt="footer ball"
        />
      </div>
      <div className="max-w-4xl flex flex-col md:flex-row justify-between items-center text-white mt-10 w-full px-4">
            <div className="">
                <p>info@metamarketiers.com</p>
                <p className="text-lg">
                    oiUONUn foaunf oaun foanf aasd, asf asf, af wef <br />
                    +23852957 29375 92735 <br />
                    bia bnifau fia 
                </p>
            </div>
            <div className="flex gap-x-2 mt-6 lg:mt-auto">
                <div className="w-8 h-8 bg-white rounded-md"></div>
                <div className="w-8 h-8 bg-white rounded-md"></div>
                <div className="w-8 h-8 bg-white rounded-md"></div>
                <div className="w-8 h-8 bg-white rounded-md"></div>
                <div className="w-8 h-8 bg-white rounded-md"></div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
