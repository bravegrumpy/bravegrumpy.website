import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";


import icon from "astro-icon";


import svelte from "@astrojs/svelte";


import react from "@astrojs/react";


export default defineConfig({
    site: "https://bravegrumpy.com",
    integrations: [sitemap(), icon(), svelte(), react()],
    output: 'static',
});