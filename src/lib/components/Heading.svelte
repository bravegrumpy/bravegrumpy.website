<script>
  import Section from './Section.svelte';
  const { children } = $props();
</script>

<Section>
  <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
    {@render children()}
  </h2>
</Section>
