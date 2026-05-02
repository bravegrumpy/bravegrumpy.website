<!--
@component
Section Component 
@prop {string} [lightText]
@prop {string} [lightBackground] - tailwind class - background color in light theme
@prop {string} [lightColors] - tailwind class - combination of `lightText` and `lightColors`
@prop {string} [darkText] - tailwind class - font color in dark theme.
@prop {string} [darkBackground] - tailwind class - background color in light theme
@prop {string} [darkColors] - tailwind class - combination of `darkText` and `darkColors`
@prop {string} [colors] - tailwind class - combination of `lightColors` and `darkColors`
@prop {string} [colors] - tailwind class - controlls default font family.
@prop {boolean} [section] - controlls whether the local CSS styling that controlls border, padding, margins, flexbox properties are in fact applied. Defaults to `true`. Only use if you want to style the section, or may otherwise use `class=""`.
@prop {string} [class] - defauls value: `${sectionClass} ${colors} section`, unless section is false.
-->
<script lang="ts">
  import { type Snippet } from "svelte";
  import { type SvelteHTMLElements } from "svelte/elements";
  type SectionElement =  SvelteHTMLElements["section"]
  interface Props extends SectionElement {
    lightText?: string;
    lightBackground?: string;
    lightColors?: string;
    darkText?: string;
    darkBackground?: string;
    darkColors?: string;
    colors?: string;
    sectionClass?: string;
    section?: boolean;
    children?: Snippet;
  }
  const {
    lightText = `text-bravegrumpy-black`,
    lightBackground = `bg-bravegrumpy-accent2a`,
    lightColors = `${lightText} ${lightBackground}`,
    darkText = `dark:text-bravegrumpy-accent2a`,
    darkBackground = 'dark:bg-bravegrumpy-black',
    darkColors = `${darkText} ${darkBackground}`,
    colors = `${lightColors} ${darkColors}`,
    sectionClass = `font-bodyText`,
    section = true,
    class: className = `${sectionClass} ${colors} ${section ? 'section' : ''}`,
    children
  }: Props = $props();
</script>

<section class={className}>
  {@render children()}
</section>

<style>
  .section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    grid-column: var(--sectionColumn, ' 2 / 2');
    grid-row: var(--sectionRow, ' 1 / 1');
    border: 2px solid var(--borderColor, currentColor);
    border-radius: var(--borderRadius);
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 25px;
    margin: 15px var(--XMargin, 0px);
  }
</style>
