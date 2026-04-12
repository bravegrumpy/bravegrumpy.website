<script>
  import Navigation from './Navigation.svelte';
  import links from '$lib/utils/data.js';
  import { page } from '$app/stores';

  const slug = $derived(
    '/' + $page.url.pathname.split('/')[1] + '/' + $page.url.pathname.split('/')[2]
  );

  const mainPage = $derived('/' + $page.url.pathname.split('/')[1]);
  const { fontSize = '1.5rem', reversed = false } = $props();

  const currentLink = $derived(links.find((link) => link.href === mainPage));
  const hasSubnav = $derived(currentLink?.subnav);
</script>

<nav>
  {#if hasSubnav}
    <Navigation links={currentLink.subnav} {reversed} {slug} {fontSize} buttonWidth="200px" />
  {/if}
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-start;
  }
</style>
