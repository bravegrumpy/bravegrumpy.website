<script>
  import BaseContent from '$lib/components/BaseContent.svelte';
  import Section from '$lib/components/Section.svelte';
  import Content from "./example_content1.svx"
  import More from "./example_content2.svx"
 </script>

<BaseContent title="Content One" open>
  <Section>
    <Content />
  </Section>
</BaseContent>

<BaseContent title="Content Two">
  <Section>
    <More />
  </Section>
</BaseContent>
