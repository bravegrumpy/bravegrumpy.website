<script lang="ts">
  import { type Snippet } from 'svelte';
  import Section from '$lib/components/Section.svelte';

  interface Props {
    children: Snippet;
  }
  const { children }: Props = $props();
</script>

<Section>
  <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
    {@render children()}
  </h2>
</Section>
