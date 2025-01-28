<script>
  import SideNav from '$lib/components/SideNav.svelte';
  import { page } from '$app/stores';
  import Aside from '$lib/components/Aside.svelte';

  import Logline from '$lib/components/Writing/Logline.svx';
  import DramaticQuestion from '$lib/components/Writing/DramaticQuestion.svx';

  const currSlug = $derived($page.url.pathname);

  const { children } = $props();
</script>

<svelte:head>
  <title>Fantasy | Bravegrumpy</title>
</svelte:head>

<SideNav references={$page.data.writing} slug={currSlug} />

{@render children()}

<div style:grid-column="3/4" style:display="flex" style:flex-direction="column" style:gap="15px">
  <Aside --asideHeight="fit-content">
    <Logline />
  </Aside>
  <Aside --asideHeight="fit-content">
    <DramaticQuestion />
  </Aside>
</div>
