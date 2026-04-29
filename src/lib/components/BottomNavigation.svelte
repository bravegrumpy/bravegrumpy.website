<script lang="ts">
  import Navigation from './Navigation.svelte';
  import  { links as lnks } from '$lib/utils/data.js';
  import { page } from '$app/state';

  import type { Link } from "$lib/../convex/navigation"

  let slug = $derived(
    '/' + page.url.pathname.split('/')[1] + '/' + page.url.pathname.split('/')[2]
  );

  interface Props {
    links: Array<Link>;
    fontSize?: string;
    reversed?: boolean;
  }

  let mainPage = $derived('/' + page.url.pathname.split('/')[1]);
  let {links=lnks, fontSize = '1.5rem', reversed = false }:Props = $props();

  let currentLink = $derived(links.find((link) => link.href === mainPage));
  let hasSubnav = $derived(currentLink?.subnav);
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
