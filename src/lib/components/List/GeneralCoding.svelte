<script>
  import LOL, { entry } from './ListOfLinks.svelte';
  import Entry from "$lib/components/List/ListEntry.svelte";
  import Section from '$lib/components/Section.svelte';
  import Heading from "$lib/components/List/ListHeadingInteractive.svelte"

  import { Checkbox } from 'flowbite-svelte';

  import { cardStyle, divLink } from '$lib/stores';

</script>

<Heading>General Coding</Heading>
<Section --sectionColumn="2/2">
  <LOL section="Git" title="General Knowledge">
    {@render entry("https://stackoverflow.com/questions/4372435/how-can-i-rollback-a-git-repository-to-a-specific-commit", "Rolling Back Git Commits", [], $cardStyle, $divLink)}
  </LOL>
  <LOL title="Graphite">
    {@render entry("https://stacking.dev/", "Stacked PR Overview", [], $cardStyle, $divLink)}
    {@render entry("https://stacking.dev/", "Tool that works on top of git called Graphite", [], $cardStyle, $divLink)}
  </LOL>
</Section>
