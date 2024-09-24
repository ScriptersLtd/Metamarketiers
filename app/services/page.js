import Journey from "@/components/servicesComponents/Journey";
import ServicesBox from "@/components/servicesComponents/Services";
import ServicesHero from "@/components/servicesComponents/ServicesHero";

export const metadata = {
  title: "Leading Digital Marketing Solutions in USA | Aiosols",
  description:
    "Elevate your brand with Aiosols' comprehensive digital marketing solutions. Contact us to stand out from the competition and thrive online.",
  alternates: {
    canonical: "https://aiosols.com/services",
    last_updated: "10/23/2023",
  },
  openGraph: {
    title: "Leading Digital Marketing Solutions in USA | Aiosols",
    deScription:
      "Elevate your brand with Aiosols' comprehensive digital marketing solutions. Contact us to stand out from the competition and thrive online.",
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

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <Journey />
      <ServicesBox />
    </div>
  );
};

export default Services;
