<script>
    import Month from "$lib/components/Blog/Month.svelte"
    import January from "./2026_01.svx"

    import Icon from "@iconify/svelte"
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
    
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
  <BreadcrumbItem href="/writing/blog/2026">
    <svelte:fragment slot="icon">
      <Icon icon="hugeicons:arrow-right-01" width="24" height="24" />
    </svelte:fragment>
    <p class={breadcrumbItemContentClass}>2026</p>
  </BreadcrumbItem>
</Breadcrumb>

<Month Month="January" />
<January />