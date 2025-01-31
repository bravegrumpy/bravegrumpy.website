<script>
  import LOL from './ListOfLinks.svelte';
  import RF from './RadiantFluxTable.svelte';
  import ILL from './IlluminanceTable.svelte';

  import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<LOL id="lighting" section="Lighting" text={someContext}>
  <li></li>
</LOL>

<LOL id="lightingOnline" title="Online Lighting Resources">
  <li>
    <a
      href="https://docs.blender.org/manual/en/latest/render/lights/light_object.html#common-settings"
      target="_blank">Blender Light Objects</a
    >
  </li>
  <li>
    <a href="https://en.wikipedia.org/wiki/Lumen_(unit)" target="_blank"
      >Wikipedia Common Energy and Lumens Table</a
    >
  </li>
  <li>
    <a href="https://en.wikipedia.org/wiki/Radiant_flux" target="_blank">Wikipedia Radiant Flux</a>
  </li>
</LOL>
<LOL title="Common Real Life Lighting Values"><p></p></LOL>

<Tabs
  tabStyle="none"
  divider={true}
  defaultClass="flex flex-row gap-2 mx-2"
  activeClasses="w-fit h-[40px] px-8 rounded-t-lg bg-solarized-base-2 border-2 border-b-0 border-solid border-current text-solarized-yellow text-base dark:bg-solarized-base-02 dark:text-edward-400"
  inactiveClasses="w-fit h-[40px] px-8 rounded-t-lg bg-solarized-base-2 border-2 border-b-0 border-solid border-current text-solarized-dark1 text-base dark:bg-edward-950 dark:text-solarized-base-0"
  contentClass="rounded-[5px] bg-solarized-yellow -mt-[25px] text-solarized-base03 dark:bg-solarized-base-0 dark:text-affair-100"
>
  <TabItem open>
    <h2 slot="title">Finite Light Sources</h2>
    <LOL id="finiteLight" heading="Finite Light Sources" text={finiteLightingTable}><p></p></LOL>
  </TabItem>
  <TabItem>
    <h2 slot="title">Infinte Light Sources</h2>
    <LOL id="infiniteLight" heading="Infinite Light Sources" text={infiniteLightingTable}
      ><p></p></LOL
    >
  </TabItem>
</Tabs>

{#snippet someContext()}
  <p>
    Lighting in Blender is measured in Watts, but this is not light-bulb energy, but radiant flux, a
    measure of brightness. Below is a table of realistic values.
  </p>
  <br />
  <p>
    For artificial light sources, divide the lumen rating by the luminous efficacy to get the
    appropriate value.
  </p>
  <br />
  <p>For outdoor conditions, directly use the Radiant flux value given.</p>
{/snippet}

{#snippet finiteLightingTable()}
  <RF />
{/snippet}

{#snippet infiniteLightingTable()}
  <ILL />
{/snippet}
