<script lang="ts">
  import Self from "$lib/components/List/ListOfLinks.svelte";
  import type { Snippet } from "svelte";
    import Section from "../Section.svelte";
  interface Props {
    chapter?: string;
    title?: string;
    text?: Snippet | string;
    section?: string;
    heading?: string;
    id?: string;
    children?: Snippet;
  }
  const {
    chapter = '',
    title = '',
    text = '',
    section = '',
    heading = '',
    id = '',
    children
  }: Props = $props();
</script>

<div class="ListOfLinks" {id}>
  {#if chapter !== ''}
    <h2 class="font-heading text-3xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
      {chapter}
    </h2>
  {/if}
  {#if section !== ''}
    <h3 class="fontHeading my-4 text-2xl">{section}</h3>
  {/if}
  {#if title !== ''}
    <h4 class="fontHeading text-xl">{title}</h4>
  {/if}

  {#if heading !== ''}
    <h5 class="fontHeading text-lg">{heading}</h5>
  {/if}

  <div>
    {#if typeof text !== "string"}
      {@render text()}
    {:else if text !== ""}
      <p>{text}</p>
    {/if}
  </div>
  <ul class="mt-5">
    {@render children?.()}
  </ul>
</div>

<script module>
  export { entry, entryWithSublist };
</script>
{#snippet entry(href: string, text: string, sublist?: string[], cardStyle?: boolean, divLink?: boolean, children?: Snippet, after?: string)}
<li>
    {#if cardStyle}
    <Section className="">
        {#if divLink}
        <div class="link divLink" aria-label={href} tabindex={0} role="link" onclick={() => window.open(href, "_blank")} onkeypress={() => window.location.href = href}>
            <p>{text}</p> {after}
            {#if sublist}
                {#if sublist.length > 0}
                <ul>
                    {#each sublist as item}
                    <li>
                      {#if typeof item === "string"}
                        {item}
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
                <a {href} rel="noreferrer nofollow" target="_blank">{text}</a> {after}
                {#if sublist}
                    {#if sublist.length > 0}
                        <ul>
                            {#each sublist as item}
                            <li>{item}</li>
                            {/each}
                        </ul>
                    {/if}
                {/if}
                {@render children?.()}
            </div>
        {/if}
    </Section>
    {:else}
    <a {href} rel="noreferrer nofollow" target="_blank">{text}</a> {after}
        {#if sublist}
            {#if sublist.length > 0}
                <ul>
                    {#each sublist as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            {/if}
        {/if}
        {@render children?.()}
    {/if}
</li>
{/snippet}

{#snippet entryWithSublist(href: string, text: string, children?: Snippet)}
  <li>
    <p>Test</p>
    <Self>
      {@render children?.()}
    </Self>
  </li>
{/snippet}

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