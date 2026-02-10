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
    }
    let { 
        chapter = '',
        section = "",
        title = "",
        text = '',
        heading = '',
        id = '',
        children 
    }:Props = $props();
</script>

<details class="mt-5">
    <summary>
        <h3 class="font-heading my-4 text-2xl inline bg-bravegrumpy-brand4/50 px-5 py-1 rounded-[5px] border-[5px] border-solid border-current text-bravegrumpy-brand1 hover:hue-rotate-180 hover:scale-110">{section}</h3>
    </summary>
    {#if title !== ""}
        <LOL {title}>
            {@render children?.()}
        </LOL>
    {:else}
        <LOL>
            {@render children?.()}
        </LOL>
    {/if}
</details>