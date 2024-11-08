<script>
    let { data, children } = $props();
</script>

<div class='layout'>
    <main>
        {@render children()}
    </main>

    <aside>
        <h2>More Posts</h2>
        <ul>
            {#each data.summaries as { slug, title }}
                <li><a href='/writing/{slug}'>{title}</a></li>
            {/each}
        </ul>
    </aside>
</div>

<style>
    .layout {
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 16rem;
    }

    main {
        grid-column: 1;
    }

    aside {
        grid-column: 2;
    }

    aside > ul > li {
        list-style: none;
    }

    aside > ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>