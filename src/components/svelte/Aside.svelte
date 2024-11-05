<div class="aside">
    <slot></slot>
</div>

<style lang="less">
    @import '@styles/declarations.less';

    .aside {
        background-color: @accent2b;
        width: 80%;
        grid-column: 3;
        color: @dark1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        border: @borders[element] $color;
        border-radius: @borderRadius;
        gap: 0;
        padding: 0 1rem;
        height: fit-content;
    }

    :global(.dark) {
        .aside {
            background-color: @dark1;
            color: @accent2b;
            border-color: @accent2b;
        }
    }
</style>