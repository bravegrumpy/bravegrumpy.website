<script>
    let { data } = $props();
    let route = $state();
</script>
<h1>Writing Home Page</h1>
<p>This is the home page for all of my writing.
    I have a blog and some fantasy writing. 
</p>

<h2>Blog Posts</h2>
<p>These will be regenerated later, as I discover what I want for real</p>

<ul>
    {#each data.summaries as { slug, title }}
        <li><a href='/writing/{slug}'>{title}</a></li>
    {/each}
</ul>