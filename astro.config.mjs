import { defineConfig } from 'astro/config'

import icon from 'astro-icon';

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

export default defineConfig({
    site: "https://new.bravegrumpy.com",
    integrations: [icon({}), preact(), sitemap()],
});