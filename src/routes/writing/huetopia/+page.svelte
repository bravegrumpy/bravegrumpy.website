<script>
  import Section from '$lib/components/Section.svelte';
  import Article from '$lib/components/Article.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import HuetopiaHome from '$lib/components/Writing/huetopiaHome.svx';
  import Logline from '$lib/components/Writing/Logline.svx';
  import DramaticQuestion from '$lib/components/Writing/DramaticQuestion.svx';

  import SideNav from '$lib/components/SideNav.svelte';
  import SideNavButton from '$lib/components/SideNavButton.svelte';

  import { page } from '$app/stores';
</script>

<Article>
  <Section sectionClass="font-heading text-3xl">
    <h2>Welcome to Huetopia</h2>
  </Section>

  <Section>
    <HuetopiaHome />
  </Section>

  <Section>
    <h2>I'm doing some troubleshooting.</h2>
    <p>{`/${$page.url.pathname.split('/')[1]}/${$page.url.pathname.split('/')[2]}`}</p>
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
