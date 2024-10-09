<script>
    export let htmlFiles = [];
</script>

<nav>
    {#each htmlFiles as file}
        <a href={`../${file}`}>{file.split('.')[0]}</a>      
    {/each}
</nav>

<style>
    a {
        margin-right: 10px;
        background-image: 
    }
</style>