<script>
  import { page } from '$app/stores';
  import Article from '$lib/components/Article.svelte';

  import BaseLayout from '$lib/components/BaseLayout.svelte';
  import BaseContent from '$lib/components/BaseContent.svelte';
</script>

<BaseLayout>
  <BaseContent open title="Writing/Fantasy">
    <Article --articleColumn="1/4">
      <p>Welcome to {$page.url.pathname}</p>
      <p>This is a route under writing</p>
      <p>{JSON.stringify($page.data.subnav)}</p>
    </Article>
  </BaseContent>
  <BaseContent title="Writing Data Blob">
    <Article>
      <p>{JSON.stringify($page.data)}</p>
    </Article>
  </BaseContent>
</BaseLayout>
