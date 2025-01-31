<script>
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Footnotes from './Footnotes.svelte';
  import Main from '$lib/components/Main.svelte';

  import BaseLayout from '$lib/components/BaseLayout.svelte';

  const { children } = $props();

  let defaultClass = $state(
    'w-[150px] border-[5px] border-solid border-current rounded-[5px] text-xl font-navMenuDefault p-2 bg-bravegrumpy-accent2b dark:bg-bravegrumpy-dark1'
  );
  let activeClasses = $state(
    'font-navMenuActive text-bravegrumpy-logoPurple dark:text-bravegrumpy-highlight1 bg-bravegrumpy-accent2a dark:bg-bravegrumpy-brand6'
  );
  let inactiveClasses = $state('text-bravegrumpy-dark1 dark:text-bravegrumpy-accent2b');
  let customContentClass = $state('rounded-[5px]');
  let TabsDefaultClass = $state(
    'flex flex-row gap-4 p-5 col-start-1 col-end-4 flex-wrap bg-bravegrumpy-accent2a rounded-[5px] border-2 border-solid border-bravegrumpy-black dark:border-bravegrumpy-accent2b dark:bg-bravegrumpy-black'
  );
</script>

<Article --articleColumn="2/3">
  <p>something</p>
</Article>

<Article --articleColumn="2/3" --articleRow="2/4">
  <Section>
    <Footnotes />
  </Section>
</Article>
