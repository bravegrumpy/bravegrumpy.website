<div class="main">
    <slot></slot>
</div>

<style lang="less">
    @import '@styles/declarations.less';

    .main{
        background-color: @accent2a;
        border-radius: @borderRadius;
        border: @borders[element];
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0;
        padding: 0 1rem;
        color: @logoPurple;
        width: 100%;
        grid-column: 2;
    }

    :global(.dark) {
        .main {
            background-color: @black;
            color: @accent2a;
        }
    }
    
</style>