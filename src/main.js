import App from './components/App.svelte';

async function fetchHtmlFiles() {
    try {
        const response = await fetch('/api/files');
        console.log(response);
        if (!response.ok) {
            throw new  Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to fetch HTML files:`, error);
        return [];
    }
}

fetchHtmlFiles().then(htmlFiles => {
    new App({
        target: document.getElementById('svelte-app'),
        props: {
            htmlFiles
        }
    });
});