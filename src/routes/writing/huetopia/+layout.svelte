<script>
  import SideNav from '$lib/components/SideNav.svelte';
  import { page } from '$app/stores';

  const currSlug = $derived($page.url.pathname);

  const { data, children } = $props();

  import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
  <title>Fantasy | Bravegrumpy</title>
</svelte:head>

<SideNav references={$page.data.writing} slug={currSlug} />

{@render children()}
