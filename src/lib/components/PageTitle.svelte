<script>
  import '$lib/styles/globals.css';
  import { page } from '$app/stores';
  import { getCurrentPageData } from '$lib/utils/navigation';
  //   const { pageTitle = 'Page Title', pageSubtitle = 'Page Subtitle' } = $props();

  const { links } = $props();

  const currentPage = $derived(getCurrentPageData($page.url.pathname, links));
  const pageTitle = $derived(currentPage?.pageTitle ?? 'Page Title');
  const pageSubtitle = $derived(currentPage?.pageSubtitle ?? 'Page Subtitle');
</script>

<div
  class="bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple shadow-xl dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a"
>
  <h2 class="font-pageTitle">{pageTitle}</h2>
  <p class="font-pageSubtitle">{pageSubtitle}</p>
</div>

<style>
  div {
    width: 40rem;
    height: 8rem;
    border: 2px solid;
    border-radius: 5px;
    position: absolute;
    top: 40%;
    left: 50%;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: -1rem;
    box-shadow: var(--boxShadowLight);
    background-blend-mode: hue;
  }
  :global(.dark) div {
    box-shadow: var(--boxShadowDark);
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }

  @media screen and (max-width: 1000px) {
    div {
      width: fit-content;
      height: fit-content;
      padding: 0px 50px;
      position: static;
    }
    p {
      display: none;
    }
  }
</style>
