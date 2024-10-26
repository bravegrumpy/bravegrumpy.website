<script>
    let { size = "75"} = $props();

</script>

<svelte:options runes />

<div class="logo">
    <img 
        src='/favicon.png'
        width={size}
        height={size}
        alt="BraveGrumpy logo"
    />
    <div class="title">
        <h1>BraveGrumpy</h1>
        <p>Welcome to my chaotic castle for creativity.</p>
    </div>
</div>

<style lang="less">
    @import (reference) '@styles/declarations.less';

    h1 {
        .fonts.logoText(@size: 5rem);
        line-height: 3rem;
    }

    .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;

        .title {
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            justify-content: start;
            width: auto;
            gap: 0;
        }
    }
</style>