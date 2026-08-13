<script>
  import '$lib/styles/globals.css';
  import Navigation from './Navigation.svelte';
  import Settings  from "$lib/components/Settings.svelte"
  import Btn from "$lib/components/IconButtonBase.svelte"
  import { DarkMode } from 'flowbite-svelte';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';

  import { settingsMode } from '$lib/stores';

  const slug = $derived('/' + $page.url.pathname.split('/')[1]);

  let { links, fontSize = '2rem', reversed=true } = $props();

  const iconSize = 25;
  const buttonSize = `size-[${iconSize * 2}px]`;
</script>

<nav>
  <Navigation
    {links}
    {slug}
    {fontSize}
    {reversed}
    navigationWidth="55%"
    justifyContent="flex-end"
    buttonWidth="144px"
    gap="0.8rem"
    marginLeft="0px"
  />
  {#if $settingsMode === "dropdown"}
    <Settings mode="dropdown" icon="hugeicons:arrow-down-double" class="mt-2" />
  {:else if $settingsMode === "buttons"}
    <Settings mode="buttons" class="mt-2" />
  {:else}
    <Settings mode="group" class="mt-2" />
  {/if}
  <!-- <Settings mode="buttons" icon="hugeicons:arrow-down-double" class="mt-2"/> -->
  <!-- <Settings mode="group" icon="hugeicons:arrow-down-double" class="mt-2" /> -->
  <!-- <Settings mode="dropdown" icon="hugeicons:arrow-down-double" class="mt-2 bg-solarized-yellow"/> -->
  <!-- TODO: #339 Turn `DarkMode` and `Settings` into a dropdown menu -->
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-end;
    margin-right: 1rem;
    margin-top: 1rem;
    align-items: center;
    width: 100%;
    padding-right: 15px;
  }
</style>
