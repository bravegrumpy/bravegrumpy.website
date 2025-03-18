<script>
    import SideNav from "$lib/components/SideNav.svelte";
    import { page } from "$app/stores"
    import Article from "$lib/components/Article.svelte";
    import Section from "$lib/components/Section.svelte";

    let currSlug = $derived($page.url.pathname);

    const { children } = $props();

</script>

<SideNav references={[
    {
      id: "5-2-0",
      text: 'admin root',
      href: '/protected/admin'
    },
    {
        id: "5-2-1",
        text: "components",
        href: '/protected/admin/components'
    }
  ]} slug={currSlug}/>

<Article --articleColumn="2/3">
    <Section>
        {@render children()}
    </Section>
</Article>