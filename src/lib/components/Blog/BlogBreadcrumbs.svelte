<script lang="ts">
    interface Props {
        year: number;
        blogRoot: boolean;
        writingRoot: boolean;
    }
let { year=2026, blogRoot=false, writingRoot=false }:Props = $props();
</script>
<script lang="ts" module>
    import Icon from "@iconify/svelte";
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
    
    export let breadcrumbClass = $state(
    'bg-solarized-base-2 border-2 border-solid border-current text-flush-orange-800  w-fit px-2 rounded-[5px] py-2 dark:bg-affair-950 dark:text-chateau-green-600 flex flex-row flex-wrap');
    
    let breadcrumbItemContentClass = $state(
    'font-navMenuDefault text-xl text-flush-orange-800 hover:hue-rotate-60 hover:scale-105 dark:text-chateau-green-500');

    export { bci };
</script>

<Breadcrumb class={breadcrumbClass}>
    {@render bci("/", "Home", "", "hugeicons:home-07")}
    {@render bci("/writing", "Writing", "hugeicons:books-01", "")}
    {@render bci("/writing/blog", "Blog", "hugeicons:notebook", "")}
    {@render bci(`/writing/blog/${year}`, `${year}`, "", "")}
</Breadcrumb>

{#snippet bci(href: string, text: string, icon: string, arrow?: string)}
<BreadcrumbItem {href}>
    <svelte:fragment slot="icon">
        {#if arrow===""}
            <Icon icon="hugeicons:arrow-right-01" width="24" height="24" />
        {:else if arrow !== null}
            <Icon icon={arrow} width="24" height="24" />
        {:else}
        <span></span>
        {/if}
    </svelte:fragment>
    <p class={breadcrumbItemContentClass}>
        {#if icon !== ""}
            <Icon {icon} width="24" height="24" class="inline mb-1" />
        {/if}
        {text}
    </p>
</BreadcrumbItem>
{/snippet}