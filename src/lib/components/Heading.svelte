<script lang="ts">
  import { type Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import Section from '$lib/components/Section.svelte';
  type SectionElement = SvelteHTMLElements["section"]

  interface Props extends SectionElement{
    children: Snippet;
    headingClass?: string;
  }
  const { 
    children,
    headingClass="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a",
    ...props 
  }: Props = $props();
</script>

<Section {...props}>
  <h2 class={headingClass}>
    {@render children()}
  </h2>
</Section>
