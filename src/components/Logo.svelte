<script>
    let { size="75px" } = $props();
</script>

<div class="logo">
    <div class="images">        
        <img 
            src='/favicon.png'
            width={size}
            height={size}
            alt="BraveGrumpy logo"
        />
        <slot name="switch"></slot>

    </div>
    <div class="title">
        <h1>BraveGrumpy</h1>
        <p>Welcome to my chaotic castle of curious creations. I hope you like what you find.</p>
    </div>
</div>

<style lang="less">
    @import "@styles/declarations.less";
    h1 {
        .fonts.logoText(@size: 5rem; @weight: 400;);
        color: @logoPurple;
    }

    p {
        .fonts.logoSubtitle(@size: 1rem, @weight: 600);
        align-self: center;
        text-wrap: wrap;
        text-align: left;
        width: 18.75rem;
        padding: 0;
        margin-top: -3.125rem;
    }

    img {
        border-radius: @borderRadius;
    }

    :global(.dark) {
        .logo {
            .title {
                h1, p {
                    color: @accent1a;
                }
            }
        }
    }

    .logo {
        padding-top: 1.625rem;
        padding-left: 3.188rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.2rem;

        .images {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
        }

        .title {
            display: flex;
            flex-direction: column;
            justify-items: flex-start;
            align-items: flex-start;
        }
    }
</style>