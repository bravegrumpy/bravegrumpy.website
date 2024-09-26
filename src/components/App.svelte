<script>    
    import Navbar from "./Navbar.svelte";
    import Phrase from "./Phrase.svelte";
    export let htmlFiles = [];

    let name = "";
    let message = `The text in this section is written using Svelte.`;
</script>

<header>
    <h2>Hello to {name} from  Vite  and Svelte</h2>
    <p>Navbar component below</p>
    <div>
        <Navbar {htmlFiles} />
    </div>
</header>
<main>
    <h2>Phrase Component</h2>
    <p><Phrase /></p>
    <input type="text" bind:value={name} plaeholder="john" />
    <p>{message}</p>
    <p>We are existing in <em>App.svelte</em></p>
</main>