<script>
  import '$lib/styles/globals.css';
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';

  const {
    text = 'This website is perpetually under construction 😎',
    constructionHeight = 'fit-content'
  } = $props();
</script>

<Section className="">
  <div class="construction">
    <p
      style:margin="auto 25px"
      class="fontBodyText px-4 text-3xl text-bravegrumpy-white"
      style:text-align="center"
      style:text-shadow="5px solid pink"
      style:height={constructionHeight}
    >
      {text}
    </p>
  </div>
</Section>

<style>
  .construction {
    /* height: 5rem; */
    margin-top: 15px;
    width: var(--constructionWidth, 100%);
    padding: 10px;

    /* Stripped  Background*/
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent var(--smallWidth, 74px),
      var(--bravegrumpy-black) var(--smallWidth, 74px),
      var(--bravegrumpy-black) var(--largeWidth, 148px)
    );
    background-color: var(--solarized-yellow);

    border-radius: var(--borderRadius);
    box-shadow:
      0px 10px 30px 10px #0000002f,
      0px 2px 10px 0px #ffddb580 inset,
      0px 8px 10px 0px #03010380 inset,
      0px 20px 10px #ffddbb80 inset,
      0px -0px 10px #03010380 inset,
      0px -10px 10px #ffddb580 inset;

    border: 2px solid currentColor;
    color: var(--bravegrumpy-black);
  }

  :global(.dark) .construction {
    color: var(--bravegrumpy-white);
  }
</style>
