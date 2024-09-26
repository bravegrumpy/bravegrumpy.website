<script>
    let name = "";
    let message = `Hello to ${name} from  Vite and  Svelte!`;
</script>

<input type="text" bind:value={name} plaeholder="john" />

<h2>Hello to {name} from  Vite  and Svelte</h2>