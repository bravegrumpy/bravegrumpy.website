import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte()],
    build: {
        ssr: 'src/main.js',
        outDir: 'build',
        rollupOptions: {
            input: {
                index: 'index.html',
                main: 'src/main.js',
            },
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