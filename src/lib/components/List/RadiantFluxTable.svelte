<script>
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';

  let radiantFlux = $state([
    { id: 'rf01', lst: 'Incandescent Bulb', le: '10-17' },
    { id: 'rf02', lst: 'Halogen Bulb', le: '16-24' },
    { id: 'rf03', lst: 'Compact Fluorescent Lamp (CFL)', le: '45-75' },
    { id: 'rf04', lst: 'LED Bulb', le: '80-100+' },
    { id: 'rf05', lst: 'Metal Halide Lamp', le: '65-115' },
    { id: 'rf06', lst: 'High-Pressure Sodium Lamp', le: '70-100' },
    { id: 'rf07', lst: 'Low-Pressure Sodium Lamp', le: '100-200' },
    { id: 'rf08', lst: 'Tungsten Photographic/Film Light', le: '15-22' },
    { id: 'rf09', lst: 'HMI (Hydrargyrum Medium-arc Iodide) Photo Light', le: '85-108' },
    { id: 'rf10', lst: 'LED Photographic/Film Light', le: '80-100' }
  ]);
</script>

<Table
  hoverable={true}
  striped={true}
  items={radiantFlux}
  color="custom"
  divClass="bg-parchment-300 dark:bg-solarized-base-01"
  shadow
  placeholder="search by light source type"
  filter={(item, searchTerm) => item.lst.toLowerCase().includes(searchTerm.toLowerCase())}
>
  <caption class="mb-5 font-heading text-xl">Common Lighting Radiant Flux Luminous Efficacy</caption
  >

  <TableHead
    defaultRow={false}
    class="border-2 border-solid border-solarized-yellow  bg-solarized-yellow text-center font-heading dark:border-solarized-base-0 dark:bg-solarized-base-0 "
  >
    <tr>
      <TableHeadCell sort={(a, b) => a.lst.localeCompare(b.lst)}>Light Source Type</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.le.localeCompare(b.le)}
        >Luminous Efficacy (lm/W)</TableHeadCell
      >
    </tr>
  </TableHead>

  <TableBody tableBodyClass="divide-y">
    <TableBodyRow
      slot="row"
      class="odd:bg-solarized-base-3 even:bg-solarized-base-2 odd:dark:bg-solarized-base-03 even:dark:bg-solarized-base-02"
      let:item
    >
      <TableBodyCell
        class="border-2 border-solid border-solarized-yellow text-bravegrumpy-black dark:border-solarized-base-0"
        >{item.lst}</TableBodyCell
      >
      <TableBodyCell
        class=" border-2 border-solid border-solarized-yellow text-bravegrumpy-black dark:border-solarized-base-0"
        >{item.le}</TableBodyCell
      >
    </TableBodyRow>
  </TableBody>
</Table>
