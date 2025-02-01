<script>
  import January from './2025_01.svx';
  import December from './2024_12.svx';

  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

  import BaseContent from '$lib/components/BaseContent.svelte';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import NavButton from '$lib/components/NavButton.svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/writing/blog">Blog Home</BreadcrumbItem>
</Breadcrumb>

<Article --articleColumn="2/3">
  <Section>
    <nav class="flex flex-row gap-5">
      <NavButton href="/writing/blog/2024" slug="/writing/blog" text="2024" />
      <NavButton href="/writing/blog/2025" slug="/writing/blog" text="2025" />
    </nav>
  </Section>
</Article>
