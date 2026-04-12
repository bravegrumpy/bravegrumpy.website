<script>
  const { children } = $props();
</script>

<main>
  {@render children()}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 15px;
    margin: 20px;
  }

  @media screen and (max-width: 1000px) {
    main {
      grid-template-columns: 1fr 5fr 1fr;
      /* grid-template-rows: 1fr 2fr 1fr; */
    }
  }

  @media screen and (max-width: 800px) {
    main {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 600px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }
</style>
