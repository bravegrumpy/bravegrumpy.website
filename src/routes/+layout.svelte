<script>
    let { children } = $props();
    let route = $state();
</script>

<nav>
    <a href='/'>home</a>
    <a href='/writing'>writing</a>
</nav>

<svelte:head>
    <link rel='stylesheet' href='/src/app.css'>
</svelte:head>

{@render children()}

<h2> Go to new page</h2>
<label>
    Page:
    <input type='text' bind:value={route} />
</label>
<p>
    <a href='/writing/{route}'>Go to writing/{route}</a>
</p>