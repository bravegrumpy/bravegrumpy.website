import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

export default defineConfig({
    site: "https://new.bravegrumpy.com",
    integrations: [
        svelte({
            include: ['**/svelte/**'],
        }), 
        icon(), 
        sitemap(), 
        react({
            include: ['**/react/**'],
        })
    ],
    output: "static"
});