<script>
    import Icon from '@iconify/svelte';
    import 'iconify-icon';
    let { size = 75, icon, children} = $props();
</script>

<svelte:options runes />

<div class="logo">
    <slot name="logo">
        <img 
            src='/favicon.png'
            width="{size}"
            height="{size}"
        />
    </slot>
    <div class="title">
        <h1>BraveGrumpy</h1>
        <p>Welcome to my chaotic castle for creativity.</p>
    </div>
</div>

<style lang="less">
    @import '/src/styles/declarations.less';

    h1 {
        .fonts.logoText(@size: 5rem);
        line-height: 3rem;
    }

    .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: first-baseline;
        flex-wrap: wrap;
        max-width: 80%;
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