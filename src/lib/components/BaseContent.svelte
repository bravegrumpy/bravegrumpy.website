<script>
  import { TabItem } from 'flowbite-svelte';

  import Section from '$lib/components/Section.svelte';

  // let defaultClass = $state(
  //   'text-2xl font-navMenuDefault border-[5px] border-solid border-current border-l-0 px-4 py-1 w-[300px] rounded-[5px] -ml-5 rounded-l-none mr-5'
  // );

  // let activeClasses = $state(
  //   'font-navMenuActive bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-highlight1');

  // let inactiveClasses = $state(
  //   'font-navMenuDefault bg-bravegrumpy-accent2b text-bravegrumpy-dark1 dark:bg-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b');

  // let colStart = $state(2);
  // let colEnd = $state(3);
  // let rowStart = $state(1);

  const {
    h2 = '',
    h3 = '',
    h4 = '',
    h5 = '',
    h6 = '',
    open = false,
    title = 'title',
    defaultClass = 'text-2xl border-[5px] border-solid border-current border-l-0 px-4 py-1 w-full rounded-[5px] rounded-l-none -ml-[20px] mr-5',
    activeClasses = 'font-navMenuActive bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-highlight1',
    inactiveClasses = 'font-navMenuDefault bg-bravegrumpy-accent2b text-bravegrumpy-dark1 dark:bg-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b',
    children
  } = $props();
</script>

<TabItem {open} {title} {defaultClass} {activeClasses} {inactiveClasses}>
  {#if h2 !== ''}
    <Section>
      <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
        {h2}
      </h2>
    </Section>
  {/if}
  {#if h3 !== ''}
    <h3 class="font-text-2xl font-heading">{h3}</h3>
  {/if}
  {#if h4 !== ''}
    <h4 class="fontHeading my-4 text-xl">{h4}</h4>
  {/if}
  {#if h5 !== ''}
    <h4 class="fontHeading my-4 text-lg">{h4}</h4>
  {/if}
  {#if h6 !== ''}
    <h4 class="fontHeading my-4 text-base">{h4}</h4>
  {/if}
  {@render children()}
</TabItem>
