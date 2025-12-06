// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
  site: "https://martuagency.ru",
  devToolbar: { enabled: false },
  adapter: node({
    mode: "standalone",
  }),
  image: {
    domains: ["cms.agencymartu.ru", "127.0.0.1:1337"],
  },
  output: "server",
  vite: {
    ssr: {
      noExternal: ["piccolore", "@astrojs/node", "clsx"],
    },
  },
  // output: "static",
});
