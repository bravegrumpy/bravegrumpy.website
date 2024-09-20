import adapter from 'amplify-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */

const config = {
    extensions: ['.svelte'],
    compilerOptions: {},
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter()
    },
    onwarn: (warning, handler) => handler(warning),
};

export default config;