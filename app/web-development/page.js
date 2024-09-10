import DevelopmentComponent from "@/components/development/DevelopmentComponent";
import DevelopmentHero from "@/components/development/DevelopmentHero";
import DevelopmentText from "@/components/development/DevelopmentText";
import PerformanceComponent from "@/components/development/PerformanceComponent";



export const metadata = {
  title: "Website Development Services| Custom Web Solutions - AIOSols",
  description:
    "Get cutting-edge responsive web development solutions for your business. We develop high-performance conversion-oriented websites to ensure a great user experience.",
  alternates: {
    canonical: "https://aiosols.com/web-development",
    last_updated: "10/23/2023",
  },
  openGraph: {
    title:
      "Website Development Services| Custom Web Solutions - AIOSols",
    deScription:
      "Get cutting-edge responsive web development solutions for your business. We develop high-performance conversion-oriented websites to ensure a great user experience.",
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
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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


const Development = () => {
  return (
    <div>
      <DevelopmentHero />
      <DevelopmentText />
      <DevelopmentComponent />
      <PerformanceComponent />
    </div>
  );
};

export default Development;