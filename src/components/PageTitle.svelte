<script>
    let {pageTitle='Page Title', pageSubtitle='Placeholder subtitle'} = $props();
</script>


<div class="pageTitle">
    <h2>{pageTitle}</h2>
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
        padding: 1.25rem;
        box-shadow: @boxShadowLight;

        h2 {
            .fonts.pageTitle(@size: 2.617rem;);
            line-height: 1rem;
            padding: 0;
            margin: 1rem;
        }

        p {
            .fonts.pageSubtitle(@size: 1.618rem);
            padding: 0;
            margin: 1rem;
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