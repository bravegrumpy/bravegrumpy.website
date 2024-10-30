import { defineConfig } from 'astro/config';

import awsAmplifyfrom 'astro-aws-amplify';

import sitemap from "@astrojs/sitemap";


import icon from "astro-icon";


import svelte from "@astrojs/svelte";


export default defineConfig({
  site: "https://new.bravegrumpy.com",
  integrations: [ sitemap(), icon(), svelte()],
  output: "server",
  adapter: awsAmplifyfrom(),
});