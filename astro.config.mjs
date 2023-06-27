import { defineConfig } from "astro/config";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://gdscyu.com",
  integrations: [svelte(), tailwind(), sitemap(), image()],
  vite: {
    plugins: [{ ...threeMinifier(), enforce: "pre" }],
    ssr: {
      noExternal: ["three"],
    },
  },
});
