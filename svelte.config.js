import { vitePreprocess } from '@astrojs/svelte';
import path from 'path';

export default {
	preprocess: vitePreprocess({
        style: {
            less: {
                paths: [path.resolve('src')],
                javascriptEnabled: true,
            }
        }
    }),
}
