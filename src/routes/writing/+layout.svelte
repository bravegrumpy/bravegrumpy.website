<script>
  import BaseLayout from '$lib/components/BaseLayout.svelte';

  import { page } from '$app/stores';
  let { children } = $props();
</script>

<svelte:head>
  <title>{$page.data.page.text} | Bravegrumpy</title>
</svelte:head>

{@render children()}
