<script>
  import Section from '$lib/components/Section.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import Article from '$lib/components/Article.svelte';
  import AttichaosArchibald from '../../wbw/(character_profiles)/AttichaosArchibald.svelte';
  import NavButton from '$lib/components/NavButton.svelte';

  import { page } from '$app/stores';

  let currSlug = $state($page.url.pathname);
</script>

<Article --articleColumn="2/3">
  <Section>
    <div style:display="flex" style:flex-direction="row">
      <NavButton
        className="px-5"
        --fontSize="1rem"
        href="/writing/huetopia/character-profiles"
        text="Character profiles home"
        --buttonWidth="fit-content"
        slug={currSlug}
      />
      <NavButton
        className="px-5"
        --fontSize="1rem"
        href="/writing/huetopia/character-profiles/attichaos-archibald"
        text="Attichas Archibald"
        --buttonWidth="fit-content"
        slug={currSlug}
      />
      <NavButton
        className="px-5"
        --fontSize="1rem"
        href="/writing/huetopia/character-profiles/skylar-seacrest"
        text="Skylar Seacrest"
        --buttonWidth="fit-content"
        slug={currSlug}
      />
    </div>
  </Section>
  <Section>
    <AttichaosArchibald />
  </Section>
</Article>
<Article --articleColumn="3/4">
  <Aside --asideHeight="fit-content">
    <h2>Character Role</h2>
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
  <Aside --asideHeight="fit-content">
    <h2>Within Book One</h2>
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
</Article>
