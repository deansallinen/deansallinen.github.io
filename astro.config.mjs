import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://deansallinen.ca",
  integrations: [mdx(), sitemap(), purgecss()],

  vite: { css: {} },
});

