<script>
    let { data } = $props();
</script>
<h1>Writing Home Page</h1>
<p>This is the home page for all of my writing.
    I have a blog and some fantasy writing. 
</p>

<h2>Blog</h2>
<p>The following is a list imported from data.</p>
<p>I'm following the sveltekit tutorial.</p>
<p>Eventually, I plan on changing this to have actual data.</p>

<ul>
    {#each data.summaries as { slug, title }}
        <li><a href='/writing/{slug}'>{title}</a></li>
    {/each}
</ul>