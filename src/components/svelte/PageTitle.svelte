<script>
    let {pageTitle='Page Title', pageSubtitle='Placeholder subtitle'} = $props();
</script>


<div class="pageTitle">
    <h1>{pageTitle}</h1>
    <p>{pageSubtitle}</p>
</div>

<style lang="less">
    @import "@styles/declarations.less";

    .pageTitle {
        background-color: @accent2a;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border: @borders[element];
        border-radius: @borderRadius;
        gap: 0;
        padding: 0 2rem;
        box-shadow: @boxShadowLight;
        order: 3;

        h1 {
            .fonts.pageTitle(@size: 2.426rem;);
            padding: 0;
            margin: 0;
        }

        p {
            .fonts.pageSubtitle(@size: 1.248rem);
            padding: 0;
            margin: 0;
        }
    }

    :global(.dark) {
        .pageTitle {
            background-color: @brand6;
            border-color: @accent1a;

            h2, p {
                color: @accent1a;
            }
        }
    }
</style>