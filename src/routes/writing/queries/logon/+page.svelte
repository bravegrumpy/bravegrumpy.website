<script lang="ts">
    import { signIn, signOut } from "@auth/sveltekit/client"
    import  { GradientButton } from "flowbite-svelte";

    import { SignIn, SignOut } from "@auth/sveltekit/components";

    import { page } from '$app/state';

    import SideNav from "$/lib/components/SideNav.svelte";
    import Article from "$/lib/components/Article.svelte";
    import Section from "$/lib/components/Section.svelte";
</script>

<SideNav references={[{ id: "2-0", href: "/writing/queries", text: "Back"}]} />

<Article --articleColumn="2/3">
<Section>
<div class="flex flex-row justify-around items-center flex-wrap gap-10 w-full">

{#if page.data.session}
<div>
    <p class="font-heading text-xl">Client Logout</p>
    <GradientButton class="font-heading" color="purpleToBlue" on:click={() => signOut()}>Log Out {page.data.session.user.name}</GradientButton>
</div>
<div>
    <p class="font-heading text-xl text-wrap">Server Logout</p>
    <SignOut>
        <GradientButton class="font-heading" slot="submitButton" type="submit" color="pinkToOrange">Log Out {page.data.session.user.name}</GradientButton>
    </SignOut>
</div>
{:else}
<div>
    <p class="font-heading text-2xl">Client Login</p>
    <GradientButton color="greenToBlue" onclick={() => signIn()}>Login?</GradientButton>
</div>
<div>
    <p class="font-heading text-2xl">Server Login</p>
    <SignIn>
        <GradientButton slot="submitButton" type="submit" color="purpleToBlue">Sign In</GradientButton>
    </SignIn>
</div>
{/if}
</div>
</Section>
</Article>