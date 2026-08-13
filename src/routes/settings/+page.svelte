<script lang="ts">
    import { isHeadingInteractive, showDebug, devNotesExist, debugOutput, settingsPageSettings, showDevNotes, settingsMode, cardStyle, divLink, earliestYear, showBlogOptions, earliestAllowedYear } from "$lib/stores";
    import { Card, Toggle, Label, Input, Radio, RadioButton, ButtonGroup } from "flowbite-svelte";
    import Article from "$lib/components/Article.svelte";
    import Section from "$lib/components/Section.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import Code from "$lib/components/Code.svelte";
    import Icon from "@iconify/svelte"

    const password = "Abracadabra"

    let inputPassword = $state("Abracadabra");

    const iconSize = 25;
    const buttonSize = `size-[${iconSize * 4}px]`

    const radioButtonStyles = `${buttonSize} rounded-[5px] border-[2px] border-solid border-current bg-bravegrumpy-accent2a text-bravegrumpy-logoPurple hover:scale-105 hover:hue-rotate-15 dark:bg-bravegrumpy-brand6 dark:text-bravegrumpy-accent1a p-[10px] border-[2px] border-solid`;

    const today = new Date();
    const thisYear = today.getFullYear();
    let years = [];
    for (let i=$earliestAllowedYear; i <= thisYear; i++) {
        years.push(i);
    }
</script>

<Article --articleColumn="2 / 3">
    <Heading>Site Settings</Heading>
    <Section>
            {#if inputPassword === password}
            <Card color="none" class="flex flex-col gap-5 justify-between mx-auto rounded-[5px]">
            <h3>Links Page</h3>
            <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                <Toggle size="small" color="primary" bind:checked={$isHeadingInteractive}>
                <span>Show style options on <Code>h2</Code> heading click.</span>
                </Toggle>
            </Label>
            <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                <Toggle size="small" color="primary" bind:checked={$cardStyle}>
                    <span>Show styling on links</span>
                </Toggle>
            </Label>
            {#if $debugOutput}
            <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                <Toggle size="small" color="primary" bind:checked={$showDebug}>
                <span>Show rendered debug output</span>
                </Toggle>
            </Label>
            {/if}
            </Card>
            {#if $showBlogOptions}
            <Card color="none" class="flex flex-col gap-5 justify-between mx-auto rounded-[5px]">
                <h3>Blog Settings</h3>
                <p class="text-xs">Earliest accessible year in blog</p>
                <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                    {$earliestYear}
                    <input type="range" bind:value={$earliestYear} min={Math.min(...years)} max={thisYear} list="markers" id="blogYears"/>
                    <Input type="number" bind:value={$earliestYear} min={$earliestAllowedYear} max={thisYear} class="w-18 text-center" />
                    <datalist id="markers">
                        {#each years as yr}
                        <option value={`${yr}`} label={`${yr}`}></option>
                        {/each}
                    </datalist>
                </Label>
            </Card>
            {/if}
            {#if $settingsPageSettings}
            <Card color="none" class="flex flex-col gap-5 justify-between mx-auto rounded-[5px]">
                <h3>Preferences</h3>
            
                Menu UI
                <p class="text-xs text-bravegrumpy-brand3/50 dark:text-bravegrumpy-white/50">Change the way the toolbar in header behaves.</p>
                <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                    <ButtonGroup class="mx-auto">
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
                </Label>
                <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                    <Radio value="dropdown" bind:group={$settingsMode}>Dropdown</Radio>
                    <Radio value="buttons" bind:group={$settingsMode}>Spaced</Radio>
                    <Radio value="group" bind:group={$settingsMode}>Compact</Radio>
                </Label>
                {#if $devNotesExist}
                <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                    <Toggle size="small" color="primary" bind:checked={$showDevNotes}>
                        <span>Show ephemeral developer notes</span>
                    </Toggle>
                </Label>
                {/if}
            </Card>
            {/if}
            {:else}
            <Card color="none" class="flex flex-col gap-5 justify-between mx-auto rounded-[5px]">
            <h3>Admin Password</h3>
            <Label color="green" class="flex flex-row gap5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20">
                <Input bind:value={inputPassword} type="password" />
            </Label>
            </Card>
            {/if}
    </Section>
    {#if $showDevNotes && $devNotesExist}
    <Heading>Ephemeral Developer Notes</Heading>
    <Section>
        <div class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
        </div>
    </Section>
    {/if}
</Article>