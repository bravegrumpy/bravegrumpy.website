<script>
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import { page } from '$app/stores';
</script>

<Article --articleColumn="1/4">
  <Section>
    <p>{JSON.stringify($page.data.posts)}</p>
  </Section>
  <Section>
    <form method="POST" action="?/createPost">
      <label for="title">
        title <br />
        <input
          name="title"
          id="title"
          class="rounded-[5px] bg-bravegrumpy-white dark:bg-bravegrumpy-black"
        />
      </label>
      <br />
      <label for="content">
        content <br />
        <textarea
          id="content"
          name="content"
          placeholder="Write Content Here"
          class="rounded-[5px] bg-bravegrumpy-white dark:bg-bravegrumpy-black"
        ></textarea>
        <br />
      </label>
      <button
        type="submit"
        class="mt-5 rounded-[5px] border-[5px] border-solid border-bravegrumpy-logoPurple bg-bravegrumpy-accent1a px-5 py-2 font-navMenuDefault text-2xl text-bravegrumpy-logoPurple hover:scale-105 hover:hue-rotate-15 dark:border-bravegrumpy-accent1a dark:bg-bravegrumpy-brand1 dark:text-bravegrumpy-accent1a"
        >Submit</button
      >
    </form>
  </Section>
</Article>
