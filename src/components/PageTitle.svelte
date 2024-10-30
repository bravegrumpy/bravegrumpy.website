<div class="pageTitle">
    <h2>Page Title Yo</h2>
    <p>Subtitle</p>
</div>

<style lang="less">
    @import "@styles/declarations.less";

    .pageTitle {
        background-color: @accent2a;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        border: @borders[element];
        border-radius: @borderRadius;
        gap: 0;
 

        h2 {
            .fonts.pageTitle(@size: 3.236rem;);
            line-height: 2rem;
            padding: 0;
            margin: 1rem;
        }

        p {
            .fonts.pageSubtitle(@size: 1.618rem);
            line-height: 1rem;
            padding: 0;
            margin: 1rem;
        }
    }
</style>