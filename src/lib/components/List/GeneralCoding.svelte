<script>
  import LOL from './ListOfLinks.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Section --sectionColumn="2/2">
  <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
    General Coding
  </h2>
</Section>
<Section --sectionColumn="2/2">
  <LOL section="Git" title="Graphite">
    <li>
      <a href="https://stacking.dev/" target="_blank">Stacked PR Overview</a>
    </li>
    <li>
      <a href="https://stacking.dev/" target="_blank">
        Tool that works on top of git called Graphite
      </a>
    </li>
  </LOL>
</Section>
