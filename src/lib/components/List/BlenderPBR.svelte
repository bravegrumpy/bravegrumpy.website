<script>
  import IOR from './ListsOfIORValues.svelte';
  import RS from './RealisticScaleResources.svelte';
  import Lighting from './Lighting.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Section --sectionColumn="2/2" --sectionRow="1/1">
  <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
    Blender Physical Based Reality Resources
  </h2>
</Section>
<Section --sectionColumn="2/2" --sectionRow="2/2">
  <IOR />
</Section>
<Section --sectionColumn="2/2" --sectionRow="3/3">
  <RS />
</Section>
<Section --sectionColumn="1/4" --sectionRow="4/4">
  <Lighting />
</Section>
