<script lang="ts">
    import Article from "$lib/components/Article.svelte";
    import Section from "$lib/components/Section.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import Aside from "$lib/components/Aside.svelte";

    import { page } from "$app/state";

    let users = $derived(page.data.allUsers || false);
    let todoList = $derived(page.data.todoList || false);

    import { Breadcrumb } from "flowbite-svelte";

    import { bci, breadcrumbClass} from "$lib/components/Blog/BlogBreadcrumbs.svelte";
</script>

<Article --articleRow="1/2" --articleColumn="1/3">
    <Breadcrumb class={breadcrumbClass}>
        {@render bci("/", "Home", "hugeicons:home-07")}
        {@render bci("/writing", "Writing", "hugeicons:books-01", "")}
        {@render bci("/writing/queries", "DB", "hugeicons:search-02", "")}
    </Breadcrumb>
</Article>
<Article --articleRow="2/3" --articleColumn="1/2">
    <Aside --asideHeight="fit-content">
        <h3>Why am I treating this as static?</h3>
        <p>
            <a href="https://docs.amplify.aws/" target="_blank" rel="noreferrer nofollow">AWS Amplify</a> advertises itself as a fullstack app hosting service. While this is technically true, it is nontrivial to setup a backend when grandfathering in systems that would have been working on the Gen1 version of Amplify.
        </p>
    </Aside>
    <Aside --asideHeight="fit-content">
        <p>In other words, I need to treat Amplify as I would any other fully static site host, because the Gen1 Amplify backend doesn't play nicely with this version of sveltekit.</p>
    </Aside>
</Article>
<Article --articleColumn="2/4" --articleRow="2/3">
    <Heading>Using a Database</Heading>
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