<script>
    let route = $state();
</script>
<h1>Writing Home Page</h1>
<p>This is the home page for all of my writing.
    I have a blog and some fantasy writing. 
</p>

<h2>Going another page</h2>
<label>
    Slug:
    <input type='text' bind:value={route}>
</label>
<p><a href='/writing/{route}'>Go to writing/{route}</a></p>