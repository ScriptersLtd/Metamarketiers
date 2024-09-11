import fs from "fs";
import { blogData } from "@/constants";

const getBlogMetadata = () => {
  const folder = "blog/";
  const files = fs.readdirSync(folder);
  const jsxPosts = files.filter((file) => file.endsWith(".jsx"));
  const ContentMetadata = jsxPosts
    .map((htmlFile) => {
      const slug = htmlFile.replace(".jsx", "");
      const content = blogData.find((contentdata) => contentdata.slug === slug);
      if (content) {
        return {
          slug,
          canonical: content.alternates?.canonical,
          path: content.path,
          title: content.title,
          description: content.description,
          last_modified: content.isoDate,
          openGraph: {
            title: content.openGraph.title,
            description: content.openGraph.description,
            images: content.openGraph.images,
            url: content.openGraph.url,
            locale: content.openGraph.locale,
            type: content.openGraph.type,
            publishedTime: content.openGraph.publishedTime,
            authors: content.openGraph.authors,
            siteName: content.openGraph.site_name,
          },
        };
      } else {
        console.error(`Content not found for jsx file: ${htmlFile}`);
        return null;
      }
    })
    .filter(Boolean); // Remove any null values from the mapping

  return ContentMetadata;
};

export default getBlogMetadata;
