import BrandingHero from '@/components/Branding/BrandingHero'
import ParallaxComponent from '@/components/Branding/ParallaxComponent'
import Progress from '@/components/Branding/Progress'
import TypesofBranding from '@/components/Branding/TypesofBranding'
import React from 'react'



export const metadata = {
  title: "Digital Brand Strategy | Online Branding Services - AIOSols",
  description:
    "AIOSols can elevate your brand's digital presence with our unique brand strategy and online branding services, your brand will be able to thrive within a modern environment.",
  alternates: {
    canonical: "https://aiosols.com/branding",
    last_updated: "10/23/2023",
  },
  openGraph: {
    title:
      "Digital Brand Strategy | Online Branding Services - AIOSols",
    deScription:
      "AIOSols can elevate your brand's digital presence with our unique brand strategy and online branding services, your brand will be able to thrive within a modern environment.",
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

const Brandingpage = () => {
  return (
    <>
<BrandingHero />
<ParallaxComponent />
<TypesofBranding />
<Progress />

    </>
  )
}

export default Brandingpage