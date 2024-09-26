import App from './components/App.svelte';

async function fetchHtmlFiles() {
    const responsee = await  fetch('/api/files');
    return await response.json();
}

let app;

function initializeApp() {
    fetchHtmlFiles().then( htmlFiles => {
        app = new App({
            target: document.getElementById('svelte-app'),
            props: {
                htmlFiles
            },
        });
    });
    return app
}

app = initializeApp();

export default app;