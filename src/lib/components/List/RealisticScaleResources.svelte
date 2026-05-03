<script>
  import LOL, { entry } from './ListOfLinks.svelte';
  import { cardStyle, divLink } from '$lib/stores';
</script>

<LOL id="rs" section="Realistic Scale Resources" title="Greenhouse">
  {@render entry("https://designingidea.com/greenhouse-sizes/", "DesigningIdea -- Greenhouses", [], $cardStyle, $divLink)}
</LOL>
<LOL title="Scientific Glassware">
  {@render entry("./", "Beaker Dimensions", [], $cardStyle, $divLink, undefined, undefined, true, false)}
  {@render entry("./", "Erlenmyer Flask dimensions", [], $cardStyle, $divLink, undefined, undefined, true, false)}

  <!--
  <li>
    <a href="./">Beaker Dimensions</a>
  </li>
  <li>
    <a href="./">Erlenmyer Flask dimensions</a>
  </li>
  -->
</LOL>
