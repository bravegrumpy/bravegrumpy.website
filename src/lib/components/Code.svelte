<script lang="ts">
    import { type Snippet } from "svelte";
    import { type SvelteHTMLElements } from "svelte/elements";
    type CodeProps = SvelteHTMLElements["code"];
    interface Props extends CodeProps {
        children?: Snippet;
    }

    //TODO: Figure out how to implement mdsvex layouts and custom componenets.

    const { children, class:className="bg-gray-200 dark:bg-gray-600 shadow-xl shadow-bravegrumpy-black/20 dark:shadow-inner dark:shadow-bravegrumpy-white/35 border-b-2 border-black/50 rounded-md px-2 inline font-mono", ...props }:Props = $props();
</script>

<code class={className} {...props}>
    {@render children?.()}
</code>