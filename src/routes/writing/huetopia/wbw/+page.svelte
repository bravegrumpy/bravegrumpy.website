<script>
  import Article from '$lib/components/Article.svelte';
  import Aside from '$lib/components/Aside.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';

  import Intro from './intro.svx';
  import Week1 from './week1.svx';
  import Week2 from './Week2.svx';
</script>

<Article>
  <Heading>Coursera Work By Week</Heading>
  <Section>
    <Intro />
  </Section>
  <Heading>Week 1</Heading>
  <Section>
    <Week1 />
  </Section>
  <Heading>Week 2</Heading>
  <Week2 />
</Article>
