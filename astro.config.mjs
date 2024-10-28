import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import awsAmplify from 'astro-aws-amplify';

export default defineConfig({
    output: 'hybrid',
    adapter: awsAmplify(),
    site: "https://new.bravegrumpy.com",
    integrations: [icon(), sitemap(), svelte(), react()],
});