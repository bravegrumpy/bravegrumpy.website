<script lang="ts">
    import Section from "$lib/components/Section.svelte"
    import Heading from "$lib/components/Heading.svelte"
    import Article from "$lib/components/Article.svelte"
    import ShowList from "$lib/components/List/media/shows.svx"
    import Aside from "$lib/components/Aside.svelte"
</script>

<Article --article-column="1/2">
    <Aside --asideHeight="fit-content">
        <p><a href="/links">Links Home</a></p>
    </Aside>
</Article>
<Article --articleColumn="2/3">
    <Heading>List Of Planned Shows</Heading>
    <Section sectionClass="prose !max-w-none prose-headings:text-current">
        <ShowList />
    </Section>
</Article>