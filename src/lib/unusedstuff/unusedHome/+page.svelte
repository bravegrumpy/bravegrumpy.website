<script>
  import { page } from '$app/stores';

  import Article from '$lib/components/Article.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import BaseLayout from '$lib/components/BaseLayout.svelte';
  import BaseContent from '$lib/components/BaseContent.svelte';

  let { data } = $props();
</script>

<BaseLayout>
  <BaseContent>
    <div class="col-start-1 col-end-1">
      <p>LOLz</p>
    </div>
  </BaseContent>
  <BaseContent>
    <Article --articleRow="1/1" --articleColumn="2/2">
      <h2>This is the start of writing</h2>
      <p>This is the writing page</p>
      <p>Current path: {$page.url.pathname}</p>
    </Article>
  </BaseContent>

  <BaseContent>
    <Article --articleColumn="2 / 2">
      <p>I'm intersted in finding out about the data here.</p>
      <p>Writing Page Data:</p>
    </Article>
  </BaseContent>
</BaseLayout>
<Aside --asideHeight="fit-content">
  {data.page.aside}
</Aside>
