<script>
  const { href = '#', text = 'This is the bookmark', active = false } = $props();
</script>

<a data-active={active} {href}>{text}</a>

<style>
  a {
    padding: 5px;
    border-radius: 0px var(--borderRadius) var(--borderRadius) 0px;
    border: 5px solid;
    border-left: 0px none;
    font-size: 1.5rem;
    font-family: 'Recursive';
    font-variation-settings:
      'MONO' 0,
      'CASL' 1,
      'wght' 600,
      'CRSV' 1,
      'slnt' -8;
  }
  [data-active='false'] {
    background-color: var(--bravegrumpy-accent2b);
    color: var(--bravegrumpy-dark1);
  }
  [data-active='true'] {
    background-color: var(--bravegrumpy-accent2a);
    color: var(--bravegrumpy-logoPurple);
    font-variation-settings:
      'MONO' 0.5,
      'CASL' 1,
      'wght' 900,
      'CRSV' 0.5,
      'slnt' 0;
  }
  :global(.dark) [data-active='false'] {
    background-color: var(--bravegrumpy-dark1);
    color: var(--bravegrumpy-accent2b);
  }
  :global(.dark) [data-active='true'] {
    background-color: var(--bravegrumpy-brand6);
    color: var(--bravegrumpy-highlight1);
  }
</style>
