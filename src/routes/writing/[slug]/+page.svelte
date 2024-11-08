<script>
    let { data } = $props();
    let page = $state();
</script>

<h1>{data.slug}</h1>
<p>This is the {data.slug} page</p>

<h2>Go to another page</h2>
<label>
    Slug:
    <input type='text' bind:value={page}>
</label>
<p><a href='/writing/{page}'>Go to writing/{page}</a></p>