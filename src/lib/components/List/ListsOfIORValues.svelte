<script>
  import LOL, { entry } from '$lib/components/List/ListOfLinks.svelte';

  import { cardStyle, divLink } from '$lib/stores';

</script>

<LOL id="ior" section="Procedural Material Development" title="Lists of IOR values">
  {@render entry("https://pixelandpoly.com/ior.html", "Pixel and Poly", [], $cardStyle, $divLink)}
  {@render entry("https://forums.cgsociety.org/t/a-complete-ior-list/1070401", "CGTalk", [], $cardStyle, $divLink)}
  {@render entry("https://en.wikipedia.org/wiki/List_of_refractive_indices", "Wikipedia", [], $cardStyle, $divLink)}
  {@render entry("http://blendersauce.com/ior-list/", "Blendersauce", [], $cardStyle, $divLink)}
  {@render entry("https://refractiveindex.info/", "RefractiveIndex.INFO", [], $cardStyle, $divLink)}
  {@render entry("http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html", "Georgia State University", [], $cardStyle, $divLink)}
</LOL>
