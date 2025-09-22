// @ts-check
import { defineConfig } from "astro/config";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://martuagency.ru",
  devToolbar: { enabled: false },
  // output: "static",
  // integrations: [db()],
});
