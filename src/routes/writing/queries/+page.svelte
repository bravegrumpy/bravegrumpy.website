<script lang="ts">
    import Article from "$lib/components/Article.svelte";
    import Section from "$lib/components/Section.svelte";
    import Heading from "$lib/components/Heading.svelte";

    import { page } from "$app/state";

    let users = $derived(page.data.allUsers || false);
    let todoList = $derived(page.data.todoList || false);
</script>

<Article --articleColumn="1/4">
    <Heading>Using Database</Heading>
    <Section>
        <p>This is my extremely crude attempt at querying a database. I plan to add more crud actions once I figure them out.</p>
        <p>I am interfacing with exactly one table in my database</p>
        <p>It is interesting that I initially decided on <a href="https://www.prisma.io" target="_blank" rel="noreferrer nofollow">Prisma</a> as the ORM.  I have been using <a href="https://orm.drizzle.team/" target="_blank" rel="nofollow noreferrer">drizzle</a>. I'm curious to see if it functions in the node server set up by <a href="https://aws.amazon.com/amplify/" target="_blank" rel="nofollow noreferrer">Amplify</a>.</p>
        {#if users}
        <ol>
        {#each users as {id, email, name} (id)}
        <li class="dark:text-bravegrumpy-brand5 text-bravegrumpy-brand3">
            <strong class="font-heading">User {id}:</strong>
            <ul class="bg-bravegrumpy-brand2/20 rounded-sm text-bravegrumpy-brand6 dark:text-bravegrumpy-brand4 border-[2px] border-current">
                <li class="indent-5">Name: {name}</li>
                <li class="indent-5"> Email: {email}</li>
            </ul>
        </li>
        {/each}
        </ol>
        {:else if todoList}
        <p>{JSON.stringify(todoList)}</p>
        {/if}
    </Section>
</Article>