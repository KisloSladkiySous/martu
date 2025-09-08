// @ts-check
import { defineConfig } from "astro/config";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://kislosladkiysous.github.io",
  base: "/martu",
  devToolbar: { enabled: false },
  integrations: [db()],
});
