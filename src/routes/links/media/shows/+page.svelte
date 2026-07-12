<script lang="ts">
    import Section from "$lib/components/Section.svelte"
    import Heading from "$lib/components/Heading.svelte"
    import ShowList from "$lib/components/List/media/shows.svx"
    import Aside from "$lib/components/Aside.svelte"
</script>

<Aside --asideHeight="fit-content" --asideColumn="1/2">
    <p><a href="/links">Links Home</a></p>
</Aside>

<Heading>List Of Planned Shows</Heading>
<Section sectionClass="prose !max-w-none prose-headings:text-current">
    <ShowList />
</Section>