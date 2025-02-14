<script>
  import { Tabs, TabItem } from 'flowbite-svelte';

  import Section from '$lib/components/Section.svelte';

  let defaultClass = $state(
    'text-2xl font-navMenuDefault border-[5px] border-solid border-current border-l-0 px-4 py-1 w-[300px] rounded-[5px] -ml-5 rounded-l-none mr-5'
  );

  let activeClasses =
    'font-navMenuActive bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-highlight1';

  let inactiveClasses =
    'font-navMenuDefault bg-bravegrumpy-accent2b text-bravegrumpy-dark1 dark:bg-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b';

  let colStarts = ['col-start-1', 'col-start-2', 'col-start-3'];
  let colEnds = ['col-end-2', 'col-end-3', 'col-end-4'];
  let rowStarts = ['row-start-1', 'row-start-2'];

  let colStart = $state(colStarts[0]);
  let colEnd = $state(colEnds[0]);
  let rowStart = $state(rowStarts[0]);

  //   let TabsContentClass = $derived(`rounded-lg ${colStart} ${colEnd} ${rowStart} overflow-hidden`);

  //   let PreviousTabsContentClass =
  //     'bg-solarized-base-3 text-daintree-602 rounded-lg dark:bg-solarized-base-03 dark:text-daintree-302';

  let TabsDefaultClass = 'flex flex-col gap-4 mt-[15px]';

  //   let PreviousTabsDefaultClass = 'flex flex-col flex-wrap gap-2';
</script>

<Tabs
  contentClass="rounded-lg {colStart} {colEnd} {rowStart} overflow-hidden"
  defaultClass={TabsDefaultClass}
>
  <TabItem open title="Start" {defaultClass} {activeClasses} {inactiveClasses}>
    <Section>
      <h2>Changing width and height:</h2>
      <h3>Column Start</h3>
      <select bind:value={colStart}>
        {#each colStarts as cs}
          <option>{cs}</option>
        {/each}
      </select>
      <h3>Column End</h3>
      <select bind:value={colEnd}>
        {#each colEnds as ce}
          <option>{ce}</option>
        {/each}
      </select>
      <h3>Row start</h3>
      <select bind:value={rowStart}>
        {#each rowStarts as rs}
          <option>{rs}</option>
        {/each}
      </select>
    </Section>
  </TabItem>
</Tabs>
