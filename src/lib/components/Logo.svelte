<script>
  import '$lib/styles/globals.css';
</script>

<div id="container">
  <img
    src="https://cdn.bravegrumpy.com/static/assets/images/BG_logo.png"
    alt=""
    width="80px"
    height="80px"
  />
  <div id="container-text">
    <p id="logo" class="text-bravegrumpy-logoPurple dark:text-bravegrumpy-accent1a">BraveGrumpy</p>
    <p id="logoSubtitle" class="text-bravegrumpy-logoPurple dark:text-bravegrumpy-accent1a">
      Welcome to my chaotic castle of curious creations. I hope find some cool stuff.
    </p>
  </div>
</div>

<style>
  img {
    border-radius: 5px;
  }
  #container {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    justify-content: start;
    align-items: center;
    margin-left: 1rem;
  }
  #container-text {
    display: flex;
    flex-direction: column;
    gap: -0.5rem;
  }
  #logo {
    font-family: var(--font-family-logo);
    font-size: 6rem;
    margin-bottom: -1.8rem;
  }
  #logoSubtitle {
    font-family: var(--font-family-logo-subtitle);
    font-size: 1.2rem;
    width: 24rem;
    margin-left: 4rem;
  }
</style>
