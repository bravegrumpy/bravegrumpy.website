<script>
  import BaseLayout from '$lib/components/BaseLayout.svelte';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import BC from "$lib/components/Blog/BlogBreadcrumbs.svelte"

  import { page } from '$app/state';
  let { children } = $props();

  const year = $derived(String(page.url).split("/").slice(-1));
</script>

<svelte:head>
  <title>Blog | Bravegrumpy</title>
</svelte:head>

<Section 
  --sectionColumn="1/4" 
  --sectionRow="1/2"
  --borderColor="transparent"
  sectionClass="font-bodyText h-fit"
  lightBackground="bg-transparent"
  darkBackground="dark:bg-transparent"
>
  <BC  {year} />
</Section>

<BaseLayout colStart={2} colEnd={4} rowStart={2} sectionClass="mt-[15px]">
  {@render children()}
</BaseLayout>
