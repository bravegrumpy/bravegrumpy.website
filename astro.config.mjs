import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";


import icon from "astro-icon";


import svelte from "@astrojs/svelte";


export default defineConfig({
  site: "https://bravegrumpy.com",
  integrations: [ sitemap(), icon(), svelte()],
});