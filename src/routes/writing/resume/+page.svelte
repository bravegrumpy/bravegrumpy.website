<script lang="ts">
    import Resume  from "./csl_resume.svx"
    import Article from "$lib/components/Article.svelte"
    import Section from "$lib/components/Section.svelte";
</script>

<Article --articleColumn="2/3">
    <Section>
        <Resume />
    </Section>
</Article>