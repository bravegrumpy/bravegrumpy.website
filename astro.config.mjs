import { defineConfig } from 'astro/config';

import awsAmplify from 'astro-aws-amplify';

import sitemap from "@astrojs/sitemap";


import icon from "astro-icon";


import svelte from "@astrojs/svelte";


export default defineConfig({
  site: "https://bravegrumpy.com",
  integrations: [ sitemap(), icon(), svelte()],
  output: 'server',
  adapter: awsAmplify(),
});