<script lang="ts">
    import { type Snippet } from "svelte";
    import Heading from "$lib/components/Heading.svelte";
    import Section from "$lib/components/Section.svelte"

    import { Checkbox } from "flowbite-svelte";

    import { cardStyle, divLink, showStyleOption, isHeadingInteractive } from "$lib/stores";
    
    interface Props {
        interactive?: boolean;
        children: Snippet;
    }
    const { interactive=$isHeadingInteractive, children, ...props }: Props = $props()
</script>

<!-- Using Checkbox Label -->
<!--
<Heading>
    {#if interactive}
        <button onclick={() => $showStyleOption = !$showStyleOption}>
            {@render children()}
        </button>
        {#if $showStyleOption}
            <span class="font-bodyText">
                <Checkbox class="inline-flex flex-row items-center justify-center" bind:checked={$cardStyle} inline> Styled List </Checkbox>
            </span>
            {#if $cardStyle}
            <span class="font-bodyText">
                <Checkbox class="inline-flex flex-row items-center justify-center" bind:checked={$divLink} inline> Div as Link </Checkbox>
            </span>
            {/if}
        {/if}
    {:else}
        {@render children()}
    {/if}
</Heading>
-->

<!-- Creating a new section from scratch with flex box -->
{#if interactive}
<Section --sectionColumn="2/2" {...props}>
  <div class="flex flex-row justify-between items-center w-full">
    <h2 class="font-heading text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a text-3xl">
    <button onclick={() => $showStyleOption = !$showStyleOption}>
        {@render children()}
    </button>
    </h2>
    {#if $showStyleOption}
      <div class="flex flex-row justify-between gap-5 font-pageSubtitle text-lg">
        <span>Styled List: <Checkbox color="purple" bind:checked={$cardStyle} inline /></span>
        {#if $cardStyle}
          <span>Div as Link: <Checkbox color="green" bind:checked={$divLink} inline /></span>
        {/if}
      </div>
    {/if}
  </div>
</Section>
{:else}
<Heading>{@render children()}</Heading>
{/if}

<!-- Using Heading Component but Label to left of checkbox. Less Motion -->
<!-- <Heading>
{#if interactive}
<span class="inline-flex flex-row justify-between w-full items-center">
<button class="flex-shrink-0" onclick={() => $showStyleOption = !$showStyleOption}>
        {@render children()}
</button>
    {#if $showStyleOption}
        <span class="w-full font-pageSubtitle text-lg text-black items-center justify-between ml-8 flex flex-row gap-5">
        <span>Styled List: <Checkbox color="purple" bind:checked={$cardStyle} inline /></span>
        {#if $cardStyle}
          <span>Div as Link: <Checkbox color="green" bind:checked={$divLink} inline /></span>
        {/if}
        </span>
    {/if}
</span>
{:else}
    {@render children()}
{/if}
</Heading> -->
