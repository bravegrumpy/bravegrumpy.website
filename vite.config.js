import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const HOSTNAME  = process.env.HOSTNAME || 'localhost';


export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            '@':path.resolve(__dirname, 'src'),
        },
    },
    build: {
        ssr: 'src/main.js',
        outDir: 'build',
        rollupOptions: {
            input: './src/main.js',
        },
    },
    server: {
        fs: {
            allow: ['.'],
        },
        proxy: {
            '/api': {
                target: `http://${HOSTNAME}:3000`,
                changeOrigin: true,
                secure: false,
            },
        },
    },
//    ssr: { noExternal: ['svelte'], },
});