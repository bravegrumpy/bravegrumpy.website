<script lang="ts">
    import Section from "$lib/components/Section.svelte"
    import Heading from "$lib/components/Heading.svelte"
    import Article from "$lib/components/Article.svelte"
    import ShowList from "$lib/components/List/media/shows.svx"
</script>

<Heading>List Of Planned Shows</Heading>
<Section sectionClass="prose">
        <ShowList />
</Section>