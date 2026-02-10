<script>
  import '$lib/styles/globals.css';
  import { SvelteDate } from 'svelte/reactivity';

  const currentYear = $derived(new SvelteDate().getFullYear());
</script>

<footer>
  <div class="copyright">
    <p>
      Copyright &copy; {currentYear}
    </p>
    <p>
      <img
        src="https://cdn.bravegrumpy.com/static/assets/images/BraveGrumpyRectangle_color_typed.png"
        alt="BraveGrumpy Logo"
      />
    </p>
    <p>BraveGrumpy &trade;</p>
  </div>
  <div class="contact-me">
    <p>
      <a href="https://discord.gg/ZfMntbk5U4" target="_blank">
        <img
          height="30px"
          alt="Join the Discord Serverin fun font."
          src="https://fontmeme.com/permalink/221211/d065f759532815397d12a82c27e8988c.png"
        />
      </a>
    </p>
  </div>
  <div class="email">
    <p>
      <a href="mailto:info@bravegrumpy.com" target="_blank" aria-label="Email Me"
        ><img
          height="30em"
          src="https://fontmeme.com/permalink/231031/0c070e833e2d90b5effc2581b747e400.png"
          alt="Email me"
        /></a
      >
    </p>
  </div>
</footer>

<style>
  :host {
    --footerWidth: 80%;
  }
  footer {
    height: 100px;
    background-color: var(--bravegrumpy-accent1b);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: var(--bravegrumpy-logoPurple);
    /* position: fixed;
    bottom: 0; */
    width: var(--footerWidth, 100%);
    /* left: calc((100% - var(--footerWidth, 80%)) / 2); */
  }
  .copyright {
    grid-column: 1 / 1;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    color: var(--bravegrumpy-logoPurple);
  }
  .copyright img {
    height: 30px;
  }
  .contact-me {
    grid-column: 2 / 2;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    color: var(--bravegrumpy-logoPurple);
  }
  .email {
    grid-column: 3 / 3;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  .email img {
    height: 30px;
  }
</style>
