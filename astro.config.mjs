import { defineConfig } from 'astro/config'

import icon from 'astro-icon';

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://new.bravegrumpy.com",
    integrations: [icon({
        include: {
            hugeicons: ["*"],
        },
    }), preact(), sitemap()],
});