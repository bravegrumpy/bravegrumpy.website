<script>
  import SignIn from '$lib/components/Auth/SignIn.svelte';

  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Article --articleColumn="2/3" articleClass="text-bravegrumpy-black dark:text-bravegrumpy-accent2a">
  <SignIn />
</Article>
