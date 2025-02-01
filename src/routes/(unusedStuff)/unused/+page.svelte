<script>
  import { page } from '$app/stores';

  import BaseContent from '$lib/components/BaseContent.svelte';

  import Section from '$lib/components/Section.svelte';

  import HuetopiaHome from '$lib/components/Writing/huetopiaHome.svx';
</script>

<BaseContent h2="You are on {$page.url.pathname}" title="Test Content :P" open>
  <Section>
    <p>
      <strong>This is some cool information:</strong>
      {JSON.stringify($page.data)}
    </p>
  </Section>
</BaseContent>
<BaseContent title="Id = whom" h2="This is a test">
  <div id="#whom">
    <Section>Dummy -- you failed.</Section>
  </div>
</BaseContent>
<BaseContent title="Huetopia Homepage">
  <Section>
    <HuetopiaHome />
  </Section>
</BaseContent>
