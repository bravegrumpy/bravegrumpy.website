<script>
    let { data } = $props();
</script>
<h1>BraveGrumpy Home Page</h1>
<p>{data.visited ? 'friend': 'stranger'}</p>
<p>Welcome {data.visited ? 'back': ''} to the Brave Grumpy homepage. Click on the links to explore content.</p>