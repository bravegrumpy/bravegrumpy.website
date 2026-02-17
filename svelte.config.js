import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
// import adapter from 'amplify-adapter';

// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
  kit: { adapter: adapter() },
  checkOrigin: true,
  trustedOrigins: ["https://*.bravegrumpy.com", "*.ncase.me"],
  preprocess: [
    mdsvex({ smartypants: { quotes: true, dashes: 'oldschool' } })
  ],
  extensions: ['.svelte', '.svx']
};

export default config;
