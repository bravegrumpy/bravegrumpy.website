<script>
  import SideNav from '$lib/components/SideNav.svelte';
  import { page } from '$app/stores';
  import Aside from '$lib/components/Aside.svelte';

  import Logline from '$lib/components/Writing/Logline.svx';
  import DramaticQuestion from '$lib/components/Writing/DramaticQuestion.svx';
  import Article from '$lib/components/Article.svelte';

  const currSlug = $derived($page.url.pathname);

  const { children } = $props();
</script>

<svelte:head>
  <title>Fantasy | Bravegrumpy</title>
</svelte:head>

<SideNav references={$page.data.writing} slug={currSlug} />

{@render children()}

<Article --articleColumn="3/4">
  <Aside --asideHeight="fit-content" --asidePadding="25px">
    <Logline />
  </Aside>
  <Aside --asideHeight="fit-content" --asidePadding="25px">
    <DramaticQuestion />
  </Aside>
</Article>
