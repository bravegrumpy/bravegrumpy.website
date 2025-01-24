<script>
  import '$lib/styles/globals.css';
  import Navigation from './Navigation.svelte';
  import { DarkMode } from 'flowbite-svelte';
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';

  const slug = $derived('/' + $page.url.pathname.split('/')[1]);

  let { links, fontSize = '2rem' } = $props();

  const iconSize = '25';
  const buttonSize = `size-[${iconSize * 2}px]`;
</script>

<nav>
  <Navigation {links} {slug} {fontSize} reversed navigationWidth="60%" justifyContent="flex-end" />
  <DarkMode
    class="{buttonSize} rounded-[5px] border-[2px] border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a"
  >
    <Icon icon="game-icons:sun" slot="lightIcon" height={iconSize} width={iconSize} />
    <Icon icon="game-icons:night-sleep" slot="darkIcon" height={iconSize} width={iconSize} />
  </DarkMode>
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
  }
</style>
