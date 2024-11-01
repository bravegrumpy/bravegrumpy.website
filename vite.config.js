import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import expressApp from './server';

export default defineConfig({
    plugins: [
        svelte(),
    ],
    build: {
        outDir: 'build',
        rollupOptions: {
            input: {
                main: 'src/main.js',
                index: 'index.html',
                writing: 'writing.html',
                'writing/wbw': 'work-by-week/wbw.html',
                "link-repository": 'link-repository.html',
                archive: 'archive/archive-00/index.html'
            },
            external: [
                'svelte',
                'express',
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
            },
        },
    },
});
    
    
    
    
    
    
    
    
    
    
    /*********************************************************
    plugins: [svelte()],
    base: '/',
    build: {
        /*
        ssr: [
            'src/main.js',
            'index.html',
        ], *//*
        outDir: 'build',
        rollupOptions: {
            input: {
                main: 'src/main.js',
                index: 'index.html',
		        writing: 'writing.html',
		        'writing/wbw': 'work-by-week/wbw.html',
		        'link-repository': 'link-repository.html',
		        archive: 'archive/archive-00/index.html'
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

******************************************************************************/