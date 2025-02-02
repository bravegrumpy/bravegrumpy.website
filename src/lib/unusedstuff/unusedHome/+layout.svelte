<script>
  //   import { page } from '$app/stores';

  //   const currPath = $derived($page.url.pathname);
  //   const currSlug = $derived('/' + $page.url.pathname.split('/')[1]);
  //   const currContent = $derived('/' + currPath.split('/').slice(-1));
  //   const mainPage = $derived('/' + currPath.split('/').slice(0)[1]);

  //   let isActive = $derived((slug, slug2 = '') => mainPage + slug + slug2);

  let { children } = $props();
</script>

{@render children()}
