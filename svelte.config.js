import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//import adapter from '@sveltejs/adapter-node';

export default {
    kit: {
        adapter: adapter({
            out: 'build',
            precompress: true
        }),
        target: ['#svelte-app', '.svelte'],
        vite: {
            noExternal: ['svelte'],
        },
    },
    preprocess: vitePreprocess()
};