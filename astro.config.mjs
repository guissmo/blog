import { defineConfig } from "astro/config";
import inspectUrls from "@jsdevtools/rehype-url-inspector";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://guissmo.com",
  base: "blog",
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          // Katex plugin options
        },
      ],
      [
        inspectUrls, {
          selectors: ["a[href]"],
          inspectEach(url) {
            url.node.properties.target = "_blank";
          }
        }
      ]
    ],
  },
  integrations: [react(), sitemap()],
});
