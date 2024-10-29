<div class="pageTitle">
    <h2>Page Title Yo</h2>
    <p>Subtitle</p>
</div>

<style lang="less">
    @import "../styles/declarations.less";

    .pageTitle {
        background-color: @accent2a;
        width: 30%;
        display: flex;
        flex-direction: column;
        border: @borders[element];
        border-radius: @borderRadius;
 

        h2 {
            .fonts.pageTitle();
        }

        p {
            .fonts.pageSubtitle();
        }
    }
</style>