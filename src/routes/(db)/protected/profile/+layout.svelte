<script>
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import SideNav from '$lib/components/SideNav.svelte';

  import { page } from '$app/stores';

  const currentPage = $derived($page.url.pathname);

  const { children, aside } = $props();
</script>

<SideNav
  slug={currentPage}
  references={[
    {
      id: '5-1-0',
      href: '/protected/profile',
      text: 'Profile'
    },
    {
      id: '5-1-1',
      href: '/protected/profile/blog',
      text: 'Diary'
    },
    {
      id: '5-1-2',
      href: '/protected/profile/ice-cream',
      text: 'Menu'
    }
  ]}
/>

<Article>
  <Section>
    {@render children()}
  </Section>
</Article>

<Aside --asideHeight="fit-content">
  <h2>Location for ShadCN experiments</h2>
  <p>I will likely be using both bitsUI, MeltUI and ShadCN throughout all of this.</p>
</Aside>
