<script>
  import LOL, { entry } from './ListOfLinks.svelte';
  import Entry from "$lib/components/List/ListEntry.svelte";
  import Section from '$lib/components/Section.svelte';

  import { Checkbox } from 'flowbite-svelte';

  let cardStyle = $state(false);
  let divLink = $state(false);
  let showStyleOption = $state(false);
</script>

<Section --sectionColumn="2/2">
  <div class="flex flex-row justify-between items-center w-full">
    <h2 class="font-heading text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a text-3xl">General Coding</h2>
    {#if showStyleOption}
      <div class="flex flex-row justify-between gap-5 font-pageSubtitle text-lg">
        <span>Styled List: <Checkbox color="purple" bind:checked={cardStyle} inline /></span>
        {#if cardStyle}
          <span>Div as Link: <Checkbox color="green" bind:checked={divLink} inline /></span>
        {/if}
      </div>
    {/if}
  </div>
</Section>
<Section --sectionColumn="2/2">
  <LOL section="Git" title="General Knowledge">
    {@render entry("https://stackoverflow.com/questions/4372435/how-can-i-rollback-a-git-repository-to-a-specific-commit", "Rolling Back Git Commits", [], cardStyle, divLink)}
  </LOL>
  <LOL title="Graphite">
    {@render entry("https://stacking.dev/", "Stacked PR Overview", [], cardStyle, divLink)}
    {@render entry("https://stacking.dev/", "Tool that works on top of git called Graphite", [], cardStyle, divLink)}
  </LOL>
</Section>
