<script>
    export let htmlFiles = [];
</script>

<nav>
    {#each htmlFiles as file}
        <a href={`../${file}`}>{file.split('.')[0]}</a>      
    {/each}
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        align-items: start;
    }
    a {
        margin-right: 10px;
        background-color: cyan;
    }
</style>
