<script>
  const { articleClass = '', className = `${articleClass} centerDiv`, children } = $props();
</script>

<div class={className}>
  {@render children()}
</div>

<style>
  .centerDiv {
    grid-column: var(--articleColumn, 2/3);
    grid-row: var(--articleRow, 1/2);
    display: flex;
    flex-direction: column;
    gap: var(--mainGap, 0px);
  }
</style>
