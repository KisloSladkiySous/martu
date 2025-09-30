// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://martuagency.ru",
  devToolbar: { enabled: false },
  image: {
    domains: ["cms.agencymartu.ru", "127.0.0.1:1337"],
  },
  // output: "static",
});
