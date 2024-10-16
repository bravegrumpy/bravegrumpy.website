//import { response } from 'express';
import App from './components/App.svelte';


export async function fetchHtmlFiles() {
    const response = await fetch('/api/files');
    return await response.json();
}

fetchHtmlFiles().then((htmlFiles) => {
    const app = new App({
        target: document.getElementById('svelte-app'),
        props: {
            htmlFiles
        }
    });
});