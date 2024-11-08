<script>
    let { children } = $props();
</script>

<nav>
    <a href='/'>home</a>
    <a href='/writing'>writing</a>
</nav>

<svelte:head>
    <link rel='stylesheet' href='/src/app.css'>
</svelte:head>

{@render children()}