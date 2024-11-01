import { defineConfig } from 'astro/config';

import awsAmplify from "astro-aws-amplify";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

export default defineConfig({
    site: "https://new.bravegrumpy.com",
    integrations: [sitemap(), icon(), react(), svelte()],
    output: 'server',
    adapter: awsAmplify()
});