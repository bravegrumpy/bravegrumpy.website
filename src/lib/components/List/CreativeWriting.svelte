<script>
  import Section from '$lib/components/Section.svelte';
  import Heading from "$lib/components/List/ListHeadingInteractive.svelte"
  import LOL, { entry } from './ListOfLinks.svelte';

  import { cardStyle, divLink } from '$lib/stores';

  const HuetopiaCalendar = $state({
    year_len: 330,
    events: 1,
    n_months: 10,
    months: [],
    month_len: {
      '0': 33,
      '1': 33,
      '2': 33,
      '3': 33,
      '4': 33,
      '5': 33,
      '6': 33,
      '7': 33,
      '8': 33,
      '9': 33
    },
    week_len: 9,
    weekdays: ['Work', 'Work', 'Work', 'Rest', 'Rest', 'Rest', 'Work', 'Work', 'Work'],
    n_moons: 1,
    moons: [],
    lunar_cyc: { '0': 36 },
    lunar_shf: { '0': 0 },
    year: 789,
    first_day: 0,
    notes: {}
  });
</script>

<Heading>Creative Writing and Worldbuilding</Heading>

<Section --sectionColumn="2/2" --sectionRow="2/2">
  <LOL section="Map Generators &amp; Generative World Building applications">
  {@render entry("https://watabou.itch.io/medieval-fantasy-city-generator", "Fantasy City generator", [], $cardStyle, $divLink, undefined, undefined, false, true, "used")}
  {@render entry("https://azgaar.github.io/Fantasy-Map-Generator/", "Fantasy World map generator", [], $cardStyle, $divLink, undefined, undefined, false, true, "used")}
  {@render entry("https://donjon.bin.sh/fantasy/calendar/", "Fantasy Calendar", [], $cardStyle, $divLink, fantasyCalendar, undefined, false, true, "used")}
  {@render entry("https://watabou.github.io/index.html", "Large generator collection", [], $cardStyle, $divLink, generatedMansion)}
  {@render entry("https://donjon.bin.sh/", "Fantasy everything generator", [], $cardStyle, $divLink)}
  {@render entry("https://blog.reedsy.com/fantasy-map-generators/", "Reedsy list of generators I including ones I haven't used", [], $cardStyle, $divLink)}
  {@render entry("https://www.inklestudios.com/ink/", "Interactive Fiction Markup Language, ink", [], $cardStyle, $divLink)}
  </LOL>
</Section>

{#snippet fantasyCalendar()}
  <LOL heading="Recreate Huetopia calendar">
    <p class="-ml-16">{JSON.stringify(HuetopiaCalendar)}</p>
  </LOL>
{/snippet}

{#snippet generatedMansion()}
<LOL heading="Mansion">
  {@render entry("https://watabou.github.io/mansion/?seed=1283126&w=10&h=11&doors=003013&omheight=2&plan=FFFFFEF3FF8F3CF0E30F0830C002", "Example Mansion", [], $cardStyle, $divLink)}
  <li>
    <a
    href="https://watabou.github.io/mansion/?seed=1283126&w=10&h=11&doors=003013&omheight=2&plan=FFFFFEF3FF8F3CF0E30F0830C002"
    >Example Mansion</a>
  </li>
</LOL>
{/snippet}