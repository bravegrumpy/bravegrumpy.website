import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-node';

export default {
    kit: {
        adapter: adapter({
            out: 'build',
            precompress: true
        }),
        target: '#svelte-app',
        vite: {
            ssr: {
                noExternal: ['svelte']
            }
        }
    },
    preprocess: vitePreprocess()
};