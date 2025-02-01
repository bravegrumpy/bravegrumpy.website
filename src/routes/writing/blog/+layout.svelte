<script>
  import BaseLayout from '$lib/components/BaseLayout.svelte';

  import { page } from '$app/stores';
  let { children } = $props();
</script>

<svelte:head>
  <title> Blog | Bravegrumpy</title>
</svelte:head>

<BaseLayout colStart={2} colEnd={4} rowStart={1} sectionClass="mt-[15px]">
  {@render children()}
</BaseLayout>
