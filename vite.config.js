import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

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
            input: {
                main: path.resolve(__dirname, 'main.js')
            },
        },
    },
    server: {
        fs: {
            allow: ['.'],
        },
        proxy: {
            '/api': {
                target: process.env.VITE_BACKEND_URL || `http://localhost:3000`,
                changeOrigin: true,
                //rewrite: (path) => path.replace(/^\/api/, ''),
                secure: false,
            },
        },
    },
//    ssr: { noExternal: ['svelte'], },
});