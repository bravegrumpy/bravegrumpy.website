<script lang="ts">
  import Resume from "$lib/components/Writing/Resumes/CSL/resume.svx";
  import About from "$lib/components/Writing/Resumes/CSL/about_csl.svx";

  import Article from "$lib/components/Article.svelte";
  import Section from "$lib/components/Section.svelte"
  import Heading from "$lib/components/Heading.svelte";
  import Aside from "$lib/components/Aside.svelte";
</script>


<Article --articleColumn="3/4">
  <Aside --asideHeight="fit-content">
    <h2>About the Company</h2>
    <p>
    <a href="https://www.csidesigns.com/careers" target="_blank" rel="nofollow noopen noreferrer">CSI Designs</a> is a general product system processing company.  It is in effect a process engineering company. My education in process engineering is a <em>perfect</em> fit for this place.</p>
  </Aside>
  <Aside>
    <About />
  </Aside>
</Article>
<Article --articleColumn="2/3">
  <details>
    <summary>
      <Heading>Resume</Heading>
    </summary>
    <Section>
      <Resume />
    </Section>
  </details>
</Article>