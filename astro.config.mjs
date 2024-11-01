import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://new.bravegrumpy.com",
    integrations: [svelte(), icon(), sitemap()],
    output: "static"
});