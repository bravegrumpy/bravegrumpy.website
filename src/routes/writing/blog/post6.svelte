<script>
  import BaseContent from '$lib/components/BaseContent.svelte';

  import Section from '$lib/components/Section.svelte';
  const { open = false } = $props();
</script>

<BaseContent title="2025-02-03" {open}>
  <Section>
    <p>This is supposed to be a sign in or up page.</p>
  </Section>
</BaseContent>
