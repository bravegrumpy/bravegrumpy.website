<script lang="ts">
    import Article from "$lib/components/Article.svelte";
    import Section from "$lib/components/Section.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import Aside from "$lib/components/Aside.svelte";
    import SideNav from "$lib/components/SideNav.svelte";
    import Icon from "@iconify/svelte";

    import { useQuery, useConvexClient } from "convex-svelte";
    import { api } from "$lib/db/convex/_generated/api"

    const query = $derived(useQuery(api.tasks.get));
    const client = $derived(useConvexClient());

    import { page } from "$app/state";

    let users = $derived(page.data.allUsers || false);
    let todoList = $derived(page.data.todoList || query.data || false);

    import { Breadcrumb, Input, Button } from "flowbite-svelte";

    import { bci, breadcrumbClass} from "$lib/components/Blog/BlogBreadcrumbs.svelte";

    let taskText = $state<string>('');
    let taskAssigner = $state<string | undefined | null>();
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
        <div class="w-fit flex flex-row flex-wrap justify-evenly items-center">
        <p>This is my extremely crude attempt at querying a database. I plan to add more crud actions once I figure them out.</p>
        <p>I am interfacing with exactly one table in my database</p>
        <p>It is interesting that I initially decided on <a href="https://www.prisma.io" target="_blank" rel="noreferrer nofollow">Prisma</a> as the ORM.  I have been using <a href="https://orm.drizzle.team/" target="_blank" rel="nofollow noreferrer">drizzle</a>. I'm curious to see if it functions in the node server set up by <a href="https://aws.amazon.com/amplify/" target="_blank" rel="nofollow noreferrer">Amplify</a>.</p>
        {#if users}
        <ol>
        {#each users as {id, email, name} (id)}
        <li class="dark:text-bravegrumpy-brand5 text-bravegrumpy-brand3">
            <strong class="font-heading">User {id}:</strong>
            <ul class="bg-bravegrumpy-brand2/20 rounded-[5px] text-bravegrumpy-brand6 dark:text-bravegrumpy-brand4 border-[2px] border-current">
                <li class="indent-5">Name: {name}</li>
                <li class="indent-5"> Email: {email}</li>
            </ul>
        </li>
        {/each}
        </ol>
        {:else if todoList}
        <p>{JSON.stringify(todoList)}</p>
        {/if}
        {#if query.isLoading}
            <p>Loading...</p>
        {:else if query.error}
            <p class="text-valencia-700 dark:text-valencia-400 text-lg">Failed to load: {query.error.message}</p>
        {:else}
            <ul class="bg-bravegrumpy-brand2/20 rounded-[5px] text-bravegrumpy-brand6 dark:text-bravegrumpy-brand4 border-[2px] border-current py-2 px-5">
                {#each query.data as task}
                    <li>
                        <button onclick={async () => {
                            await client.mutation(api.tasks.changeStatus, { id: task._id})
                        }}>{task.isCompleted ? '✅' : '🔳' }</button>
                        <span>{task.text}</span>
                        <span>assigned by {task.assigner}</span>
                    </li>
                {/each}
                <li class="flex flex-row justify-start w-7/12 gap-4 items-center">
                    <button onclick={async () => {
                        await client.mutation(api.tasks.createTask, { text: taskText, assigner: taskAssigner})
                        taskText = '';
                    }}>
                        <Icon icon="hugeicons:add-02" width="22" height="22" class="inline rounded bg-gradient-to-r from-affair-400 to-affair-300  hover:from-affair-300 hover:to-affair-200 dark:from-tradewind-400 dark:to-tradewind-300 dark:hover:from-tradewind-400 dark:hover:to-tradewind-500 text-bravegrumpy-logoPurple border border-solid border-current" />
                    </button>
                    <span class="w-1/2">
                        <input type="text" bind:value={taskText} class="h-6 dark:bg-gray-700/70 dark:text-bravegrumpy-accent1a rounded-[5px] w-full" /></span>
                    <span class="w-1/2 hidden">
                        <input type="text" bind:value={taskAssigner} class="h-6 rounded-[5px] w-full" />
                    </span>
                </li>
            </ul>
        {/if}
        </div>
    </Section>
</Article>
<Article ----articleColumn="2/3" --articleRow="3/4">
    <Section>
        <form method="POST" action="?/add">
            <label class="flex flex-row gap-5 items-center my-5 border-2 border-solid border-current rounded-[5px] px-5 py-2">
                Name: 
                <Input type="text" name="name" class="inline" />
            </label>
            <label class="flex flex-row gap-5 items-center my-5 border-2 border-solid border-current rounded-[5px] px-5 py-2">
                Email:
                <Input name="email" type="email" class="inline" />
            </label>
            <Button type="submit">Submit </Button>
        </form>
    </Section>
</Article>
<Article --articleColumn="3/4" --articleRow="3/4">
    <button onclick={() => {
        const nav = document.getElementById("experimentNav")
        nav.classList.toggle("hidden")
    }} class="font-heading text-2xl rounded-[5px] -mr-5 w-full ml-5 rounded-r-none border-current pl-6 py-2 border-4 border-r-0 text-solarized-yellow bg-solarized-base-2 dark:bg-edward-950 dark:text-solarized-base-1">Auth Experiments</button>
    <div id="experimentNav" class="hidden">
    <SideNav references={[{ id: '2-2-0', href: "/writing/queries/logon", text: 'Logon'}]} slug="/writing/queries" borderRight="0px" borderLeft="5px" borderRadiusLeft="5px" borderRadiusRight="0px" --marginLeft="20px"/>
    </div>
</Article>