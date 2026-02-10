<script>
  import SideNav from '$lib/components/SideNav.svelte';
  import { page } from '$app/state';
  import Aside from '$lib/components/Aside.svelte';

  import Logline from '$lib/components/Writing/Logline.svx';
  import DramaticQuestion from '$lib/components/Writing/DramaticQuestion.svx';
  import Article from '$lib/components/Article.svelte';

  const currSlug = $derived(page.url.pathname);

  import { Breadcrumb } from "flowbite-svelte"
  import { breadcrumbClass, bci } from "$lib/components/Blog/BlogBreadcrumbs.svelte"

  const { data, children } = $props();
</script>

<svelte:head>
  <title>Fantasy | Bravegrumpy</title>
</svelte:head>

<SideNav references={page.data.writing} slug={page.data.relevantSlug} />

{@render children()}