<script>
  const {
    lightText = `text-bravegrumpy-black`,
    lightBackground = `bg-bravegrumpy-accent2a`,
    lightColors = `${lightText} ${lightBackground}`,
    darkText = `dark:text-bravegrumpy-accent2a`,
    darkBackground = 'dark:bg-bravegrumpy-black',
    darkColors = `${darkText} ${darkBackground}`,
    colors = `${lightColors} ${darkColors}`,
    sectionClass = `font-bodyText`,
    section = true,
    className = `${sectionClass} ${colors} ${section ? 'section' : ''}`,
    children
  } = $props();
</script>

<section class={className}>
  {@render children()}
</section>

<style>
  .section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-column: var(--sectionColumn, ' 2 / 2');
    grid-row: var(--sectionRow, ' 1 / 1');
    border: 2px solid currentColor;
    border-radius: var(--borderRadius);
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 25px;
    margin: 15px var(--XMargin, 0px);
  }
</style>
