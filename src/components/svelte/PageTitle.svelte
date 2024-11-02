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
        box-shadow: -20px -20px 50px 10px fade(@accent1a, 60%) inset, 20px -10px 35px 10px fade(@black, 15%), 10px 10px 25px lighten(fade(@white, 40%), 100%), 0px 25px 30px 15px fade(@brand6, 20%) inset;
        order: 3;
        margin-top: -3.125rem;

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
            box-shadow: 50px 0px 50px 30px fade(@logoPurple, 70%);
            z-index: 3;

            h1, p {
                color: @accent1a;
            }
        }
    }
</style>