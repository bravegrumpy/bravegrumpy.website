<script>
  import January from './2025_01.svx';
  import December from './2024_12.svx';

  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

  import Icon from '@iconify/svelte';

  import BaseContent from '$lib/components/BaseContent.svelte';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import NavButton from '$lib/components/NavButton.svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem
    href="/writing/blog"
    class="rounded-[5px] border-2 border-solid border-current bg-solarized-base-2 px-10 py-4 text-flush-orange-800 dark:bg-affair-950 dark:text-chateau-green-600"
  >
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:notebook" width="24" height="24" />
    </svelte:fragment>
    <p
      class="font-navMenuDefault text-xl text-flush-orange-800 hover:scale-105 hover:hue-rotate-60 dark:text-chateau-green-500"
    >
      Blog
    </p>
  </BreadcrumbItem>
</Breadcrumb>

<Article --articleColumn="2/3">
  <Section>
    <nav class="flex flex-row gap-5">
      <NavButton href="/writing/blog/2024" slug="/writing/blog" text="2024" />
      <NavButton href="/writing/blog/2025" slug="/writing/blog" text="2025" />
    </nav>
  </Section>
</Article>
