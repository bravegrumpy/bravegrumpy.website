<script>
  import '$lib/styles/globals.css';
  import Logo from '$lib/components/Logo.svelte';
  import TopNavigation from './TopNavigation.svelte';
  import BottomNavigation from './BottomNavigation.svelte';
  import PageTitle from './PageTitle.svelte';

  import NavDrawer from './NavDrawer.svelte';
  //   import DecoratedSwitch from './DecoratedSwitch.svelte';

  //   const iconSize = $state('25');
  //   const buttonSize = $derived(`size-[${iconSize * 2}px]`);

  //   import { DarkMode, Button } from 'flowbite-svelte';

  //   import Icon from '@iconify/svelte';
  //   import NavButton from './NavButton.svelte';
  //   import Navigation from './Navigation.svelte';
  let { links } = $props();
  //   let { defaultModal = false, links } = $props();
</script>

<div
  class="bg-bravegrumpy-accent1a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-logoPurple dark:text-bravegrumpy-accent1a"
  id="container"
>
  <div id="top">
    <div id="topnav">
      <TopNavigation {links} reversed={true} fontSize="1.6rem" ) />
    </div>
    <div id="logo">
      <Logo />
    </div>
  </div>
  <div class="w-full bg-bravegrumpy-logoPurple dark:bg-bravegrumpy-accent2a" id="bottomBar">
    <BottomNavigation {links} />
  </div>
  <PageTitle {links} />
  <div id="darkmode">
    <NavDrawer {links} />

    <!-- <DarkMode
      class="{buttonSize} border-[2px] border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a"
    >
      <Icon icon="game-icons:sun" slot="lightIcon" width={iconSize} height={iconSize} />
      <Icon icon="game-icons:night-sleep" slot="darkIcon" width={iconSize} height={iconSize} />
    </DarkMode> -->
  </div>
</div>

<!-- <Icon
  icon="hugeicons:menu-square"
  width={iconSize}
  height={iconSize}
  class="text-bravegrumpy-logoPurple dark:text-bravegrumpy-logoGreen"
/> -->

<style>
  #darkmode {
    display: none;
  }
  #container {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-start;
    gap: 0rem;
    height: fit-content;
    width: 100%;
  }
  #topnav {
    /* border: 2px solid lime; */
    height: 3.75rem;
  }
  #logo {
    /* border: 2px solid wheat; */
    /* background-color: var(--affair-500); */
    width: fit-content;
    position: absolute;
    top: -1.9rem;
  }

  #top {
    height: 14rem;
  }

  #bottomBar {
    margin-top: -3rem;
    height: 5rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    #darkmode {
      display: block;
      width: fit-content;
    }
    #logo {
      display: none;
    }
    #container {
      width: 100%;
      position: static;
      top: 0%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    #bottomBar {
      display: none;
      height: 0px;
      width: 0px;
    }
    #top {
      height: 0px;
      display: none;
      position: static;
      top: 0%;
      width: 100%;
      background-color: yellow;
    }
    #topnav {
      display: none;
      height: 0px;
    }
  }
</style>
