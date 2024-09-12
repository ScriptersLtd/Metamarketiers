import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ line1, heading, button }) => {
  return (
    <div className="sticky bottom-0 h-[45rem] w-screen bg-gradient-radial to-purple-950 from-indigo-950 z-0 flex flex-col justify-end pb-5 items-center">
      <div className="max-w-7xl bg-gradient-to-r from-purple-200 to-sky-200  rounded-lg mx-4 lg:mx-14 flex justify-center items-center p-2 lg:p-4 relative">
        <Image
          src={"/footer-banner-bg.png"}
          fill
          alt="footer background"
          className="object-cover z-0 opacity-30"
        />
        <div className="flex flex-col justify-center items-center lg:items-start p-2 lg:p-14 gap-y-4 z-10 text-center lg:text-start">
          <p className="font-bold text-3xl sm:text-4xl ">{heading}</p>
          <p className="text-neutral-700 max-w-2xl hidden md:block">{line1}</p>
          <button className="border border-indigo-950 backdrop-blur-sm p-3 px-3 hover:bg-indigo-950 hover:text-white transition-all">
            {button}
          </button>
        </div>
        <Image
          src={"/footer-ball.png"}
          width={400}
          height={400}
          className="h-[300px] w-[300px] object-cover -mt-40 z-10 hidden md:block"
          alt="footer ball"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between items-center px-20">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/logowhite.png"}
            width={400}
            height={400}
            className="h-[100px] w-[100px] object-contain "
            alt="footer ball"
          />
          <p className="text-white text-sm max-w-sm text-center md:text-left">
            A top digital marketing agency offering innovative, high-impact
            solutions to make your ideas soar to viral fame!
          </p>
        </div>
        <div className="max-w-4xl flex flex-col gap-y-2 justify-between items-end text-white mt-10 px-4">
          <div className="flex gap-4">
            <MailIcon />
            <p>info@aiosols.com</p>
          </div>

          <div className="flex gap-4">
            <PhoneIcon />
            <p>+92 300 0000000</p>
          </div>

          <div className="flex gap-x-4 mt-6 lg:mt-2">
            <Link
              href="https://www.facebook.com/aiosols"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon-facebook.png"
                width={32}
                height={32}
                alt="Facebook"
              />
            </Link>
            <Link
              href="https://www.instagram.com/aiosolsofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon-instagram.png"
                width={32}
                height={32}
                alt="Instagram"
              />
            </Link>
            <Link
              href="https://x.com/aiosols"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/icon-twitter.png" width={32} height={32} alt="X" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/aiosols/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon-linkedin.png"
                width={32}
                height={32}
                alt="LinkedIn"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
