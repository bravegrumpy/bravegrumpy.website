<script>
  import BaseLayout from '$lib/components/BaseLayout.svelte';

  let { children } = $props();
</script>

<BaseLayout>
  {@render children()}
</BaseLayout>
