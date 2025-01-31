<script>
  import Section from './Section.svelte';

  const {
    src,
    alt,
    caption = '',
    imageClass = 'image border-solid border-2 border-current text-bravegrumpy-logoPurple bg-solarized-base-3 dark:bg-solarized-base-1',
    captionClass = 'font-serif text-2xl text-bravegrumpy-black'
  } = $props();
</script>

<div class={imageClass}>
  <img {src} {alt} />
  <p aria-label="caption" class={captionClass}>{caption}</p>
</div>

<style>
  img {
    border: 2px solid var(--imageBorder-color, var(--bravegrumpy-black));
  }
  .image {
    display: flex;
    flex-direction: column;
    border-radius: var(--borderRadius);
    margin: 0px var(--imageXMargin, auto);
    padding: calc(var(--imgPadding, 10px) * 1) calc(var(--imgPadding, 10px) * 1)
      calc(var(--imgPadding, 10px) * var(--bottomThumb, 10)) calc(var(--imgPadding, 10px) * 1);
  }
</style>
