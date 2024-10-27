<script>
    export let size = "75px";
</script>

<div class="logo">
    <img 
        src='/favicon.png'
        width={size}
        height={size}
        alt="BraveGrumpy logo"
    />
    <div class="title">
        <h1>BraveGrumpy</h1>
        <p>Welcome to my chaotic castle for creativity.</p>
    </div>
</div>

<style lang="less">
    @import "@styles/declarations.less";
    h1 {
        .fonts.logoText(@size: 5rem; @weight: 400;);
        line-height: 1rem;
        padding-bottom: -3px;
    }

    p {
        .fonts.logoSubtitle(@size: 1rem, @weight: 600);
        align-self: center;
    }

    img {
        border-radius: @borderRadius;
    }

    .logo {
        padding-top: 1.625rem;
        padding-left: 3.188rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.2rem;

        .title {
            display: flex;
            flex-direction: column;
            justify-items: flex-start;
            align-items: stretch;
        }
    }
</style>