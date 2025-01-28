<script>
  import '../app.css';
  import '$lib/styles/globals.css';
  import links from '$lib/utils/data';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Main from '$lib/components/Main.svelte';

  const { children } = $props();
</script>

<svelte:head>
  <title>Home | Bravegrumpy</title>
</svelte:head>

<div
  class="w-full bg-solarized-base-2 text-solarized-base-00 dark:bg-solarized-base-02 dark:text-solarized-base-0"
>
  <div class="body mx-auto w-4/5 bg-solarized-base-3 dark:bg-solarized-base-03">
    <Header {links} />
    <Main>
      {@render children()}
    </Main>
    <Footer />
  </div>
</div>
