<script>
  import SideNav from '$lib/components/SideNav.svelte';
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import SitesContent from '$lib/components/Archive/SitesContent.svx';
</script>

<SideNav
  references={[
    {
      id: '4-0-0',
      href: '/archive/archive-00/index.html',
      text: 'First Iteration'
    }
  ]}
/>

<Article --articleColumn="2/3">
  <Section>
    <h2 class="font-heading text-2xl text-bravegrumpy-brand3">Old Iterations of this Website</h2>
  </Section>
  <Section>
    <SitesContent />
  </Section>
</Article>
