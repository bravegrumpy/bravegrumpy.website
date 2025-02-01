<script>
  import Section from '$lib/components/Section.svelte';
  import Main from '$lib/components/Main.svelte';

  import AttichaosArchibald from './(character_profiles)/AttichaosArchibald.svelte';
  import SkylarSeacrest from './(character_profiles)/SkylarSeacrest.svelte';
  import LyteaQuartano from './(character_profiles)/LyteaQuartano.svelte';

  import ChapterOne from './(chapter_outlines)/ChapterOne.svelte';

  import Footnotes from './Footnotes.svelte';

  const sectionClass = $state('font-bodyText min-w-full **:list-disc **:list-inside');
</script>

<Section {sectionClass}>
  <h3>Character Profiles</h3>
  <ul>
    <li>Attichaos Archibald -- the main antagonist.</li>
    <li>Skylar Seacrest -- the unreliable narrator</li>
  </ul>
</Section>

<Section {sectionClass}>
  <AttichaosArchibald />
</Section>

<Section {sectionClass}>
  <SkylarSeacrest />
</Section>

<Section {sectionClass}>
  <LyteaQuartano />
</Section>

<Section {sectionClass}>
  <ChapterOne />
</Section>
