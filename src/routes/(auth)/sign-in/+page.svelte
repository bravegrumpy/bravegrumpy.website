<script>
  import { SignIn } from 'svelte-clerk/components';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';
</script>

<Article>
  <Section>
    <SignIn class="si" />
  </Section>
</Article>
