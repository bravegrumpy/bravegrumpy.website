import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";


import icon from "astro-icon";


import svelte from "@astrojs/svelte";

import awsAmplify from 'astro-aws-amplify';


export default defineConfig({
    site: "https://bravegrumpy.com",
    integrations: [ sitemap(), icon(), svelte()],
    adapter: awsAmplify(),
    output: 'server',
});