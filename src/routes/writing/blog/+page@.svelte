<script>
  import January from './2025_01.svx';
  import December from './2024_12.svx';

  import { Breadcrumb } from 'flowbite-svelte';

  import Icon from '@iconify/svelte';

  import BaseContent from '$lib/components/BaseContent.svelte';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import NavButton from '$lib/components/NavButton.svelte';

  import BC from "$lib/components/Blog/BlogBreadcrumbs.svelte"
  import { bci, breadcrumbClass } from "$lib/components/Blog/BlogBreadcrumbs.svelte";
</script>

<Article --articleColumn="1/4" --articleRow="1/2">
  <Breadcrumb class={breadcrumbClass}>
    {@render bci("/", "Home", "", "hugeicons:home-07")}
    {@render bci("/writing", "Writing", "hugeicons:books-01", "")}
    {@render bci("/writing/blog", "Blog", "hugeicons:notebook", "")}
  </Breadcrumb>
</Article>

<Article --articleColumn="2/3" --articleRow="2/3">
  <Section>
    <h3 class="font-heading text-xl text-bravegrumpy-brand6 dark:text-bravegrumpy-accent2b">
      Choose a year
    </h3>
    <nav class="flex flex-row gap-5">
      <!-- <NavButton href="/writing/blog/2024" slug="/writing/blog" text="2024" /> -->
      <NavButton href="/writing/blog/2025" slug="/writing/blog" text="2025" />
      <NavButton href="/writing/blog/2026" slug="/writing/blog" text="2026" />
    </nav>
  </Section>
</Article>
