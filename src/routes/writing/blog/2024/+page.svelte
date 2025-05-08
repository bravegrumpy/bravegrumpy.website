<script>
  import December from '../2024_12.svx';

  import Icon from '@iconify/svelte';

  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

  let breadcrumbClass = $state(
    'bg-solarized-base-2 dark:bg-nevada-950  dark:text-chateau-green-600 border-2 border-solid border-current text-flush-orange-800  w-fit px-2 rounded-[5px] py-2'
  );

  let bredcrumbItemClass = $state(
    'bg-solarized-base-2 border-2 border-solid border-current text-flush-orange-800 rounded-[5px] px-10 py-2 text-flush-orange-800 dark:text-chateau-green-500 hover:scale-105 hover:hue-rotate-60'
  );

  let breadcrumbItemContentClass = $state(
    'font-navMenuDefault text-x
  );
</script>

<Breadcrumb class={breadcrumbClass}>
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
</Breadcrumb>

<div
  class="-ml-5 flex w-full flex-row content-center justify-center rounded-[5px] rounded-l-none border-[5px] border-l-0 border-solid border-current bg-solarized-base-2 text-solarized-yellow dark:bg-edward-950 dark:text-solarized-base-1"
>
  <h2 class="font-heading text-4xl">December</h2>
</div>

<December />
