<script>
  import Article from '$lib/components/Article.svelte';
  import Section from '$lib/components/Section.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import SideNav from '$lib/components/SideNav.svelte';

  import { SignedIn, SignedOut, Protect } from 'svelte-clerk';

  import SignInButton from '$lib/components/Auth/SignInButton.svelte';
  import SignOutButton from '$lib/components/Auth/SignOutButton.svelte';
  import SignUpButton from '$lib/components/Auth/SignUpButton.svelte';
    import SideNavButton from '$lib/components/SideNavButton.svelte';
</script>

<svelte:head>
  <title>Admin | Bravegrumpy</title>
</svelte:head>

<SignedOut>
     <Heading>Sign In to View Content</Heading>
      <p>Sign in to view content</p>
      <SignInButton />
      <SignUpButton />
</SignedOut>
<SignedIn>
    <Heading>You Are Signed In</Heading>
      <p>Lets put info here</p>
      <SignOutButton />
        <p>Admin Only</p>
</SignedIn>
