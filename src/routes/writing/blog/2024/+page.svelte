<script>
  import December from '../2024_12.svx';

  import Icon from '@iconify/svelte';

  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/writing/blog">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:arrow-right-double" width="24" height="24" />
    </svelte:fragment>
    Blog Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/writing/blog/2024">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:arrow-right-double" width="24" height="24" />
    </svelte:fragment>
    2024
  </BreadcrumbItem>
</Breadcrumb>

<div
  class="-ml-5 flex w-full flex-row content-center justify-center rounded-[5px] rounded-l-none border-[5px] border-l-0 border-solid border-current bg-solarized-base-2 text-solarized-yellow dark:bg-edward-950 dark:text-solarized-base-1"
>
  <h2 class="font-heading text-4xl">December</h2>
</div>

<December />
