import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [svelte()],
    base: '/',
    build: {
        /*
        ssr: [
            'src/main.js',
            'index.html',
        ], */
        outDir: 'build',
        rollupOptions: {
            input: {
                main: 'src/main.js',
                index: 'index.html',
            },
            /*external: [
                //'./node_modules',
                './stylesheets',
                './archive./',
            ],*/          
        },
    },
    server: {
        fs: {
            allow: ['.']
        },
        proxy: {
            '/api': {
                target: process.env.VITE_BACKEND_URL || 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                //rewrite: (path) => path.replace(/^\/api/,''),
            },
        },
    },
});
