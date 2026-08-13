<script lang="ts">
    import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

    import { DarkMode } from "flowbite-svelte";

    import type { Snippet } from "svelte";

    type ButtonAnchorAttributes = HTMLAnchorAttributes & HTMLButtonAttributes;

    import Icon from "@iconify/svelte"

    interface Props extends ButtonAnchorAttributes {
        mode?: "button" | "link" | "theme";
        iconSize?: number;
        buttonSize?: string;
        icon?: string;
        className?: string;
        sunIcon?: string;
        moonIcon?: string;
        children?: Snippet;
    }

    const { 
        mode = "link",
        iconSize = 25,
        buttonSize = `size-[${iconSize * 4}px]`,
        icon = "hugeicons:menu-09",
        children,
        class: customStyles = "",
        className = `${buttonSize} rounded-[5px] border-[2px] border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple hover:scale-105 hover:hue-rotate-15 dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a p-[10px] ${customStyles}`,
        sunIcon = "game-icons:sun",
        moonIcon="game-icons:night-sleep",
        ...props 
    }: Props = $props();
</script>

{#if mode === "link"}
    <a {...props} class={className}>
        {#if !children}
            <Icon {icon} width={iconSize}/>
        {:else}
            {@render children?.()}
        {/if}
    </a>
{:else if mode ==="button"}
    <button class={className} {...props}>
        {#if !children}
            <Icon {icon} width={iconSize} />
        {:else}
            {@render children?.()}
        {/if}
    </button>
{:else}
    <DarkMode class={className} {...props}>
        <Icon icon={sunIcon} slot="lightIcon" height={iconSize} width={iconSize} />
        <Icon icon={moonIcon} slot="darkIcon" height={iconSize} width={iconSize} />
    </DarkMode>
    {@render children?.()}
{/if}