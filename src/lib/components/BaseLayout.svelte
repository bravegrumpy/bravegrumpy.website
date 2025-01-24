<script>
  import { Tabs } from 'flowbite-svelte';

  //   let colStart = $state(2);
  //   let colEnd = $state(3);
  //   let rowStart = $state(1);

  const {
    colStart = 2,
    colEnd = 3,
    rowStart = 1,
    rowEnd = 2,
    TabsDefaultClass = 'flex flex-col gap-4 mt-[15px]',
    children
  } = $props();

  let TabsContentClass = $derived(
    `rounded-lg col-start-${colStart} col-end-${colEnd} row-start-${rowStart} row-end-${rowEnd}`
  );

  //   let TabsDefaultClass = 'flex flex-col gap-4 mt-[15px]';
</script>

<Tabs defaultClass={TabsDefaultClass} contentClass={TabsContentClass}>
  {@render children()}
</Tabs>
