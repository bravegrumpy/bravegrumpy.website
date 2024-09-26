<script>
    export let htmlFiles = [];
    
    import Navbar from "./Navbar.svelte";
    import Phrase from "./Phrase.svelte"
    let name = "";
    let message = `The text in this section is written using Svelte.`;
</script>

<header>
    <h2>Hello to {name} from  Vite  and Svelte</h2>
    <Navbar {htmlFiles} />
</header>
<main>
    <p><Phrase /></p>
    <input type="text" bind:value={name} plaeholder="john" />
    <p>{message}</p>
    <p>We are existing in <em>App.svelte</em></p>
</main>