<script>
  import January from '../2025_01.svx';
  import February from '../2025_02.svx';
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb>
  <BreadcrumbItem href="/writing/blog">Blog</BreadcrumbItem>
  <BreadcrumbItem href="/writing/blog/2025">2025</BreadcrumbItem>
</Breadcrumb>

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
