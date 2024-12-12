import { defineConfig } from "astro/config";
import inspectUrls from "@samdev-7/rehype-url-inspector";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://guissmo.com",
  base: ".",
  experimental: {
    //    contentCollectionCache: true,
  },
  markdown: {
    remarkPlugins: ["remark-math"],
    remarkRehype: {
      footnoteLabelTagName: "h1",
    },
    rehypePlugins: [
      [
        "rehype-katex",
        {
          // Katex plugin options
        },
      ],
      [
        inspectUrls,
        {
          selectors: ["a[href]"],
          inspectEach(url) {
            // Check if the link is external
            const href = url.node.properties.href;

            // Check if the link is external (i.e., includes 'http' or 'https')
            const isExternal = /^https?:\/\//i.test(href);

            // Set target="_blank" only for external links
            if (isExternal) {
              url.node.properties.target = "_blank";
            }
          },
        },
      ],
    ],
  },
  integrations: [
    react(),
    sitemap({
      entryLimit: 10000,
    }),
  ],
});
