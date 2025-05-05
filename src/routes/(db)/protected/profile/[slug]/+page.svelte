<script>
  import { page } from '$app/stores';

  const pages = $derived($page.data.pages);
</script>

<p>Hello World</p>

<p>{$page.url.pathname}</p>
<div>
  <h2>Index</h2>
  {#each pages as page (page.id)}
    {#if page.subnav}
      {#each page.subnav as sub (sub.id)}
        <p>{sub.id}: {sub.href}</p>
      {/each}
    {:else}
      <p>{page.id}: {page.href}</p>
    {/if}
  {/each}
</div>
