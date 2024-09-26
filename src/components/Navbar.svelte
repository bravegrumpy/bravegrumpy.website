<script>
    export let htmlFiles = [];
</script>

<nav>
    <ul>
        {#each htmlFiles as file}
            <li>
                <a href={`/${file}`}>{file.split('.')[0]}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        background-color: blue;
    }
    nav ul {
        list-style-type: none;
        padding: 0;
    }
    nav ul li {
        display: inline;
        margin-right: 10px;
    }

    nav ul li a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
    }
</style>