<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';

  let Illuminance = $state([
    { id: 'rf11', lstType: 'light', lst: 'Sunny Day', rf: '~1000 W/m²', ill: '100,000-130,000' },
    { id: 'rf12', lstType: 'light', lst: 'Cloudy Day', rf: '~100-500 W/m²', ill: '1,000-5,000' },
    {
      id: 'rf13',
      lstType: 'light',
      lst: 'Full Moon Night',
      rf: '~0.0001-0.0003 W/m²',
      ill: '0.1-0.3'
    },
    {
      id: 'rf15',
      lstType: 'dark',
      lst: 'Clear Sky, No Light Pollution',
      rf: '~0.00002 W/m²',
      ill: '0.002-0.003'
    },
    {
      id: 'rf16',
      lstType: 'dark',
      lst: 'Clear Sky, High Light Pollution',
      rf: '~0.00001 W/m²',
      ill: '0.001-0.002'
    },
    {
      id: 'rf17',
      lstType: 'dark',
      lst: 'Cloudy Sky, No Light Pollution',
      rf: '~0.000005 W/m²',
      ill: '0.0005-0.001'
    },
    {
      id: 'rf18',
      lstType: 'dark',
      lst: 'Cloudy Sky, High Light Pollution',
      rf: '~0.000002 W/m²',
      ill: '0.0002-0.0005'
    }
  ]);

  const cellClass = $state(
    'text-black border-2 border-solid border-solarized-yellow dark:border-solarized-base-0'
  );
</script>

<Table
  shadow
  hoverable={true}
  striped={true}
  items={Illuminance}
  color="custom"
  divClass="bg-parchment-300 dark:bg-solarized-base-01"
  placeholder="search by outdoor conditions"
  filter={(item, searchTerm) => item.lst.toLowerCase().includes(searchTerm.toLowerCase())}
>
  <caption class="mb-5 font-heading text-xl"
    >Common Outdoor lighting conditions: Radiant Flux & Illuminance
  </caption>
  <TableHead
    defaultRow={false}
    class="border-2 border-solid border-solarized-yellow bg-solarized-yellow text-center font-heading dark:border-solarized-base-0 dark:bg-solarized-base-0"
  >
    <tr>
      <TableHeadCell sort={(a, b) => a.lstType.localeCompare(b.lstType)}>Lighting</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.lst.localeCompare(b.lst)}>Outdoor Conditions</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.rf.localeCompare(b.rf)}>Radiant Flux (W/m²)</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.ill.localeCompare(b.ill)}>Illuminance (lux)</TableHeadCell>
    </tr>
  </TableHead>
  <TableBody tableBodyClass="divide-y">
    <TableBodyRow
      slot="row"
      let:item
      class="odd:bg-solarized-base-3 even:bg-solarized-base-2 odd:dark:bg-solarized-base-03 even:dark:bg-solarized-base-02"
      ><TableBodyCell class={cellClass}>{item.lstType}</TableBodyCell>
      <TableBodyCell class={cellClass}>{item.lst}</TableBodyCell>
      <TableBodyCell class={cellClass}>{item.rf}</TableBodyCell>
      <TableBodyCell class={cellClass}>{item.ill}</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
