import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/menu/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import Link from "next/link";
import Image from "next/image";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Custom Web Design And Development Services USA - AIOSols",
  description:
    " Don't miss out on the opportunity to boost your brand. Our expert design and development services can help you achieve remarkable results.",
  alternates: {
    canonical: "https://aiosols.com",
    last_updated: "10/23/2023",
  },
  openGraph: {
    title:
      "Custom Web Design And Development Services USA - AIOSols",
    deScription:
      "Don't miss out on the opportunity to boost your brand. Our expert design and development services can help you achieve remarkable results.",
    images: [
      {
        url: "https://aiosols.com/logo.png",
        width: 1200,
        height: 628,
        type: "image/jpeg",
      },
    ],
    siteName: "AIOSols",
    locale: "en_US",
    type: "article",
    url: "https://aiosols.com",
  },

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "",
  //   description:
  //     "",
  //   creator: "@",
  //   site: "@",
  //   images: [""],
  // },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
        <Menu />
        <main>
        <Link href={"/"} className="backdrop-blur-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors z-20 absolute left-5 top-5 p-5 rounded-full w-[100px] h-[100px] flex justify-center items-center">
            <Image src={"/logowhite.png"} width={60} height={60} className="z-20" alt="home" />
            </Link>
          {children}
          </main>
          </SmoothScrolling>
      </body>

    </html>
  );
}
