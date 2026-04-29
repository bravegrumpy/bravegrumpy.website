<script lang="ts">
    import type { Snippet } from "svelte";
    import LOL from "$lib/components/List/ListOfLinks.svelte";
    interface Props {
        chapter?: string;
        title?: string;
        section?: string;
        text?: Snippet | string;
        heading?: string;
        id?: string;
        children?: Snippet;
        stl?: boolean;
        summary?: string;
    }
    let { 
        chapter = '',
        section = "",
        title = "",
        text = '',
        heading = '',
        id = '',
        stl = false,
        summary = 'Details',
        children 
    }:Props = $props();
</script>
<details class={`bg-granny-smith-200 dark:bg-solarized-green/30 rounded-[5px] px-5 py-5 border-[2px] border-solid border-current max-w-full w-full mt-5 ${stl ? 'text-center' : ''}`}>
    <summary>
        {#if stl}
            <h3 class="font-heading my-4 text-2xl inline bg-bravegrumpy-brand4/50 px-5 py-1 rounded-[5px] border-[5px] border-solid border-current text-bravegrumpy-brand1 dark:text-bravegrumpy-accent2a/70 hover:hue-rotate-180 hover:scale-110">{summary}</h3>
        {:else}
            <h3 class={`font-heading text-2xl inline`}>
                {summary}
            </h3>
        {/if}
    </summary>
    <LOL {chapter} {section} {title} {text} {heading} {id}>
        {@render children?.()}
    </LOL>
</details>