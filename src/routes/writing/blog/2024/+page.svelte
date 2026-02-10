<script>
  import Month from "$lib/components/Blog/Month.svelte";
  import December from '../2024_12.svx';

  import Icon from '@iconify/svelte';

  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

  let breadcrumbClass = $state(
    'bg-solarized-base-2 dark:bg-nevada-950  dark:text-chateau-green-600 border-2 border-solid border-current text-flush-orange-800  w-fit px-2 rounded-[5px] py-2'
  );

  let bredcrumbItemClass = $state(
    'bg-solarized-base-2 border-2 border-solid border-current text-flush-orange-800 rounded-[5px] px-10 py-2 text-flush-orange-800 dark:text-chateau-green-500 hover:scale-105 hover:hue-rotate-60'
  );

  let breadcrumbItemContentClass = $state('font-navMenuDefault text-xl');
</script>

<!-- <Breadcrumb class={breadcrumbClass}>
  <BreadcrumbItem href="/writing/blog">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:notebook" width="24" height="24" />
    </svelte:fragment>
    <p class={breadcrumbItemContentClass}>Blog</p>
  </BreadcrumbItem>
  <BreadcrumbItem href="/writing/blog/2024">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:arrow-right-01" width="24" height="24" />
    </svelte:fragment>
    <p class={breadcrumbItemContentClass}>2024</p>
  </BreadcrumbItem>
</Breadcrumb> -->

<Month Month="December" />
<December />
