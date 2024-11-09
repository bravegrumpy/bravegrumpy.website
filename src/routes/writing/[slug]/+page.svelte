<script>
    let { data } = $props();
</script>
<h1>Writing Blog Page</h1>
<p>I plan on updating this  as I learn more mechanics for changing things.</p>
<p>Right now, I'm mostly following the tutorial.</p>
{#if data.post }
    <h2>{data.post.title}</h2>
    <p>{@html data.post.content}</p>
{:else}
    <h2>{data.slug}</h2>
    <p>This is the {data.slug} page</p>
{/if}