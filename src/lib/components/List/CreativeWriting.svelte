<script>
  import Section from '$lib/components/Section.svelte';
  import LOL from './ListOfLinks.svelte';

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

<Section --sectionColumn="2/2" --sectionRow="1/1">
  <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
    Creative Writing and Worldbuilding
  </h2>
</Section>

<Section --sectionColumn="2/2" --sectionRow="2/2">
  <LOL section="Map Generators &amp; Generative World Building applications">
    <li class="used">
      <a href="https://watabou.itch.io/medieval-fantasy-city-generator"> Fantasy City generator </a>
    </li>
    <li class="used">
      <a href="https://azgaar.github.io/Fantasy-Map-Generator/">Fantasy World map generator</a>
    </li>
    <li class="used">
      <a href="https://donjon.bin.sh/fantasy/calendar/">Fantasy Calendar</a>
      <LOL heading="Recreate Huetopia calendar">
        <p>{JSON.stringify(HuetopiaCalendar)}</p>
      </LOL>
    </li>
    <li>
      <a href="https://watabou.github.io/index.html">Large generator collection</a>
      <LOL heading="Mansion">
        <li>
          <a
            href="https://watabou.github.io/mansion/?seed=1283126&w=10&h=11&doors=003013&omheight=2&plan=FFFFFEF3FF8F3CF0E30F0830C002"
            >Example Mansion</a
          >
        </li>
      </LOL>
    </li>
    <li><a href="https://donjon.bin.sh/">Fantasy everything generator</a></li>
    <li>
      <a href="https://blog.reedsy.com/fantasy-map-generators/">
        Reedsy list of generators I including ones I haven't used
      </a>
    </li>
    <li>
      <a href="https://www.inklestudios.com/ink/" target="_blank">Interactive Fiction Markup Language, ink</a>
    </li>
  </LOL>
</Section>
