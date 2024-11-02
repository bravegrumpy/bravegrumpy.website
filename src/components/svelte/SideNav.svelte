<script></script>

<div class="menu">
    <div class="sideNav">
        <a href="#header">This is a thing</a>
    </div>
    <div class="sideNav active">
        <a href="#header">This is a thing</a>
    </div>
    <div class="sideNav dark">
        <a href="#header">This is a thing</a>
    </div>
    <div class="sideNav dark active">
        <a href="#header">This is a thing</a>
    </div>
</div>

<style lang="less">
    @import '@styles/declarations.less';

    .menu {
        grid-column: 1;
        width: 100%;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }


    .sideNav {
        background-color: @accent2b;
        color: @dark1;
        grid-column: 1;
        grid-row: 1;
        height: fit-content;
        border-radius: 0 @borderRadius @borderRadius 0;
        border-top: @borders[button] $color;
        border-right: @borders[button] $color;
        border-bottom: @borders[button] $color;

        a {
            text-decoration: none;
            color: @dark1;
            .fonts.navMenuDefault();
        }
    }

    .sideNav.active {
        background-color: @accent2a;
        color: @logoPurple;
        grid-column: 1;
        grid-row: 2;
        height: fit-content;
        border-radius: 0 @borderRadius @borderRadius 0;
        border-top: @borders[button] $color;
        border-right: @borders[button] $color;
        border-bottom: @borders[button] $color;
    
        a {
            text-decoration: none;
            color: @logoPurple;
            .fonts.navMenuActive();
        }
    }

    
    .sideNav.dark {
        background-color: @dark1;
        color: @accent2b;
        grid-column: 1;
        grid-row: 3;
        height: fit-content;
        border-radius: 0 @borderRadius @borderRadius 0;
        border-top: @borders[button] $color;
        border-right: @borders[button] $color;
        border-bottom: @borders[button] $color;
    
        a {
            text-decoration: none;
            color: @accent2b;
            .fonts.navMenuDefault();
        }
    }

    .sideNav.dark.active {
        background-color: @brand6;
        color: @highlight1;
        grid-column: 1;
        grid-row: 4;
        height: fit-content;
        border-radius: 0 @borderRadius @borderRadius 0;
        border-top: @borders[button] $color;
        border-right: @borders[button] $color;
        border-bottom: @borders[button] $color;
    
        a {
            text-decoration: none;
            color: @highlight1;
            .fonts.navMenuActive();
        }
    }
</style>