<script>
  import January from '../2025_01.svx';
  import February from '../2025_02.svx';
  import March from '../2025_03.svx';

  import Icon from '@iconify/svelte';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

  let breadcrumbClass = $state(
    'bg-solarized-base-2 border-2 border-solid border-current text-flush-orange-800  w-fit px-2 rounded-[5px] py-2 dark:bg-affair-950 dark:text-chateau-green-600'
  );

  let breadcrumbItemContentClass = $state(
    'font-navMenuDefault text-xl text-flush-orange-800 hover:hue-rotate-60 hover:scale-105 dark:text-chateau-green-500'
  );
</script>

<Breadcrumb class={breadcrumbClass}>
  <BreadcrumbItem href="/writing/blog">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:notebook" width="24" height="24" />
    </svelte:fragment>
    <p class={breadcrumbItemContentClass}>Blog</p>
  </BreadcrumbItem>
  <BreadcrumbItem href="/writing/blog/2025">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:arrow-right-01" width="24" height="24" />
    </svelte:fragment>
    <p class={breadcrumbItemContentClass}>2025</p>
  </BreadcrumbItem>
</Breadcrumb>

<div
  class=" -ml-5 flex w-full flex-row content-center justify-center rounded-[5px] rounded-l-none border-[5px] border-l-0 border-solid border-current bg-solarized-base-2 text-solarized-yellow dark:bg-edward-950 dark:text-solarized-base-1"
>
  <h2 class="font-heading text-4xl">March</h2>
</div>
<March />

<div
  class=" -ml-5 flex w-full flex-row content-center justify-center rounded-[5px] rounded-l-none border-[5px] border-l-0 border-solid border-current bg-solarized-base-2 text-solarized-yellow dark:bg-edward-950 dark:text-solarized-base-1"
>
  <h2 class="font-heading text-4xl">February</h2>
</div>
<February />

<div
  class=" -ml-5 flex w-full flex-row content-center justify-center rounded-[5px] rounded-l-none border-[5px] border-l-0 border-solid border-current bg-solarized-base-2 text-solarized-yellow dark:bg-edward-950 dark:text-solarized-base-1"
>
  <h2 class="font-heading text-4xl">January</h2>
</div>
<January />
