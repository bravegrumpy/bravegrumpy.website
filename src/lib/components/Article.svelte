<script lang="ts">
  import type { Snippet } from "svelte";
  interface Props {
    articleClass?: string;
    className?: string;
    children?: Snippet;
  }
  const { articleClass = '', className = `${articleClass} centerDiv`, children }: Props = $props();
</script>

<div class={className} role="article">
  {@render children?.()}
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
