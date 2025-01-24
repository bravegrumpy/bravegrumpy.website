//import { response } from 'express';
import App from "./components/App.svelte";

export async function fetchHtmlFiles() {
  const response = await fetch("/api/files");
  return await response.json();
}

async function initalizeApp() {
  const htmlFiles = await fetchHtmlFiles();
  const app = new App({
    target: document.getElementById("svelte-app"),
    props: {
      htmlFiles: htmlFiles,
    },
  });

  return app;
}

export default initalizeApp();
