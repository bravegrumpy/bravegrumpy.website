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
    },
    {
      id: '4-0-1',
      href: '/archive/archive-01/index.html',
      text: 'Second  Iteration'
    }
  ]}
/>

<Article --articleColumn="2/4">
  <Section>
    <h2 class="font-heading text-2xl text-bravegrumpy-brand3 dark:text-bravegrumpy-accent2a">
      Old Iterations of this Website
    </h2>
  </Section>
  <Section>
    <SitesContent />
  </Section>
</Article>
