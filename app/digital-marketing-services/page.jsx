import MarketingJourney from "@/components/marketing/MarketingJourney";
import MarketingSteps from "@/components/marketing/MarketingSteps";
import MarketingHero from "@/components/marketing/Marketinghero";

export const metadata = {
  title: "Digital Marketing Services | Web Marketing Solutions - AIOSols",
  description:
    "Get your online presence back on track with our digital marketing services. To drive measurable results, we specialize in SEO, social media marketing, ppc, and more.",
  alternates: {
    canonical: "https://aiosols.com/digital-marketing-services",
    last_updated: "10/23/2023",
  },
  openGraph: {
    title:
      "Digital Marketing Services | Web Marketing Solutions - AIOSols",
    deScription:
      "Get your online presence back on track with our digital marketing services. To drive measurable results, we specialize in SEO, social media marketing, ppc, and more.",
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

const ServicePage = () => {
  return (
    <>
      <MarketingHero />
      <MarketingSteps />
      <MarketingJourney />
    </>
  );
};

export default ServicePage;
