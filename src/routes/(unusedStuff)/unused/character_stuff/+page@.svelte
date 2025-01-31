<script>
  import AttichaosArchibald from '../wbw/(character_profiles)/AttichaosArchibald.svelte';
  import SkylarSeacrest from '../wbw/(character_profiles)/SkylarSeacrest.svelte';
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
</script>

<SideNav
  references={[
    { id: '2-0-0', href: '/writing/huetopia/wbw', text: 'Coursera Work by Week' },
    { id: '2-0-1', href: '/writing/huetopia/character-profiles', text: 'Character profiles' },
    { id: '2-0-2', href: '/writing/huetopia/content', text: 'Read Now' }
  ]}
  slug={currSlug}
/>

<Article --articleColumn="2/3">
  <Section>
    <AttichaosArchibald />
  </Section>
</Article>

<div>
  <Aside --asideHeight="fit-content" --asidePadding="25px">
    <h2 class="mb-5 text-xl">Character Role</h2>
    <p>
      Attichaos Archibald takes the role of the mentor, kicking the <a href="./">protagonist</a> into
      going on an adventure.
    </p>
    <p>
      He will follow the trope <a href="https://youtu.be/XXi8_1Pka1Y?t=271" target="_blank"
        >"Secretly Evil Mentor"</a
      >, as he is actually really supportive, but is ulitmatiely working for the
      <a href="./">TriVerment</a>
      while the protagonists of this story are going to end up working in tandem with the
      <a href="./">Ancient Artists' Temple</a>
    </p>
  </Aside>
  <Aside --asideHeight="fit-content" --asidePadding="25px">
    <h2 class="mb-5 text-xl">Within Book One</h2>
    <p>
      Witin the first book, the characters may almost see him as a classic mentor, but with better
      things to do.
    </p>
    <p>
      He won't be in the story, solving the problems becasue this a thesis assignment, so he won't
      be very helpful. It's not like he is going on the trip with us.
    </p>
    <p>I hope to have a book 2, that will focus in on his hero's journey.</p>
    <p>While he is an <em>antagonist</em>, he isn't truly a villian, even if he looks like one.</p>
  </Aside>
</div>
