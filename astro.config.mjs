import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";


import react from "@astrojs/react";


import tailwind from "@astrojs/tailwind";


export default defineConfig({
    site: "https://new.bravegrumpy.com",
    integrations: [icon({}), sitemap(), svelte(), react(), tailwind()],
});