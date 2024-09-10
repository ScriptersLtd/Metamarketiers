import DesignHero from '@/components/designing/DesignHero'
import DesignSteps from '@/components/designing/DesignSteps'
import DesignTypes from '@/components/designing/DesignTypes'


export const metadata = {
  title: "Website Design Services | Consult for Custom Web Design",
  description:
    "AIOSols provides SEO-friendly website design services to boost your search engine rankings, improve your online exposure, and convert your visitors into customers.",
  alternates: {
    canonical: "https://aiosols.com/web-design",
    last_updated: "10/23/2023",
  },
  openGraph: {
    title:
      "Website Design Services | Consult for Custom Web Design",
    deScription:
      "AIOSols provides SEO-friendly website design services to boost your search engine rankings, improve your online exposure, and convert your visitors into customers.",
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

const Designing = () => {
  return (
    <>
    <DesignHero />
    <DesignSteps />
     <DesignTypes />      
    </>
  )
}

export default Designing