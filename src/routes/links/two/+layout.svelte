<script>
  import { Tabs } from 'flowbite-svelte';
  import Aside from '$lib/components/Aside.svelte';

  //   let defaultClass = $state(
  //     'text-2xl font-navMenuDefault border-[5px] border-solid border-current border-l-0 px-4 py-1 w-[300px] rounded-[5px] -ml-5 rounded-l-none mr-5'
  //   );

  //   let activeClasses =
  //     'font-navMenuActive bg-bravegrumpy-accent2a text-text-bravegrumpy-logoPurple dark:bg-bg-bravegrumpy-brand6 dark:text-bravegrumpy-highlight1';

  //   let inactiveClasses =
  //     'font-navMenuDefault bg-bravegrumpy-accent2b text-bravegrumpy-dark1 dark:bg-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b';

  let colStart = $state(2);
  let colEnd = $state(3);
  let rowStart = $state(1);

  let TabsContentClass = $derived(
    `rounded-lg col-start-${colStart} col-end-${colEnd} row-start-${rowStart}`
  );

  let TabsDefaultClass = 'flex flex-col gap-4 mt-[15px]';

  const { children } = $props();
</script>

<Aside --asideHeight="fit-content">
  <h2>Changing layout below</h2>
  <div>
    <label>
      <h3>Columm Start:</h3>
      <input
        type="number"
        bind:value={colStart}
        min="1"
        max={Math.min(3, Math.max(colStart, colEnd))}
      />
      <input
        type="range"
        bind:value={colStart}
        min={1}
        max={Math.min(3, Math.max(colStart, colEnd))}
      />
    </label>
    <label>
      <h3>Column End:</h3>
      <input type="number" bind:value={colEnd} min={Math.max(2, Math.min(colStart, colEnd))} />
      <input
        type="range"
        bind:value={colEnd}
        min={Math.max(2, Math.min(colStart, colEnd))}
        max={4}
      />
    </label>
    <label>
      <h3>Row start</h3>
      <input type="number" bind:value={rowStart} min={1} max={4} />
      <input type="range" bind:value={rowStart} min={1} max={4} />
    </label>
  </div>
</Aside>
<Tabs defaultClass={TabsDefaultClass} contentClass={TabsContentClass}>
  {@render children()}
</Tabs>
