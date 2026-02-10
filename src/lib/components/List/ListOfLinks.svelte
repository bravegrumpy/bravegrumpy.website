<script lang="ts">
  import type { Snippet } from "svelte";
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
  }:Props = $props();
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
    {#if (text !== '') && (typeof text !== "string")}
      {@render text()}
    {/if}
  </div>
  <ul>
    {@render children()}
  </ul>
</div>

<script module>
  export { entry };
</script>
{#snippet entry(href: string, text: string, sublist?: string[])}
<li>
    <a {href} rel="noreferrer nofollow" target="_blank">{text}</a>
    {#if sublist}
        {#if sublist.length > 0}
            <ul>
                {#each sublist as item}
                    <li>{item}</li>
                {/each}
            </ul>
        {/if}
    {/if}
</li>
{/snippet}