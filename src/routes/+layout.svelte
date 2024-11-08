<script>
    let { children } = $props();
    let route = $state();
</script>


<div class="nav">
    <nav>
        <a href='/'>home</a>
        <a href='/writing'>writing</a>
    </nav>
</div>

<svelte:head>
    <link rel='stylesheet' href='/src/app.css'>
</svelte:head>

<div class='children'>
    {@render children()}
</div>

<div class="routes">
    <h2> Go to new page</h2>
    <label>
        Page:
        <input type='text' bind:value={route} />
    </label>
    <p>
        <a href='/writing/{route}'>Go to writing/{route}</a>
    </p>
</div>

<style>
    .nav {
        grid-column: auto;
    }
    .children {
        grid-column: 1;
    }
    .routes {
        grid-column: 1;
    }
</style>