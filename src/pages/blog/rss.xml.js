import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { allBlogPostsSortedByDate } from "./blog.ts";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Jared Asuncion | Blog",
    description:
      "Jared Asuncion's blog about tech, math, mini projects, and everything else.",
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: allBlogPostsSortedByDate.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: (
        (post.data.description == undefined ? "" : post.data.description) +
        " Read the full post on the blog."
      ).trim(),
      link: `/blog/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language><image><url>http://guissmo.com/blog/favicon/favicon.ico</url></image>`,
  });
}
