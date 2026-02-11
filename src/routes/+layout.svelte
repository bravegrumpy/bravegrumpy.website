<script>
  import '../app.css';
  // import '$lib/styles/globals.css';
  import links from '$lib/utils/data';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Main from '$lib/components/Main.svelte';
  import { PUBLIC_CONVEX_URL } from '$env/static/public';
  import { setupConvex } from 'convex-svelte';

  const { children } = $props();

  setupConvex(PUBLIC_CONVEX_URL);

  import { useQuery } from 'convex-svelte';
  import { api } from "$lib/../convex/_generated/api"

  const query = $derived(useQuery(api.navigation.get))
</script>

<svelte:head>
  <title>Home | Bravegrumpy</title>
  <script src="https://cdn.jsdelivr.net/gh/ncase/nutshell/nutshell.js"></script>
  <script>
    Nutshell.setOptions({
      dontEmbedHeadings: true
    });
  </script>
</svelte:head>

<div
  class="w-full bg-solarized-base-2 text-solarized-base-00 dark:bg-solarized-base-02 dark:text-solarized-base-0"
>
  <div
    class="body xl:7/12 mx-auto w-full bg-solarized-base-3 dark:bg-solarized-base-03 md:w-10/12 lg:w-9/12"
  >
    <!-- <Header {links} /> -->
    {#if query}
      {#if query.isLoading}
      <!-- <Heading>Loading...</Heading> -->
       <Header {links} />
      {:else if query.error}
      <!-- <Heading>{query.error.name}</Heading> -->
        <!-- <Alert color="orange">  
        <h3>failed to load:</h3>
        <p>{query.error.toString()}</p>

        <h3>reason:</h3>
        <p>{query.error.cause}</p>
        <h4>message:</h4>
        <p>{query.error.message}</p>
        <h4>stack: </h4>
        <p>{query.error.stack}</p>
        </Alert> -->
      <Header {links} />
      {:else}
        <Header links={query.data} />
      {/if}
    {/if}
    <Main>
      {@render children()}
    </Main>
    <Footer />
  </div>
</div>

<style>
  /* @media screen and (max-width: 1000px) {
    .w-5\/6 {
      width: 100%;
    }
  }
  @media screen and (max-width: 1560px) {
    .w-5\/6 {
      width: 100%;
    }
  } */
</style>
