import { mdsvex } from 'mdsvex';
import adapter from 'amplify-adapter';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config}*/
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },
  checkOrigin: true,
  trustedOrigins: [
    "https://*.bravegrumpy.com", 
    "*.ncase.me", 
    "*.scrupulous-albatross-914.convex.site",
    "https://scrupulous-albatross-914.convex.cloud",
    "https://scrupulous-albatross-914.convex.site", 
    "*.scrupulous-albatross-914.convex.cloud",
    "*.cautious-snake-295.convex.cloud",
    "https://cautious-snake-295.convex.cloud",
    "*.cautious-snake-295.convex.site",
    "https://cautious-snake-295.convex.site",
    "postgresql://postgres:mALNYWQKPCijlwCrQVDTcqaVtjXJnkHr@centerbeam.proxy.rlwy.net"
  ],
  preprocess: [
    mdsvex({
      extensions: [".svx", ".md"],
      smartypants: {
        quotes: true,
        dashes: 'oldschool'
      }
    })
  ],
  extensions: ['.svelte', '.svx', '.md']
};
export default config;
