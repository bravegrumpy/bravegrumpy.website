<script lang="ts">
    import Section from "$lib/components/Section.svelte"
    import Heading from "$lib/components/Heading.svelte"
    import ShowList from "$lib/components/List/media/shows.svx"
    import Aside from "$lib/components/Aside.svelte"
    import Article from "$lib/components/Article.svelte";
    import SideNavButton from "$lib/components/SideNavButton.svelte";
</script>

<Article --articleColumn="1/2">
    <SideNavButton href="/links" text="Back To Links"/>
</Article>

<Article --articleColumn="2/3">
    <Heading>List Of Planned Shows</Heading>
    <Section sectionClass="prose !max-w-none prose-headings:text-current prose-ul:marker:text-current">
        <ShowList />
    </Section>
</Article>

<Article --articleColumn="3/4">
    <Aside --asideHeight="fit-content" --asideColumn="1/2">
        <h3>How To Watch</h3>
        <p>I typically find the show I want to watch on <a href="https://ext.to" target="_blank">Ext.TO</a>, copy the magnet link, and then use <a href="https://webtor.io" target="_blank">WebTor</a> to stream the show.</p>
        <p>However, there are many ways to achieve the same goal. I know that there are single websites that do the whole thing.</p>
    </Aside>
</Article>