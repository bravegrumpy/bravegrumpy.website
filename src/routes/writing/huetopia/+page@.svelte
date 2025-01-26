<script>
  import Section from '$lib/components/Section.svelte';
  import Article from '$lib/components/Article.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import HuetopiaHome from '$lib/components/Writing/huetopiaHome.svx';
  import Logline from '$lib/components/Writing/Logline.svx';
  import DramaticQuestion from '$lib/components/Writing/DramaticQuestion.svx';

  import SideNav from '$lib/components/SideNav.svelte';
  import SideNavButton from '$lib/components/SideNavButton.svelte';
</script>

<Article --articleColumn="1/2">
  <Aside --asideHeight="fit-content">
    <h2>Links will eventually go here.</h2>
    <ul>
      <li>I need to figure out what the right links are.</li>
    </ul>
  </Aside>
  <SideNav />
  <SideNavButton />
</Article>

<Article>
  <Section sectionClass="font-heading text-3xl">
    <h2>Welcome to Huetopia</h2>
  </Section>

  <Section>
    <HuetopiaHome />
  </Section>
</Article>

<div style:grid-column="3/4">
  <Aside --asideHeight="fit-content">
    <Logline />
  </Aside>

  <Aside --asideHeight="fit-content">
    <DramaticQuestion />
  </Aside>
</div>
