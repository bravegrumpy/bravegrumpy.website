<script lang="ts">
    import Section from "$lib/components/Section.svelte"
    import Heading from "$lib/components/Heading.svelte"
    import Article from "$lib/components/Article.svelte"
    import ShowList from "$lib/components/List/media/shows.svx"
    import Aside from "$lib/components/Aside.svelte";
</script>


<Article --articleColumn="1/2">
    <Aside --asideHeight="fit-content">
        <a href="/links">Return Home</a>
    </Asice>
</Article>
<Article --articleColumn="2/4">
    <Heading>List Of Planned Shows</Heading>
    <Section>
        <ShowList />
    </Section>
</Article>