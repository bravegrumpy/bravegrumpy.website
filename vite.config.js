import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [
        svelte(),
        {
            name: 'generate-deploy-manifest',
            apply: 'build',
            generateBundle(options, bundle) {
                const files = Object.keys(bundle).map(fileName => fileName);
                const manifestContent = {
                    version: 1,
                    files: files
                };

                const outDir = options.dir || 'build';
                const manifestFilePath = path.resolve(outDir, 'deploy-manifest.json');
                fs.writeFileSync(manifestFilePath, JSON.stringify(manifestContent, null, 2));
                console.log(`Successfully created deploy-manifest.json  in "${outDir}"`);
            }
        },
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