<script>
    let { size = 75} = $props();
</script>

<svelte:options runes />

<div class="logo">
    <img 
        src='/favicon.png'
        width="{size}"
        height="{size}"
    />
    <div class="title">
        <h1>BraveGrumpy</h1>
        <p>Welcome to my chaotic castle for creativity.</p>
    </div>
</div>

<style lang="less">
    @import '@styles/declarations.less';
    #textStyles();

    h1 {
        .fonts.logoText(@size: 5rem);
        line-height: 1rem;
    }

    .logo {
        margin-bottom: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        max-width: 80%;
        border-radius: 5px;
        border: 3px solid mediumorchid;

        .title {
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            justify-content: start;
            width: auto;
            gap: 0;
            border: 2px solid sandybrown;
        }
    }
</style>