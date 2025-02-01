<script>
  import BaseLayout from '$lib/components/BaseLayout.svelte';

  import { page } from '$app/stores';
  let { children } = $props();
</script>

<svelte:head>
  <title>{$page.data.page.text} | Bravegrumpy</title>
</svelte:head>

<BaseLayout colStart={2} colEnd={4} rowStart={1}>
  {@render children()}
</BaseLayout>
