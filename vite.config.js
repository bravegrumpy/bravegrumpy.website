import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { htmlFiles } from './getFiles.js';
import expressApp from './server.js';
import router from './routes.js';
import express from 'express';

export default defineConfig({
    plugins: [
        svelte(),
        {
            name:'express-middleware',
            configureServer(server) {
                server.middlewares.use(router);
                server.middlewares.use(expressApp.default || expressApp);
            }
        },
    ],
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
                '0': htmlFiles[0],
                '1': htmlFiles[1],
                '2': htmlFiles[2],
                '3': htmlFiles[3],
                '4': htmlFiles[4],
                '5': htmlFiles[5],
            },
            external: [
                'svelte',
                'express',
                'server.js',
                'helmet'
            ],
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
