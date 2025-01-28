<script>
  const { children } = $props();
</script>

<aside class="aside">
  {@render children()}
</aside>

<style>
  .aside {
    grid-column: var(--asideColumn, 3/3);
    grid-row: var(--asideRow, 1 / 1);
    background-color: var(--bravegrumpy-accent2b);
    color: var(--bravegrumpy-dark1);
    border-radius: var(--borderRadius);
    border: 2px solid;
    padding: var(--asidePadding, 10px);
    height: var(--asideHeight, 200px);
    margin: 15px;

    font-size: var(--fontSize, 1rem);

    font-family: Recursive;
    font-variation-settings:
      'MONO' var(--mono, 0.6),
      'CASL' var(--casl, 1),
      'wght' var(--wght, 355),
      'CRSV' var(--crsv, 0.5),
      'slnt' var(--slnt, -14);
  }

  /* :global(h2) {
    font-family: var(--font-family-heading);
    font-variation-settings: var(--font-family-heading-variations);
  } */

  :global(.dark) .aside {
    background-color: var(--bravegrumpy-dark1);
    color: var(--bravegrumpy-accent2b);
  }
</style>
