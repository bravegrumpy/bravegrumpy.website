<script>
  import Section from '$lib/components/Section.svelte';
  import Article from '$lib/components/Article.svelte';

  import Logline from '$lib/components/Writing/Logline.svx';
  import DramaticQuestion from '$lib/components/Writing/DramaticQuestion.svx';

  import Heading from '$lib/components/Heading.svelte';

  import NavButton from '$lib/components/NavButton.svelte';
  import Aside from '$lib/components/Aside.svelte';

  import { page } from '$app/stores';

  let currSlug = $page.url.pathname;
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

  <Heading>Character Profiles</Heading>
  <Section>
    <h3>Attichaos Archibald</h3>
    <div class="subsection">
      <h4>Character Role</h4>
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
    </div>
    <div class="subsection">
      <h4>Within Book One</h4>
      <p>
        Witin the first book, the characters may almost see him as a classic mentor, but with better
        things to do.
      </p>
      <p>
        He won't be in the story, solving the problems becasue this a thesis assignment, so he won't
        be very helpful. It's not like he is going on the trip with us.
      </p>
      <p>I hope to have a book 2, that will focus in on his hero's journey.</p>
      <p>
        While he is an <em>antagonist</em>, he isn't truly a villian, even if he looks like one.
      </p>
    </div>
  </Section>
</Article>

<Article --articleColumn="3/4">
  <Aside>
    <Logline />
  </Aside>
  <Aside>
    <DramaticQuestion />
  </Aside>
</Article>
