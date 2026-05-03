<script lang="ts">
    import { isHeadingInteractive } from "$lib/stores";
    import { Card, Toggle, Label, Input } from "flowbite-svelte";
    import Article from "$lib/components/Article.svelte";
    import Section from "$lib/components/Section.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import Code from "$lib/components/Code.svelte";

    import PR from "./pr.md";

    const password = "Abracadabra"

    let inputPassword = $state("Abracadabra");

    let showDevNotes = $state(true);
</script>

<Article --articleColumn="2 / 3">
    <Heading>Site Settings</Heading>
    <Section>
        <Card color="none" class="flex flex-col gap-5 justify-between mx-auto rounded-[5px]">
            {#if inputPassword === password}
            <h3>List Page</h3>
            <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                <Toggle size="small" color="primary" bind:checked={$isHeadingInteractive}>
                <span>Show style options on <Code>h2</Code> heading click.</span>
                </Toggle>
            </Label>
            <Label color="green" class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
                <Toggle size="small" color="primary" bind:checked={showDevNotes}>
                <span>Show ephemeral developer notes</span>
                </Toggle>
            </Label>
            {:else}
            <h3>Admin Password</h3>
            <Label color="green" class="flex flex-row gap5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20">
                <Input bind:value={inputPassword} type="password" />
            </Label>
            {/if}
        </Card>
    </Section>
    {#if showDevNotes}
    <Heading>Ephemeral Developer Notes</Heading>
    <Section>
        <div class='flex flex-row gap-5 justify-between items-center w-full *:text-xs border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
            <h3>Commit Message</h3>
            <p>
                finished converting list elements to rendering via snippet. Completes #310
            </p>
        </div>
        <div class='prose dark:prose-invert dark:prose-headings:text-bravegrumpy-accent2a dark:prose-p:text-bravegrumpy-accent2a dark:prose-li:text-bravegrumpy-accent2a w-full border-y border-solid border-bravegrumpy-black/5 dark:border-bravegrumpy-white/20'>
            <PR />
        </div>
    </Section>
    {/if}
</Article>