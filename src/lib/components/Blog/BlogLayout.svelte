<script>
  import BaseContent from '$lib/components/BaseContent.svelte';
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import { SvelteDate } from 'svelte/reactivity';

  const {
    date = new SvelteDate(),
    h2 = `${date.getMonth()} ${date.getDate()}`,
    h3 = '',
    h4 = '',
    h5 = '',
    h6 = '',
    open = false,
    title = 'title',
    sectionClass = ``,
    className = `${sectionClass} section font-body-text`,
    articleClass = 'centerDiv',
    articleColumn = '2 / 4',
    // sectionColumn = '2 / 4',
    children
  } = $props();
</script>

<BaseContent {h2} {h3} {h4} {h5} {h6} {open} {title}>
  <Article className={articleClass} --mainWidth={articleColumn}>
    <Section {sectionClass} {className}>
      {@render children()}
    </Section>
  </Article>
</BaseContent>
