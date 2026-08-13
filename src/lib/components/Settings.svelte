<script lang="ts" generics="T">
    import type { HTMLAttributes, SvelteHTMLElements } from "svelte/elements"
    import { page } from "$app/state";
    import { isHeadingInteractive, showDebug, devNotesExist, debugOutput, settingsPageSettings, showDevNotes, settingsMode, cardStyle, showBlogOptions, earliestAllowedYear, earliestYear } from "$lib/stores";
    import Btn from "$lib/components/IconButtonBase.svelte";
    import Icon from "@iconify/svelte";
    import Code from "$lib/components/Code.svelte"

    import { Dropdown, DropdownItem, DropdownHeader, Label, Toggle, DropdownDivider, Helper, ButtonGroup, Radio, RadioButton, Tooltip, Input } from "flowbite-svelte"
    import { setConvexClientContext } from "convex-svelte";

    const currentPage = $derived(page.url.pathname);
    const currentPage2Deep = $derived(
        currentPage.split("/").slice(0,3).join("/")
    )

    const iconSize = 25;
    const buttonSize = `size-[${iconSize * 4}px]`

    const settingsIcon = "hugeicons:settings-01";

    const dropdownStyles: string = "bg-bravegrumpy-accent1a border-[2px] border-solid border-bravegrumpy-black shadow-[-10px_10px_20px_color-mix(in_oklch,_var(--bravegrumpy-black)_50%,_transparent)] dark:bg-bravegrumpy-logoPurple dark:border-bravegrumpy-accent1a dark:shadow-[-5px_7px_20px_5px_color-mix(in_oklch,_var(--bravegrumpy-black)_20%,_transparent),10px_10px_10px_color-mix(in_oklch,_var(--bravegrumpy-brand2)_20%,_transparent),-15px_-3px_15px_5px_color-mix(in_oklch,var(--bravegrumpy-white)_10%,_transparent)] rounded-[5px]"
    const dropdownItemStyles: string = "dark:hover:bg-bravegrumpy-accent1a/60"
    const dropdownDividerStyles: string = "bg-bravegrumpy-black h-[2px] dark:bg-bravegrumpy-accent1a"
    const dropdownHeaderStyles: string = "font-serif text-xl";

    type themeOptions = 'dark' | 'light';

    function detectCurrentTheme(): themeOptions {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    let currentTheme:themeOptions = $derived<themeOptions>(detectCurrentTheme());
    function updateCurrentTheme(): void {
        currentTheme = detectCurrentTheme();
    }

    type ButtonOrLink = SvelteHTMLElements['a'] & SvelteHTMLElements['button'] & typeof Btn;

    interface Props extends ButtonOrLink {
        icon?: string;
        mode: "dropdown" | "buttons" | "group",
    }

    const { icon, mode="buttons", class: styleClass }:Props = $props();

    const today = new Date();
    let thisYear = today.getFullYear();
    let years: number[] = [];
    for (let i = $earliestAllowedYear; i <= thisYear; i++) {
        years.push(i);
    }


    const radioButtonStyles =  `${buttonSize} rounded-[5px] border-[2px] border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple hover:scale-105 hover:hue-rotate-15 dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a p-[10px] border-[2px] border-solid`
</script>

{#if mode==='buttons'}
    <Btn mode="theme" class={styleClass} />
    <Btn href="/settings" icon={settingsIcon} class={styleClass} />
{:else if mode==="group"}
    <ButtonGroup class={`-space-x-1 ${styleClass}`}>
        <Btn mode="button" icon="hugeicons:arrow-left-01" onclick={() => history.back()} class="rounded-r-none" />
        <Btn mode="theme" class="rounded-none" />
        <Btn mode="link" href="/settings" icon={settingsIcon} class="rounded-l-none" />
    </ButtonGroup>
{:else}

<Btn mode="button" {icon} {iconSize} {buttonSize} class={styleClass} />
<Dropdown class={`w-[200px] ${dropdownStyles}`} placement="bottom-start">
    <DropdownItem class={dropdownItemStyles}>
        <Btn id="themeToggle" mode="theme" {buttonSize} {iconSize} onclick={updateCurrentTheme}>{currentTheme} Mode</Btn>
    </DropdownItem>
    <DropdownDivider class={dropdownDividerStyles} />
    {#if currentPage === "/links"}
    <DropdownItem class={dropdownItemStyles}>
        <Toggle size="small" color="primary" bind:checked={$isHeadingInteractive}>
            Stylized Links
        </Toggle>
        <Helper>Show style options on <Code>h2</Code> heading click.</Helper>
        </DropdownItem>
        <DropdownItem class={dropdownItemStyles}>
            <Toggle size="small" color="primary" bind:checked={$cardStyle}>
                <span>Show styling on links</span>
            </Toggle>
        </DropdownItem>
        {#if $debugOutput}
        <DropdownItem class={dropdownItemStyles}>
            <Toggle size="small" color="primary" bind:checked={$showDebug}>
                Debug
            </Toggle>
            <Helper>Show rendered debug output</Helper>
        </DropdownItem>
        {/if}
        <DropdownDivider class={dropdownDividerStyles} />
    {:else if currentPage2Deep === "/writing/blog"}
        {#if $showBlogOptions}
        <DropdownItem class={dropdownItemStyles}>
            <input type="range" bind:value={$earliestYear} min={Math.min(...years)} max={thisYear} list="markers" id="blogYears"/>
            <Input type="number" bind:value={$earliestYear} min={Math.min(...years)} max={thisYear} class="w-18 text-center" />
            <datalist id="markers">
                {#each years as yr}
                <option value={`${yr}`} label={`${yr}`}></option>
                {/each}
            </datalist>
            <Helper>Earliest accessible blog year ({$earliestYear})</Helper>
        </DropdownItem>
        <DropdownDivider class={dropdownDividerStyles} />
        {/if}
    {/if}
    <DropdownItem class={dropdownItemStyles}>
        <Btn mode="button" icon={settingsIcon} {iconSize} {buttonSize}>
            <Icon icon={settingsIcon} width={iconSize} class="inline" />
            <Icon icon="hugeicons:arrow-right-01" class="inline" />
        </Btn>
    </DropdownItem>
    <!-- <Dropdown class={`${dropdownStyles} w-[250px] -ml-50`} placement="right"> -->
        <Dropdown class={`${dropdownStyles} w-[250px]`} placement="right">
        {#if currentPage === "/settings"}
            {#if $settingsPageSettings}
            <!-- <DropdownHeader class={dropdownHeaderStyles}>Settings Page Options</DropdownHeader> -->
                {#if $devNotesExist}
                <DropdownItem class={dropdownItemStyles}>
                    <Toggle size="small" color="primary">Dev Notes</Toggle>
                </DropdownItem>
                <DropdownItem class={dropdownItemStyles}>
                    <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                        <Toggle size="small" color="primary" bind:checked={$showDevNotes}>
                            <span>Show ephemeral developer notes</span>
                        </Toggle>
                    </Label>
                </DropdownItem>
                {/if}
            {/if}
        {/if}
        <!-- <DropdownHeader class={dropdownHeaderStyles}>Links</DropdownHeader> -->
         {#if $settingsPageSettings}
         <DropdownItem class={dropdownItemStyles}>
            <ButtonGroup>
                <RadioButton
                    value="dropdown"
                    bind:group={$settingsMode}
                    class={`${radioButtonStyles} rounded-r-none ${ $settingsMode === "dropdown" ? 'text-bravegrumpy-brand6 font-bold bg-bravegrumpy-accent2b !shadow-[inset_0px_-3px_10px_5px_color-mix(in_oklch,_var(--bravegrumpy-brand3)_30%,_transparent),inset_0px_5px_30px_white] dark:!shadow-none dark:bg-bravegrumpy-brand1 dark:text-bravegrumpy-highlight1 dark:border-bravegrumpy-highlight1': ''}`}
                >
                    <Icon icon="hugeicons:arrow-down-double" width={iconSize} />
                </RadioButton>
                <RadioButton
                    value="buttons"
                    bind:group={$settingsMode}
                    class={`${radioButtonStyles} rounded-none ${ $settingsMode === "buttons" ? 'text-bravegrumpy-brand6 font-bold bg-bravegrumpy-accent2b !shadow-[inset_0px_-3px_10px_5px_color-mix(in_oklch,_var(--bravegrumpy-brand3)_30%,_transparent),inset_0px_5px_30px_white] dark:!shadow-none dark:bg-bravegrumpy-brand1 dark:text-bravegrumpy-highlight1 dark:border-bravegrumpy-highlight1': ''}`}
                >
                    <Icon icon="wordpress:buttons" class="rotate-90" width={iconSize} />
                </RadioButton>
                <RadioButton
                    value="group"
                    bind:group={$settingsMode}
                    class={`${radioButtonStyles} rounded-l-none ${ $settingsMode === "group" ? 'text-bravegrumpy-brand6 font-bold bg-bravegrumpy-accent2b !shadow-[inset_0px_-3px_10px_5px_color-mix(in_oklch,_var(--bravegrumpy-brand3)_30%,_transparent),inset_0px_5px_30px_white] dark:!shadow-none dark:bg-bravegrumpy-brand1 dark:text-bravegrumpy-highlight1 dark:border-bravegrumpy-highlight1': ''}`}
                >
                    <Icon icon="flowbite:column-outline" width={iconSize} />
                </RadioButton>
            </ButtonGroup>
            <Helper>Toolbar layout</Helper>
         </DropdownItem>
        <DropdownDivider class={dropdownDividerStyles} />
        {/if}
        {#if currentPage !== "/settings"}
            <DropdownItem class={dropdownItemStyles} href="/settings">Settings Page</DropdownItem>
        {:else}
            <DropdownItem class={dropdownItemStyles} onclick={() => history.back()}>Go Back</DropdownItem>
        {/if}
    </Dropdown>
</Dropdown>
{/if}

<style>
    input[type="range"] {
        overflow-x: hidden;
        overflow-y: hidden;
        height: 20px;
        width: 120px;
        appearance: none;
        background-color: var(--bravegrumpy-accent1a);
        border-radius: 50px;
        border: 2px solid var(--bravegrumpy-black);
    }
    :global(.dark) input[type="range"] {
        background-color: var(--bravegrumpy-logoPurple);
        border: 2px solid var(--bravegrumpy-accent1a);
    }
    input[type="range" i]::-webkit-slider-runnable-track{
        background-color: var(--bravegrumpy-accent1b);
        border-radius: 500px;
        height: 20px;
    }
    :global(.dark) input[type="range" i]::-webkit-slider-runnable-track {
        background-color: var(--bravegrumpy-brand6);
    }
    input[type="range"]::-webkit-slider-thumb {
        width: 10px;
        height: 10px;
        margin-top: 5px;
        border-radius: 50px;
        -webkit-appearance: none;
        cursor: ew-resize;
        background: var(--bravegrumpy-accent2b);
        border: 2px solid var(--bravegrumpy-black);
        box-shadow: 120px 0 0 120px var(--bravegrumpy-brand1);
    }
    :global(.dark) input[type="range"]::-webkit-slider-thumb {
        background: var(--bravegrumpy-logoPurple);
        box-shadow: 120px 0 0 120px var(--bravegrumpy-logoPurple);
        border-color: var(--bravegrumpy-accent1a);
    }
</style>