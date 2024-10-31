import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";


import icon from "astro-icon";



import react from "@astrojs/react";


import svelte from "@astrojs/svelte";


export default defineConfig({
    outDir: 'dist',
    site: "https://bravegrumpy.com",
    integrations: [sitemap(), icon(), react(), svelte()],
    output: 'static',
});