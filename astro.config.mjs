// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://kislosladkiysous.github.io",
  base: "/martu",

  prefetch: {
    defaultStrategy: "viewport",
  },

  integrations: [solidJs()],
});