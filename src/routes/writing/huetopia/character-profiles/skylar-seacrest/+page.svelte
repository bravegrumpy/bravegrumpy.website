<script>
  import Section from '$lib/components/Section.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import Heading from '$lib/components/Heading.svelte';

  import NavButton from '$lib/components/NavButton.svelte';

  import { page } from '$app/stores';

  const currSlug = $state($page.url.pathname);

  import SkylarSeacrest from '../../wbw/(character_profiles)/SkylarSeacrest.svelte';
  import Article from '$lib/components/Article.svelte';

  import { Breadcrumb } from "flowbite-svelte";
  import { breadcrumbClass, bci } from "$lib/components/Blog/BlogBreadcrumbs.svelte";
</script>

<Article --articleColumn="2/3">
  <Breadcrumb class={breadcrumbClass}>
    {@render bci("/writing", "Writing", "hugeicons:books-01", "")}
    {@render bci("/writing/huetopia", "Fantasy", "game-icons:broadsword", "")}
    {@render bci("/writing/huetopia/character-profiles", "Characters", "game-icons:3d-meeple", "")}
    {@render bci("/writing/huetopia/character-profiles/skylar-seacrest", "Skylar", "", "")}
  </Breadcrumb>
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
    <SkylarSeacrest />
  </Section>
</Article>

<Article --articleColumn="3/4">
  <Aside --asideHeight="fit-content" --asidePadding="15px" className="hidden">
    <h2>Character Role</h2>
    <p class="construction">This page is under construction</p>
  </Aside>
  <Aside --asideHeight="fit-content" --asidePadding="15px" className="hidden">
    <h2>Within Book One</h2>
    <p class="construction">This page is under construction</p>
  </Aside>
  <Aside --asideHeight="fit-content" --asidePadding="15px">
    <h2 class="mb-5 text-xl">Termbank</h2>
    <div id="Curl">
      <h3>Curl</h3>
      <p>The ancient religion practiced in Sikland, near the <a href="./">Angular Lakes</a></p>
    </div>
  </Aside>
</Article>
