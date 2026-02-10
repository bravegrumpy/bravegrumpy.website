<script>
  import Heading from '$lib/components/Heading.svelte';
  import IOR from './ListsOfIORValues.svelte';
  import RS from './RealisticScaleResources.svelte';
  import Lighting from './Lighting.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Heading>Blender Physical Based Reality Resources</Heading>
<Section --sectionColumn="2/2" --sectionRow="2/2">
  <IOR />
</Section>
<Section --sectionColumn="2/2" --sectionRow="3/3">
  <RS />
</Section>
<Section --sectionColumn="1/4" --sectionRow="4/4">
  <Lighting />
</Section>
