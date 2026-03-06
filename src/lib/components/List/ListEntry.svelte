<!--
@component
List Entry component
@prop {string} [text] - The text to display
@prop {string} [href]
@prop {string} [text]
@prop {Array<string|Snippet>} [sublist]
@prop {boolean} [cardStyle]
@prop {boolean} [divLink]
@prop {children} [Snippet]
@prop {string} [after]
@prop {boolean} [local]
@prop {boolean} [lnk]

-->

<script lang="ts">
    import type { Snippet } from "svelte";
    import Section from "$lib/components/Section.svelte";

    interface Props {
        /** href for link */
        href: string;
        /** the "text" for the link*/
        text: string;
        /** an array that renders an &lt;ul&gt; */
        sublist?: Array<string | Snippet>;
        /** is the link styled as a "card"? */
        cardStyle?: boolean;
        /** Using a &lt;div&gt; instead of an `anchor`*/
        divLink?: boolean;
        /** any other children */
        children?: Snippet;
        /** text directly after link*/
        after?: string;
        /** true: removes `rel="noopener noreferrer nofollow"` and `target="_blank"` */
        local?: boolean;
        /** does this &lt;li&gt; include a link? Default: true*/
        lnk?: boolean;
    }

    let { 
        href, 
        text, 
        sublist = [], 
        cardStyle = false, 
        divLink = false, 
        children, 
        after = '',
        local = false,
        lnk = true
    }: Props = $props();

    const localTarget = $derived(local ? "_self" : "_target");
    const localRel = $derived(local ? "rel=noopener,noreferrer,nofollow" : undefined);
</script>

<li>
{#if lnk}
  {#if cardStyle}
  <Section className="">
    {#if divLink}
    <div class="link divLink" aria-label={href} tabindex={0} role="link" onclick={() => window.open(href, "_blank")} onkeydown={() => window.open(href, "_blank")}>
        <p>{text}</p> {after}
        {#if sublist}
            {#if sublist.length > 0}
            <ul>
                {#each sublist as item}
                <li>
                    {#if typeof item === "string"}
                        {item}
                    {:else}
                        {@render item?.()}
                    {/if}
                </li>
                {/each}
            </ul>
            {/if}
        {/if}
        {@render children?.()}
    </div>
    {:else}
    <div class="link">
        <a {href} rel={local ? "" : "noreferrer nofollow noopen"} target={local ? "_self" : "_blank"}>{text}</a> {after}
        {#if sublist}
            {#if sublist.length > 0}
                <ul>
                    {#each sublist as item}
                        <li>
                            {#if typeof item === "string"}
                                {item}
                            {:else}
                                {@render item?.()}
                            {/if}
                        </li>
                    {/each}
                </ul>
            {/if}
        {/if}
        {@render children?.()}
    </div>
    {/if}
    </Section>
  {:else}
  <a {href} rel={local ? "" : "noreferrer nofollow noopen"} target={local ? "_self" : "_blank"}>{text}</a>{after}
    {#if sublist}
        {#if sublist.length > 0}
            <ul>
                {#each sublist as item}
                    <li>
                        {#if typeof item === "string"}
                            {item}
                        {:else}
                            {@render item?.()}
                        {/if}
                    </li>
                {/each}
            </ul>
        {/if}
    {/if}
    {@render children?.()}
  {/if}
{:else}
  {@render children?.()}
  {#if text}
    {text}
  {/if}
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