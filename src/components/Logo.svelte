<script>
    let size = "75px";
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
    @import "../styles/declarations.less";
    h1 {
        .fonts.logoText(@size: 5rem; @weight: 400;);
        line-height: 3rem;
        padding-bottom: -3px;
    }

    p {
        .fonts.logoSubtitle(@size: 1rem, @weight: 600);
    }

    .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;

        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
        }
    }
</style>