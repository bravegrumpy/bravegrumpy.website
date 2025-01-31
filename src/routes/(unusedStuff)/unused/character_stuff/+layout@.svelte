<script>
  import AttichaosArchibald from '../../../writing/huetopia/wbw/(character_profiles)/AttichaosArchibald.svelte';
  import SkylarSeacrest from '../../../writing/huetopia/wbw/(character_profiles)/SkylarSeacrest.svelte';
  import BaseContent from '$lib/components/BaseContent.svelte';
  import BaseLayout from '$lib/components/BaseLayout.svelte';
  import Section from '$lib/components/Section.svelte';
  import Article from '$lib/components/Article.svelte';
  import SideNav from '$lib/components/SideNav.svelte';
  import Main from '$lib/components/Main.svelte';

  import Aside from '$lib/components/Aside.svelte';

  import { page } from '$app/stores';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import Heading from '$lib/components/Heading.svelte';

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

  const currSlug = $state($page.url.pathname);

  const { children } = $props();
</script>

<p>This is asdfkks</p>
