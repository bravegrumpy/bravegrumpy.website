<!--
@component
List Entry component
@prop {string} [text] - The text to display
@prop {href} [string] - The location the link points to
@prop text [string] - The displayed text for the `<a>`
@prop sublist [Array<string | Snippet>] This list goes within a new `<ul>` that is placed inside *this* `<li>`.
@prop cardStyle [boolean] - card-like styling for each list item
-->

<script lang="ts">
    import type { Snippet } from "svelte";
    import Section from "$lib/components/Section.svelte";

    interface Props {
        /** href for link */
        href: string;
        /** the "text" for the link*/
        text: string;
        /** an array to hold items in a new unordered list */
        sublist?: Array<string | Snippet>;
        /** Do you want card-like styling on each list item? */
        cardStyle?: boolean;
        /** Do you want a `<div>` element to act as the anchor tag typically does? */
        divLink?: boolean;
        children?: Snippet;
        after?: string;
        local?: boolean;
    }

    let { 
        href, 
        text, 
        sublist = [], 
        cardStyle = false, 
        divLink = false, 
        children, 
        after = '',
        local = false
    }: Props = $props();

    const localTarget = $derived(local ? "_self" : "_target");
    const localRel = $derived(local ? "rel=noopener,noreferrer,nofollow" : undefined);
</script>

<li>
<!--TODO: #311 properly implement this!-->
  <p>This is a <code class="text-gray-800 dark:text-gray-200">&lt;li&gt;</code> tag.</p>
  {#if cardStyle}
  <div><p>Card Style</p></div>
    {#if divLink}
      <div><p>The <code class="text-gray-800 dark:text-gray-200">&lt;div&gt;</code> acts as the <code class="text-gray-800 dark:text-gray-200">&lt;a&gt;</code> tag.</p></div>
    {:else}
      <div><p>The <code class="text-gray-800 dark:text-gray-200">&lt;a&gt;</code> functions normally.</p></div>
    {/if}
  {:else}
  <div><p>Anchor Style</p></div>
  {/if}
</li>


<style>
  .link {
    border-radius: 5px;
    /* padding: 5px 50px; */
    background-color: var(--bravegrumpy-accent1a);
    border: 2px solid var(--bravegrumpy-brand3);
  }
  div.divLink {
    color: var(--bravegrumpy-brand3);
    /* background-color: var(--apple-200); */
  }
  .divLink:hover {
    scale: 101%;
    filter: hue-rotate(30deg);
    cursor: pointer;
  }
  .link a {
    color: var(--bravegrumpy-brand3);
  }
  .link a:hover {
    filter: hue-rotate(45deg);
  }
  .link a:visited {
    filter: hue-rotate(-45deg);
  }
  :global(.dark) .link {
    background-color: var(--bravegrumpy-logoPurple);
    color: var(--bravegrumpy-brand2);
    border-color: currentColor;
  }
  :global(.dark) .link a {
    color: var(--bravegrumpy-brand2);
  }

  @media (min-width: 300px) {
    .link {
      max-width: 400px;
      width: full;
      padding: 2px 20px;
      margin: 0px -5px 0px -60px;
    }
  }
  @media (min-width: 400px) {
    .link {
      max-width: 500px;
      width: full;
      padding: 4px 40px;
      margin: 0px 15px 0px -30px;
    }
  }
  @media (min-width: 500px) {
    .link {
      max-width: 500px;
      width: 400px;
    }
    .link a {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 800px) {
    .link {
      max-width: 375px;
    }
  }
  @media (min-width: 1000px) {
    .link {
      max-width: 90%;
      width: 50vw;
      padding: 10px 50px;
      margin: 5px 0px 0px -20px;
    }
  }
</style>