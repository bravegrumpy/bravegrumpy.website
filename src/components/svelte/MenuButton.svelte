<script>
    let {
        className = '',
        href = '/',
        text = 'Menu Navigation Button',
    } = $props();

</script>

<a 
    class='menuButton {className}' 
    href={href}
    style:text-decoration=none
    style:height=fit-content
>
    {text}
</a>

<style lang="less">
    @import '@styles/declarations.less';

    .menuButton {
        background-color: @accent2b;
        color: @dark1;
        padding: 0.5rem 1rem 0.5rem 1.5rem;
        .fonts.navMenuDefault(@size: 1.5rem);
        border-top-right-radius: @borderRadius;
        border-bottom-right-radius: @borderRadius;
        border: @borders[button] $color;
        border-left: none;
    }
    
    .active {
            .fonts.navMenuActive(@size: 1.5rem);
            background-color: @accent1a;
            color: @logoPurple;
            border-color: $color;
        }

    :global(.dark) {
        .menuButton{
            background-color: @dark1;
            color: @accent2b;
            border-color: $color;
        }

        .active {
            background-color: @brand6;
            color: @highlight1;
            border-color: $color;
        }
    }
</style>