<script>
  import Article from '$lib/components/Article.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';

  import Main from '$lib/components/Main.svelte';

  import BaseLayout from '$lib/components/BaseLayout.svelte';
  import BaseContent from '$lib/components/BaseContent.svelte';

  import Intro from './intro.svx';
  import Week1 from './week1.svx';
  import Week2 from './Week2.svelte';
  import Week3 from './Week3.svelte';

  import Footnotes from './Footnotes.svelte';

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

  import { Breadcrumb } from "flowbite-svelte"
  import { bci, breadcrumbClass } from "$lib/components/Blog/BlogBreadcrumbs.svelte";
</script>

<Article --articleColumn="2/3">
  <Breadcrumb class={breadcrumbClass}>
    {@render bci("/", "Home", "hugeicons:home-07")}
    {@render bci("/writing", "Writing", "hugeicons:books-01", "")}
    {@render bci("/writing/huetopia", "Fantasy", "game-icons:broadsword", "")}
    {@render bci("/writing/huetopia/wbw", "WBW", "hugeicons:pencil-edit-02", "")}
  </Breadcrumb>
  <Main>
    <BaseLayout {TabsDefaultClass} colStart="1" colEnd="4" rowStart="2" {customContentClass}>
      <BaseContent
        open
        title="Intro"
        {defaultClass}
        {activeClasses}
        {inactiveClasses}
        h2=""
        h3=""
        h4=""
        h5=""
        h6=""
      >
        <Section>
          <h2 class="text-3xl">Coursera Work By Week</h2>
        </Section>
        <Section>
          <Intro />
        </Section>
      </BaseContent>
      <BaseContent
        title="Week 1"
        {defaultClass}
        {activeClasses}
        {inactiveClasses}
        h2=""
        h3=""
        h4=""
        h5=""
        h6=""
      >
        <Heading>Week 1</Heading>
        <Section>
          <Week1 />
        </Section>
      </BaseContent>
      <BaseContent
        title="Week 2"
        {defaultClass}
        {activeClasses}
        {inactiveClasses}
        h2="Week 2"
        h3=""
        h4=""
        h5=""
        h6=""
      >
        <Week2 />
      </BaseContent>
      <BaseContent
        title="Week 3"
        {defaultClass}
        {activeClasses}
        {inactiveClasses}
        h2="Week 3"
        h3=""
        h4=""
        h5=""
        h6=""
      >
        <Week3 />
      </BaseContent>
    </BaseLayout>
  </Main>
</Article>
